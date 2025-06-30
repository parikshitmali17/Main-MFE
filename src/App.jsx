
import { Suspense, lazy, useContext,useState,useEffect } from 'react';
import { AuthContext } from './context/AuthContext';
import Navbar from './components/Navbar';
import { Padding } from '@mui/icons-material';
import './App.css'
import Footer from "./components/Footer"
import Landing from './components/Landing';
import ErrorBoundary from './components/ErrorBoundary';


const MusicLibrary = lazy(() => import('music/MusicLibrary'));

function App() {
   const { user, login, logout } = useContext(AuthContext);


  if (!user) {
    return (
      <div>
        <Navbar></Navbar>
        <Landing login={login}></Landing>
            <Footer></Footer>
      </div>
    );
  }
 
  

  return (
    <div style={{margin:0 ,padding:0}}>
      <Navbar></Navbar>
      <ErrorBoundary>
      <Suspense fallback={<div>Loading Music App...</div>}>
        <MusicLibrary user={user} onLogout={logout} />
      </Suspense>
      </ErrorBoundary>
      <Footer></Footer>
    </div>
  );
}

export default App;