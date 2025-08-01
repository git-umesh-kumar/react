import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContext'

function App() {
// step 3
  return (
    <UserContextProvider>
      <h1>miniContext</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
