// Marker positions are percentages of the illustration, manually estimated.
// Adjust these after checking the image against a real geographic map.
const positions = [[45.5,43],[47.4,39.5],[43.8,42.5],[41.8,37],[40.8,39]];
const pins = document.getElementById('pins');
const info = document.getElementById('info');
const list = document.createElement('div');
list.className = 'place-list';
list.setAttribute('aria-label','Choose a place');
document.querySelector('.layout').before(list);
let selectedName = null;
function selectPlace(place) {
  selectedName = place.name;
  info.replaceChildren();
  const category = document.createElement('div');
  category.className = 'category'; category.textContent = place.category;
  const heading = document.createElement('h2'); heading.textContent = place.name;
  const description = document.createElement('p'); description.textContent = place.description;
  const link = document.createElement('a');
  link.href = place.website; link.target = '_blank'; link.rel = 'noopener noreferrer';
  link.textContent = 'Official website ↗';
  info.append(category, heading, description, link);
  for (const button of pins.children) button.setAttribute('aria-pressed',String(button.title === selectedName));
}
function drawPlaces() {
  pins.replaceChildren(); list.replaceChildren();
  const filter = document.getElementById('category').value;
  places.forEach((place,index) => {
    if (filter !== 'all' && place.category !== filter) return;
    const marker = document.createElement('button');
    marker.className = 'marker'; marker.textContent = String(index+1);
    marker.title = place.name; marker.setAttribute('aria-label',place.name);
    marker.setAttribute('aria-pressed',String(place.name === selectedName));
    marker.style.left = positions[index][0]+'%'; marker.style.top = positions[index][1]+'%';
    marker.addEventListener('click',()=>selectPlace(place)); pins.append(marker);
    const button = document.createElement('button');
    button.textContent = (index+1)+'. '+place.name;
    button.addEventListener('click',()=>selectPlace(place));list.append(button);
  });
  if (selectedName && !places.some(place => place.name === selectedName && (filter === 'all' || place.category === filter))) {
    selectedName = null;info.replaceChildren();
    const message = document.createElement('p'); message.textContent = 'Choose a place in this category.';info.append(message);
  }
}
document.getElementById('category').addEventListener('change',drawPlaces);
drawPlaces();
