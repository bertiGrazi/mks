import { useState } from "react";

export function useLocalStorage<T>(item: string) {
    const storedItem = localStorage.getItem(item);
    const initialValue = storedItem ? JSON.parse(storedItem) : undefined;
  
    const [value, setValue] = useState<T>(initialValue);

    const updateLocalStorage = (newValue: T) => {
      setValue(newValue);
      localStorage.setItem(item, JSON.stringify(newValue));
  };

    return {
      value,
      updateLocalStorage
    }
}