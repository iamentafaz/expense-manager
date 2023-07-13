import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Stack } from '@mui/material';

const tableHeadS = { backgroundColor: '#000', color: '#fff', fontWeight:600 }

export default function ExpenseTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={tableHeadS}
                        >
                            Date
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={tableHeadS}
                        >
                            Amount
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={tableHeadS}
                        >
                            Type
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={tableHeadS}
                        >
                            Category
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={tableHeadS}
                        >
                            Description
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
                            <TableCell component='th' scope='row'>
                                {row.date}
                            </TableCell>
                            <TableCell align='right'>{row.amount}</TableCell>
                            <TableCell align='right'>
                                {row.type === 'cr' ? 'Credit' : 'Debit'}
                            </TableCell>
                            <TableCell align='right'>{row.category}</TableCell>
                            <TableCell align='right'>
                                {row.description}
                            </TableCell>
                        </TableRow>
                    ))}
                    {props.tableData.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={5}>
                                <Stack sx={{ width: '100%' }} spacing={1}>
                                    <Alert severity="info" sx={{fontWeight: 600 }}>No data  available!</Alert>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ) : <></>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
