/*
truyen vao ham


function tingtong(a,b){
    return a+b;
}
var a =parseInt(prompt('Nhap So A'));
var b= parseInt(prompt('Nhap So B'));
alert('ket qua'+tingtong(a,b));*/

/*ham rieng


function tinhtong(a,b){
    var a =parseInt(prompt('Moi Ban Nhap A'));
    var b= parseInt(prompt('Moi Ban Nhap B'));
    var c=a+b ;
    alert( c);


}

tinhtong();
*/


/*tinh le cac so trong mang */
var mang =[];
var soa=0;
function chang(mang){
    var c=0;
    for(var i=0; i<mang.length;i++){
        /*loc ra so chang va tinh tong so chan*/
        if (mang[i]%2==0){
            c=c+parseInt(mang[i]);
        }
    }
    return c ; 
}
function le(mang){
    var g=0;
    for(var i=0; i<mang.length;i++){
        /*loc ra so le va tinh tong so le*/
        if (mang[i]%2!=0){
            g=g+parseInt(mang[i]);
        }
    }
    return g ;
}
function ray(soa){
     soa =document.getElementById('soa').value;
    for(var i=0;i<soa.length;i++){
        mang.push(soa[i]);

    }
    document.getElementById('sob').value=le(mang);
    document.getElementById('soc').value=chang(mang);
    document.getElementById('nhapa').style.display="none";
    return soa;
}
function rs(mang,soa){
    soa==0;
    mang.splice(0,mang.length); 
    document.getElementById('soa').value="";
    document.getElementById('sob').value="";
    document.getElementById('soc').value="";
    document.getElementById('nhapa').style.display="";
    console.log(soa,mang);

}


