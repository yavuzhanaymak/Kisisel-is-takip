import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Button from "../Button";
import { IconButton } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

function selectColorPriority(priority) {
  switch (priority) {
    case "Urgent":
      return "error";
    case "Regular":
      return "warning";
    case "Trival":
      return "primary";
    default:
      return "info";
  }
}

export default function Tables({ columnData, rowsData , actionDelete, actionEdit}) {
  return (
    <TableContainer className="mt-5" component={Paper}>
      <Table sx={{ minWidth: "100%" }}   aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnData.map((item, index) => (
              <TableCell key={index}><h3>{item}</h3></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData?.map((row,index) => (
            <TableRow              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <Chip
                  label={row.Priority}
                  color={selectColorPriority(row.Priority)}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <IconButton onClick={()=>actionEdit(index)}>
                  <Edit />
                </IconButton>
                <IconButton onClick={()=>actionDelete(index)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
