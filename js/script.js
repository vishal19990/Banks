var itemListUI=document.getElementById('list');
// console.log(itemListUI);
var count;
// console.log(count);
var inputbox=document.getElementById('inputBox');
// console.log(inputbox);
inputbox.addEventListener("keydown",keyDownfunction);
function keyDownfunction(event){

    if(event.keyCode===13)
    {
        if(inputbox.value.length<1){
            alert('enter proper input')
        }else{
            // alert('call a function to ad')
            insertnewtolist(inputbox.value);
        }
    }

}
function insertnewtolist(todoitem){
    count=itemListUI.childElementCount;
    // alert("todoitem");
    console.log(todoitem);
    var newlist=document.createElement('LI');
    var newcheckbox=document.createElement('input');
    newcheckbox.type='checkbox';
    newcheckbox.id='checkbox'+count;
    var newlabel=document.createElement('label');
      console.log(newlabel);
      newlabel.appendChild(document.createTextNode(todoitem));
    // console.log(newlist);
var newanchor=document.createElement('a');
console.log(newanchor);
    // console.log(newcheckbox);
    newanchor.href="#";
    newanchor.className="delete";
    newanchor.id="delete"+count;
     console.log(newcheckbox);
     newanchor.innerHTML="Delete";
    console.log(newanchor);
    newlist.appendChild(newcheckbox); 
    newlist.appendChild(newlabel);
    newlist.appendChild(newanchor);
    console.log(newlist);
    itemListUI.appendChild(newlist);
    count++;
inputbox.value=null;
}
// var b=document.getElementById('list');
// b.addEventListener("click",function(){
// if(event.target.classList.contains('delete')){
//     b.removeChild(itemListUI.childNodes[0]);
// }
// })
itemListUI.addEventListener("click",assignlistener);
function assignlistener(){
    // alert('hi');
    if(event.target.type==='checkbox'){
        // alert('checkbox');
        checkbox(event.target.id);
    }
    else if(event.target.classList.contains('delete')){
        // alert('delete');
        deletefunction(event.target.id);
    }
}
function checkbox(id)
{
    // alert('checkboc id'+id);
    var checkboxvar=document.getElementById(id);
    // console.log(checkboxvar);
if(checkboxvar.checked){
    // alert('checked');
    var label=checkboxvar.nextSibling;
console.log(label);
label.classList.add('labelStyle');
}else{
    // alert('not checked');
    var label=checkboxvar.nextSibling;
    label.classList.remove('labelStyle');
}

}
function deletefunction(id)
{
    // alert('delete id'+id)
    var deletevar=document.getElementById(id);
    deletevar.parentNode.parentNode.removeChild(deletevar.parentNode);
    
}
document.getElementById('clear').addEventListener("click",function(){
    document.body.innerHTML=null;
})
