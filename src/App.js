import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { selectUser, logout, login } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        {!user ? (<Login />) : (
          <>
            <Sidebar />
            <Feed />
          </>
        )
        }
      </div>
    </div>
  );
}

export default App;
