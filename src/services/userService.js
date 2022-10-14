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

export const loadSingleProductData = (product_id) => {
  const productId_num = parseInt(product_id);
  return myAxios
    .get(`/category/${productId_num}/products`)
    .then((response) => response.data);
};
