let submitButton=document.getElementById("submit");
let userName=document.getElementById("username");
let Password=document.getElementById("password");
let checkBox=document.getElementById("checkbox");
let arr=JSON.parse(localStorage.getItem("userDetails"));
let button=document.getElementById("btn");
// console.log(arr);
if(arr!=null)
{
	let existingButton=document.createElement("input");
    existingButton.type="submit";
    existingButton.id="existing";
    existingButton.value="Login as a Existing user";
    existingButton.addEventListener("click",clicked(arr));
    button.append(existingButton);
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
function clicked(arr){

    alert("Logged in as "+ arr.userName);
}