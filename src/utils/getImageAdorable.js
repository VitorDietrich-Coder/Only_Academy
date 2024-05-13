function getRandomIntValid(min = 1, max = 10000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function getImage() {
  return `https://images.pexels.com/lib/api/pexels.png`;
}
