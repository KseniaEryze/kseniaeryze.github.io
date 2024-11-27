export const login = (role, login) => {
    return{
        type: 'LOGIN',
        payload: {role, login}
    }

} 
export const logout = () => {
    return{
        type: 'LOGOUT'
    }
    
} 