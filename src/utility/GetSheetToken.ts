
export default async function GetSheetToken() {

    const response = await fetch('/api/monthlySpend/token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
    }

    console.log(response)
    return response.json();
}