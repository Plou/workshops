// let's go!
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import './index.css';

import App from './App'
import Connect from './Components/Connect'
import NotFound from './Components/NotFound'



const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Connect} />
        <Match pattern="/room/:roomId" component={App}/>
        <Miss component={NotFound}/>

      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#root'))
