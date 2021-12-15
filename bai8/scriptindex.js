function tt(){
    var divx =document.getElementsByTagName('div');
  
    for(var i=0 ;i<divx.length;i++){
        if(i%2==0){
         divx[i].style.background="red"    ;
        }
        else {
            divx[i].style.background="pink" ;   
        }
    }
}