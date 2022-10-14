import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link as ReactLink, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  loadSingleProductData,
} from "../services/userService";
import Base from "./Base";

const ProductComponent = () => {
  const [openPhoto, setOpenPhoto] = useState(false);

  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const { categoryId } = useParams();

  const [singleProduct, setSignlePrduct] = useState([
    {
      product_id: "",
      product_name: "",
      product_desc: "",
      product_image: "",
    },
  ]);

  console.log(categoryId);
  useEffect(() => {
    loadSingleProductData(categoryId)
      .then((data) => {
        console.log(data);
        setSignlePrduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <Base>
      <Box
        display="grid"
        gap={3}
        gridTemplateColumns="repeat(auto-fit, minmax(10rem, 20rem))"
        gridTemplateRows="repeat(auto-fit)"
        margin={2}
        marginTop={10}
        justifyContent="center"
      >
        {singleProduct.map((product) => (
          <>
            <Box>
              <Box gap={2}>
                <Card
                  sx={{
                    background: "black",
                    color: "white",
                    borderRadius: "0.5rem",
                    border: "2px solid goldenrod",
                  }}
                >
                  <CardMedia
                    onClick={(e) => setOpenPhoto(true)}
                    component="img"
                    alt="green iguana"
                    height="60%"
                    image="https://picsum.photos/300/200"
                    // image={product.product_image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.product_name}
                      {/* Lizard */}
                    </Typography>
                    <Typography variant="body2">
                      {product.product_desc}
                      {/* Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <ReactLink to={"/favorite"}>
                      <Button size="large">
                        <FavoriteIcon />
                      </Button>
                    </ReactLink>
                    {/* <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} /> */}
                    <ReactLink>
                      <Button size="large">
                        <ShareIcon />
                      </Button>
                    </ReactLink>
                  </CardActions>
                </Card>
              </Box>
              {/* {singleProduct.map((prod) => (
                <> */}
              <StyleModal
                open={openPhoto}
                onClose={(e) => setOpenPhoto(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // onClick={ handleProduct}
              >
                <Box
                  sx={{
                    width: "70%",
                    height: "70%",
                    padding: "2rem",
                    background: "black",
                    color: "white",
                    borderRadius: "1rem",
                    border: "2px solid goldenrod",
                    margin: "1rem",
                  }}
                >
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {product.product_name}
                    {product.product_desc}
                    {/* {product.product_id} */}
                    {/* {name} */}
                    {/* Text in a modal */}
                  </Typography>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="95%"
                    image="https://picsum.photos/300/200"
                    // image={product.product_image}
                  />
                </Box>
              </StyleModal>
              {/* </>
              ))} */}
            </Box>
          </>
        ))}
      </Box>
    </Base>
  );
};

export default ProductComponent;
