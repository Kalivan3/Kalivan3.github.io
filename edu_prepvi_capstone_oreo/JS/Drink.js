
/* search bar implementation */
const drinkItems = [
    {name:'pineapple juice'},{name:'cider'},{name:'chai tea drink'},{name:'soda'},{name:'cold milk'}
    ,{name:'yogurt'},{name:'orange juice'}
  ];
  
  const list = document.getElementById('list');
      
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
          setList(drinkItems.filter(person => {
          return person.name.includes(value);
          }).sort((personA, personB) => {
              return getRelevancy(personB.name, value)- getRelevancy(personA.name, value);
   
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
