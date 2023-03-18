export const saveLocalStorage = <T>(key: string, value: T): void => {
  const valueToStore = JSON.stringify(value)
  window.localStorage.setItem(key, valueToStore)
}

export const getLocalStorage = <T>(key: string): T | null => {
  const value = window.localStorage.getItem(key)
  return JSON.parse(value as string) ?? ''
}
