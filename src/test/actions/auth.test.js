import { login, logout } from '../../actions/auth'

test('should set login action', () => {
    const action = login('A23')
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 'A23'
    })
})

test('should set logout action', ()=>{
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})