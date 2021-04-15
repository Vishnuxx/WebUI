var editor = document.getElementById("editor");
var appbar = document.getElementById("appbar");
var create = document.getElementById("create");

var crntElem;
var idvalue = 0;
var isCreated = false;

const pop = get("pop-up-menu");
const apply = get("apply");
const cancel = get("cancel");
const addBtn = get("addChild");


var tag = get("inpTag");
var id = get("inpId");
var height = get("inpHeight");
var width = get("inpWidth");
var margin = get("inpMargin");
var padding = get("inpPadding");
var background = get("inpBg");
var display = get("inpDisp");
var flexdir = get("inpFlexDir");

create.addEventListener("click", () => {
  idvalue++;
  pop.style.display = "block";
  tag.value = "div";
  id.value = "elem"+idvalue;
  height.value = "50px";
  width.value = "auto";
  margin.value = "1px";
  padding.value = "1px";
  background.value = "none";
  display.value = "flex";
  flexdir.value = "column";
});



apply.addEventListener("click" , ()=>{
  try{
  if(!isCreated){
  crntElem = document.createElement(tag.value);
  crntElem.id = id.value;
  setDataToElements(crntElem);
  editor.appendChild(crntElem);
  }else{
    setDataToElements(crntElem);
  }
  crntElem.addEventListener("click" , ()=>{
    crntElem = get(event.srcElement.id);
    isCreated = true;
    showElementStyleData(crntElem);
  });
  pop.style.display = "none";
  isCreated = false;
  }catch{
    alert("Wrong input");
  }
});

 addBtn.addEventListener("click", () => {
   idvalue++;
   id.value = "elem"+idvalue;
   if(crntElem.id != id.value){
     try{
     var elem = document.createElement(tag.value);
     elem.id = id.value;
     setDataToElements(elem);
     crntElem.appendChild(elem);
     }catch{
       idvalue--;
       alert("you cannot place children in a viewgroup element");
     }
   }else{
     alert("You cannot use Same ID for child elements")
   }
 });


cancel.addEventListener("click", () => {
  isCreated = false;
//  idvalue--;
  pop.style.display = "none";

});


function setDataToElements(elem){
  elem.style.height = height.value;
  elem.style.width = width.value;
  elem.style.margin = margin.value;
  elem.style.padding = padding.value;
  elem.style.background = background.value;
  elem.style.display = display.value; 
  elem.style.flexDirection = flexdir.value;
  elem.style.border = "1px dashed black";
}


function showElementStyleData(e){
    tag.value = e.tagName;
    id.value = e.id;
    height.value = e.style.height;
    width.value = e.style.width;
    margin.value = e.style.margin;
    padding.value = e.style.padding;
    background.value = e.style.background;
    display.value = e.style.display;
    flexdir.value = e.style.flexDirection;
    pop.style.display = "block";
}
function get(id) {
  return document.getElementById(id);
}

function create(type) {
  return document.createElement(type);
}