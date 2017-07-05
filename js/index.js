var nextBtn = document.querySelector('.slider .controls .next');
var prevBtn = document.querySelector('.slider .controls .prev');
var slide = document.querySelectorAll('.slider .items .item');
var i = 0;


prevBtn.onclick = function(){
  slide[i].classList.remove('active');
  i--; 
  
  if( i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add('active');
  
  
}

nextBtn.onclick = function(){
  slide[i].classList.remove('active');
  i++;
  
  if(i >= slide.length) {
    i = 0;
  }
  
  slide[i].classList.add('active');
    
}