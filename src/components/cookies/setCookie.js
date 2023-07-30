const setCookie = (name, value, days) => {
    const date = new Date()
    date.setDate(date.getDate() + days)
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}`
}

export default setCookie;