import { Box, AspectRatio, Image, useDisclosure, useMergeRefs } from '@chakra-ui/react'
import * as React from 'react'

export const MovieThumb = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)

  const onThumbClick = (e) => {
    console.log('Clicked Movie Poster', e.target.alt)
  }

  return (
    <Box m={3}>
      <AspectRatio ratio={382 / 566}>
        <Image src={props.Poster} alt={props.Name} onClick={onThumbClick} draggable="false" borderRadius='10px' />
      </AspectRatio>
    </Box>
  )
})