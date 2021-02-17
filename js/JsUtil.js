alert("No syntax error!");
try {

	function testJQ(){
		try{
			$;
			alert("JQuery found!");
		} catch(e) {
			alert("Could not find JQuery");
		}
	}
	
	var choice=prompt(`Welcome to the JavaScript Util! v0.3
1: Test for JQuery`);
	switch (choice){
		case "1":
			testJQ();
			break;
	}

}
catch(e) {
	alert("Error: "+e.message);
}
