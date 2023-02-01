import Router from './routes/router'
import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
