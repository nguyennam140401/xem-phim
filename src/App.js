import './App.css'
// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './container/Home'
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
