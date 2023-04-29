import axios from "axios";
import * as SecureStore from "expo-secure-store";

export async function login(username: String, password: String) {
  try {
    // 👇️ const data: CommunityRequest
    const response = await axios.post(
      "http://commuzon.com:4000/login",
      {
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);

    await SecureStore.setItemAsync("access_token", response.data.accessToken);
    await SecureStore.setItemAsync("refresh_token", response.data.refreshToken);
    await SecureStore.setItemAsync("user_id", response.data.userId);

    const accessToken = await SecureStore.getItemAsync("access_token");
    const refreshToken = await SecureStore.getItemAsync("refresh_token");
    const userId = await SecureStore.getItemAsync("user_id");

    console.log("accessToken: " + accessToken);
    console.log("refreshToken: " + refreshToken);
    console.log("userId: " + userId);

    console.log(response.status);
    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function logout() {
  const refreshToken = await SecureStore.getItemAsync("refresh_token");
  try {
    const response = await axios.delete("http://commuzon.com:4000/logout", {
      data: {
        refreshToken: refreshToken,
      },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(response.status);

    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export async function createUser(
  email: String,
  username: String,
  password: String
) {
  try {
    // 👇️ const data: CommunityRequest
    const response = await axios.post(
      "http://commuzon.com:4000/createUser",
      {
        email: email,
        username: username,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log(response.data);
    console.log(response.status);
    return;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
