const git = "Hello GIT";
const js = "Hello from JS";
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (h1.textContent == git) {
    h1.textContent = js;
  } else {
    h1.textContent = git;
  }
});
