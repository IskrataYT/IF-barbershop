import React from 'react'
import PrimaryTitle from '../atoms/title'
import PrimaryText from '../atoms/text'
import Image from '../atoms/image'

function IntroductionSection({ title, text, imageUrl }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#262626',
        color: 'white',
        padding: '5%',
        alignItems: 'center',
        justifyContent: 'cetner',
      }}
    >
      <div style={{ flex: '40%' }}>
        <PrimaryTitle>{title}</PrimaryTitle>
        <PrimaryText>{text}</PrimaryText>
      </div>
      <div style={{ flex: '50%' }}>
        <Image src={imageUrl} />
      </div>
    </div>
  )
}

export default IntroductionSection
