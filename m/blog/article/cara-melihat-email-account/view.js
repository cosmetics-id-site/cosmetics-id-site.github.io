const firebaseConfig = {
    apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
     };
     firebase.initializeApp(firebaseConfig);
     
     const hitCounter = document.getElementById("hit-counter");
     hitCounter.style.display = "none";
     
     const db = firebase.database().ref("View Design-Aplikasi-Music");
     db.on("value", (snapshot) => {
       hitCounter.textContent = snapshot.val();  
     });
     
     db.transaction(
       (totalHits) => totalHits + 1,
       (error) => {
         if (error) {
           console.log(error);
         } else {
           hitCounter.style.display = "inline-block";
         }
       }
     );
     
     const userCookieName = "returningVisitor";
     checkUserCookie(userCookieName);
     
     function checkUserCookie(userCookieName) {
       const regEx = new RegExp(userCookieName, "g");
       const cookieExists = document.cookie.match(regEx);
       if (cookieExists != null) {
         hitCounter.style.display = "inline-block";
       } else {
         createUserCookie(userCookieName);
         db.transaction(
           (totalHits) => totalHits + 1,
           (error) => {
             if (error) {
               console.log(error);
             } else {
               hitCounter.style.display = "inline-block";
             }
           }
         );
       }
     }
     
     function createUserCookie(userCookieName) {
       const userCookieValue = "Yes";
       const userCookieDays = 7;
       let expiryDate = new Date();
       expiryDate.setDate(expiryDate.getDate() + userCookieDays);
       document.cookie =
         userCookieName +
         "=" +
         userCookieValue +
         "; expires=" +
         expiryDate.toGMTString() +
         "path=/";
     }
  
  var swiper = new Swiper( '.swiper-container.two', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          effect: 'coverflow',
          loop: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflow: {
              rotate: 0,
              stretch: 100,
              depth: 150,
              modifier: 1.5,
              slideShadows : false,
          }
  } );