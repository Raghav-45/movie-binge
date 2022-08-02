import { Box, AspectRatio, Image, useDisclosure, useMergeRefs, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'

export const MovieThumb = React.forwardRef((props, ref) => {
  const inputRef = React.useRef(null)
  const mergeRef = useMergeRefs(inputRef, ref)
  const [ShowDetails, setShowDetails] = useState(false)

  const onThumbClick = (e) => {
    console.log('You Clicked: ', e.target.alt)
  }

  useEffect(() => {
    console.log(ShowDetails)
  }, [ShowDetails])
  

  return (
    <Box w='250px' h='363px' overflow='hidden' transition='0.5s all' p={2} onMouseLeave={() => {setShowDetails(false);}} onMouseEnter={() => {setShowDetails(true)}} _hover={{width: '500px'}}>
      <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/original' + props.Poster + ')' } borderRadius='12px' ratio={27 / 40}>
      {/*<AspectRatio ratio={382 / 566}>*/}
        {/* <a href={'http://google.com/search?q=' + props.Title}> */}
          {/* <Image src={props.Poster} alt={props.Title} onClick={onThumbClick} draggable="false"  /> */}
          <Box position='absolute' bgColor='#00000050' display={(ShowDetails) ? 'flex' : 'none !important' } w='100%' h='100%'><Heading as='h5' color='#FFFFFF' size='sm'>{props.Title}</Heading></Box>
          {/* <iframe width="50" height="363" src="https://www.youtube.com/embed/Rf8LAYJSOL8" frameborder="0" allowfullscreen /> */}
        {/* </a> */}
      </AspectRatio>
    </Box>
  )
})