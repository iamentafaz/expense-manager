import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ExpenseTable(props) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                        >
                            Date
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                        >
                            Amount
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                        >
                            Type
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={{ backgroundColor: '#000', color: '#fff' }}
                        >
                            Category
                        </TableCell>
                        <TableCell
                            align='right'
                            sx={{ backgroundColor: '#000', color: '#fff' }}
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
                </TableBody>
                {/* {props.tableData.length === 0 && (
                        <div>No data available!</div>
                    )} */}
            </Table>
        </TableContainer>
    );
}
