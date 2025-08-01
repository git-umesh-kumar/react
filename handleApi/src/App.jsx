import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getPost, getRandomUser } from './api'
import PostCards from './components/PostCards'
import UserCards from './components/UserCards'

function App() {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    getPost().then((posts) => setData(posts));
  }, []);

  const [userData, setuserData] = useState(null);
  useEffect(() => {
    getRandomUser().then((user) => setuserData(user.results[0]));
  }, []);

  return (
    <>
      <h1>API Handling</h1>
      {userData && <UserCards data ={userData}/>}
      {data ? data.map((e) => <PostCards title = {e.title} body = {e.body}/>): <p>No Data !</p>}
    </>
  )
}

export default App;
