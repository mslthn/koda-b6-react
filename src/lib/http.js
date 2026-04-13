export const base_url = import.meta.env.VITE_BACKEND_URL

export default async function http(endpoint, opts = {}) {
    const url = `${base_url}${endpoint}`

    const token = opts.token || localStorage.getItem("token")

    const headers = {
        'Content-Type': 'application/json',
        ...opts.headers
    }

    if (token) {
        headers.Authorization = "Bearer " + token
    }

    const response = await fetch(url, {
        method: opts.method || "GET",
        headers: headers,
        body: opts.body ? JSON.stringify(opts.body) : undefined,
    })
    const result = await response.json()

    if (!response.ok) {
        throw new Error(result.message || "Something went wrong")
    }

    return result
}