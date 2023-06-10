const extendHex = (shortHex) => {
  // write your code here
	let arr=shortHex.split("");
	let res='';
	for(let i=1;i<arr.length;i++){
		res=res+arr[i];
		res=res+arr[i];
	}
	
	return arr[0]+res;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
