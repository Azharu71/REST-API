function searchMovie() {
  $("#movie-list").empty();
  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apiKey: "dca61bcc",
      s: $("#input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;
        $.each(movies, function (i, data) {
          $("#movie-list").append(`
          <div class = "col-md-4">
             <div class="card mb-4">
                 <img class="card-img-top" src="${data.Poster}" alt="Card image cap">
                  <div class="card-body">
                  <h5 class="card-title">${data.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                  <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                  </div>
              </div>
          </div>
              `);
        });
      } else {
        $("#movie-list").html(`
          <div class = "col">
          <h1 class= "text-center">${result.Error}</h1>
          </div>`);
      }
    },
  });
}
$("#srch").on("click", function () {
  searchMovie();
  $("#input").val("");
});

$("#input").on("keyup", function (e) {
  if (e.which == 13) {
    searchMovie();
    $("#input").val("");
  }
});

// event binding
$("#movie-list").on("click", ".see-detail", function () {
  $.ajax({
    url: "http://www.omdbapi.com/",
    type: "get",
    dataType: "json",
    data: {
      apiKey: "dca61bcc",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response == "True") {
        $(".modal-body").html(`
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4">
                    <img src="${movie.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>${movie.Title}</h3></li>
                            <li class="list-group-item">${movie.Released}</li>
                            <li class="list-group-item">Genres: ${movie.Genre}</li>
                            <li class="list-group-item">Writer: ${movie.Writer}</li>
                            <li class="list-group-item">Director: ${movie.Director}</li>
                        </ul>
                        <h3>Plot<h3>
                        <h6>${movie.Plot}</h6>
                    </div>   
                </div>
             </div>   
            `);
      }
    },
  });
});
