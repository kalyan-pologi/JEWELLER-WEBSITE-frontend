import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as ReactLink } from "react-router-dom";

import { loadAllCategoryData } from "../services/userService";
import Base from "./Base";

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
    <Base>
      <Box
        display="grid"
        gap={3}
        gridTemplateColumns="repeat(auto-fit, minmax(15rem, 20rem))"
        gridTemplateRows="repeat(auto-fit)"
        margin={2}
        marginTop={10}
        justifyContent="center"
      >
        {categories.map((category) => (
          <Box>
            <Box>
              <ReactLink
                key={category.category_id}
                to={category.category_name}
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
                      {/* Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica */}
                      {category.category_desc}
                    </Typography>
                  </CardContent>
                </Card>
              </ReactLink>
            </Box>
          </Box>
        ))}
      </Box>
    </Base>
  );
};

export default BaseCardComponent;
