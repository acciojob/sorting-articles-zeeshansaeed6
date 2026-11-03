//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(name) {
  return name.replace(/^(a|an|the)\s+/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  const nameA = stripArticle(a);
  const nameB = stripArticle(b);
  return nameA.localeCompare(nameB);
});

const ul = document.createElement('ul');
ul.id = 'band';

sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});

document.body.appendChild(ul);