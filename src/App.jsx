import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth';
import { Outlet } from 'react-router'
import { Header, Footer } from './components/index'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.authSliceReducer);

  console.log(user);


  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      }
    })
    .finally(setIsLoading(false));
  }, [])

  return !isLoading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
      <Header />
      <main>
      TODO:  <Outlet />
      </main>
      <Footer />
    </div>
  </div>) : (
    <div>
      Loading
    </div>
  )
}

export default App
