import { Box, AspectRatio, Image, useDisclosure, useMergeRefs, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const MovieThumb = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)

  const onThumbClick = (e) => {
    console.log('You Clicked: ', e.target.alt)
  }

  return (
    <Box m={2}>
      <AspectRatio ratio={27 / 40}>
        {/*<AspectRatio ratio={382 / 566}>*/}
        <a href={'http://google.com/search?q=' + props.Title}>
          <Image src={props.Poster} alt={props.Title} onClick={onThumbClick} draggable="false" borderRadius='12px' />
        </a>
      </AspectRatio>
    </Box>
  )
})