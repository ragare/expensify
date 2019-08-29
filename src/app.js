import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

import { addExpense } from './actions/expenses'
import { setTextFilter, sortByAmount, sortByDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()
// add water bill
store.dispatch(addExpense({ description: 'Water bill', amount: 23000, createdAt: 15500 }))

// add gas bill
store.dispatch(addExpense({ description: 'Gas bill', amount: 15000, createdAt: 100 }))


// add gas bill
store.dispatch(addExpense({ description: 'Rent', amount: 195000 }))

store.dispatch(sortByDate())

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
