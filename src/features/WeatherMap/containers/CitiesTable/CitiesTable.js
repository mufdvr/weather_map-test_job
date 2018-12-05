import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

import styles from './styles'
import CustomTableCell from './CustomTableCell'
import * as actions from '../../actions'

const CitiesTable = ({ cities, classes, deleteCity, sortByCity }) =>
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <CustomTableCell onClick={() => sortByCity()} className={classes.city}>City</CustomTableCell>
        <CustomTableCell numeric>Temperature</CustomTableCell>
        <CustomTableCell numeric>Pressure</CustomTableCell>
        <CustomTableCell />
      </TableRow>
    </TableHead>
    <TableBody>
      {cities.map((city, index) => {
        return (
          <TableRow className={classes.row} key={index}>
            <CustomTableCell component="th" scope="row">
              {city.name}
            </CustomTableCell>
            <CustomTableCell numeric>{city.main.temp}</CustomTableCell>
            <CustomTableCell numeric>{city.main.pressure}</CustomTableCell>
            <CustomTableCell>
              <IconButton className={classes.button} onClick={() => deleteCity(index)} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </CustomTableCell>
          </TableRow>
        )
      })}
    </TableBody>
  </Table>

CitiesTable.propTypes = {
  classes: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  deleteCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  cities: state.weatherMap.payload
})

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actions
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(CitiesTable))
export default WrappedComponent
