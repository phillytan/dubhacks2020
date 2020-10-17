import React, { ReactElement } from 'react'
import home from '../../layouts/home'
import { NextPage } from 'next'
import CreateAccounts from '../../components/auth/CreateAccount'
import AccountsSignIn from '../../components/auth/SignIn'

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <AccountsSignIn />
      <CreateAccounts />
    </>
  )
}

export default home(Home)
