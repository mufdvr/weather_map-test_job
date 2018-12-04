import React from 'react'
import Grid from '@material-ui/core/Grid'
import { AddCity, CitiesTable } from '../../containers'

export default () =>
  <Grid
    className="height100"
    container
    spacing={8}
    direction="column"
  >
    <Grid item xs={6}>
      <AddCity />
    </Grid>
    <Grid item xs={6}>
      <CitiesTable />
    </Grid>
  </Grid>