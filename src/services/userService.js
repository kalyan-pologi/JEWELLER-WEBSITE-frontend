import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios.post("/auth/register", user).then((response) => response.data);
};

export const LoginUser = (loginDetail) => {
  return myAxios
    .post("/auth/login", loginDetail)
    .then((response) => response.data);
};

export const loadAllCategoryData = () => {
  return myAxios.get("/category/").then((response) => response.data);
};

export const loadAllProductData = () => {
  return myAxios.get("/products/").then((response) => response.data);
};

export const loadProductByCategoryData = (categoryId) => {
  const category_id = parseInt(categoryId);
  return myAxios
    .get(`/category/${category_id}/products`)
    .then((response) => response.data);
};

export const loadSingleProductData = (productId) => {
  const product_id = parseInt(productId);
  return myAxios
    .get(`/products/${product_id}`)
    .then((response) => response.data);
};

export const getAllFavoriteProductsByUser = (user) =>{

  return myAxios
  .get(`/user/${user}/favorite`)
  .then( (response) => response.data);
}

export const addFavoriteProductByUser = (userName,productId) =>{
   
    const product_id = parseInt(productId);

    return myAxios
      .post(`/user/${userName}/${product_id}/add-favorite`)
      .then((response) => response.data);
}
export const deleteFavoriteProductByUser = (userName, productId) => {
  const product_id = parseInt(productId);

  return myAxios
    .post(`/user/${userName}/${product_id}/un-favorite`)
    .then((response) => response.data);
};

export const isProductFavoriteByProductId = (userName, productId) => {
  const product_id = parseInt(productId);

  return myAxios
    .post(`/user/${userName}/${product_id}`)
    .then((response) => response.data);
};


