import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

const useStyles = makeStyles((theme) => ({
  hero: {
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
     url('https://c0.wallpaperflare.com/preview/959/812/937/blogger-business-coffee-computer.jpg')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    // alignItems:"center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  
}));

function BlogContainer() {
    const classes = useStyles();
  return (
    <div>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <BlogCard />
        <BlogPagination />
      </Container>
    </div>
  );
}

export default BlogContainer;
