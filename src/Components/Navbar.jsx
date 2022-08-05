import {
    Box,
    HStack,
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue,
  } from '@chakra-ui/react'
  import React from 'react'
  import { FaMoon, FaSun } from 'react-icons/fa'
  import Navlink from './Navlink'
  
  export function Navbar() {
    const { toggleColorMode } = useColorMode()
  
    return (
      <Box
        borderBottom='2px'
        borderBottomColor={useColorModeValue('gray.100', 'gray.700')}
        // mb={4}
        py={4}
      >
        <HStack
          justifyContent='flex-end'
          maxW='container.lg'
          mx='auto'
          spacing={4}
        >
          <Navlink to='/' name='Home' size='lg' />
          <Spacer />
          {<Navlink to='/movies/popular' name='Popular' />}
          {<Navlink to='/movies/top_rated' name='Top Rated' />}
          {<Navlink to='/movies/upcoming' name='UpComing' />}
          <IconButton
            variant='ghost'
            icon={useColorModeValue(<FaSun />, <FaMoon />)}
            onClick={toggleColorMode}
            aria-label='toggle-dark-mode'
          />
        </HStack>
      </Box>
    )
  }