import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const uid = "testuid"
const defaultAuthState = {
    auth: { uid }
}
const createMockStore = configureMockStore([thunk])


beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {
        done()
    })
})

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})


test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({ id }))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id
            })
            database.ref(`users/${uid}/expenses/${id}`).once('value')
                .then((snapshot) => {
                    expect(snapshot.val()).toBeNull()
                    done()
                })
        })
})

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', {
        note: 'New note'
    })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        update: {
            note: 'New note'
        }
    })
})

test('should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should edit an expense in the firebase', (done) => {
    const id = expenses[0].id
    const newDescription = 'Expense 0 updated'
    const update = { description: newDescription }
    const store = createMockStore(defaultAuthState)
    store.dispatch(startEditExpense(id, update)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            update
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    })
        .then((snapshot) => {
            expect(snapshot.val().description).toBe(newDescription)
            done()
        })

})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 30000,
        note: 'This is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseData)
                done()
            })

    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseDefaults = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
            .then((snapshot) => {
                expect(snapshot.val()).toEqual(expenseDefaults)
                done()
            })

    })
})

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            })
            done()
        })

})

