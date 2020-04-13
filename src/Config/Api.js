import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyBVCxFsWK2laIGUY5YQLuQJO9KrDZm8GEQ",
  authDomain: "smit-25a9e.firebaseapp.com",
  databaseURL: "https://smit-25a9e.firebaseio.com",
  projectId: "smit-25a9e",
  storageBucket: "smit-25a9e.appspot.com",
  messagingSenderId: "1069829068382",
  appId: "1:1069829068382:web:fabbf2835d982dd39d06cf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

async function facebookLogin() {
  var provider = new firebase.auth.FacebookAuthProvider();

  const result = await firebase.auth().signInWithPopup(provider)
  // The signed-in user info.
  var user = result.user;

  const db = firebase.firestore()

  const tempUser = {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid
  }

  db.collection('users').doc(user.uid).set(tempUser)
  return tempUser
}

async function getAllPostsFromApi() {
  console.log('jharo marna')
  console.log('chae banna start')

  // fetch(`https://jsonplaceholder.typicode.com/posts/`)
  //   .then(res => res.json())
  //   .then(res => {
  //        data = res
  //    })

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  console.log('chae banna end')

  console.log('bartan manjna')
  return data
}

async function getPostAndCommentsFromApi(postId) {
  const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  const post = await postRes.json()
    
  const commentRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  const comments = await commentRes.json()

  return { post, comments }
}

export {
  getAllPostsFromApi,
  getPostAndCommentsFromApi,
  facebookLogin,
  firebase
}