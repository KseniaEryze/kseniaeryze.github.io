export const login = (role, username, pass) => {
    return{
        type: 'LOGIN',
        payload: {role, username, pass}
    }

} 
export const logout = () => {
    return{
        type: 'LOGOUT'
    }
    
} 