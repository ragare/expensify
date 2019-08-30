import uuid from 'uuid'
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

export const startAddExpense = (expenseData = {}) => {
    return (disptach) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})