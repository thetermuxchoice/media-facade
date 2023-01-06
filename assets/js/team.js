const toggle = document.querySelectorAll("#card-toggle"),
  social = document.querySelectorAll("#card-social");
console.log(toggle);
for (let index = 0; index < toggle.length; index++) {
  toggle[index].addEventListener("click", () => {
    if (social[index].classList.contains("animation")) {
      social[index].classList.add("down-animation");

      setTimeout(() => {
        social[index].classList.remove("down-animation");
      }, 1000);
    }
    social[index].classList.toggle("animation");
  });
}
