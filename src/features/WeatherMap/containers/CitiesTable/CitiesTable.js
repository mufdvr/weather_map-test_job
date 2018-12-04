import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});


const CitiesTable = ({ cities, classes }) =>
  <Paper className={classes.root}>
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <CustomTableCell>City</CustomTableCell>
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
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </Paper>

CitiesTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  cities: state.weatherMap.payload
})

const ReduxWrapper = connect(mapStateToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(CitiesTable))
export default WrappedComponent
