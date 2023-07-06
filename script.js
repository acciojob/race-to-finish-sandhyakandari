window.promises = [];
let p1=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolve after 1 sec");},1000);
})
let p2=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolve after 2 sec");},2000);
})
let p3=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolve after 3 sec");},3000);
})
let p4=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolve after 4 sec");},4000);
})
let p5=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("resolve after 5 sec");},5000);
})
// Do not change the code above this
// add your promises to the array `promises`
promises.push(p1,p2,p3,p4,p5);

try{
	let res=Promise.any(promises);
    res.then((data)=>{
		let div=document.getElementById("output");
		div.innerText=data;
	})
}
catch(error){
	console.log(error);
}
