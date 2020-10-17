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

const CreateAccounts = (): ReactElement => {

  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [createAccount, { loading }] = useMutation(mutation, {
    variables: {
      name,
      email,
      password
    },
    onCompleted: (data): void => {
      Cookies.set('accessToken', data.userToken.token)
      globalAny.setNotification('success', 'Account Created')
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
        createAccount()
      }}
    >
      <CardContainer
        loading={loading}
        title={'Create Account'}
        content={
          <>
            <TextField
              margin={'dense'}
              fullWidth
              size={'small'}
              disabled={loading}
              variant={'outlined'}
              id={'name'}
              label={'Name'}
              placeholder={'John Doe'}
              type={'text'}
              onChange={(e): void => {
                setName(e.target.value)
              }}
              value={name}
            />
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
              disabled={name === '' || email === '' || password === '' || loading}
              type={'submit'}
              variant={'contained'}
              color={'primary'}
            >
              {'Create Account'}
            </Button>
          </>
        }
      />
    </form>
  )
}

export default CreateAccounts
