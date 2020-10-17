//eslint-disable-next-line
const globalAny: any = global

import React, { ReactElement, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import mutation from './mutation'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Cookies from 'js-cookie'
import CardContainer from '../../CardContainer'
import { useRouter } from 'next/router'

const AccountsSignIn = (): ReactElement => {

  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [signIn, { loading }] = useMutation(mutation, {
    variables: {
      email,
      password
    },
    onCompleted: (data): void => {
      Cookies.set('accessToken', data.userToken.token)
      globalAny.setNotification('success', 'Signed in')
      router.push('/')
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors[0].message)
    }
  })

  return (
    <form
      onSubmit={(e): void => {
        e.preventDefault()
        signIn()
      }}
    >
      <CardContainer
        loading={loading}
        title={'Sign in'}
        content={
          <>
            <TextField
              margin={'dense'}
              fullWidth
              size={'small'}
              disabled={loading}
              variant={'outlined'}
              id={'email'}
              label={'Email Address'}
              placeholder={'john@doe.com'}
              type={'email'}
              onChange={(e): void => {
                setEmail(e.target.value)
              }}
              value={email}
            />
            <TextField
              margin={'dense'}
              fullWidth
              disabled={loading}
              variant={'outlined'}
              id={'password'}
              label={'Password'}
              type={'password'}
              onChange={(e): void => {
                setPassword(e.target.value)
              }}
              value={password}
            />
          </>
        }
        actions={
          <>
            <Button
              disabled={email === '' || password === '' || loading}
              type={'submit'}
              variant={'contained'}
              color={'primary'}
            >
              {'Sign in'}
            </Button>
          </>
        }
      />
    </form>
  )
}

export default AccountsSignIn
