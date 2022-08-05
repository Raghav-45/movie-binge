import * as React from 'react'
import { useState, useEffect } from 'react'
import { useMergeRefs, useColorModeValue, chakra, Text, Button, SimpleGrid, InputLeftAddon, Input, InputGroup, Heading, Box, AspectRatio, Image, useDisclosure } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

export default function Movie() {
  const [ContentDetails, setContentDetails] = useState({})
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()

  const getContentDetails = async (id, type='movie') => {
    try {
      const resp = await fetch('https://api.themoviedb.org/3/' + type + '/' + id + '?api_key=b24785488c1326b9c4442d7325d37724')
      const data = await resp.json()
      setContentDetails(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getContentDetails(id)
  }, [])
  
  
  function timeConvert(n) {
    var hours = Math.floor((n / 60))
    var minutes = Math.round(((n / 60) - hours) * 60)
    return hours + 'h ' + minutes + 'm'
  }
  if (Loading) {return (<div> loading </div>)} else {
    return (
      <Box w='100%' h='850px' overflow='hidden' transition='0.5s all' p={2}>
        <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/original' + ContentDetails.backdrop_path + ')'} borderRadius='12px' ratio={3840 / 2160}>
          <Box p='95px' position='absolute' bgColor='#00000050' display='flex' w='100%' h='100%'>
            <section style={{ width: '20%', display: 'flex' }}>
              {/* <Box m='auto' w='250px' h='363px'> */}
              <Box m='auto' w='100%' h='100%'>
                <AspectRatio h='100%' overflow='hidden' bgSize='cover' bgImage={'url(https://image.tmdb.org/t/p/original' + ContentDetails.poster_path + ')'} borderRadius='12px' ratio={27 / 40}>
                  <Box position='absolute' w='100%' h='100%'></Box>
                </AspectRatio>
              </Box>
            </section>
            <section style={{ width: '80%', display: 'flex' }}>
              <Box p='25px' alignItems='center' display='block'>
                <Heading as='h2' color='#FFFFFF' size='lg'>{ContentDetails.original_title}</Heading>
                <div className="facts" style={{ color: 'white' }}>
                  <span className="certification" style={{ border: '1px solid rgba(255,255,255,0.6)', color: 'rgba(255,255,255,0.6)', padding: '0.06em 4px 0.15em 4px !important', display: 'inline-flex', whiteSpace: 'nowrap', alignItems: 'center', alignContent: 'center', lineHeight: '1', borderRadius: '2px', marginRight: '7px' }}>UA</span>
                  <span className="release">{new Date(ContentDetails.release_date).toLocaleString("en-GB", { day: "numeric", month: "short", year: "numeric" }).split(' ').join('-')} (IN) </span>
                  <span className="genres">
                    {ContentDetails.genres.map((elem) => <a href="#">{elem.name}</a>)}
                  </span>
                  <span className="runtime">{timeConvert(ContentDetails.runtime)}</span>
                </div>

                <div className="header_info">
                  <Heading as='h5' color='#FFFFFF' size='sm'>{ContentDetails.tagline}</Heading>
                  <Heading as='h2' color='#FFFFFF' size='lg'>Overview</Heading>
                  <div className="overview">
                    <Text color='#FFFFFF'>{ContentDetails.overview}</Text>
                  </div>

                  <ol className="people no_image">
                    <li className="profile">
                      <p color='#FFFFFF'><a href="/person/7625-steve-ditko">Steve Ditko</a></p>
                      <Text color='#FFFFFF' className="character">Characters</Text>
                    </li>
                    <li className="profile">
                      <p color='#FFFFFF'><a href="/person/7624-stan-lee">Stan Lee</a></p>
                      <Text color='#FFFFFF' className="character">Characters</Text>
                    </li>
                    <li className="profile">
                      <p color='#FFFFFF'><a href="/person/1293994-jon-watts">Jon Watts</a></p>
                      <Text color='#FFFFFF' className="character">Director</Text>
                    </li>
                    <li className="profile">
                      <p color='#FFFFFF'><a href="/person/1246890-chris-mckenna">Chris McKenna</a></p>
                      <Text color='#FFFFFF' className="character">Writer</Text>
                    </li>
                    <li className="profile">
                      <p color='#FFFFFF'><a href="/person/1350918-erik-sommers">Erik Sommers</a></p>
                      <Text color='#FFFFFF' className="character">Writer</Text>
                    </li>
                  </ol>
                </div>
              </Box>
            </section>
          </Box>
        </AspectRatio>
      </Box>
    );
  }
}