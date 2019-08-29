import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should sow a summary with 1 and a total of $99', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={9900} />)
    expect(wrapper).toMatchSnapshot()
})

test('should sow a summary with 2 and a total of $99', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={9900} />)
    expect(wrapper).toMatchSnapshot()
})