import jwtDecode from "jwt-decode";
import { api } from "..";

interface User {
  token?: string;
  userId?: string;
  name?: string;
}
interface JwtToken {
  userId: string;
  roles?: any;
  given_name: string;
  family_name: string;
  email: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
  jti: string;
}

export const user: User = {};

export const authenticate = async () => {
  try {
    const response = await api.post(
      `/authentication`,
      {
        email: process.env.B81_EMAIL,
        password: process.env.B81_PASSWORD,
        strategy: "local",
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    user.token = response.data.data.accessToken;
    const decodedToken = jwtDecode<JwtToken>(user.token);
    user.userId = decodedToken.userId;
    user.name = decodedToken.given_name;
  } catch (e) {
    console.log(e);
  }
};
