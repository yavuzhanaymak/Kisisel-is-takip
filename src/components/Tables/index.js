import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
 
];

export default function Tables({columnData,rowsData}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            {columnData.map((item,index)=>(
                <TableCell key={index}>{item}</TableCell>
            ))}

          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData?.map((row) => (
            <TableRow
              key={row.name}
             >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  >{row.Priority}</TableCell>
              <TableCell  >
                test
              </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
