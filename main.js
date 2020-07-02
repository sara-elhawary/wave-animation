const container = document.getElementById("container");
const circles_arr = [];
const cols = 15;
const rows = 15;

for (let i = 0; i < rows; i++) {
  circles_arr[i] = [];
  for (let j = 0; j < cols; j++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    container.appendChild(circle);
    circles_arr[i].push(circle);
  }
}
circles_arr.forEach((cols, i) => {
  cols.forEach((circle, j) => {
    circle.addEventListener("click", () => {
      growCircle(i, j);
    });
  });
});

function growCircle(i, j) {
  if (circles_arr[i] && circles_arr[i][j]) {
    if (!circles_arr[i][j].classList.contains("grow")) {
      circles_arr[i][j].classList.add("grow");
      setTimeout(() => {
        growCircle(i, j + 1);
        growCircle(i, j - 1);
        growCircle(i + 1, j);
        growCircle(i - 1, j);
      }, 100);
      setTimeout(() => {
        circles_arr[i][j].classList.remove("grow");
      }, 300);
    }
  }
}
