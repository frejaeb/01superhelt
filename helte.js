//fech
fetch("https://kea-alt-del.dk/t7/superheroes/")
  .then((res) => res.json())
  .then(showSuperhelte);

function showSuperhelte(superhelte) {
  //loope
  superhelte.forEach(showSuperhelt);
}

function showSuperhelt(superhelt) {
  console.log(superhelt);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector("h2").textContent = superhelt.realName;
  copy.querySelector(".alias").textContent = superhelt.alias;
  copy.querySelector(".active").textContent = superhelt.active;
  copy.querySelector(".weaknesses").textContent = superhelt.weaknesses;
  copy.querySelector(".origin").textContent = superhelt.origin;
  copy.querySelector(".height").textContent = superhelt.height;
  copy.querySelector(".isEvil").textContent = superhelt.isEvil;
  copy.querySelector(".birtday").textContent = superhelt.birthday.day;
  copy.querySelector(".birtday").textContent += "/" + superhelt.birthday.month;
  copy.querySelector(".birtday").textContent += "/" + superhelt.birthday.year;

  copy.querySelector("img").src = superhelt.image;
  const parent = document.querySelector(".grid");
  parent.appendChild(copy);
}
