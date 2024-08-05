
import { Box, CssVarsProvider } from '@mui/joy'
import './App.css'
import Home from './pages/Home'
import theme from './theme'
import Nav from './nav/Nav'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Footer from './ui/Footer'
import React from 'react'
import { color } from 'framer-motion'
import { Padding } from '@mui/icons-material'
function App() {

     return (
          <React.Fragment>
               <CssVarsProvider
                    theme={theme}
                    defaultMode="dark"
                    colorSchemeSelector="#demo_dark-mode-by-default"
                    modeStorageKey="demo_dark-mode-by-default"
                    disableNestedContext
               />
               <HashRouter>
                    <Box
                         sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: '100vw',
                              backgroundColor: '#222831',
                              color: '#FFF5E0',
                              cursor: 'pointer',
                              transition: 'all 1s ease-in-out',
                              "&:hover": {
                                   color: '#222831',
                                   backgroundColor: '#FFF5E0',
                              },

                         }}
                    >
                         <Box
                              sx={{
                                   margin: 1,
                              }}
                         >
                              This Website is Under Devlopment...
                         </Box>
                    </Box>
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
               </HashRouter>
          </React.Fragment>
     )
}

export default App
