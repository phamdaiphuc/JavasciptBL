function tt(){
    var b=[];
    var soa =document.getElementById('soa').value;

    if(parseInt(soa)<0){
      alert('khonog duoc nhap be hon 0');
    }
    for(var i=0;i<=parseInt(soa);i++){
       b.push(i);
    }
    document.getElementById('kq').value=b;
}