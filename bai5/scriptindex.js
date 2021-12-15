/*phan tinh toan de tra lai so nguyen  to cua bai 5  */
function bl() {
    document.getElementById('kq').style.width="300px";
    var soa= document.getElementById('soa').value ;
    var c = 0;
    for(var i=2;i<=parseInt(soa);i++){
        console.log(i);
        if( soa%i ==0){
            c=c+1;
       
     
        }
      

    } 
    if( c==1){
        document.getElementById('kq').value="Day La So Nguyen To ";

    }
    else if( c>1){
        document.getElementById('kq').value="Day Khong Phai La So Nguyen To";
    }
}