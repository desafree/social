import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import { getFirestore,collection,addDoc } from 'firebase/firestore';
import { asyncUser } from '../slice/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignOut from './SignOut';




const firebaseConfig = {
    apiKey: "AIzaSyA6vCtocx-waHzacQrLaEtaCFTnzxmI-kg",
    authDomain: "social-16756.firebaseapp.com",
    projectId: "social-16756",
    storageBucket: "social-16756.appspot.com",
    messagingSenderId: "591655919753",
    appId: "1:591655919753:web:124526eeca3ca0cd406658"
};

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

const userColRef = collection(db,'user')











const AuthenticationPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function registerUser(e) {
        e.preventDefault()
        const registrationForm = document.querySelector('form')
        const email = registrationForm.email.value
        const password = registrationForm.password.value
        const username = registrationForm.username.value

        createUserWithEmailAndPassword(auth, email, password).then((cred)=>{
            registrationForm.reset()
            
            addDoc(userColRef,{
                email: cred.user.email,
                username: username,
                forums:[] 

            }).then(()=>{
                dispatch(asyncUser())
                navigate('/')
            })
            console.log(cred.user)}).catch((err)=>{console.log(err)})
        
    }

    return ( 
        <div className='formContainer'>
            <form action="#" onSubmit={(e)=>{registerUser(e)}}>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email'/>
                
                <label htmlFor="username">username</label>
                <input type="text" id='username' name='username'/>

                <label htmlFor="password">password</label>
                <input type="password" id='password' name='password'/>

                <button type='submit'>Register</button>
                <SignOut auth={auth}></SignOut>
            </form>
        </div>
     );
}
 
export default AuthenticationPage;