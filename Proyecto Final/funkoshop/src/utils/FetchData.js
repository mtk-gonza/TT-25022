export const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error al cargar datos desde ${url}`)
    return await response.json()
}