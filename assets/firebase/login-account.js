var myDate = new Date();
            var hrs = myDate.getHours();
        
            var greet;
        
            if (hrs < 12)
                greet = 'Selamat Pagi';
            else if (hrs >= 12 && hrs <= 14)
                greet = 'Selamat Siang';
            else if (hrs >= 13 && hrs <= 18)
                greet = 'Selamat Sore';
            else if (hrs >= 19 && hrs <= 24)
                greet = 'Selamat Malam';
        
            document.getElementById('welcome').innerHTML =
                '<b>' + greet + '</b> ';

      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyANx1fw1Qm6HXhkfM_IlAYKTIREMvmPqf4",
  authDomain: "glamaryid.firebaseapp.com",
  databaseURL: "https://glamaryid-default-rtdb.firebaseio.com",
  projectId: "glamaryid",
  storageBucket: "glamaryid.appspot.com",
  messagingSenderId: "1043435874641",
  appId: "1:1043435874641:web:de01e1393cd4c7f050cb70",
  measurementId: "G-J1EEDJTZ32",
      };
      firebase.initializeApp(firebaseConfig);

      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          document.getElementById("img").innerHTML = `
                <p><br /> <img src="${user.photoURL}">
            `;
          document.getElementById("username").innerHTML = `
                <p><br /> Your Name : ${user.displayName}
                  
            `;
            document.getElementById("username-2").innerHTML = `
                ${user.displayName}
                  
            `;
            document.getElementById("email").innerHTML = `
                ${user.email}
            `;
            document.getElementById("email-2").innerHTML = `
                ${user.email}
            `;
          document.getElementById("username-link").innerHTML = `${user.uid}
            `;
            const linkUsername = document.getElementById("username-link");
            const link = document.getElementById("link");
            link.href = link.textContent ;

        }   else {
          window.location = "../../../auth/";
        }
      });

      function logout() {
        firebase
          .auth()
          .signOut()
          .then(function () {
            window.location = "../../../auth/";
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      showData();