import * as React from 'react';

import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { useSelector } from 'react-redux';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseForm from '../components/ExpenseForm';

export default function Home() {
    const expenses = useSelector((state) => state.expense.expenses);
    const [openForm, setOpenForm] = React.useState(false);

    return (
        <Box
            sx={{
                margin: '1rem 2rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginBottom: '.75rem',
                }}
            >
                <Button
                    variant='text'
                    startIcon={<AddIcon />}
                    onClick={() => setOpenForm(true)}
                    sx={{
                        fontWeight: '700'
                    }}
                >
                    Add your expenses
                </Button>
            </Box>
            <ExpenseTable tableData={expenses} />
            {openForm ? (
                <ExpenseForm
                    openForm={openForm}
                    onClose={() => setOpenForm(false)}
                />
            ) : null}
        </Box>
    );
}
