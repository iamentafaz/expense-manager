import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Button, Stack } from '@mui/material';
import { convertFireBaseDateToFullDate } from '../utils/helperFunction';

const tableHeadS = { backgroundColor: '#000', color: '#fff', fontWeight: 600 };
const tableBodyTdS = { fontWeight: '600', cursor: 'pointer' };

export default function ExpenseTable(props) {
    const editClickHandler = (id) => {
        props.onEdit(id);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={tableHeadS}>Date</TableCell>
                        <TableCell align="right" sx={tableHeadS}>
                            Amount
                        </TableCell>
                        <TableCell align="right" sx={tableHeadS}>
                            Type
                        </TableCell>
                        <TableCell align="right" sx={tableHeadS}>
                            Category
                        </TableCell>
                        <TableCell align="right" sx={tableHeadS}>
                            Description
                        </TableCell>
                        <TableCell align="right" sx={tableHeadS}>
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                            hover
                        >
                            <TableCell scope="row" sx={tableBodyTdS}>
                                {convertFireBaseDateToFullDate(row.date)}
                            </TableCell>
                            <TableCell align="right" sx={tableBodyTdS}>
                                {row.amount}
                            </TableCell>
                            <TableCell align="right" sx={tableBodyTdS}>
                                {row.type === 'cr' ? 'Credit' : 'Debit'}
                            </TableCell>
                            <TableCell align="right" sx={tableBodyTdS}>
                                {row.category}
                            </TableCell>
                            <TableCell align="right" sx={tableBodyTdS}>
                                {row.description ? row.description : 'N/A'}
                            </TableCell>
                            <TableCell
                                align="right"
                                onClick={() => editClickHandler(row.id)}
                                sx={tableBodyTdS}
                            >
                                <Button
                                    variant="text"
                                    sx={{ fontWeight: '600' }}
                                >
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {props.tableData.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={6}>
                                <Stack sx={{ width: '100%' }} spacing={1}>
                                    <Alert
                                        severity="info"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        No data available!
                                    </Alert>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ) : (
                        <></>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
