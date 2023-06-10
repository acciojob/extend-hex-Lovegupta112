const extendHex = (shortHex) => {
  // write your code here
	shortHex=shortHex.toLowerCase();
	
	let arr=shortHex.split("");
	let res='';
	if(arr[0]==='#'){
	for(let i=1;i<arr.length;i++){
		res=res+arr[i]+arr[i];
		// res=res+arr[i]; 
	}
	res=arr[0]+res;
	}
	else{
		for(let i=0;i<arr.length;i++){
		res=res+arr[i]+arr[i];
		// res=res+arr[i]; 
	}
	}
	return res.toLowerCase();
};
  
// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
