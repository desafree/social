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

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(asyncUser())
        dispatch(asyncPosts())
        dispatch(asyncForum())
    },[])

    return(
        <div>
            {users.map((user)=>{
                return(
                    <h1 key={nanoid()}>{user.username} {user.id} {user.email}</h1>
                )
            })}
            <div>{posts[0] && <p>{posts[0].upvote}</p>}</div>
            <div>{forums[0] && <p>{forums[0].name}</p>}</div>
            
        </div>
    )
}

export default Prova;