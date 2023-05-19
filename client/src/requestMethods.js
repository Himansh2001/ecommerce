import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTc4ZTZkNjlkYWEyMDE0Y2IzOGE2OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDMwNjA2NSwiZXhwIjoxNjg0NTY1MjY1fQ.v1vX-kfTF9aiWgKl3ZBXOuKEYBmnMQ9Qn2eimROmSlE";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}`},
});
