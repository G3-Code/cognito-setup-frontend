export const CLIENT_ID = "65g3ii72skpsb08aggmq6a65fk";
export const CALLBACK_URI = "http://localhost:3000/home";
export const RESPONSE_TYPE = "token";
export const LOGIN_DOMAIN =
  "https://testg301.auth.us-east-2.amazoncognito.com/login";
export const LOGIN_URL = `${LOGIN_DOMAIN}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}`;
