export const encode = str => encodeURIComponent(str).replace(/%20/g, '+')

export const updateUrl = query => (window.location.hash = encode(query))

export const parseUrl = () => {
  const hash = window.location.hash.slice(1)
  return decodeURIComponent(hash).replace(/\+/g, ' ')
}
