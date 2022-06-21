import React from 'react';

const AuthContext = React.createContext({
  logged: false,
  setLogged: () => {},
  setToast: () => {},
})

export default AuthContext
