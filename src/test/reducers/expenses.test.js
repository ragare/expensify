import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '3',
        description: 'The third',
        note: '',
        amount: 19000,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const id = expenses[1].id
    const update = { note: 'Note for 2' }
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].note).toBe('Note for 2')
})

test('should not edit expense if id not found', () => {
    const id = '-1'
    const update = { note: 'Note for 2' }
    const action = {
        type: 'EDIT_EXPENSE',
        id,
        update
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})