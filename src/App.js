import {Route, Routes } from 'react-router-dom'
import { ThemeProvider } from "styled-components";

import AboutPage from './Pages/AboutPage';
import MainPage from './Pages/MainPage';
import NotFoundPage from './Pages/NotFoundPage';
import UserPage from './Pages/UserPage';

const App = () => {
  const theme = {
    colors : {
      primary : "hsl(218, 18%, 12%)",
      secondary: "hsl(220, 18%, 20%)",
      accent : "hsl(217, 19%, 27%)",
      neutral_100: "white",
      neutral_300 :"hsl(240, 20%, 90%)"
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path='/' element={<MainPage/>}/>     
      <Route path='/about' element={<AboutPage/>}/>     
      <Route path='/user/:login' element={<UserPage/>}/>     
      <Route path='*' element={<NotFoundPage/>}/>     
      </Routes>

    </ThemeProvider>
  );
}

export default App;
