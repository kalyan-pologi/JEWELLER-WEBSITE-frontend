import React from "react";
import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";
import { toast } from "react-toastify";
import { loadAllCategoryData } from "../services/userService";

const BaseCardComponent = () => {


 useEffect(() => {
   loadAllCategoryData()
     .then((data) => {
       console.log(data);
       setCategories(data);
     })
     .catch((error) => {
       console.log(error);
        toast.error(error.response.data.message);
     });
 }, []);
 const [categories, setCategories] = useState([
   {
     category_id: "",
     category_name: "",
     category_desc: "",
     category_image: "",
   },
 ]);

 console.log(categories.category_image);

  return (
    <Box
      display="grid"
      gap={3}
      gridTemplateColumns="repeat(auto-fit, minmax(10rem, 20rem))"
      gridTemplateRows="repeat(auto-fit)"
      margin={2}
      justifyContent="center"
    >
      {categories.map((category, index) => (
        <Box>
          <ReactLink
            key={index}
            to={`category/${category.category_id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Card
              sx={{
                background: "black",
                color: "white",
                borderRadius: "0.2rem",
                border: "2px solid goldenrod",
                height: "18rem",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="65%"
                // image="https://picsum.photos/300/200"
                // src={category.category_image}
               
                src={`data:image/jpeg;base64,${category.category_image}`}
              />
              <Divider variant="middle" color="white" />
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
