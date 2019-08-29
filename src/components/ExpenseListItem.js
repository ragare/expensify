import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import numeral from 'numeral'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
        {moment(createdAt).format('MMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem