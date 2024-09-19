import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppContext from './Context/AppContext.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import loginReducer from './Reducers/loginReducer.js'

const store = configureStore({
  reducer:{
    loginOperation : loginReducer,
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <AppContext >
    <App />
    </AppContext>
    </Provider>
    
      
  </React.StrictMode>, 
)