import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import todoApp from './reducers'
let store=createStore(todoApp)
console.log("store:",store)
render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.getElementById('root')
)
