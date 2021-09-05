import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function PaginationBar({ paginate, totalProduct, productPerPage }) {
    const classes = useStyles();
    const pageNumber = [];
    for (let i = 0; i < Math.ceil(totalProduct/ productPerPage); i++) {
        pageNumber.push(i);
    }

    const handleChange = (event, newPage) => {
        paginate(newPage)
    }

    return (
        <div className={classes.root}>
            <Pagination
                count={pageNumber.length}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </div>
    );
}
