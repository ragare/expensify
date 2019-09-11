import uuid from 'uuid'
import database from '../firebase/firebase'
import { doesNotReject } from 'assert';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({ id }))
            })
    }
}


// EDIT_EXPENSE
export const editExpense = (id, update) => ({
    type: 'EDIT_EXPENSE',
    id,
    update
})


export const startEditExpense = (id, update) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(update)
            .then(() => {
                dispatch(editExpense(id, update))
            })
    }
}

// SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    const expenses = []
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value')
            .then((snapshot) => {
                snapshot.forEach((child) => {
                    const expense = {
                        id: child.key,
                        ...child.val()
                    }
                    expenses.push(expense)
                })
                dispatch(setExpenses(expenses))
            })
    }
}