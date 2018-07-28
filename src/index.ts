import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { createBrowserHistory } from 'history'

import Main from './main'
import configureStore from './configureStore'

import 'typeface-ibm-plex-sans'
import './styles'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(<Main store={store} history={history} />, document.getElementById('root'))
