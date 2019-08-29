import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'okama'
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe('okama')
})

test('should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state = filterReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test('should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    const state = filterReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0))
})