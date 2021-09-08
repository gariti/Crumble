import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { debugContextDevtool } from 'react-context-devtool'
import ReactDOM from 'react-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'

// import "./index.css";
const container = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
      integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
      crossOrigin="anonymous"
    />
    <App />
  </React.StrictMode>,
  container,
)

debugContextDevtool(container, {
  debugReducer: true,
  debugContext: true,
  disable: false,
  disableAutoMode: false,
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
