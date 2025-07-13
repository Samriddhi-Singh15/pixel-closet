let menuOpen = false;
window.onload=function(){
  const baseImage=document.getElementById('base');
  const menu=document.getElementById('main-menu');

  baseImage.onclick=function(){
    if(!menuOpen){
      menu.style.display='block';
    }else{
      menu.style.display='none';
    }
    menuOpen=!menuOpen;
  };
};

function showClothes() {
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("clothes-menu").style.display = "block";
}

function changeClothes(filename) {
 const clothes=document.getElementById('clothes');
  clothes.src='images/'+filename;
  clothes.style.display='block';

  document.getElementById("clothes-menu").style.display = "none";
  document.getElementById("main-menu").style.display = "block";

  menuOpen = false;
}
