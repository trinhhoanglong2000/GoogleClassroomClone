import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




export default function GradeTable({data}) {
  

  return (
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Classname</TableCell>

            <TableCell align="right">Homework</TableCell>
            <TableCell align="right">Grade</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`[${row.section}]${row.name}`}
              </TableCell>
              <TableCell align="right">{row.homeworkname}</TableCell>
              <TableCell align="right">{row.grade}</TableCell>
 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}