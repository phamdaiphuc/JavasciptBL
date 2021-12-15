var mang=[]
function tt(){
    var soa =document.getElementById('soa').value;
    var c=0;
    for(var i=0;i<parseInt(soa);i++){
        c=i;
        mang.push(i);
    }
   


    document.getElementById('kq').value=mang;
}