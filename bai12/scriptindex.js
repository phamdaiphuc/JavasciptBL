var soa =parseInt(prompt('Moiw Ban Nhap So N'));
var b=0;
function tt(soa){
    /*tinh toan bieu thuc */
    for(var i=1;i<parseInt(soa);i++){
        b=b+i/soa;
    }
    return b;
}


console.log(b);