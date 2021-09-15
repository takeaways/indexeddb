const formEl = document.querySelector(".form");

formEl.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const rect = e.currentTarget.getBoundingClientRect();
  const center = {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
  const xDiffRate = center.x - clientX;
  const yDiffRate = center.y - clientY;
  const x = rect.width / 2;
  const y = rect.height / 2;

  const rotateX = (xDiffRate / x) * 15;
  const rotateY = (yDiffRate / y) * 15;

  formEl.style.backgroundColor = "dodgerblue";
  formEl.style.transform = `rotateX(${rotateY}deg) rotateY(${-rotateX}deg)`;
});
