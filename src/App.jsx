import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { login, logout } from './store/authSlice'
import { addBlogs, removeBlogs } from './store/blogSlice'
import authService from './appwrite/auth';
import appwriteService from './appwrite/config';
import { Outlet } from 'react-router'
import { Header, Footer } from './components/index'


function App() {
  const [isLoading, setIsLoading] = useState(true);


  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login(userData));
        appwriteService.getPosts().then((posts) => {
            if (posts) {
              dispatch(addBlogs(posts.documents));
            }
        })
      }else{
        dispatch(logout());
        dispatch(removeBlogs());
      }
    })
    .finally(setIsLoading(false));
  }, [])

  return !isLoading ? (
  <div className='min-h-screen flex flex-wrap content-between'>
    <div className='w-full block'>
      <Header />
      <main className='bg-yellow-100'>
        <Outlet />
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
