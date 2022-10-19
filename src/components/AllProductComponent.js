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
import { Link as ReactLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  addFavoriteProductByUser,
  deleteFavoriteProductByUser,
  getAllFavoriteProductsByUser,
  isProductFavoriteByProductId,
  loadAllProductData,
} from "../services/userService";
import { toast } from "react-toastify";
import Base from "./Base";
import { getCurrentUserDetail, isLoggedIn } from "../services/auth";

const AllProductComponent = () => {
  const navigate = useNavigate();

  const [openPhoto, setOpenPhoto] = useState(false);

  const StyleModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const [products, setProducts] = useState([
    {
      product_id: "",
      product_name: "",
      product_desc: "",
      product_image: "",
    },
  ]);
  const [favoriteProduct, setFavoritePrduct] = useState([
    {
      product_id: "",
      product_name: "",
      product_desc: "",
      product_image: "",
    },
  ]);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  useEffect(() => {
    loadAllProductData()
      .then((data) => {
        // console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        // console.log(error);
        // toast.error(error.response.data.message);
      });
  }, []);

  useEffect(() => {
    getAllFavoriteProductsByUser(user)
      .then((data) => {
        // console.log(data);
        setFavoritePrduct(data);
      })
      .catch((error) => {
        // console.log(error);
        // toast.error(error.response.data.message);
      });
  }, []);

  // console.log(products);
  // console.log(favoriteProduct);
  // console.log(favoriteProduct.product_id === products.product_id);
  // const isFavoritehandler = async (productId) => {
  //   // eslint-disable-next-line no-lone-blocks
  //   {
  //     login
  //       ? await isProductFavoriteByProductId(user, productId).then((data) => {
  //           return data;
  //         })
  //       : navigate("/login");
  //   }
  // };

  // const isFavoritehandler = async (productId) => {
  //   try {
  //     const response = await isProductFavoriteByProductId(user, productId);
  //     return response;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // console.log("handler");
  // console.log(isFavoritehandler());

  const favoriteHandler = (productId) => {
    // console.log("clicked");
    // console.log(productId);
    // eslint-disable-next-line no-lone-blocks
    {
      login
        ? addFavoriteProductByUser(user, productId)
            .then((data) => {
              // console.log("clicked");
              // console.log(data);
              // window.location.reload();
               toast.success("product added to favorite!!");
            })
            .catch((error) => {
              // console.log(error);
              toast.error(error.response.data.message);
            })
        : navigate("/login");
    }
  };

  // const unFavoriteHandler = (productId) => {
  //   // console.log("un-clicked");
  //   // console.log(productId);
  //   // eslint-disable-next-line no-lone-blocks
  //   {
  //     login
  //       ? deleteFavoriteProductByUser(user, productId)
  //           .then((data) => {
  //             // console.log(data);
  //             // window.location.reload();
  //           })
  //           .catch((error) => {
  //             console.log(error);
  // toast.error(error.response.data.message);
  //           })
  //       : navigate("/login");
  //   }
  // };

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
        {products.map((product) => (
          <>
            <Box>
              <Box gap={2}>
                <Card
                  sx={{
                    background: "black",
                    color: "white",
                    borderRadius: "0.2rem",
                    border: "3px solid goldenrod",
                    height: "24rem",
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
                  <CardActions disableSpacing sx={{ marginBottom:"1rem" }}>
                    <Button
                      size="large"
                      onClick={() => favoriteHandler(product.product_id)}
                    >
                      <FavoriteIcon sx={{ color: "white" }} />
                    </Button>
                    {/* {isFavoritehandler(product.product_id) ? (
                      <Button
                        size="large"
                        onClick={() => unFavoriteHandler(product.product_id)}
                      >
                        <FavoriteIcon color="error" />
                      </Button>
                    ) : (
                      <Button
                        size="large"
                        onClick={() => favoriteHandler(product.product_id)}
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

              {/* <StyleModal
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
                    {product.product_id}

                  </Typography>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="95%"
                    image="https://picsum.photos/300/200"
                    // image={product.product_image}
                  />
                </Box>
              </StyleModal> */}
            </Box>
          </>
        ))}
      </Box>
    </Base>
  );
};

export default AllProductComponent;
