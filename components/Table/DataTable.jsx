import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tablecss from "./DataTable.module.css";



const useStyles = makeStyles({
    table: {
      minWidth: 650,
      backgroundColor: "#E5E5E5",
      // fontWeight: "bold",
    },
    HeadRow: {
      backgroundColor: "#096691",
      color: '#D9E0E8',
    },
    BodyRow: {
      backgroundColor: "#D9E0E8",
    
    },
    
  });
  

function DataTable({content, tableHeads}) {
const classes = useStyles();

    return (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow hover className={classes.HeadRow} >
        {tableHeads.map((data, index) => (
            <TableCell key={index} className={classes.HeadRow} hover role="checkbox"> {data} </TableCell>
                 ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((data) => (
            <TableRow key={data.id} hover>
              <TableCell component="th" scope="row" className={classes.BodyRow}>
              {data.jobTitle}
              </TableCell>
              <TableCell className={classes.BodyRow}>{data.coName}</TableCell>
              <TableCell className={classes.BodyRow}>{data.location}</TableCell>
              <TableCell className={classes.BodyRow}>{data.deadline}</TableCell>
              <TableCell > <span className={Tablecss.note}>view</span> </TableCell>

              {/* <TableCell align="right">23</TableCell>
              <TableCell align="right">23</TableCell>
              <TableCell align="right">23</TableCell>
              <TableCell align="right">23</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


        </div>
    )
}

export default DataTable
