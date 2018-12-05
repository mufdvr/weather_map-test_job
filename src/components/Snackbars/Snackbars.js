import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Snackbar from '@material-ui/core/Snackbar'

import SnackbarContentWrapper from './SnackbarContentWrapper'

class Snackbars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    this.setState({ open: false });
  }

  render = () => {
    const { open } = this.state
    const { variant, message, autoHideDuration } = this.props
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={this.handleClose}
      >
        <SnackbarContentWrapper
          onClose={this.handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
    )
  }
}

const portal = document.getElementById('portal')

Snackbars.error = function(message, autoHideDuration) {
  ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="error" />, portal)
}

Snackbars.success = function(message, autoHideDuration) {
  ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="success" />, portal)
}

Snackbars.warning = function(message, autoHideDuration) {
  ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="warning" />, portal)
}

Snackbars.info = function(message, autoHideDuration) {
  ReactDOM.render(<Snackbars key={Math.random()} message={message} autoHideDuration={autoHideDuration} variant="info" />, portal)
}

Snackbars.close = function() {
  ReactDOM.render(<div />, portal)
}

Snackbars.propTypes = {
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  message: PropTypes.string,
  autoHideDuration: PropTypes.number
}

Snackbars.defaultProps = {
  autoHideDuration: 3000,
  variant: 'info',
}

export default Snackbars