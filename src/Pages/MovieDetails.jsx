import * as React from 'react'
import { useState, useEffect } from 'react'
import { chakra, Button, SimpleGrid, InputLeftAddon, Input, InputGroup } from '@chakra-ui/react'
import { MovieThumb } from '../Components/MovieComp'
import { useGlobalContext } from '../Contexts/contextAPI'
import { useParams } from 'react-router-dom'

import { Box, AspectRatio, Image, useDisclosure, useMergeRefs, useColorModeValue } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

export default function Movie() {
  const { getContentDetails, ContentDetails } = useGlobalContext()
  const { id } = useParams()
  
  getContentDetails(id)
  // console.log(ContentDetails)
  

  return (
    <Box w='100%' h='100%' overflow='hidden' transition='0.5s all' p={2}>
      <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/original' + ContentDetails.backdrop_path + ')' } borderRadius='12px' ratio={3840 / 2160}>
        <Box p='35px' position='absolute' bgColor='#00000050' display='flex' w='100%' h='100%'>
          <section display='flex !important'>
            <box w='250px !important' h='363px !important' display='block'>
              <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/original' + ContentDetails.poster_path + ')' } borderRadius='12px' ratio={27 / 40}>
                <Box position='absolute' w='100%' h='100%'></Box>
              </AspectRatio>
            </box>

            <div display='flex'>
              <Heading as='h2' color='#FFFFFF' size='lg'>{ContentDetails.original_title}</Heading>
            </div>
          </section>
        </Box>
      </AspectRatio>
    </Box>
  );
}