/* search bar */
const foodItems = document.querySelectorAll('#food div');
const drinkItems = document.querySelectorAll('.drinks div');
const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase();
  Array.from(foodItems).forEach(function (foodItem) {
    const title = foodItem.getElementsByTagName('h3')[0];
    const reTitle = title.innerText;
    if (reTitle.toLowerCase().indexOf(term) > -1) {
      foodItem.style.display = '';
    } else {
      foodItem.style.display = 'none';
    }
  })
  Array.from(drinkItems).forEach(function (drinkItem) {
    const title2 = drinkItem.getElementsByTagName('h3')[0];
    const reTitle2 = title2.innerText;
    if (reTitle2.toLowerCase().indexOf(term) > -1) {
      drinkItem.style.display = '';

    } else {
      drinkItem.style.display = 'none';
    }

  })
})


/* slide menu */
function openSlideMenu() {
  document.getElementById('side-menu').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
}
function closeSlideMenu() {
  document.getElementById('side-menu').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
}

