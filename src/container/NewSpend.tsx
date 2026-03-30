import z from "zod";
import { useMutation } from "@tanstack/react-query";
import { useState, type SubmitEvent, type MouseEventHandler } from "react";
import Select from "../components/Select";
import Button from "../components/Button";
import Typography from "../components/Typography";
import AddMonthlySpend from "../utility/AddMonthlySpend";


const categories = ["", "Saving", "Debt", "Utilities", "Health", "Food", "Transport", "Personal", "People", "Invest"]
const PayBys = ["", "QR", "Transfer", "FPX", "CC UOB", "CC HSBC", "CC Amex", "Cash", "DC Mbb"]

const Zspend = z.object({
    category: z.literal(categories),
    payBy: z.literal(PayBys),
    vendorName: z.string(),
    detail: z.string(),
    amount: z.number().positive(),
    date: z.iso.date()
});

type NewSpendProps = {
    handleClose?: MouseEventHandler<HTMLButtonElement>;
};

export default function NewSpend({ handleClose }: NewSpendProps) {
    const [selectCategory, setSelectCategory] = useState<string>('')
    const [selectPayBy, setSelectPayBy] = useState<string>('')
    const [vendorName, setVendorName] = useState<string>('')
    const [detail, setDetail] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        sentMutation.mutate();
    }

    const sentMutation = useMutation({
        mutationFn: () => AddMonthlySpend(date, `RM${amount}`, vendorName, selectPayBy, selectCategory, detail),
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.table(error);
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            // Boom baby!
        },
        onSettled: (data, error, variables, onMutateResult, context) => {
            // Error or success... doesn't matter!
        },
    });

    return (
        <>
            <Typography variant='h5'>Add New Spending</Typography>
            <form className='mt-4 space-y-4'
                onSubmit={handleSubmit}>
                <div>
                    <label className='block mb-1' htmlFor='category'>Category</label>
                    <Select variant="filled" name='category'
                        value={selectCategory} onChange={(e) => setSelectCategory(e.target.value)}>
                        {categories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <label className='block mb-1' htmlFor='payby'>Pay By</label>
                    <Select variant="filled" name='payby'
                        value={selectPayBy} onChange={(e) => setSelectPayBy(e.target.value)}>
                        {PayBys.map((payBy) => (
                            <option key={payBy} value={payBy}>{payBy}</option>
                        ))}
                    </Select>
                </div>
                <div>
                    <label className='block mb-1' htmlFor='vendorName'>Vendor Name</label>
                    <input type="text" aria-label='vendor name' id='vendorName' className='w-full border border-gray-300 rounded px-3 py-2'
                        value={vendorName} onChange={(e) => setVendorName(e.target.value)} />
                </div>
                <div>
                    <label className='block mb-1' htmlFor='detail'>Detail</label>
                    <input type="text" aria-label='detail' id='detail' className='w-full border border-gray-300 rounded px-3 py-2'
                        value={detail} onChange={(e) => setDetail(e.target.value)} />
                </div>
                <div>
                    <label className='block mb-1' htmlFor='amount'>Amount</label>
                    <input type="number" aria-label='amount' id='amount' className='w-full border border-gray-300 rounded px-3 py-2'
                        value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div>
                    <label className='block mb-1' htmlFor='date'>Date</label>
                    <input type="date" aria-label='date' id='date' className='w-full border border-gray-300 rounded px-3 py-2'
                        value={date} onChange={(e) => setDate(e.target.value)} />
                </div>

                <div className='mt-4 flex justify-end'>
                    <Button variant="text" color="primary" className='mr-2'
                        onClick={handleClose ? handleClose : undefined}>Cancel</Button>
                    <Button variant="contained" color="primary"
                        type="submit">Add Spending</Button>
                </div>
            </form>
        </>
    );
}
