var firebaseConfig = {
    apiKey: "AIzaSyB8A8vVmEscBXDFu5Az4PbsSLnBHjfaybc",
    authDomain: "kwitter-726f2.firebaseapp.com",
    databaseURL: "https://kwitter-726f2-default-rtdb.firebaseio.com",
    projectId: "kwitter-726f2",
    storageBucket: "kwitter-726f2.appspot.com",
    messagingSenderId: "216793438667",
    appId: "1:216793438667:web:8732437f6f4ac524db3e4e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser() 
{ 
    user_name = document.getElementById("user_name").value; 
    localStorage.setItem("user_name", user_name); 
    window.location = "kwitter_room.html"; 
}