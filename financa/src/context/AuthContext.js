import React from 'react';

const AuthContext = React.createContext({
  logged: false,
  setLogged: () => {},
})

export default AuthContext
