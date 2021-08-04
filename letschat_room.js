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
                 
            });
      });
}
getData();

user_name = localStorage.getItem("user_name_key");

document.getElementById("welcome").innerHTML = "Welcome " + user_name + " !";