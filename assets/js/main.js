 
    const form = document.getElementById("student-form");
    const studentDetail = document.getElementById("student-detail");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const age = document.getElementById("age").value;
      const gender = document.getElementById("gender").value;
      const course = document.getElementById("course").value;
      const email = document.getElementById("email").value;

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button class="delete-btn">Delete</button></td>`;

     
      row.querySelector(".delete-btn").addEventListener("click", () => {
        row.remove();
      });

      studentDetail.appendChild(row);
      form.reset();
    });
  