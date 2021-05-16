'use-strict';
let tableElement=document.getElementById('table');
let headerarray=['#','image','name','season'];
function header(){
  let headElement=document.createElement('thead');
  tableElement.appendChild(headElement);
  let trElement=document.createElement('tr');
  headElement.appendChild(trElement);
  for (let index = 0; index < headerarray.length; index++) {
    let thElement=document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent=headerarray[index];

  }
}

function Flower(name,image,season){
  this.name=name;
  this.image='./img/'+image+'.jpeg';
  this.season=season;
  Flower.all.push(this);
  localStorage.setItem('memory',JSON.stringify(Flower.all));
}
Flower.all=[];

function getmemory(){
  let assumbtion=JSON.parse(localStorage.getItem('memory'));
  if(assumbtion){
    Flower.all=assumbtion;
  }


}

function rendur(name,image,season){
  console.log(name);
  console.log(image);
  console.log(season);


  let trElement=document.createElement('tr');
  tableElement.appendChild(trElement);
  let tdElement=document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent='x';
  let imgElement=document.createElement('img');
  trElement.appendChild(imgElement);
  imgElement.src=image;
  tdElement=document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent=name;
  tdElement=document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent=season;

}

let form=document.getElementById('form');
form.addEventListener('submit',addflower);
function addflower(event){
  event.preventDefault();
  let name=event.target.name.value;
  let image=event.target.image.value;
  let season=event.target.season.value;
  tableElement.innerHTML='';

  new Flower(name,image,season);
  for (let index = 0; index < Flower.all.length; index++) {
    rendur(Flower.all[index].name,Flower.all[index].image,Flower.all[index].season);
  }
  console.log(Flower.all);
  header();
}
let clear=document.getElementById('clear');
clear.addEventListener('click',clearLS);
function clearLS(event) {
  event.preventDefault();
  tableElement.innerHTML='';
  localStorage.clear();
  Flower.all=[];

}

getmemory();
for (let index = 0; index < Flower.all.length; index++) {
  rendur(Flower.all[index].name,Flower.all[index].image,Flower.all[index].season);

}
header();
