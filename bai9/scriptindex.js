function tt(){
    var soa=document.getElementById('soa').value;
    var a=0;
    var tog=0;
    /*for(var i =0 ; i<parseInt(soa) ;i++){
        if(i%2==0){
            a.push(i);
        }
        document.getElementById('kq').value=a;

    }*/
    while (a<=soa){
        if (a%2==0){
            tog+=a;
            
        }
        a=a+1;
        
    }
    document.getElementById('kq').value=tog;

}