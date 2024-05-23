'use server'

import { config } from "@/utils/config";
import { FieldValues } from "react-hook-form";

export const login = async (data: FieldValues) => {
  const res = await fetch(
    `${config.baseUrl}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );
  const result = await res.json();
  return result;
};