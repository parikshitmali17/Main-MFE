// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// 

// function App() {
  

//   return (
//     <>
//      <h1>Main App</h1>
//     </>
//   )
// }

// export default App

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
//   const [user, setUser] = useState(null)
// //
//   const login = (email, role) => {
//     console.log(`Logging in as ${role} with email: ${email}`)
//     setUser({
//       email: email,
//       role: role,
//       name: role === "admin" ? "Admin User" : "Music Lover",
//     })
//   }

//   const logout = () => {
//     setUser(null)
 // }
//

  if (!user) {
    return (
      <div>
        <Navbar></Navbar>
        <Landing login={login}></Landing>
        {/* <button onClick={() => login('admin@music.com', 'admin')}>Login as Admin</button>
        <button onClick={() => login('user@music.com', 'user')}>Login as User</button> */}
        
        
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
      {/* {<iframe
      title="Music App"
      src="http://localhost:5174/"
      style={{
        width: '100%',
        height: '90vh',
        border: 'none',
      }}
    />}  */}
      {/* <h1>Welcome, {user.username} ({user.role})</h1>
      <button onClick={logout}>Logout</button> */}
     {/* if(!user){
      <Landing login={login}></Landing>
     } else{<iframe
      title="Music App"
      src="http://localhost:5174/"
      style={{
        width: '100%',
        height: '90vh',
        border: 'none',
      }}
    />} */}


{/* {
  user ? (
    <Landing login={login} />
  ) : (
    // <iframe
    //   title="Music App"
    //   src="http://localhost:5174/"
    //   style={{
    //     width: '100%',
    //     height: '90vh',
    //     border: 'none',
    //   }}
    // />
    <ErrorBoundary>
      <Suspense fallback={<div>Loading Music App...</div>}>
        <MusicLibrary user={user} onLogout={logout} />
      </Suspense>
      </ErrorBoundary>
  )
} */}


{/* 
      <ErrorBoundary>
      <Suspense fallback={<div>Loading Music App...</div>}>
        <MusicLibrary user={user} onLogout={logout} />
      </Suspense>
      </ErrorBoundary>
      <MusicLibrary></MusicLibrary> */}
      <Footer></Footer>
    </div>
  );
}

export default App;