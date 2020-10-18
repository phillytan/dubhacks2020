import { NextPage } from 'next'
import React, { ReactElement } from 'react'
import authenticated from 'frontend/layouts/authenticated'
import MatchSelection from 'frontend/components/match/matchSelection'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <MatchSelection />
    </>
  )
}

export default authenticated(Home)
