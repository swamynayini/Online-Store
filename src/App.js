import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import SingIn from './components/SingIn';
import Home from './components/Home';
import Header from './components/Header';
function App() {
  const [prasent,setPrasent] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      setPrasent({uid:user.uid,email:user.email,password:user.password})
    });
  },[])
  return (
    <div>
      <Header/>
      {prasent ? <Home/> : <SingIn/>}
    </div>
  );
}

export default App;
