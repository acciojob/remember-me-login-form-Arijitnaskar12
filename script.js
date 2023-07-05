let submitButton=document.getElementById("submit");
let userName=document.getElementById("username");
let Password=document.getElementById("password");
let checkBox=document.getElementById("checkbox");
let arr=JSON.parse(localStorage.getItem("userDetails"));
let button=document.getElementById("Existing");
// console.log(arr);
if(arr!=null)
{
	button.style.display="block";
	let data=JSON.parse(localStorage.getItem("userDetails"));
	button.addEventListener("click",()=>{
	alert("Logged in as"+" "+data.userName);
	});
}else{
	button.style.display="none";
}
submitButton.addEventListener("click",(event)=>{
    // event.preventDefault();
	let obj={
		userName:userName.value,
		password: Password.value
	}
if(checkBox.checked)
{
	localStorage.setItem("userDetails",JSON.stringify(obj));
}
 alert("Logged in as"+" "+obj.userName);
});
