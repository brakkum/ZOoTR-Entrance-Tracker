import { useState } from 'react'
import LocalStorageKey from '../Constants/LocalStorageKey'

// https://usehooks.com/useLocalStorage/
export default function useLocalStorage (key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Check for old storage method, and update to new
      let item
      const oldStorage = window.localStorage.getItem(LocalStorageKey.state)
      const oldStorageJson = JSON.parse(oldStorage)
      if (oldStorageJson && oldStorageJson[key] !== undefined) {
        if (key === 'hyrule') {
          Object.keys(oldStorageJson[key]).forEach(area => {
            // In case of old state, add isExpanded attribute for hyrule areas
            if (oldStorageJson[key][area].isExpanded === undefined) {
              oldStorageJson[key][area].isExpanded = true
            }
          })
        }
        item = JSON.stringify(oldStorageJson[key])
        delete oldStorageJson[key]
        window.localStorage.setItem(LocalStorageKey.state, JSON.stringify(oldStorageJson))
        window.localStorage.setItem(key, item)
      } else {
        item = window.localStorage.getItem(key)
        if (key === 'hyrule') {
          const json = JSON.parse(item)
          Object.keys(json).forEach(area => {
            // In case of old state, add isExpanded attribute for hyrule areas
            if (json[area].isExpanded === undefined) {
              json[area].isExpanded = true
            }
          })
          item = JSON.stringify(json)
        }
      }
      // songs is last item added, if its empty this is first page load.
      const songsEmpty = !window.localStorage.getItem('songs')
      if (!item && songsEmpty) {
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      // console.log(error);
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
                value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
