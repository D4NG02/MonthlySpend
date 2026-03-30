import dayjs from "dayjs";

export default async function AddMonthlySpend(
    date: string,
    amount: string,
    vendor: string,
    payBy: string,
    category: string,
    detail: string
) {

    const now = dayjs(date);
    const nowFormat = now.format('DD-MMM-YYYY');

    const response = await fetch('/api/monthlySpend/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            category: category,
            payBy: payBy,
            vendor: vendor,
            detail: detail,
            amount: amount,
            date: nowFormat
        })
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}