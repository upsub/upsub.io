import { h, render } from 'preact'
import Router from 'preact-router'
import './App.css'

import Index from 'views/Index'
import GettingStarted from 'views/GettingStarted'
import Docs from 'views/Docs'
// import Community from 'views/Community'
import NotFound from 'views/NotFound'

global.h = h

const App = () => (
  <Router>
    <Index path='/' />
    <GettingStarted path='/getting-started/:section?' />
    <Docs path='/docs/:version?/:section?' />
    {/* <Community path='/community/:section?' /> */}
    <NotFound default />
  </Router>
)

render(<App />, document.querySelector('#root'))
