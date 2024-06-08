
import { CssVarsProvider } from '@mui/joy'
import './App.css'
import Home from './pages/Home'
import theme from './theme'
import Nav from './nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Footer from './ui/Footer'
import SmoothScroll from './ui/SmoothScroll'
function App() {

     return (
          <SmoothScroll>
               <main>
                    <CssVarsProvider
                         theme={theme}
                         defaultMode="dark"
                         colorSchemeSelector="#demo_dark-mode-by-default"
                         modeStorageKey="demo_dark-mode-by-default"
                         disableNestedContext
                    />
                    <BrowserRouter>
                         <Nav />
                         <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/about" element={<About />} />
                              <Route path="/services" element={<Services />} />
                              <Route path="/portfolio" element={<Portfolio />} />
                              {/* 
                              
                              <Route path="/work" element={<Work />} />
                              
                              <Route path="/details" element={<Details />} /> */}
                              {/* <Route path="*" element={<NotFound />} /> */}
                         </Routes>
                         <Footer />
                    </BrowserRouter>
               </main>
          </SmoothScroll>
     )
}

export default App
