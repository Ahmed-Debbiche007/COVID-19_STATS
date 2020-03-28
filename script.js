fetch(
  "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country=tunisia",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "d0d248d0a1mshcd1d6a6016c608ap1d8892jsnd365febdda89"
    }
  }
)
  .then(data => data.json())
  .then(function (data) {
    var {
      total_cases,
      total_deaths,
      total_recovered
    } = data.latest_stat_by_country[0];
    document.getElementById("dead").innerHTML = total_deaths;
    document.getElementById("crti").innerHTML = total_cases;
    document.getElementById("rec").innerHTML = total_recovered;
  });
