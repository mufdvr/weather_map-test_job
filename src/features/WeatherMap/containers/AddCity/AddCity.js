import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

import * as actions from '../../actions'
import styles from './styles'

class AddCity extends Component {
  state = {
    city: ''
  }

  handleChange = name => event => this.setState({
    [name]: event.target.value
  })

  componentWillReceiveProps = nextProps => {
    const { fetching, error } = nextProps
    !error.message && !fetching && this.setState({ city: '' })
  }

  render = () => {
    const { classes, addCity, fetching } = this.props
    const { city } = this.state
    return (
      <div className={classes.root}>
        <TextField
          label="City"
          className={classes.textField}
          value={city}
          onChange={this.handleChange('city')}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" className={classes.button} onClick={() => addCity(city)}>
          Add
          { fetching && <CircularProgress size={24} className={classes.buttonProgress} /> }
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { fetching, error } = state.weatherMap
  return { fetching, error }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(AddCity))
export default WrappedComponent