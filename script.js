document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const dataArray = [];

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = form.querySelector("#email").value;
      const name = form.querySelector("#name").value;
      const company = form.querySelector("#company").value;
      const phone = form.querySelector("#phone").value;
      const message = form.querySelector("#message").value;

      const formData = {
        email,
        name,
        company,
        phone,
        message,
      };

      dataArray.push(formData);

      console.log("Form Data:", dataArray);
    });
  });