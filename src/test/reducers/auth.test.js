import authReducer from '../../reducers/auth'

test('should set up default state', ()=>{
    const state = authReducer(undefined,{
        type: '@@INIT'
    })
    expect(state).toEqual({})
})

test('should login set uid in state', ()=>{
    const state = authReducer(undefined, {
        type: 'LOGIN',
        uid: 'A234'
    })
    expect(state.uid).toBe('A234')
})

test('should logout return an empty state', ()=>{
    const state = authReducer(undefined, {
        type: 'LOGOUT'
    })
    expect(state).toEqual({})
})