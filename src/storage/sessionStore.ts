const sessionStore = {
  clear() {
    if (typeof window === 'undefined') return
    if (sessionStorage) {
      sessionStorage.clear()
    }
  },
  get(key: string) {
    if (typeof window === 'undefined') return
    if (sessionStorage && sessionStorage.getItem(key)) {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    }
    return null
  },
  remove(key: string) {
    if (typeof window === 'undefined') return
    if (sessionStorage && key) {
      sessionStorage.removeItem(key)
    }
  },
  set(key: string, value: string) {
    if (typeof window === 'undefined') return
    if (sessionStorage && value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    }
  },
}

export default sessionStore
