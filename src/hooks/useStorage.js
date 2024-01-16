import { useState } from 'react';

const useStorage = (key, initialValue = null, storageType = 'localStorage') => {
  const storage = storageType === 'localStorage' ? localStorage : sessionStorage;

  const [value, setValue] = useState(() => {
    const storedValue = storage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  const setStoredValue = (newValue) => {
    setValue(newValue);
    storage.setItem(key, JSON.stringify(newValue));
  };

  const clearStorage = () => {
    setValue(initialValue);
    storage.removeItem(key);
  };

  return [value, setStoredValue, clearStorage];
};

export default useStorage;
