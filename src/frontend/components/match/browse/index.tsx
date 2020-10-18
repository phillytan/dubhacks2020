//eslint-disable-next-line
const globalAny: any = global

import { useMutation, useQuery } from '@apollo/react-hooks'
import { Button, Card, CardActionArea, CardContent, CardMedia, Chip, Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete'
import React, { ReactElement, useState } from 'react'
import { useRouter } from 'next/router'
import query from './query'

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

const Browse = (): ReactElement => {

  const classes = useStyles()
  const userQuery = useQuery(query)
  const influencers = userQuery?.data?.starred_influencers || []
  console.log(influencers)

  return (
    <>
      <Typography variant={'h3'}>
        Favorited influencers
      </Typography>
      <br />
      <Grid container spacing={3}>

        {influencers?.map((x: any): ReactElement => (
          <Grid key={x?.id}item xs={12} sm={6} md={4}>
          <Card key={x?.id} className={classes.root}>
          <CardActionArea>
            <CardMedia
              component='img'
              image={x?.url}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {x?.name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                {x?.description}
              </Typography>
              <br />
              {x?.keywords?.map((keyword: any): ReactElement => (
                <Chip key={keyword?.keyword} label={keyword?.keyword} />
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
        </Grid>
        ))}
      </Grid>
    </>
  )
}

export default Browse
