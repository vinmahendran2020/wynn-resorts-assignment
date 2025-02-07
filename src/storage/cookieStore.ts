export const SECONDS_IN_A_YEAR = 31536000

const isFalsyValue = (value: string) => {
  return !value || value === 'null' || value === 'undefined' || value === 'NaN'
}

const cookieStore = {
  clear() {
    if (typeof window === 'undefined') return
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      this.remove(cookies[i].split('=')[0].trim())
    }
  },
  get(key: string) {
    if (typeof window === 'undefined') return
    const cookieArr = document.cookie.split(';')
    for (let i = 0; i < cookieArr.length; i++) {
      const cookiePair = cookieArr[i].split('=')
      const value = decodeURIComponent(cookiePair[1])
      if (key == cookiePair[0].trim() && !isFalsyValue(value)) {
        return value
      }
    }
    return null
  },
  getCookies() {
    if (typeof window === 'undefined') return
    const pairs = document.cookie.split(';')
    const cookies: { [key: string]: string } = {}
    for (let i = 0; i < pairs.length; i++) {
      const pair = pairs[i].split('=')
      cookies[(pair[0] + '').trim()] = unescape(pair.slice(1).join('='))
    }
    return cookies
  },
  remove(key: string) {
    if (typeof window === 'undefined') return
    if (Array.isArray(key)) {
      key.forEach((cookie) => {
        this.set(cookie, '', -1)
      })
    } else {
      this.set(key, '', -1)
    }
  },
  set(key: string, value: string, expiry = SECONDS_IN_A_YEAR) {
    if (typeof window === 'undefined') return
    let cookie = key + '=' + encodeURIComponent(value)
    cookie += '; max-age=' + expiry
    cookie += '; path=/'
    document.cookie = cookie
  },
}

export default cookieStore
