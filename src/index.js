import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './sakura.css'
import './index.css'
import NotFound from './components/NotFound'
import EditBook from './container/EditBook'
import AddBook from './container/AddBook'
import Book from './container/Book'

import combine from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combine, composeEnhancers())
const history = syncHistoryWithStore(createHistory(), store)

store.subscribe(() => {
  console.log('subscribe')
  console.log(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/add' component={AddBook} />
          <Route path='/book/:id' component={Book} />
          <Route path='/edit/:id' component={EditBook} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
document.getElementById('root')
)
registerServiceWorker()
