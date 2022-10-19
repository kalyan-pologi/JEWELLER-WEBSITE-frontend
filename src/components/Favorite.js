import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Modal,
  styled,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Link as ReactLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  deleteFavoriteProductByUser,
  getAllFavoriteProductsByUser,
} from "../services/userService";
import Base from "./Base";
import { toast } from "react-toastify";
import { getCurrentUserDetail, isLoggedIn } from "../services/auth";

const Favorite = () => {
  const [openPhoto, setOpenPhoto] = useState(false);

  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const [favoriteProduct, setFavoritePrduct] = useState([
    {
      product_id: "",
      product_name: "",
      product_desc: "",
      product_image: "",
    },
  ]);
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setUser(getCurrentUserDetail());
    getAllFavoriteProductsByUser(user)
      .then((data) => {
        console.log(data);
        setFavoritePrduct(data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  },[user]);

  const unFavoriteHandler = (productId) => {
    console.log("un-clicked");
    console.log(productId);
    deleteFavoriteProductByUser(user, productId)
      .then((data) => {
        console.log(data);
        toast.info("product remove from favorite!!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  };

  useEffect(() => {}, [favoriteProduct]);

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
        {favoriteProduct.map((product) => (
          <>
            <Box key={product.product_id}>
              <Box gap={2}>
                <Card
                  sx={{
                    background: "black",
                    color: "white",
                    borderRadius: "0.2rem",
                    border: "2px solid goldenrod",
                    height: "23rem",
                  }}
                >
                  <CardMedia
                    onClick={(e) => setOpenPhoto(true)}
                    component="img"
                    alt="green iguana"
                    height="55%"
                    src={`data:image/jpeg;base64,${product.product_image}`}
                  />
                  <Divider variant="middle" color="white" />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.product_name}-{product.product_id}
                      {/* Lizard */}
                    </Typography>
                    <Typography variant="body2">
                      {product.product_desc}
                      {/* Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica */}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing sx={{ marginTop: "-1rem" }}>
                    {/* <ReactLink to={"/favorite"}>
                      <Button size="large">
                        <FavoriteIcon />
                      </Button>
                    </ReactLink> */}
                    {/* {isFavorite ? ( */}
                    <Button
                      size="large"
                      onClick={() => unFavoriteHandler(product.product_id)}
                    >
                      <FavoriteIcon color="error" />
                    </Button>
                    {/* ) : (
                      <Button
                        size="large"
                        onClick={() =>
                          favoriteHandler(favoriteProduct.product_id)
                        }
                      >
                        <FavoriteIcon sx={{ color: "white" }} />
                      </Button>
                    )} */}

                    <ReactLink>
                      <Button size="large">
                        <ShareIcon />
                      </Button>
                    </ReactLink>
                  </CardActions>
                </Card>
              </Box>

              <StyleModal
                open={openPhoto}
                onClose={(e) => setOpenPhoto(false)}
                // onClick={(e) => handleModal(product)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                // onClick={ handleProduct}
                key={product.product_id}
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
                    {product.product_id}
                    {/* {singleProduct[0].product_id} */}
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
            </Box>
          </>
        ))}
      </Box>
    </Base>
  );
};
export default Favorite;
