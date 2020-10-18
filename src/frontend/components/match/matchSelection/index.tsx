//eslint-disable-next-line
const globalAny: any = global

import { useQuery } from '@apollo/react-hooks'
import { Button, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete'
import React, { ReactElement, useState } from 'react'
import query from './query'

const MatchSelection = (): ReactElement => {

  const [keywordSelection, setKeywordSelection] = useState([])
  const keywordQuery = useQuery(query)
  const keywords = keywordQuery?.data?.keywords || []

  return (
    <>
      <Typography variant={'h3'}>
        What kinds of influencers are you looking for today?
      </Typography>
      <br />
      <Autocomplete
        multiple
        id="tags-standard"
        options={keywords}
        onChange={(_e, v): void => {
          setKeywordSelection(v)
        }}
        value={keywordSelection}
        getOptionLabel={(keywords: { keyword: string }): string => keywords.keyword}
        renderInput={(params): ReactElement => (
          <TextField
            {...params}
            variant="standard"
            label="Select Categories"
            placeholder="Favorites"
            helperText="If you don&apos;t select a category, a random set of influencers will be selected for you."
          />
        )}
      />
      <br />
      <Button
        color={'primary'}
        variant={'contained'}
        onClick={(): void => {
          console.log(keywordSelection.map(keyword => keyword.id))
        }}
      >
        Find and Match Influencers
      </Button>
    </>
  )
}

export default MatchSelection
