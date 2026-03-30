
export default async function GetMonthlySpend() {

    const response = await fetch('/api/monthlySpend/gets');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}