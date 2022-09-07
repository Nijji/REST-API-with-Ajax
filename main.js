const btn = document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const myBtn = e.target.classList;
    if (myBtn.contains("text")) {
      var newFile = new XMLHttpRequest();
      newFile.open("GET", "sample.txt", true);

      newFile.onload = function () {
        const text = document.getElementById("div");
        if (this.status == 200) {
          text.innerText = this.responseText;
          text.style.backgroundColor = "green";
        } else {
          text.innerHTML = "file not found";
          text.style.backgroundColor = "red";
        }
      };
      newFile.send();
      newFile.onerror = () => console.log("request error");
    } else if (myBtn.contains("user")) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "user.json", true);
      xhr.onload = function () {
        const div1 = document.getElementById("div1");
        if ((this.status = 200)) {
          const user = JSON.parse(this.responseText);
          var output = "";
          output += ` <ul><li>NAME: ${user.name},ID: ${user.id},AGE: ${user.age},RANK: ${user.rank}</li></ul>`;
          div1.innerHTML = output;
          div1.style.backgroundColor = "green";
        } else {
          div1.textContent = "file not found";
          div1.style.backgroundColor = "red";
        }
      };
      xhr.send();
      xhr.onerror = () => console.log("request error");
    } else{
      const myList = new XMLHttpRequest();
      myList.open("GET", "users.json", true);
      myList.onload = function () {
        const div2 = document.getElementById("div2");
        if ((this.status = 200)) {
          const users = JSON.parse(this.responseText);
          var myOutput = "";
          users.forEach((item) => {
            myOutput += ` <ul><li>NAME: ${item.name},ID: ${item.id},AGE: ${item.age},RANK: ${item.rank}</li></ul>`;
          });
          div2.innerHTML = myOutput;
          div2.style.backgroundColor = "green";
        } else {
          myOutput = "file not found";
          div2.style.backgroundColor = "red";
        }
      };

      myList.send();
      myList.onerror = () => (myOutput.textContent = "request error");
    }
  });
});
