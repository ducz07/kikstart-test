
const modalLinks = document.querySelectorAll('a[href^="#link"]');

modalLinks.forEach(function (modalLink, index) {
 
  const modalId = modalLink.getAttribute('href');
  
  modalLink.addEventListener('click', function (event) {
    
    const modal = document.querySelector(modalId);

    if(modal){
     
      const closeBtn = modal.querySelector('.dialog__close');
      event.preventDefault();
      modal.showModal();
      
      closeBtn.addEventListener('click', function (event) {
        modal.close();
      });
      
      document.addEventListener('click', function (event) {
        
        const dialogEl = event.target.tagName;
        const dialogElId = event.target.getAttribute('id');
        if(dialogEl == 'DIALOG'){
     
          modal.close();
        }
      }, false);
      
    } else {
      console.log('Modal doesn\'t exist');
    }
  });
});