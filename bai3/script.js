
var mang=[];


function nso(){
    var a= document.getElementById('nhap').value;
    mang.push(a);
    document.getElementById('nhap').value="";
 

}
function tkq(){
    var d=0;
    for( var i =0;i<(mang.length);i++){
        d=d+parseInt(mang[i]);
       
    }
    document.getElementById('kq').value=d;

}
function reset(d){
    mang.splice(0,mang.length);
    tkq(d)==0;
   


    document.getElementById('kq').value="";

}