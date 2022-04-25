export const fetchData = async (url, method, data = undefined)=> {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: method === "POST" ? JSON.stringify(data) : null
    });

    return response.json();
};
