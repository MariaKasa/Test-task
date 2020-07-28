import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default props => (

  <TableContainer component={Paper} className="table" style={{ cursor: "pointer" }}>
    <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
        <TableCell align="right" onClick={props.onSort.bind(null, "id")}>
          ID {props.sortField === "id" ? <small>{props.sort}</small> : null}
        </TableCell>
        <TableCell align="right" onClick={props.onSort.bind(null, "firstName")}>
          First Name{" "}
          {props.sortField === "firstName" ? <small>{props.sort}</small> : null}
        </TableCell>
        <TableCell align="right" onClick={props.onSort.bind(null, "lastName")}>
          Last Name{" "}
          {props.sortField === "lastName" ? <small>{props.sort}</small> : null}
        </TableCell>
        <TableCell align="right" onClick={props.onSort.bind(null, "email")}>
          E-mail{" "}
          {props.sortField === "email" ? <small>{props.sort}</small> : null}
        </TableCell>
        <TableCell align="right" onClick={props.onSort.bind(null, "phone")}>
          Phone{" "}
          {props.sortField === "phone" ? <small>{props.sort}</small> : null}
        </TableCell>
      </TableRow>
    </TableHead>
   <TableBody>
      {props.data.map(item => (
        <TableRow
          key={item.id + item.phone}
          onClick={props.onRowSelect.bind(null, item)}
        >
          <TableCell align="right">{item.id}</TableCell>
          <TableCell align="right">{item.firstName}</TableCell>
          <TableCell align="right">{item.lastName}</TableCell>
          <TableCell align="right">{item.email}</TableCell>
          <TableCell align="right">{item.phone}</TableCell>
        </TableRow>
      ))}
    </TableBody>
    </Table>
  </TableContainer>
);

