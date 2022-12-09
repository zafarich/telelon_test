import { api } from "src/boot/axios";
const url = "api/auth";

export async function login(payload) {
  const { data } = await api.post(`${url}/login`, payload);
  return data;
}
