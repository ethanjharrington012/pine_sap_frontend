let token = `9600493bc1ec7fa1cee8f98d40d88b979e70d7eb09bf137b`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://spark-bustling-whimsey.glitch.me/api/artists`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://spark-bustling-whimsey.glitch.me/api/artists`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://spark-bustling-whimsey.glitch.me/api/artists/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to Create new Data on server')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`https://spark-bustling-whimsey.glitch.me/api/artists/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}