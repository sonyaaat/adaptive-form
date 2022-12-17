function myFunction() {
    let x = document.getElementById("#main_content");
    console.log(x)
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    window.matchMedia("(min-width: 950px)").addEventListener("change", (e) => {
      if (!e.matches) return;
      x.style.display = "flex";
    });
    window.matchMedia("(max-width: 950px)").addEventListener("change", (e) => {
      if (!e.matches) return;
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    });
  }