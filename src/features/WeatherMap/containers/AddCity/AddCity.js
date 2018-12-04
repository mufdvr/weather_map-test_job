import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import * as actions from '../../actions'

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  }
})

class AddCity extends Component {
  state = {
    city: ''
  }

  handleChange = name => event => this.setState({
    [name]: event.target.value
  })

  render = () => {
    const { classes, addCity } = this.props
    const { city } = this.state
    return (
      <div>
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
        </Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch)

const ReduxWrapper = connect(null, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(AddCity))
export default WrappedComponent