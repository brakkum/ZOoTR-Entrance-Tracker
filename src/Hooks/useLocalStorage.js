import { useState } from "react";
import LocalStorageKey from "../Constants/LocalStorageKey";

// https://usehooks.com/useLocalStorage/
export default function useLocalStorage(key, initialValue) {

    

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState(() => {
        try {
            // Check for old storage method, and update to new
            let item;
            let oldStorage = window.localStorage.getItem(LocalStorageKey.state);
            let json = JSON.parse(oldStorage);
            if (json && json[key] !== undefined) {
                item = JSON.stringify(json[key]);
                delete json[key];
                window.localStorage.setItem(LocalStorageKey.state, JSON.stringify(json));
                window.localStorage.setItem(key, item);
            } else {
                item = window.localStorage.getItem(key);
            }
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            // console.log(error);
            return initialValue;
        }
    });

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = value => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    return [storedValue, setValue];
}
