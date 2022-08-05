import { Box, AspectRatio, Image, useDisclosure, useMergeRefs, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import { NavLink as Link, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

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
      <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/w500' + props.Poster + ')' } borderRadius='12px' ratio={27 / 40}>
        <Box position='absolute' bgColor='#00000050' display={(ShowDetails) ? 'flex' : 'none !important' } w='100%' h='100%'>
          {/* <Heading as='h5' color='#FFFFFF' size='sm'>{props.Title}</Heading> */}
          <Link to={'/movie/' + props.Details.id}>
            <Button variant='outline' colorScheme='blue'>
              {props.Title}
            </Button>
          </Link>
        </Box>
      </AspectRatio>
    </Box>
  )
})