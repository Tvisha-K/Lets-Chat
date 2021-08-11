var firebaseConfig = {

      apiKey: "AIzaSyDLo6nofZiyfJxsp70p_MSDRGb_zhaVY8k",

      authDomain: "kwitter-e4071.firebaseapp.com",

      databaseURL: "https://kwitter-e4071-default-rtdb.firebaseio.com",

      projectId: "kwitter-e4071",

      storageBucket: "kwitter-e4071.appspot.com",

      messagingSenderId: "140948823419",

      appId: "1:140948823419:web:e215afaa960e64165871de"
      
    };
   
    firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {

            document.getElementById("output").innerHTML = "";

            snapshot.forEach(function (childSnapshot) {

                  childKey = childSnapshot.key;

                  Room_names = childKey;

                  div_tag = '<div class = "room_name" id = "' + Room_names + '" onclick = redirect_roomName(this.id) >' 
                  
                  div_tag_text = Room_names +  '</div> <hr>';

                  row = div_tag + div_tag_text;

                  document.getElementById("output").innerHTML += row; 
                 
            });
      });
}
getData();

user_name = localStorage.getItem("user_name_key");

document.getElementById("welcome").innerHTML = "Welcome " + user_name + " !";

function add_room(){

      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room"
      });

      localStorage.setItem("room_name_key" , room_name);

      window.location = "letschat_page.html";


}

function redirect_roomName(room_id){

localStorage.setItem("room_name_key" , room_id);

console.log(room_id);

window.location = "letschat_page.html";

}
