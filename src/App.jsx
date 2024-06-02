
import { Box, CssVarsProvider } from '@mui/joy'
import './App.css'
import Parallax from './pages/Home'
import theme from './theme'
import Nav from './nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {

     return (
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
                         <Route path="/" element={<Parallax />} />
                         {/* <Route path="/about" element={<About />} />
                              <Route path="/services" element={<Services />} />
                              <Route path="/work" element={<Work />} />
                              <Route path="/portfolio" element={<Portfolio />} />
                              <Route path="/details" element={<Details />} /> */}
                         {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
               </BrowserRouter>
          </main>
     )
}

export default App
