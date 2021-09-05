import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from "react-redux";
import { TablePagination } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { deleteProduct } from '../../../Redux/products/productsAction';
import swal from "sweetalert"
import "./DashboardProducts.scss";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);



const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DashboardProducts() {
  const dispatch = useDispatch()
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const products = useSelector(state => state.myProducts.products);
  const currentProducts = products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
  };


  // handle delete product 
  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
    swal("Product Delete Successfully", `ID: ${id}`)
  }


  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table stickyHeader className={classes.table} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Serial</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Product ID</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Color</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentProducts.map((product, index) => (
              <StyledTableRow key={product.name}>
                <StyledTableCell component="th" scope="row"> {index + 1} </StyledTableCell>
                <StyledTableCell>
                  {
                    product.image ?
                    <img src={product.image && product.image[0]} alt="" />
                    :
                    <img src={`data:image/jpeg;base64,${product.binaryImg}`} alt="" />
                  }
                </StyledTableCell>
                <StyledTableCell>{product._id}</StyledTableCell>
                <StyledTableCell>{product.name}</StyledTableCell>
                <StyledTableCell>{product.category}</StyledTableCell>
                <StyledTableCell>{product.color}</StyledTableCell>
                <StyledTableCell>{product.price}</StyledTableCell>
                <StyledTableCell>
                  <HighlightOffIcon onClick={() => handleDelete(product._id)} className="text-danger" />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={products.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
