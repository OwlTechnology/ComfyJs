
$http({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/posts/1",
  success: function(response){
    document.querySelector("#getResults").innerHTML = response;
  },
  error: function(response){
    console.log(response);
  }
});
