import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
// import { Rating } from './Rating'
// import { FavouriteButton } from './FavouriteButton'
// import { PriceTag } from './PriceTag'

export default function Movie() {
  return (
    <Stack
      spacing={useBreakpointValue({
        base: '4',
        md: '5',
      })}
    >
      <Box position="relative">
        <AspectRatio ratio={382 / 566}>
          <Image
            src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-manhomecoming_lob_crd_01_4.jpg'
            alt='name'
            draggable="false"
            // fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: 'xl',
              md: 'xl',
            })}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text fontWeight="medium" color={useColorModeValue('gray.700', 'gray.400')}>
            Movie
          </Text>
        </Stack>
        <HStack>
          <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
            Description
          </Text>
        </HStack>
      </Stack>
    </Stack>
  )
}