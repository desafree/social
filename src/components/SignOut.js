import { signOut } from "firebase/auth";


const SignOut = ({auth}) => {
    function signout() {
        signOut(auth).then(()=>console.log("logout"))
    }

    return ( 
        <button onClick={signout}>Log out</button>
     );
}
 
export default SignOut;