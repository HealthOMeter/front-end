export const fetchData = async (url, method, data = undefined, newHeaders = undefined)=> {
    const response = await fetch(url, {
        method: method,
        headers: newHeaders ?? {
             'Content-Type': 'application/json',
        },
        body: method === "POST" ? JSON.stringify(data) : null
    });

    return response.json();
};
