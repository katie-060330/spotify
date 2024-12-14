one7 = document.getElementById("17");
one8 = document.getElementById("18");
one9 = document.getElementById("19");
two0 = document.getElementById("20");
two1 = document.getElementById("21");
two2 = document.getElementById("22");
two3 = document.getElementById("23");
two4 = document.getElementById("24");


one7.addEventListener("click", function () {
  fetchSevenTeenData();
  setPage(); 
});



let fetchSevenTeenData = () => {
  music_data_2017 = [];
  music_data_2018 = [];
  music_data_2019 = [];
  let counter; 
  

  fetch("./data/Streaming_History_Audio_2017-2019_0.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e) => {
        counter += e.ts; 
        switch (e.ts.slice(0, 4)) {
          case "2017":
            music_data_2017.push(e);
            break;
          case "2018":
            music_data_2018.push(e);
            break;
          case "2019":
            music_data_2019.push(e);
            break;
          default:
            break;
        }
      });
    })
    minListen.textContent  = (counter * 0.00001667)

    .catch((error) => console.error("Error:", error));
};
