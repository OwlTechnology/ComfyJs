
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



$http({
  method: "POST",
  url: "http://jsonplaceholder.typicode.com/posts",
  data: {
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  success: function(response){
    document.querySelector("#postResults").innerHTML = response;
  },
  error: function(response){
    console.log(response);
  }
});


$http({
  method: "PUT",
  url: "http://jsonplaceholder.typicode.com/posts/1",
  data: {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1
  },
  success: function(response){
    document.querySelector("#putResults").innerHTML = response;
  },
  error: function(response){
    console.log(response);
  }
});
