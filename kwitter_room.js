
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCk_GLoHXLZo0ujU-VKolVFgYz_wKDtu0Q",
      authDomain: "kwitter-54bf3.firebaseapp.com",
      databaseURL: "https://kwitter-54bf3-default-rtdb.firebaseio.com",
      projectId: "kwitter-54bf3",
      storageBucket: "kwitter-54bf3.appspot.com",
      messagingSenderId: "391109386381",
      appId: "1:391109386381:web:39c3b521782c2e09d142c4",
      measurementId: "G-KNGMQPTDS5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room_Name-"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom()
{
     room_name=document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
     });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}