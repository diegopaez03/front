"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const IsLogged =
  typeof window !== "undefined" && Boolean(localStorage.getItem("token"));

export function homeRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (IsLogged) {
      router.push("/");
    }
  }, []);
}

function loginRedirect() {
    const router = useRouter();
  useEffect(() => {
    if (!IsLogged) {
      router.push("/join/login");
    }
  }, []);
}

export default loginRedirect;
