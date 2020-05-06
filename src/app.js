import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const NotFound = () => (
  <div>
    <h2>Whoops the page you are after does not exist</h2>
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={<p>Hello World !</p>} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
