let add = document.getElementById('add')
let dlt = document.getElementById('dlt')
let List = document.getElementById('List')
let input = document.getElementById('input');

let val = [];



add.addEventListener('click',()=>{
    val.push(input.value)
    console.log(val);
    addtodo(input.value)
    input.value=''
})

function addtodo(todo){
  let para =document.createElement("p");
  para.innerText = todo;
    List.appendChild(para)

    para.addEventListener('click',()=>{
      para.style.textDecoration = 'line-through'
     remove(todo)
   
   })

  
 para.addEventListener('dblclick',()=>{
   List.removeChild(para)
  remove(todo)

})
}


function remove(todo){
let index = List.indexOf(todo)
if (index > -1) {
  List.splice(index, 1);
}
}









// dlt.addEventListener('click',()=>{
//   val.shift()
//   console.log(val)

// })













//  List.addEventListener('click', function(e){

//   if(e.target.tagname === "LI"){
//     e.target.classList.toggle("checked");
//   }

//   else if(e.target.tagname === "SPAN"){
//     e.target.parentElement.remove();
//   }
 
 
// }, false);

// function addtodo(todo){
//     let para = document.createElement('p');
//     para.innerText = todo;
//     List.appendChild(para)
//     para.addEventListener('dblclick',()=>{
//       List.removeChild(para)
//       delt(todo)
//     })
// }

// function delt(){
//   let dele= document.getElementById('input').value;
//   function remove(){
//    val.pop(dele);
//   };
//   remove();
  
//   document.getElementById('list').inner=val ;
//  addtodo (input.value)
// }


// function delt(todo){
//   let index = val.indexOf(todo)
//   if(index>-1)
//     val.splice(index,1)
// }

