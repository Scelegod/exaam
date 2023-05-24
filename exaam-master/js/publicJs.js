let body = document.querySelector('body');
// body.style.background = '#222242';

let accordion = document.querySelector('.accordion');
let linkss  = accordion.querySelectorAll('.accordion__tab .accordion__tab__link');

for (let link of linkss) {
    link.addEventListener('click', function(event) {
      let activeTab = accordion.querySelector('.accordion__tab.active');
      
      if (activeTab) {
        activeTab.classList.remove('active');
      }
      
      let newTab = link.closest('.accordion__tab');
      if (newTab !== activeTab) {
        newTab.classList.add('active');
      }
      
      event.preventDefault();
    });
}

window.addEventListener('mouseover', function(e){
  if(e.target.closest('.insuranceCase__case__number')){
    this.document.querySelector('.insuranceCase__case__tab__text').style.display = 'flex';
  }
  if(e.target.closest('.insuranceCase__case__document')){
    this.document.querySelector('.insuranceCase__case__tab__note').style.display = 'flex';
  }
  if(e.target.closest('.insuranceCase__case__question')){
    this.document.querySelector('.insuranceCase__case__tab__question').style.display = 'flex';
  }
  if(e.target.closest('.insuranceCase__case__archive')){
    this.document.querySelector('.insuranceCase__case__tab__archive').style.display = 'flex';
  }
});

window.addEventListener('mouseout', function(e){
  if(e.target.closest('.insuranceCase__case__number')){
    this.document.querySelector('.insuranceCase__case__tab__text').style.display = 'none';
  }
  if(e.target.closest('.insuranceCase__case__document')){
    this.document.querySelector('.insuranceCase__case__tab__note').style.display = 'none';
  }
  if(e.target.closest('.insuranceCase__case__question')){
    this.document.querySelector('.insuranceCase__case__tab__question').style.display = 'none';
  }
  if(e.target.closest('.insuranceCase__case__archive')){
    this.document.querySelector('.insuranceCase__case__tab__archive').style.display = 'none';
  }
});