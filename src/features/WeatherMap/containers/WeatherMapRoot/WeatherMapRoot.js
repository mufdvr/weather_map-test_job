import React, { Component } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import { AddCity, CitiesTable } from '../../containers'
import { Snackbars } from 'components'
import styles from './styles'

class Layout extends Component {

  componentWillReceiveProps = nextProps => {
    const { feching, error: { message } } = nextProps
    if (!feching && message) Snackbars.error(message)
  }

  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <AddCity />
          <CitiesTable />
        </Paper>
      </div>
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