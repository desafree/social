import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { asyncUser } from '../slice/userSlice';
import { asyncPosts } from "../slice/postsSlice";
import {asyncForum} from '../slice/forumSlice'

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

    function activeUserPosts() {
        const activeUserInfo = users.find((element)=>
            element.userID == activeUser
        )
        const forumActiveUser = activeUserInfo.forums[0]
        const postActiveUser = posts.find((element)=>
            element.forumID == forumActiveUser
        ) 

        console.log(postActiveUser)
    }

    return(
        <div>
            {users.map((user)=>{
                return (
                    <div key={nanoid()}>{user.username}</div>
                )
            })}
            <div>{posts[0] && <p>{posts[0].upvote}</p>}</div>
            <div>{forums[0] && <p>{forums[0].name}</p>}</div>
            <div>
                <h1 onClick={activeUserPosts}>Prova Home {activeUser}</h1>
            </div>
        </div>
    )
}

export default Prova;