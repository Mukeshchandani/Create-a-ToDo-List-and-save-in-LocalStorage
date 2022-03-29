
var mainData = localStorage.getItem("List")
var input = document.getElementById("_input01")

var data =[]
if(mainData !== null ){
  mainData=localStorage.getItem("List")
  data = JSON.parse(mainData)
}


function AddItem(){
if(input.value === ""){
  alert("Please add Item")
}
else{
  data.unshift(input.value)
  data.innerHTML= ""
  localStorage.setItem("List" , JSON.stringify(data));
  window.location.reload();
}


}

var list = document.getElementById("List")
for(var i = 0 ;i < data.length; i++){
  var li = document.createElement("li")
  var span= document.createElement('span')
  span.setAttribute('class' , 'forText')

span.innerHTML = data[i]
  list.appendChild(li)
  li.appendChild(span)

  var forButton = document.createElement('button')
  forButton.setAttribute('id', 'DeleteButton')
  forButton.innerHTML="Delete"
  forButton.setAttribute('onclick' , `Deletefun(${i})`)
  li.appendChild(forButton)

  var Edit = document.createElement('button')
  Edit.setAttribute('id', 'EditButton')
  Edit.innerHTML="Edit"
  Edit.setAttribute('onclick' , `Editfun(${i})`)
  li.appendChild(Edit)


}

function Deletefun(index){
data.splice(index,1)
localStorage.setItem("List" ,JSON.stringify(data));
window.location.reload();

}

function Editfun(index){
  var updatedata = prompt("Change Data")
  data.splice(index,1,updatedata)
  localStorage.setItem("List" ,JSON.stringify(data));
  window.location.reload();


}

 
function removeAll(){
  localStorage.removeItem("List");
  window.location.reload();
}