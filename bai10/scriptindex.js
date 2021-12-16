
function tt(){
    var em =document.getElementsByTagName('div');
    var so=0;
    var mang =[];
    while(so<=(em.length)){
        if(so%2==0){
            mang.push(em[so]);
          
        }
    
        so++;
    }
    
    so=0;
    while(so<mang.length){
        mang[so].remove();
        so++;

    }

}
