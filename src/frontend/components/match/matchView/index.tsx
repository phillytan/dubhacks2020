//eslint-disable-next-line
const globalAny: any = global

import { useQuery } from '@apollo/react-hooks'
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  TextField,
  Typography
} from '@material-ui/core'
import React, { ReactElement, useState } from 'react'

const MatchView = (): ReactElement => {
  return (
    <>
      <Typography variant={'h3'}>
        Which of these two influencers do you prefer?
      </Typography>
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                image='/static/bg.png'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Name
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Description
                </Typography>
                <br />
                <Chip label="Alpha male" />
                <Chip label="idiot" />
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
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='Contemplative Reptile'
                image='/static/bg.png'
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Name
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Description
                </Typography>
                <br />
                <Chip label="Basic bitch" />
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
    </>
  )
}

export default MatchView
