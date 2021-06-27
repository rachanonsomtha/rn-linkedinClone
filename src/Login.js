import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { login } from './features/userSlice'
import { useDispatch } from 'react-redux'
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profileUrl, setProfileUrl] = useState("")

    const dispatch = useDispatch();
    const signup = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.photoURL,
            }))
        }).catch(error => alert(error))
    };
    const register = () => {
        if (!name) {
            return alert('Please enter a full name!');
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profileUrl,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profileUrl,
                    }));
                });
        }).catch(error => alert(error));
    };
    return (
        <div className="login">
            <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019.png" alt="" />

            <form>
                <input type="text" value={name} placeholder="Full name (required if registering)" onChange={e => setName(e.target.value)} />
                <input type="text" value={profileUrl} placeholder="Profile picture url (optional)" onChange={e => setProfileUrl(e.target.value)} />
                <input type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <button type="submit" onClick={signup}>Sign In</button>
            </form>
            <p>Not a member ? {" "}<span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
