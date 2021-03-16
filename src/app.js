/**
 * This is your standard Client Side React App setup
 * You'd typically put your providers here too.
 */

import * as React from 'react'
import ReactDOM from 'react-dom'

import { App } from './containers/App'

import './styles/global.css'

const MOUNT_NODE = document.getElementById('app')

const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE)
}

if (module.hot) {
  module.hot.accept(['containers/App'], () => {
    render()
  })
}

render()
