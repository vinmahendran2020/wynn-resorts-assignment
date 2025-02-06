import cookieStore from './cookieStore'
import sessionStore from './sessionStore'

const storage = {
  cookie: {
    clear: () => cookieStore.clear(),
    get: (key: string) => cookieStore.get(key),
    remove: (key: string) => cookieStore.remove(key),
    set: (key: string, value: string, expiry: number) => cookieStore.set(key, value, expiry),
  },
  sessionStore: {
    clear: () => sessionStore.clear(),
    get: (key: string) => sessionStore.get(key),
    remove: (key: string) => sessionStore.remove(key),
    set: (key: string, value: string) => sessionStore.set(key, value),
  },
}

export default storage
