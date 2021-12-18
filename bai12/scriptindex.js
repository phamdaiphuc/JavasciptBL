function tt(){
    var soa =document.getElementById('soa').value;
    var b=0;
    for(var i =0;i<parseInt(soa);i++){
        b=b+(i/soa);
        console.log(i);
        console.log(b);
    }
}