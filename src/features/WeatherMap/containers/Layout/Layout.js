import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import { AddCity, CitiesTable } from '../../containers'
import { Snackbars } from 'components'
import styles from './styles'

class Layout extends Component {

  componentWillReceiveProps = nextProps => {
    const { feching, error } = nextProps
    if (!feching && error.message) Snackbars.error([error.message])
  }

  render = () => {
    const { classes } = this.props
    return (
      <Paper className={classes.root}>
        <AddCity />
        <CitiesTable />
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, error } = state.weatherMap
  return { fetching, error }
}

const ReduxWrapper = connect(mapStateToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(Layout))
export default WrappedComponent