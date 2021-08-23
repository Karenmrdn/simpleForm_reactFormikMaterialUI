import decode from "jwt-decode";

export const calculateRemainingTime = (codedToken) => {
  if (!codedToken) {
    return;
  }

  let token;
  try {
    token = decode(codedToken);
  } catch (err) {
    console.error(err.message);
    return;
  }

  const expirationTimeInMilliseconds = token?.exp * 1000;
  const currentTime = Date.now();

  const remainingTime = expirationTimeInMilliseconds - currentTime;

  return remainingTime;
};
