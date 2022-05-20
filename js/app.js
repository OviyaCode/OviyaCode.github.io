// const btn=document.getElementById("click").onclick=function(){
//   location.href="#about";
// }

const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
  for(let i = 0; i < sectBtn.length; i++)
  {
    sectBtn[i].addEventListener('click', function (){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }
  allSections.addEventListener('click', (e)=>{
    //console.log(e.target);
    const id=e.target.dataset.id;
    if(id)
    {
      secBtns.forEach((btn)=>{
        btn.classList.remove('active');
      })
      e.target.classList.add('active');

      //hide section
      sections.forEach((section)=>{
        section.classList.remove('active')
      })

      const ele = document.getElementById(id);
      ele.classList.add('active');
    }
  })

  //toggle theme

  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click',()=>{
    let ele = document.body;
    ele.classList.toggle('light-mode');
  })
}

PageTransitions();



