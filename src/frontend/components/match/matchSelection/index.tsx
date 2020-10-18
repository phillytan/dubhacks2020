//eslint-disable-next-line
const globalAny: any = global

import { useMutation, useQuery } from '@apollo/react-hooks'
import { Button, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete'
import React, { ReactElement, useState } from 'react'
import query from './query'
import mutation from './mutation'
import { useRouter } from 'next/router'

const MatchSelection = (): ReactElement => {

  const router = useRouter()
  const [keywordSelection, setKeywordSelection] = useState([])
  const keywordQuery = useQuery(query)
  const keywords = keywordQuery?.data?.keywords || []

  const [startMatch, { loading }] = useMutation(mutation, {
    onCompleted: (data): void => {
      globalAny.setNotification('success', 'Starting Matching')
      router.push('/match/[matchId]', `/match/${data?.round?.id}`)
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors[0].message)
    }
  })

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
            disabled={loading}
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
          startMatch({
            variables: {
              keywordIds: keywordSelection.map(keyword => keyword.id)
            }
          })
        }}
      >
        Find and Match Influencers
      </Button>
    </>
  )
}

export default MatchSelection
