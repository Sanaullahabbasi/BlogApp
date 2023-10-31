


function writeBlog() {
  var createBlog = document.getElementById("createBlog");
  var editor = document.getElementById("editor");
  createBlog.innerHTML = `
  <div class="blog-text">
  <div class="blog-title">
  <input type="text" id="title" placeholder="Title" />
  <div class="form-floating">
  <div id="editor">
  <textarea
  class="form-control text-area"
  placeholder="Leave a comment here"
  id="floatingTextarea"
  ></textarea>
  </div>
  </div>
  </div>
  <div class="btn-post">
  <button class="btn btnPost btn-primary" onclick="postArticle()">
  post
  <i class="fa-solid fa-arrow-right"></i>
  </button>
  </div>
  </div> 
  `;
  var quill = new Quill('#editor', {
    theme: 'snow'
  });

  var textData = localStorage.setItem("textData", JSON.stringify(quill.getText()))
  console.log(quill.getText())
}


function postArticle() {
  var post = document.getElementById("post");
  var createBlog = document.getElementById("createBlog");
  var title = document.getElementById("title");
  // var textValue = quill.getText();
  createBlog.style.display = "none";
  post.innerHTML = `
    <div class="row blog-area">
    <div
      class="card col-12 col-sm-12 col-md-6 col-lg-4"
      style="width: 18rem"
    >
      <img src="images/example1.jpg " class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">read more</a>
      </div>
    </div>
  </div>
    `;
}

function redirect() {
  window.location.href = "./login.html";
}
function logout() {
  setTimeout(redirect, 1000);
}