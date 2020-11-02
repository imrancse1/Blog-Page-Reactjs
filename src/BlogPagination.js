import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";



const useStyles = makeStyles((theme) => ({
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function BlogPagination() {
    const classes = useStyles();
  return (
    <div>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
      </Box>
    </div>
  );
}

export default BlogPagination;
