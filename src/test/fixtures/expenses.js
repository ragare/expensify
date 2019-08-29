import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0)
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 1095,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'credit card',
    note: '',
    amount: 9900,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses