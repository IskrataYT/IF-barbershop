import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonPrimary from '/buttonPrimary'

const DropdownContainer = styled.div`
  width: 100%;
  max-width: 150px; // Limit the maximum width
  border: 1px solid #ccc;
  border-radius: 15px;
`

const StyledDropdown = styled.div`
  position: relative;
  width: 100%; // Take up the full width of the parent
  border-radius: 15px;
`

const DropdownItem = styled.div`
  padding: 5px 10px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }

  &.is-disabled {
    opacity: 0.7;
  }
`

const DropdownContent = styled.ul`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: absolute;
  top: 100%;
  width: 100%; // Take up the full width of the parent
  padding: 10px 0;
  background: #fff;
  display: none;
  z-index: 1;
`

export default function Dropdown({
  options,
  onChange,
  isDisabled = false,
  selectedOption,
  defaultPrompt,
}) {
  selectedOption = selectedOption || defaultPrompt

  let dropdownContent

  // This function hides the dropdown menu
  const hideMenu = () => {
    if (dropdownContent) {
      dropdownContent.style.display = 'none'
    }
  }

  // This effect adds the event listener when the component mounts,
  // and removes it when the component unmounts.
  useEffect(() => {
    document.addEventListener('click', hideMenu)
    return () => {
      document.removeEventListener('click', hideMenu)
    }
  })

  return (
    <DropdownContainer>
      <StyledDropdown>
        <ButtonPrimary
          onClick={(event) => {
            // This prevents the document click event from firing when the trigger is clicked
            event.stopPropagation()
            dropdownContent.style.display = 'block'
          }}
        >
          {selectedOption}
        </ButtonPrimary>
        <DropdownContent ref={(el) => (dropdownContent = el)}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              value={option}
              className={isDisabled(option) ? 'is-disabled' : ''}
              onClick={(event) => {
                // This prevents the document click event from firing when an item is clicked
                event.stopPropagation()
                // Only call onChange and hideMenu if the option is not disabled
                if (!isDisabled(option)) {
                  onChange(option)
                  hideMenu()
                }
              }}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      </StyledDropdown>
    </DropdownContainer>
  )
}
