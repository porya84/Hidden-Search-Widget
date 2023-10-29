let searchInputElem = document.querySelector(".search_input");
let btn = document.querySelector(".btn");
let Show_flag = true;

btn.addEventListener("click", () => {
    if (Show_flag === true) {
      console.log("a");
      searchInputElem.classList.add("show");
      Show_flag = false;
    } else {
      console.log("b");
      searchInputElem.classList.remove("show");
      Show_flag = true;
    }
  });