let flag=0;

let change=true;
function change_image(){
    if(flag == 1) return;
   const img=document.getElementById("image");
    change = !change;
    if(change){
        img.src='me.jpeg';
    }
    else{
        img.src='gojo.jpeg';
    }
} 



function change_mode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    flag=1-flag;
    if(flag == 0){
    document.getElementById("table").style.border = "black";
        
    document.getElementById("image").src="me.jpeg";}
    else{
      document.getElementById("image").src="car.jpeg";
      document.getElementById("table").style.border = "2px solid white";
      document.getElementById("thanks").style.color = "solid black";
      document.getElementById("hi").style.color = "pink";
      
      var rows = document.getElementById("table").getElementsByTagName("tr");
      for (var i = 0; i < rows.length; i++) 
      {
        rows[i].style.border = "2px solid white";
      }
      var cells = document.getElementById("table").getElementsByTagName("td");
      for (var i = 0; i < cells.length; i++)
      {
      cells[i].style.border = "2px solid white";
      }
     
    }
 }


document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const likeBtn = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');
    const commentList = document.getElementById('comment-list');
    const commentInput = document.getElementById('comment-input');
    const commentBtn = document.getElementById('comment-button');
});

    let likes = parseInt( localStorage.getItem('likes')) || 0;
    likeCount.innerHTML = likes;

    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    displayComments();

    likeBtn.addEventListener('click', function () {
        console.log(likes);
        likes++;
        likeCount.textContent = likes;
        localStorage.setItem('likes', likes.toString());
    });

    function displayComments() {
        commentList.innerHTML = '';
        comments.forEach(function (comment) {
            const li = document.createElement('li');
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }

    commentBtn.addEventListener('click', function () {
        const newComment = commentInput.value;
        if (newComment.trim() !== '') {
            comments.push(newComment);
            localStorage.setItem('comments', JSON.stringify(comments));
            commentInput.value = '';
            displayComments();
        }
    });

    

