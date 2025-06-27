const passwordBox=document.getElementById("password");
const btn=document.getElementById("btn");
const copy=document.getElementById("copy");
const length=12;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_-~/|[]{}<>=+";
const allChars=upperCase+lowerCase+number+symbol;

btn.addEventListener("click",()=>{
  let password="";
  password+=upperCase[Math.floor(Math.random()*upperCase.length)];
  password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
  password+=number[Math.floor(Math.random()*number.length)];
  password+=symbol[Math.floor(Math.random()*symbol.length)];
  while(length>password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
  }
  passwordBox.value=password;
})

copy.addEventListener("click",()=>{
  passwordBox.select();
  document.execCommand("copy");
})