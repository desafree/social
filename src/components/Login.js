import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'firebase/auth'


const LoginPage = () => {
    const auth = getAuth()
    const navigate = useNavigate()
    
    function logIn(e) {
        e.preventDefault()
        const registrationForm = document.querySelector('form')
        const email = registrationForm.email.value
        const password = registrationForm.password.value

        signInWithEmailAndPassword(auth, email, password).then(()=>{
            navigate('/')
            console.log('logged in')
        }).catch((err)=>console.log(err))
    }

    return ( 
        <div className='formContainer'>
            <form action="#" onSubmit={(e)=>{logIn(e)}}>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' name='email'/>
                
                <label htmlFor="password">password</label>
                <input type="password" id='password' name='password'/>

                <button type='submit'>Register</button>

            </form>
        </div>
    );
}

export default LoginPage