const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
const searchDiv = document.querySelector(".search");
searchBtn.onclick =()=>{
    
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");

  searchDiv.classList.add("active");
  searchInput.focus();
  if(searchInput.value != ""){
    search(searchInput.value);
  }
}
document.getElementsByClassName("search")[0]
.addEventListener("keyup", function(e) {
// e.preventDefault();
if (e.keyCode === 13) {
    // console.log(e.keyCode);
    document.getElementsByClassName("search-icon active")[0].click();
}
});
// cancelBtn.onclick =()=>{
//   searchBox.classList.remove("active");
//   searchBtn.classList.remove("active");
//   searchInput.classList.remove("active");
//   cancelBtn.classList.remove("active");
//   searchData.classList.toggle("active");
//   searchDiv.classList.remove("active");
//   searchInput.value = "";
// }
function search(query) {
    var arr = query.split(" ");
    var newQuery = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i == (arr.length -1)) {
            newQuery +=  arr[i];
        } else {
            newQuery += arr[i] + "+";
        }
        
        
    }
 
    var url = "https://www.youtube.com/results?search_query="
    url += newQuery;
    window.location.href = url;
    searchInput.value = "";
  
}
