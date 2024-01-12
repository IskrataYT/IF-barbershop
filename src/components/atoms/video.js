import React from 'react'
import styled from 'styled-components'

const Video = styled.video`
  display: block;
  width: 100%;
`

function LoopingVideo() {
  return (
    <Video autoPlay loop muted>
      <source src="assets/Background1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </Video>
  )
}

export default LoopingVideo
