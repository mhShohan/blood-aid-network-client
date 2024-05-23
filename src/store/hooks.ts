import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./";
import { useEffect, useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


type TDebouncedProps = {
  key: string;
  delay: number;
};

export const useDebounced = ({ key, delay }: TDebouncedProps) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(key);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(key);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [key, delay]);

  return debouncedValue;
};