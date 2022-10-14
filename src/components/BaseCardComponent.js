import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";

import { loadAllCategoryData } from "../services/userService";

const BaseCardComponent = () => {

 const [categories, setCategories] = useState([
   {
     category_id: "",
     category_name: "",
     category_desc: "",
     category_image: "",
   },
 ]);

 useEffect(() => {
   loadAllCategoryData()
     .then((data) => {
       console.log(data);
       setCategories(data);
     })
     .catch((error) => {
       console.log(error);
     });
 }, []);


  return (
    <Box
      display="grid"
      gap={3}
      gridTemplateColumns="repeat(auto-fit, minmax(10rem, 20rem))"
      gridTemplateRows="repeat(auto-fit)"
      margin={2}
      justifyContent="center"
    >
      {categories.map((category) => (
        <Box>
          <ReactLink
            key={category.category_id}
            to={`category/${category.category_id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card
              sx={{
                background: "black",
                color: "white",
                borderRadius: "0.5rem",
                border: "2px solid goldenrod",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="60%"
                image="https://picsum.photos/300/200"
                // image = {category.category_image}
              />

              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {/* Lizard */}
                  {category.category_name}
                </Typography>
                <Typography variant="body2">
                  {/* Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica */}
                  {category.category_desc}
                </Typography>
              </CardContent>
            </Card>
          </ReactLink>
        </Box>
      ))}
    </Box>
  );
};

export default BaseCardComponent;
