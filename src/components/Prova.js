import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { asyncUser } from '../slice/userSlice';
import { asyncPosts } from "../slice/postsSlice";
import {asyncForum} from '../slice/forumSlice'

import SubForum from "./SubForum";

import { userColRef } from "./AuthPage";
import { postsColRef } from "./AuthPage";

import { getDocs,query,where } from "firebase/firestore";

function Prova() {
    const users = useSelector(state=>state.users.users)
    const posts = useSelector(state=>state.posts.posts)
    const forums = useSelector(state=>state.forums.forums)
    const activeUser = useSelector(state=>state.active.userID)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncUser())
        dispatch(asyncPosts())
        dispatch(asyncForum())
    },[])




    async function findId() {
        let forumArray = []
        const museums = query(userColRef, where('userID', '==', activeUser))
        const querySnapshot = await getDocs(museums);
        querySnapshot.forEach((doc) => {
            forumArray = doc.data().forums
        });
        return forumArray
    }
    


    async function activeUserPosts() {
        let forumArray = await findId()
        const post = forumArray[0]
        console.log(post)
        const museums = query(postsColRef, where('forumId', '==', post))
        const querySnapshot = await getDocs(museums);
        querySnapshot.forEach((doc) => {
            forumArray = doc.data()
        });
        console.log(forumArray)
    }

    return(
        <div>
            {users.map((user)=>{
                return (
                    <div key={nanoid()}>{user.username} questi sono i forum a cui l'utente e iscritto: {user.forums}</div>
                )
            })}
            <div>{posts[0] && <p>{posts[0].upvote}</p>}</div>
            <div>{forums[0] && <p>{forums[0].name}</p>}</div>
            <div>
                <h1 onClick={activeUserPosts}>Prova Home: {activeUser}</h1>
            </div>
            <SubForum></SubForum>
        </div>
    )
}

export default Prova;