import { twMerge } from "tailwind-merge";
import { useQuery } from "@tanstack/react-query";
import GetMonthlySpend from "../utility/GetMonthlySpend";
import Typography from "../components/Typography";
import Chip from "../components/Chip";
import TableContainer from "../components/TableContainer";
import Table from "../components/Table";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import TableRow from "../components/TableRow";
import TableCell from "../components/TableCell";
import Skeleton from "../components/Skeleton";

export default function MonthlySpend() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['spendData'], // Unique key for caching/refetching
        queryFn: GetMonthlySpend, // Function that returns a promise
    });

    if (isLoading) return <Skeleton className="row-span-10 col-span-full" />;
    if (isError) return <Typography variant="h5" className="row-span-10 col-span-full">Error: {error.message}</Typography>;

    const processedData = data.length > 0 && data.map((item: any) => {
        let classNameCategory = item.category === "Saving" ? "bg-green-500 text-white" :
            item.category === "Debt" ? "bg-red-500 text-white" :
                item.category === "Utilities" ? "bg-pink-500 text-white" :
                    item.category === "Health" ? "bg-yellow-500 text-white" :
                        item.category === "Food" ? "bg-sky-500 text-white" :
                            item.category === "Transport" ? "bg-secondary text-white" :
                                item.category === "Personal" ? "bg-rose-500 text-white" :
                                    item.category === "People" ? "bg-indigo-500 text-white" :
                                        item.category === "Invest" ? "bg-emerald-500 text-white" :
                                            "";

        const temp = {
            ...item,
            amount: `${item.amount.replace('RM', '')}`,
            category: <Chip
                size="small"
                variant="contained"
                label={item.category}
                className={classNameCategory}
            />,
        }

        return temp;
    });
    const headerNames = processedData.length > 0 ? Object.keys(processedData[0]) : [];

    return (
        <TableContainer className="row-span-10 col-span-full">
            <Table stickyHeader className={twMerge(
                "[&_.col-date]:min-w-20",
                "[&_.col-amount]:text-right",
                "[&_.col-category]:text-center",
                "[&_.col-vendor]:hidden [&_.col-vendor]:sm:table-cell",
                "[&_.col-payby]:hidden [&_.col-payby]:sm:table-cell",
            )}>
                <TableHead>
                    <TableRow variant="head">
                        {headerNames.map((header) => (
                            <TableCell key={header} component="head" className={`col-${header.replaceAll(" ", "")}`}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {processedData.map((row: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                {headerNames.map((header) => {
                                    return (
                                        <TableCell key={header} className={`col-${header.replaceAll(" ", "")}`}>
                                            {row[header]}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
