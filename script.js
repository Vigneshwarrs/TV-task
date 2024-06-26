let searchin = document.getElementById("search");
let sumbuitbtn = document.getElementById("submit");
let res = document.querySelector("#res");

sumbuitbtn.addEventListener('click', ()=> {
    res.innerHTML="";
  displayCard(searchin.value);  
//   setTimeout(()=>{
//     res.innerHTML="";
//     searchin.value="";
//   },10000)
})

const displayCard = async (inp) => {
    try {
    let api = await fetch(`https://api.tvmaze.com/search/shows?q=${inp}`);
    let data = await api.json();
    console.log(data);
    for(let i=0;i<data.length;i++) {
        let col = document.createElement("div");
        col.classList.add("col-lg-4", "col-sm-12", "p-2");
        col.innerHTML = `<div class="card">
    <img src="${data[i].show.image?.medium || "./background.jpg"}" style="height: 500px" class="card-img-top" alt="aaa">
    <div class="card-body">
      <h5 class="card-title">Show Name: ${data[i].show.name || "Not Available"}</h5>
      <p class="card-text">Genre: ${data[i].show.genres.join(", ") || "Not Available"}</p>
      <p class="card-text">Premiered Date: ${data[i].show.premiered || "Not Available"}</p>
      <p class="card-text">Rating: ${data[i].show.rating.average || "Not Available"}</p>
      <p class="card-text">Show Running Time: ${data[i].show.runtime || "Not Available"}</p>
      <p class="card-text">Official Site: ${data[i].show.officialSite || "Not Available"}</p>  
      <p class="card-text">Company: ${ data[i].show.network?.name || "Not Available" }</p>
      <p class="card-text">Country: ${ data[i].show.network?.country.name || "Not Available" }</p>
      <p class="card-text">${data[i].show.summary || "Not Available"}</p>
    </div>
  </div>`;
  res.append(col);
    }
}catch(error) {
    console.log(error);
}
}