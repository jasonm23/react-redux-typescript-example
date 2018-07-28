import { Store, createStore } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { ApplicationState, rootReducer } from './store'

export default function configureStore(
  history: History,
  initialState: ApplicationState
): Store<ApplicationState> {
  const store = createStore(connectRouter(history)(rootReducer), initialState)
  return store
}
