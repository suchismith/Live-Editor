

clearcode=function(){

	
	document.getElementById("inputcode").value="";


	

}


cleardisplay=function(){

	
	content=document.getElementById("liveeditor").innerHTML;
	content='';
	editordoc=document.getElementById("liveeditor").contentWindow.document;
	editordoc.open();
	editordoc.write(content);
	editordoc.close();

	

}
loadcode=function(){
	window.setInterval(refreshcode(), 1);
}
refreshcode=function(){


	code=document.getElementById("inputcode").value;


	editordoc=document.getElementById("liveeditor").contentWindow.document;
	editordoc.open();
	editordoc.write(code);
	editordoc.close();


	

}

