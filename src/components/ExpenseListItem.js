import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h1>{description}</h1>
        </Link>
        <p>
        {amount} 
        - 
        {moment(createdAt).format('MMM Do, YYYY')}
        </p>
    </div>
)

export default ExpenseListItem