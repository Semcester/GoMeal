"use client";
import { signIn } from "next-auth/react";
import { generateApiEndpoint } from "@/utils";
import axios from "./client";
export async function Login(payload) {
  return await signIn("credentials", {
    email: payload.email,
    password: payload.password,
    redirect: false,
    callbackUrl: `${window.location.origin}`,
  });
}

export async function ForgotPassword(email) {
  const url = generateApiEndpoint("auth/password/request");
  return axios.post(url, {
    body: JSON.stringify(email),
  });
}
