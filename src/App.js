import './App.css'
// import '~slick-carousel/slick/slick.css'
// import '~slick-carousel/slick/slick-theme.css'
import Navigation from './components/Navigation'
import { Routes, Route } from 'react-router-dom'
import Home from './container/Home'
import FilmDetail from './container/FilmDetail'
import AllFilm from './container/AllFilm'
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                </Route>
                <Route path="/movie">
                    <Route index element={<AllFilm />} />
                    <Route path=":movieId" element={<FilmDetail />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
