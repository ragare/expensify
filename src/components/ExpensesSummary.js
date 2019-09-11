import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">
                Viewing <span>{props.expenseCount}</span> totalling <span>{numeral(props.expensesTotal / 100).format('$0,0.00')}</span>
            </h1>
            <div className="page_header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
    </div>
)


const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    };
}

export default connect(mapStateToProps)(ExpensesSummary);
