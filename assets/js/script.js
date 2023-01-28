const fetchData = async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=fast+and+furious&apikey=9bfb44f`
    );
    console.log(response.data);

    let data = "";
    for (let i = 0; i < response.data.Search.length; i++) {
      data += "<div class='movie-card'>";
      data += "<img src='" + response.data.Search[i].Poster + "'/>";

      if (response.data.Search[i].Title.toLowerCase().includes("tokyo")) {
        data += "<h2 class='green'>" + response.data.Search[i].Title + "</h2>";
      } else {
        data += "<h2>" + response.data.Search[i].Title + "</h2>";
      }
      if (response.data.Search[i].Year < 2015) {
        data += "<p class='old-year'>" + response.data.Search[i].Year + "</p>";
      } else {
        data += "<p>" + response.data.Search[i].Year + "</p>";
      }
      data += "</div>";
    }
    document.getElementById("data").innerHTML = data;
  } catch (error) {
    console.log(error.response);
  }
};
fetchData();
