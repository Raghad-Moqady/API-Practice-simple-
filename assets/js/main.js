var httpReq=new XMLHttpRequest();
httpReq.open("Get","https://jsonplaceholder.typicode.com/posts");
httpReq.send();
var arr=[];
httpReq.onreadystatechange =function(){
    if(httpReq.readyState==4){
    arr=JSON.parse(httpReq.response);
    Go();
    }
}
function Go(){
    var str ="";
    for(var i=0;i<arr.length; i++){
      str+=`
      <div class="col-md-3">
          <h2>${arr[i].title}</h2>
          <p>${arr[i].body}</p>
          <img src="assets/img/p1.png" alt="ttt" class="img-fluid">
      </div>
      `;
    }
   document.getElementById("content").innerHTML =str;
}
 