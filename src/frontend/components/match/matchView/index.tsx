//eslint-disable-next-line
const globalAny: any = global

import { useMutation, useQuery } from '@apollo/react-hooks'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Collapse,
  Grid,
  makeStyles,
  TextField,
  Typography
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import query from './query'
import mutation from './mutation'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  media: {
    height: 140
  }
})

const MatchView = (): ReactElement => {
  const classes = useStyles()
  const router = useRouter()
  const matchId = router?.query?.matchId as string
  const matchViewQuery = useQuery(query, {
    variables: {
      roundId: matchId
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors[0].message)
      router.push('/match')
    }
  })
  const [matchViewMutation, { loading }] = useMutation(mutation, {
    onCompleted: (data): void => {
      globalAny.setNotification('success', 'Recorded')
      window.location.reload()
    },
    onError: (error): void => {
      globalAny.setNotification('error', error.graphQLErrors[0].message)
      router.push('/match')
    }
  })

  const {
    influencerOne,
    influencerTwo
  } = matchViewQuery?.data?.next_influencers || {}

  return (
    <>
      <Collapse in={matchViewQuery.loading || loading}>
        <Typography variant={'h3'}>
          Loading...
        </Typography>
      </Collapse>
      <Collapse in={!(matchViewQuery.loading || loading)}>
        <Typography variant={'h3'}>
          Which of these two influencers do you prefer?
        </Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea onClick={(): void => {
                matchViewMutation({
                  variables: {
                    roundId: matchId,
                    winning: influencerOne?.id,
                    losing: influencerTwo?.id
                  }
                })
              }}>
                <CardMedia
                  component='img'
                  image={influencerOne?.url}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {influencerOne?.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {influencerOne?.description}
                  </Typography>
                  <br />
                  {influencerOne?.keywords?.map(keyword => (
                    <Chip key={keyword?.keyword} label={keyword?.keyword} />
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Favorite this influencer
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className={classes.root}>
              <CardActionArea onClick={(): void => {
                matchViewMutation({
                  variables: {
                    roundId: matchId,
                    winning: influencerTwo?.id,
                    losing: influencerOne?.id
                  }
                })
              }}>
                <CardMedia
                  component='img'
                  image={influencerTwo?.url}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {influencerTwo?.name}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    {influencerTwo?.description}
                  </Typography>
                  <br />
                  {influencerTwo?.keywords?.map(keyword => (
                    <Chip key={keyword?.keyword} label={keyword?.keyword} />
                  ))}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Favorite this influencer
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Collapse>
    </>
  )
}

export default MatchView
