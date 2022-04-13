import './App.css';
import React, {Fragment, useState} from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

function App() {

  let [data, setData] = useState([])
  let [title, setTitle] = useState('Select a Query to Render')

  let getQuery = (query, title) => {
   
    fetch(query)
    .then((res) => {
     return res.json()
    }).then((info) => {
      console.log(info)
      setData(info)
      setTitle(title)
    })
  }

  return (
    <Fragment>

      <h2 style={{textAlign: 'center', marginTop: '35px'}}>NewstoneDB</h2>
      <Grid container spacing={2} sx={{m: 4}}>
    
        <Grid item xs={5} >
          <Box sx={{ flexGrow: 1, border: 'solid 1px black', maxHeight: '630px', overflowY: 'scroll' }}>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Product SKU with the highest amount of order</h4>
              <Button variant="contained" onClick={() => {getQuery('/query1', "Product SKU with the highest amount of order")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Product name with the previously selected high sku</h4>
              <Button variant="contained" onClick={() => {getQuery('/query2', "Product name with the previously selected high sku")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Sum of quantity ordered for the Q-SKU with highest order</h4>
              <Button variant="contained"onClick={() => {getQuery('/query3', "Sum of quantity ordered for the Q-SKU with highest order")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Total number of unpaid invoices</h4>
              <Button variant="contained"onClick={() => {getQuery('/query4', "Total number of unpaid invoices")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Total amount of unpaid invoices</h4>
              <Button variant="contained"onClick={() => {getQuery('/query5', "Total amount of unpaid invoices")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Name of customer with highest score which would see a discount applied</h4>
              <Button variant="contained"onClick={() => {getQuery('/query6', "Name of customer with highest score which would see a discount applied")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>$ amount of DORADO 6X6 in inventory</h4>
              <Button variant="contained"onClick={() => {getQuery('/query7', "$ amount of DORADO 6X6 in inventory")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Total invoice amount of Hailee (with highest score) to which to apply 10% discount</h4>
              <Button variant="contained"onClick={() => {getQuery('/query8', "Total invoice amount of Hailee (with highest score) to which to apply 10% discount")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Largest Single Invoice Amount</h4>
              <Button variant="contained"onClick={() => {getQuery('/query9', "Largest single invoice amount")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Customers person with salespersonID 1 has sold to</h4>
              <Button variant="contained"onClick={() => {getQuery('/query10', "Customers person with salespersonID 1 has sold to")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Customer with the invoice with the highest amount</h4>
              <Button variant="contained"onClick={() => {getQuery('/query11', "Customer with the invoice with the highest amount")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>All customers residing in Ontario</h4>
              <Button variant="contained"onClick={() => {getQuery('/query12', "All customers residing in Ontario")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Total sales for each salesperson</h4>
              <Button variant="contained"onClick={() => {getQuery('/query13', "Total sales for each salesperson")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Best salesperson</h4>
              <Button variant="contained"onClick={() => {getQuery('/query14', "Best salesperson")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Total amount ($) sold to each customer from highest to lowest</h4>
              <Button variant="contained"onClick={() => {getQuery('/query15', "Total amount ($) sold to each customer from highest to lowest")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Popular colors (in terms of units of product sold)</h4>
              <Button variant="contained"onClick={() => {getQuery('/query16', "Popular colors (in terms of units of product sold)")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Products that will be out-of-stock (OOS)? P_Pallets_Count inferior to Total_Quantity</h4>
              <Button variant="contained"onClick={() => {getQuery('/query17', "Products that will be out-of-stock (OOS)? P_Pallets_Count < Total_Quantity")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Average days between PO_Date and I_date</h4>
              <Button variant="contained"onClick={() => {getQuery('/query18', "Average days between PO_Date and I_date")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>3 most ordered products</h4>
              <Button variant="contained"onClick={() => {getQuery('/query19', "3 most ordered products")}}>Get Query</Button>
            </Grid>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
              <h4 style={{textAlign: 'center'}}>Products sold by Walczak (the top salesman)</h4>
              <Button variant="contained"onClick={() => {getQuery('/query20', "Products sold by Walczak (the top salesman)")}}>Get Query</Button>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box sx={{ flexGrow: 1, maxHeight: '700px' }}>
            <Grid item sx={{m: 3, textAlign: 'center'}}>
         
              <h3 style={{textAlign: 'center'}}>{title}</h3>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>

                    {
                      data.length > 0 ? (
                        <Fragment>
                          {
                            Object.keys(data[0]).map((element, i) => {
                              return <TableCell key={i}><b>{element}</b></TableCell>
                            })
                          }
                        </Fragment>
                      ): (
                        <Fragment></Fragment>
                      )
                    } 
                      
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {
                      data.length > 0 ? (
                        <Fragment>
                          {
                            data.map((element, i) => (
                              <TableRow key={i}>
                                {
                                  Object.keys(element).map((info, j) => (
                                    <TableCell key={j}>{element[info]}</TableCell>
                                  ))
                                }
                              </TableRow>
                            ))
                          }
                        </Fragment>
                      ): (
                        <Fragment></Fragment>
                      )
                    }
                  </TableBody>
                </Table>
              </TableContainer>
             
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default App;
