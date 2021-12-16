console.log("Initializing firebase");

const firebaseConfig = {
  apiKey: "AIzaSyDJ9D-YEpxmEnBZck-u1M6QOdfZNNvQTZs",
  authDomain: "atlp-capstone-project-b6159.firebaseapp.com",
  projectId: "atlp-capstone-project-b6159",
  storageBucket: "atlp-capstone-project-b6159.appspot.com",
  messagingSenderId: "1042536780820",
  appId: "1:1042536780820:web:6c265cd2a51f99f41ac301",
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database();
//   console.log(app.name);

function upload() {
  var image = document.getElementById("image").files[0];
  var post = document.getElementById("post").value;
  var postTitle = document.getElementById("post-title").value;
  var imageName = image.name;
  var storageRef = firebase.storage().ref("images/" + imageName);
  var uploadTask = storageRef.put(image);
  uploadTask.on(
    "state_changed",
    function (snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("upload is " + progress + " done");
    },
    function (error) {
      console.log(error.message);
    },
    function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        firebase
          .database()
          .ref("blogs/")
          .push()
          .set(
            {
              title: postTitle,
              text: post,
              imageURL: downloadURL,
            },
            function (error) {
              if (error) {
                alert("Error while uploading");
              } else {
                alert("Successfully uploaded");
                document.getElementById("post-form").reset();
                getdata();
              }
            }
          );
      });
    }
  );
}

window.onload = function () {
  this.getdata();
};

function getdata() {
  firebase
    .database()
    .ref("blogs/")
    .once("value")
    .then(function (snapshot) {
      var posts_div = document.getElementById("blog_cards");
      blog_cards.innerHTML = "";
      var data = snapshot.val();
      console.log(data);
      for (let [key, value] of Object.entries(data)) {
        posts_div.innerHTML =
          "<card class='card'>" +
          "<img src='" +
          value.imageURL +
          "' alt='CardPhoto' class='card_photo'>" +
          "<div class='card_content_container'>" +
          "<h4 class='card_title'>" +
          "<b>" +
          value.title +
          "</b>" +
          "</h4>" +
          "<p class='card_content'>" +
          value.text +
          "</p>" +
          "<div class='card_stars'>" +
          "<span class='iconify' data-icon='emojione:star'>" +
          "</span>" +
          "<span class='iconify' data-icon='emojione:star'>" +
          "</span>" +
          "<span class='iconify' data-icon='emojione:star'>" +
          "</span>" +
          "<span class='iconify' data-icon='emojione:star'>" +
          "</span>" +
          "<span class='iconify' data-icon='emojione:star'>" +
          "</span>" +
          "</div>" +
          "<a href='../pages/article.html' class='card_more_link1'>more</a>" +
          "<button class='btn btn-delete' id='" +
          key +
          "' onclick='delete_post(this.id)'>Delete</button>" +
          "</div>" +
          "</card>" +
          posts_div.innerHTML;
      }
    });
}

function delete_post(key) {
  firebase
    .database()
    .ref("blogs/" + key)
    .remove();
  getdata();
}
