//1
var a=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
console.log(a.length);
for(arr=a.length-1;arr>=0;arr--){
    console.log(a[arr]);
}

//2
var str="mahesh"
var revstr=""
for(i=str.length-1;i>=0;i--){
    revstr=revstr+str[i]
}
console.log(revstr)

//3
var arr=[1,2,3,4,5,{id:1,age:25},[1,2,3]]
for(ele of arr){
    if(ele.toString()=="[object Object]"){
        console.log(ele.age);
    }
}
