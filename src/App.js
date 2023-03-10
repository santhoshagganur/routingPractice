import {Route, Switch} from 'react-router-dom'

import About from './components/About'
import Header from './components/Header'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
