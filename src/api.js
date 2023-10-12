export async function getBoats() {
    const res = await fetch("http://localhost:3000/api/yatchs")
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText : res.statusText
        }
    }

    return data
}

export async function getSigleBoat(id) {
    const res = await fetch(`http://localhost:3000/api/yatch/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText : res.statusText
        }
    }

    return data
}

export async function getHostBoats() {
    const res = await fetch(`http://localhost:3000/api/host/yatchs`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText : res.statusText
        }
    }

    return data
}

export async function getSingleHostBoat(id) {
    const res = await fetch(`http://localhost:3000/api/yatch/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw {
            message: data.message,
            status: res.status,
            statusText : res.statusText
        }
    }

    return data
}

export async function loginUser(formData) {
    const res = await fetch("http://localhost:3000/api/login", {
        method : "post",
        headers: {
            'Content-Type': 'application/json',
          },
        body : JSON.stringify(formData)
    })
    const data = await res.json()
    if (!res.ok) {
        throw {
            message : data.message,
            status: res.status,
            statusText : res.statusText
        }
    }

    return data
}