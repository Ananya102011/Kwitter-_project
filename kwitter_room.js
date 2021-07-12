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
 user_name = localStorage.getItem("user_name"); 
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 
 function addRoom() { 
     room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" }); 
      localStorage.setItem("room_name", room_name); 
      window.location = "kwitter_page.html"; 
    } 
      function getData() { 
          firebase.database().ref("/").on('value', function(snapshot) 
          { 
              document.getElementById("output").innerHTML = ""; 
              snapshot.forEach(function(childSnapshot) { 
                  childKey = childSnapshot.key; 
                  Room_names = childKey; 
                  console.log("Room Name - " + Room_names); 
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                  document.getElementById("output").innerHTML += row; 
                }); 
            }); 
        } 
        getData(); 
        function redirectToRoomName(name) {
    console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location = "kwitter_page.html"; 
} 
function logout() 
{ 
    localStorage.removeItem("user_name"); 
    localStorage.removeItem("room_name"); 
    window.location = "index.html"; 
}
