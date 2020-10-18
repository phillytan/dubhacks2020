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
    backgroundImage: 'url(/static/bg.png)',
    // backgroundImage: `linear-gradient(${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
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
  },
  photoCredit: {
    color: 'white',
    textAlign: 'center'
  }
}))

const home = (Page: FunctionComponent) => (): FunctionComponent | NextPage | ReactElement => {
  const classes = useStyles({})

  return (
    <>
      <div className={classes.background} />
      <div className={classes.root}>
        <div>
          <img alt={'Teepot'} src={'/static/logo.png'} className={classes.logo} />
          <Typography variant={'h4'} align={'center'} className={classes.tagline}>
            {'Teepot'}
          </Typography>
          <div className={classes.content}>
            <Page />
            <p className={classes.photoCredit}>
              <span>Original photo by <a className={classes.photoCredit} href="https://unsplash.com/@ryoji__iwata?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ryoji Iwata</a> on <a className={classes.photoCredit} href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default home
