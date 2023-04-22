import axios from "axios";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

async function login(username: String, password: String) {
  try {
    // 👇️ const data: CommunityRequest
    const { data, status } = await axios.post<LoginResponse>(
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

    console.log(JSON.stringify(data, null, 4));

    console.log(status);

    return data;
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

module.exports = login;
