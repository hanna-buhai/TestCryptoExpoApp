import Router from './routes/router'
import store from './redux/store'
import { Provider } from 'react-redux'
import CheckInternetConnection from './components/common/CheckInternetConnection/CheckInternetConnection'

export default function App() {
  return (
    <CheckInternetConnection>
   <Provider store={store}>
      <Router />
    </Provider>
    </CheckInternetConnection>
 
  )
}
