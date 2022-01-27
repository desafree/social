import { Link } from "react-router-dom";

const Navigation = () => {
    return ( 
        <div>
            <Link to={'/'}>Prova</Link>
            <Link to={'/auth'}>Authe</Link>
            <Link to={'/login'}>Login</Link>
        </div>
     );
}
 
export default Navigation;