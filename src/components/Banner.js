import React from "react";
import { Box, CardMedia } from "@mui/material";
import image from '../images/images.jpg'
const Banner = () => {
  return (
    // <div  className="banner-container">
    //   <img className="banner-img" src={bannerImage} alt=""></img>
    // </div>
    <Box
      margin={2}
      marginTop={9}
      borderRadius={0.5}
      border={"2px solid goldenrod"}
    >
      <CardMedia
        
        component="img"
        alt="green iguana"
        height="500px"
        image={image}
        // image={product.product_image}
      />
    </Box>
  );
};

export default Banner;
