import { NextPage } from 'next'
import React, { ReactElement } from 'react'
import authenticated from 'frontend/layouts/authenticated'
import MatchView from 'frontend/components/match/matchView'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <MatchView />
    </>
  )
}

export default authenticated(Home)
