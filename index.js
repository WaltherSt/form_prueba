document.addEventListener("submit", (e) => {
  e.preventDefault();

  const $form = document.querySelector("form");
  const $div = document.querySelector(".respuesta");

  fetch("https://formsubmit.co/ajax/correo", {
    method: "POST",
    body: new FormData(e.target),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((json) => {
      console.log(json);
      $div.classList.remove("none");
      $form.reset();
    })
    .catch((err) => {
      console.log(err);
    });
});
