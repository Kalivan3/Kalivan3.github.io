/* When the user clicks on the button, 
toggle between hiding and showing the food content */
function myFunction() {
    document.getElementById("food").classList.toggle("show");
  }
  
  // Close the food-content if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var food = document.getElementsByClassName("food-content");
      var i;
      for (i = 0; i < food.length; i++) {
        var openfood = food[i];
        if (openfood.classList.contains('show')) {
          openfood.classList.remove('show');
        }
      }
    }
  }

 
/* search bar implementation */
const foodItems = [
  {name: 'luwombo'},{name:'caesar salad'},{name:'fast food'},{name:'french fries'},{name:'bites'}
  ,{name:'fried pork'},{name:'glasgeflus'},{name:'goumetra'},{name:'rolex'},{name:'samosas'}
];

const list = document.getElementById('list')
    
function setList(group) {
  clearList();
  for (const person of group) {
      const item = document.createElement('li');
      item.classList.add('list-group-item');
      const text = document.createTextNode(person.name);
      item.appendChild(text);
      list.appendChild(item);
      }
  if (group.length === 0) {
      setNoResults();
}
}


function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
}
}


function setNoResults() {
        const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode('No Results found');
        item.appendChild(text);
        list.appendChild(item);
    }

function getRelevancy(value, searchTerm){
if (value === searchTerm) {
    return 2;
} else if (value.startsWith(term)) {
    return 1;
} else if (value.includes(searchTerm)) {
    return 0;
} else {
    return -1;
}
}


const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(foodItems.filter(person => {
        return person.name.includes(value);
        }).sort((personA, personB) => {
            return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
 
 }));
} else {
    clearList();
}
    });

    /* slide menu */
    function openSlideMenu() {
      document.getElementById('side-menu').style.width = '250px';
      document.getElementById('main').style.marginLeft = '250px';
    }
    function closeSlideMenu() {
      document.getElementById('side-menu').style.width = '0';
      document.getElementById('main').style.marginLeft = '0';
    }

    