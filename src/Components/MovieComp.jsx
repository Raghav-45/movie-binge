import { Box, AspectRatio, Image, useDisclosure, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'

export const MovieThumb = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)

  const onThumbClick = (e) => {
    console.log('You Clicked: ', e.target.alt)
    // window.open(e.target.alt, '_blank', 'noopener,noreferrer')
  }

  return (
    <Box m={3}>
      <AspectRatio ratio={382 / 566}><a href={'http://google.com/search?q=' + props.Name}>
        <Image src={props.Poster} alt={props.Name} onClick={onThumbClick} draggable="false" borderRadius='10px' />
        </a></AspectRatio>
    </Box>
  )
})