function collision(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
