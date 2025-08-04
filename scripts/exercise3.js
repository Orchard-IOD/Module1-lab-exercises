// exercise3 js

function changeCol1() {
  // get column1 elements
  const col1 = document.getElementById("column1");
  const col1heading = document.getElementById("heading1");
  const col1img = document.getElementById("col1img");
  const col1desc = document.getElementById("col1desc");
  const col1btn = document.getElementById("col1btn");

  // change background color
  col1.style.backgroundColor = "#9B8E58";

  // change heading text
  col1heading.innerHTML = "Freyalise";
  col1heading.style.color = "blanchedalmond";

  // change image
  col1img.src = "./images/freyalise.jpg";
  col1img.alt = "freyalise";

  // add description
  col1desc.innerText =
    "Freyalise is a legendary character in Magic's lore — an ancient elf planeswalker from Dominaria who once cast the World Spell to end the Ice Age. Her fury is expressed in her ability to summon druids, destroy unnatural things, and reward those who live close to nature.";
  col1desc.style.display = "block";

  //   hide button
  col1btn.style.display = "none";
}

function changeCol2() {
  // get column2 elements
  const col2 = document.getElementById("column2");
  const col2heading = document.getElementById("heading2");
  const col2img = document.getElementById("col2img");
  const col2desc = document.getElementById("col2desc");
  const col2btn = document.getElementById("col2btn");

  // change background color
  col2.style.backgroundColor = "#4B624C";

  // change heading text
  col2heading.innerHTML = "The Great Henge";
  col2heading.style.color = "blanchedalmond";

  // change image
  col2img.src = "./images/theGreatHenge.jpg";
  col2img.alt = "the great henge";

  // add description
  col2desc.innerText =
    "The Great Henge is a powerful legendary artifact in Magic: The Gathering (MTG), known for its impact in ramp, midrange, and green-based creature decks";
  col2desc.style.display = "block";

  //   hide button
  col2btn.style.display = "none";
}
