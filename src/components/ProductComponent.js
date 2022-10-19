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
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import {
  addFavoriteProductByUser,
  deleteFavoriteProductByUser,
  loadProductByCategoryData,
} from "../services/userService";
import Base from "./Base";
import { toast } from "react-toastify";
import { getCurrentUserDetail, isLoggedIn } from "../services/auth";

const ProductComponent = () => {
  const navigate = useNavigate();

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

  useEffect(() => {
    loadProductByCategoryData(categoryId)
      .then((data) => {
        console.log(data);
        setSignlePrduct(data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error(error.response.data.message);
      });
  }, [categoryId]);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setLogin(isLoggedIn());
    setUser(getCurrentUserDetail());
  }, [login]);

  // console.log(login);
  // console.log(user);


  const favoriteHandler = (productId) => {
    // console.log("clicked");
    // console.log(productId);
    // eslint-disable-next-line no-lone-blocks
    {
      login
        ? addFavoriteProductByUser(user, productId)
            .then((data) => {
              console.log("clicked");
              // console.log(data);
              // window.location.reload();
            toast.success("product added to favorite!!");
            })
            .catch((error) => {
              console.log(error);
              // toast.error(error.response.data.message);
            })
        : navigate("/login");
    }
  };

  // const unFavoriteHandler = (productId) => {
  //   console.log("un-clicked");
  //   console.log(productId);
  //   deleteFavoriteProductByUser(user, productId)
  //     .then((data) => {
  //       console.log(data);
  //       // window.location.reload();
        
  //     })
  //     .catch((error) => {
  //       console.log(error);
  // toast.error(error.response.data.message);
  //     });
  // };

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
                    height="60%"
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
                    <Button
                      size="large"
                      onClick={() => favoriteHandler(product.product_id)}
                    >
                      <FavoriteIcon sx={{ color: "white" }} />
                    </Button>
                    {/* {isFavorite ? (
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

export default ProductComponent;
