setTimeout (fmodal,2000);
function fmodal () {
    document.querySelector(".modal").style.display="block";
    
    document.querySelector(".modal a").addEventListener("click",function(){
        document.querySelector(".modal").style.display="none";})
}
