// isLoggedIn...check the token present in local storage
export const isLoggedIn = () => {
  let token = localStorage.getItem("data");
  return token != null;
};

//doLogin... set the token in the local storage
export const doLogin = (data, next) => {
  localStorage.setItem("data", JSON.stringify(data));
  next();
};

//doLogout...remove token from local storage
export const doLogout = (next) => {
  localStorage.removeItem("data");
  next();
};

//get current user details
export const getCurrentUserDetail = () => {
  return isLoggedIn()
    ? JSON.parse(localStorage.getItem("data")).user_name
    : undefined;
};

export const getToken = () => {
  return isLoggedIn() ? JSON.parse(localStorage.getItem("data")).token : null;
};
