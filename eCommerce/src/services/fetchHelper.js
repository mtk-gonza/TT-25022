export const fetchData = async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Error al cargar datos desde ${url}`)
    return await response.json()
}

export const postData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    if(!response.ok){
        throw new Error(`Error al agregar ${data}`)
    }
    
    const resJson = response.json()
    return resJson

    } catch (err) {
        console.error(err)
        console.log(err)
    }
}