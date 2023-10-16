import { GET_USER_DETAILS, LOGIN_USER } from "../apis";

export const getUserDetails = async () => {
  const response = await fetch(GET_USER_DETAILS, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("e-auth-token")}`,
    },
  });
  if (response.status !== 200) {
    throw new Error("User not found");
  }
  const data = await response.json();
  return data?.Response;
};

export const loginUser = async (payload) => {
  const response = await fetch(LOGIN_USER, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Falid to login");
  }
  const data = await response.json();
  return data?.Response;
};


