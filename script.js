
function Git(e) { 
    e.preventDefault();
    var name =document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    // console.log(name);
    
    localStorage.setItem("names",name);
    localStorage.setItem("nwe",fname);
    
}
var output=document.getElementById('output');
(function(){

    output.innerHTML+= '<br>' +localStorage.getItem('names');
    output.innerHTML+= '<br>' +localStorage.getItem('nwe');
    // console.log(localStorage.getItem);
    

})();

 

   

