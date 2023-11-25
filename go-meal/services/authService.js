"use client";
import { signIn } from "next-auth/react";
export async function Login(payload) {
  return await signIn("credentials", {
    email: payload.email,
    password: payload.password,
    redirect: false,
    callbackUrl: `${window.location.origin}`,
  });

}
