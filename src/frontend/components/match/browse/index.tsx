//eslint-disable-next-line
const globalAny: any = global

import { useMutation, useQuery } from '@apollo/react-hooks'
import { Button, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete'
import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/router'
import query from './query'

const Browse = (): ReactElement => {

  const router = useRouter()
  const userQuery = useQuery(query)
  const users = userQuery?.data?.keywords || []

  return (
    <>
      <Typography variant={'h3'}>
        Favorited influencers
      </Typography>
      <br />
    </>
  )
}

export default Browse
