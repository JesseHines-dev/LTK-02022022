import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserItems from './user-items';


function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="right">Assigned On</TableCell>
            <TableCell align="right">Documents&nbsp;(g)</TableCell>
            <TableCell align="right">Status&nbsp;(g)</TableCell>
            <TableCell align="right">Date&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserItems.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.docType}</TableCell>
              <TableCell align="right">{row.ya}</TableCell>
              <TableCell align="right">{row.ya}</TableCell>
              <TableCell align="right">{row.ya}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;