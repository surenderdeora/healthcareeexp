// AuthActions.js

export const login = (user) => {
    // Save the user data to local storage
    localStorage.setItem('user', JSON.stringify(user));
    return { type: 'LOGIN', payload: user };
  };
  
  export const logout = () => {
    // Remove the user data from local storage
    localStorage.removeItem('user');
    return { type: 'LOGOUT' };
  };
  
  export const checkLoggedIn = () => {
    const user = localStorage.getItem('user');
    if (user) {
      return { type: 'LOGIN', payload: JSON.parse(user) };
    } else {
      return { type: 'LOGOUT' };
    }
  };
  