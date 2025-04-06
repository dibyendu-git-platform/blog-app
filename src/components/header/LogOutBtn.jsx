import { useDispatch } from "react-redux"
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { removeBlogs } from '../../store/blogSlice'

const LogOutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            dispatch(removeBlogs());
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogOutBtn
