import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initializeApp} from 'firebase/app'
import {getFirestore, collection,getDocs} from 'firebase/firestore'

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
const userColRef = collection(db,'user')
const postsColRef = collection(db,'posts')
const forumColRef = collection(db,'forum')

getDocs(userColRef).then((snapshot)=>{
  let users = []
  snapshot.docs.forEach(doc=>{
    users.push({...doc.data(), id: doc.id})
  })

  console.log(users)
})

getDocs(postsColRef).then((snapshot)=>{
  let posts = []
  snapshot.docs.forEach(doc=>{
    posts.push({...doc.data(), id: doc.id})
  })

  console.log(posts)
})

getDocs(forumColRef).then((snapshot)=>{
  let forums = []
  snapshot.docs.forEach(doc=>{
    forums.push({...doc.data(), id: doc.id})
  })

  console.log(forums)
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

