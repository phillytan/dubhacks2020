import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import { Typography } from '@material-ui/core'
import React, { ReactElement } from 'react'
import authenticated from 'frontend/layouts/authenticated'
import Browse from 'frontend/components/match/browse'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <Browse />
    </>
  )
}

export default authenticated(Home)
