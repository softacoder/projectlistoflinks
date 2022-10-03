var links, item;


links = ['https://www.netflix.com/gb/', 'https://github.com/', 'https://www.formula1.com/'];
let element_list = document.getElementById('list');
links.forEach((item) => {
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.setAttribute("href", item);
  new_a.innerText = item;

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});
