
var sitenameinput = document.getElementById("sitename")
var siteurlinput = document.getElementById("siteurl")

var sitedata = [] ;
function submit(){
     var site = {
        code : sitename.value ,
        src : siteurl.value,
    };
    sitedata.push(site);
    display();   
}
function  display(){
var cartoona = `` ;
for (var i=0 ; i< sitedata.length ; i++){
cartoona+=`<tr>
    <td>${i}</td>    
    <td>${sitedata[i].sitename}</td>
    <td>${sitedata[i].siteurl}</td>
    <td><button onclick="deleteitem(${i})" class="btn btn-outline-danger btn-sm"> Delete</button></td>
</tr>`
}
document.getElementById("tabledata" ).innerHTMl =cartoona;
}
function deleteitem( index){
sitedata.splice( index , 1 )
display()
}
