
var firebaseConfig = {
    apiKey: "AIzaSyCCieyZBh3jf5MvI5ngyzAHXyCWsPWmpKE",
    authDomain: "kwitter-6c203.firebaseapp.com",
    databaseURL: "https://kwitter-6c203-default-rtdb.firebaseio.com",
    projectId: "kwitter-6c203",
    storageBucket: "kwitter-6c203.appspot.com",
    messagingSenderId: "949534492973",
    appId: "1:949534492973:web:533a6675ac99d307c82ba4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding a user"
      })
  }