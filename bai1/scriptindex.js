function xuly(){
  /*  var a=document.getElementById('nhap').value;
    
    if(a<0){
        alert('Khong Phai So Nguyen Duon');
    } */
    var soa = document.getElementById('soa').value;
    var sob = document.getElementById('sob').value;
    var tt=document.getElementById('pt').value;
    if(tt=="+"){
        var c= (parseInt(soa)+parseInt(sob));
    }
    if(tt=="-"){
        var c=  (parseInt(soa)-parseInt(sob));
    }
     if(tt=="*"){
        var c=  (parseInt(soa)*parseInt(sob));
    }
     if(tt=="/"){
        var c= (parseInt(soa)/parseInt(sob));
    }
    console.log(c);
    document.getElementById('tra').value=c;
}