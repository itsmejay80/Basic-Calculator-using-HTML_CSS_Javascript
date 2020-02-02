function disp(val){
  document.getElementById('display').value +=val;
}

function solve() 
		{ 
			let x = document.getElementById("display").value; 
			let y = eval(x) ;
			document.getElementById("display").value = y;
		
		} 

function clr(){
	document.getElementById('display').value="";
}

function c(){
		let strng=document.getElementById('display').value;
		//let strng="0"
		document.getElementById('display').value= strng.substring(0,strng.length-2);
}


