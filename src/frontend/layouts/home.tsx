import React, { ReactElement, FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { NextPage } from 'next'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  background: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'fixed',
    backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    zIndex: -1
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    minHeight: '100vh',
    paddingTop: theme.spacing(4),
    maxWidth: theme.spacing(64),
    margin: 'auto'
  },
  logo: {
    height: theme.spacing(12.5),
    marginBottom: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block'
  },
  tagline: {
    color: 'white',
    marginBottom: theme.spacing(3)
  },
  content: {
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(),
    paddingRight: theme.spacing(),
    margin: 'auto'
  }
}))

const home = (Page: FunctionComponent) => (): FunctionComponent | NextPage | ReactElement => {
  const classes = useStyles({})

  return (
    <>
      <div className={classes.background} />
      <div className={classes.root}>
        <div>
          <Typography variant={'h4'} align={'center'} className={classes.tagline}>
            {'Teepot'}
          </Typography>
          <div className={classes.content}>
            <Page />
          </div>
        </div>
      </div>
    </>
  )
}

export default home
