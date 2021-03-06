import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Prova from './components/Prova'
import {initializeApp} from 'firebase/app'
import {getFirestore, collection} from 'firebase/firestore'
import { Provider } from 'react-redux';
import store from './store'
import AuthenticationPage from './components/AuthPage';

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


ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById('root')
);

export {userColRef, postsColRef, forumColRef} 