import { query,where,getDocs,updateDoc,doc} from "firebase/firestore";
import { useSelector } from "react-redux";
import { userColRef,db } from "./AuthPage";
import { asyncUser } from "../slice/userSlice";
import { useDispatch } from "react-redux";




const SubForum = () => {
    const active = useSelector(state=>state.active.userID)
    const dispatch = useDispatch()
    let userId = ''

        async function findId() {
        const museums = query(userColRef, where('userID', '==', active))
        const querySnapshot = await getDocs(museums);
        querySnapshot.forEach((doc) => {
            userId = doc.id
            console.log(userId, doc.data())
        });
        return userId
    }

    async function addSub() {
        const userId = await findId()
        const docRef = doc(db, 'user', userId)
        updateDoc(docRef, {
            forums : ['forumProva']
        }).then(()=>{
            dispatch(asyncUser())
        })
    }
    
    return ( 
        <button onClick={addSub}>subscribe</button>
     );
}
 
export default SubForum;