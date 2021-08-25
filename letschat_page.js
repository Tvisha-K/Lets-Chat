var firebaseConfig = {

      apiKey: "AIzaSyDLo6nofZiyfJxsp70p_MSDRGb_zhaVY8k",

      authDomain: "kwitter-e4071.firebaseapp.com",

      databaseURL: "https://kwitter-e4071-default-rtdb.firebaseio.com",

      projectId: "kwitter-e4071",

      storageBucket: "kwitter-e4071.appspot.com",

      messagingSenderId: "140948823419",

      appId: "1:140948823419:web:e215afaa960e64165871de"

};

user_name = localStorage.getItem("user_name_key");

room_name = localStorage.getItem("room_name_key");

firebase.initializeApp(firebaseConfig);


function getData() {

      firebase.database().ref("/" + room_name).on('value', function (snapshot) {

            document.getElementById("output").innerHTML = "";

            snapshot.forEach(function (childSnapshot) {

                  childKey = childSnapshot.key;

                  childData = childSnapshot.val();

                  if (childKey != "purpose") {

                        firebase_subfolder_id = childKey;

                       subfolder_data = childData;
                        
                        name = subfolder_data['name'];

                        message = subfolder_data['message'];

                        like = subfolder_data['like'];

                        name_tag = '<h4> ' + name + '<img class = "user_tick" src = "tick.png"> </h4>';

                        message_tag = '<h4 class = "message_h4">' + message + '</h4>';

                        button_tag = '<button class = "btn btn-warning" id = "' + firebase_subfolder_id + '" onclick = "update_like(this.id)" value="' + like + '">' ; 

                        button_text_tag = '<span class="glyphicon glyphicon-thumbs-up"> Like :' + like + '</span> </button> <hr>';

                        row = name_tag + message_tag + button_tag + button_text_tag ;

                        document.getElementById("output").innerHTML += row;


                  }
            });
      });
}
getData();



function logout(){

      localStorage.removeItem("user_name_key");

      localStorage.removeItem("room_name_key");

      window.location = "index.html";     

}

function send(){

      message = document.getElementById("msg").value;

      console.log(room_name);

      firebase.database().ref(room_name).push({

            name : user_name,

            message : message,

            like : 0

      });

      document.getElementById("msg").value = "";

}

function update_like(sub_id){

      console.log("The button clicked is " + sub_id);

      button_id = sub_id;

      likes = document.getElementById(button_id).value;

      console.log(likes);

      updated_likes =  Number(likes) + 1 ; 

      console.log(updated_likes);

      firebase.database().ref(room_name).child(button_id).update({

            like : updated_likes

      });

}