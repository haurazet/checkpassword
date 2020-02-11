function checkpass(str){
var arr=str.split('')
var angka='1234567890'.split('')
var huruf='abcdefghijklmnopqrstuvwxyz'.split('')
var adaangka=false
var adahuruf=false
var adaspasi=str.split(' ')
output=''
if(arr.length<6||adaspasi.length>1){
    output+='password harus lebih dari 6 karakter'
}
for(i=0;i<arr.length;i++){
    for(j=0;j<angka.length;j++){
        if(arr[i]==angka[j]){
            adaangka=true
        }
    }for(k=0;k<huruf.length;k++){
        if(arr[i]==huruf[k]){
            adahuruf=true
        }
    }
}
if(adaangka==false||adahuruf==false){
    if(output!==''){
        output+= ' dan '
    }
    output+='password harus ada kombinasi angka dan huruf'
}
if(output==''){
    output+='password benar'
}
return output
}

console.log(checkpass('12s12'))//password harus lebih dari 6 char
console.log(checkpass('abc123'))
console.log(checkpass('ab 123'))
console.log(checkpass('abcabc'))//password harus kombinasi angka dan huruf
console.log(checkpass('abca'))