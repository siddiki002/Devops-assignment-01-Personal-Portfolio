import { BrowserRouter , Route ,Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Profile from './components/profile'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import Footer from './components/footer/footer'
export default function App(){
    // const navigate = useNavigate()
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={
                        <>
                        <Navbar />
                        <Profile
                            profileImage = {'./images/IMG_7078.jpg'}
                        />
                        <Footer />                        
                        </>

                    }/>
                    <Route
                        exact path = '/portfolio'
                        element = {
                            <>
                                <Navbar />
                                <Portfolio />
                                <Footer />                        
                            </>
                        } 
                    />
                </Routes>
            </BrowserRouter>
        </>
        
    )
}