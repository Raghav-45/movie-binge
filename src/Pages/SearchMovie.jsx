import * as React from 'react'
import { chakra, InputLeftAddon, Input, InputGroup } from '@chakra-ui/react'
import { useGlobalContext } from '../Contexts/contextAPI'

export default function SearchMovie() {
  const { SearchQuery, setSearchQuery } = useGlobalContext()

  return (
    <chakra.form onSubmit={async (e) => {e.preventDefault()}}>
      <InputGroup p={3}>
        <InputLeftAddon children='Search' />
        <Input value={SearchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} placeholder='Query' />
      </InputGroup>
    </chakra.form>
  );
}