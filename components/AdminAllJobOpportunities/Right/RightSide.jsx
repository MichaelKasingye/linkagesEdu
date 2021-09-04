// import React, { useEffect, useState } from "react";
import { db } from '../../../Firebase/firebase';
import firebase from "firebase";

import TitleRight from "../../TitleRight/TitleRight";
import SearchBar from "../../SearchBar/SearchBar";
import opportStyles from "../../../styles/body/AllOpportunities.module.css";
import rightCss from "../../../styles/body/RightBody.module.css";
import OpportunityCard from "../../Opportunity/OpportunityCard";
import ModalJobOpportunities from "../../ModalJobOpportunities/Modal";

import React, { useState } from 'react';
import DataTable from '../../Table/DataTable';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tablecss from "../../../styles/body/DataTable.module.css";

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







function RightSide({server}) {
  const [alljobs, setAlljobs] = useState();
const classes = useStyles();

console.log(server);

const tableHeads = [ "Job title",'Company','Location','Deadline',]


//  console.log(tableInfo);
  return (
    <section className={rightCss.right}>
      <TitleRight title="Admin View All Opportunities" />
      <SearchBar
        placeholder="Search.."
        onClick={() => alert("Search button")}
      />
{/* <DataTable content = {server} tableHeads={tableHeads} /> */}


{typeof server != "undefined" ? (
        
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
            {server.map((data) => (
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
        
              ) : (
              <h4>Loading....</h4>
              )}

         
{/* </div> */}

    </section>
  );
}

export default RightSide;
