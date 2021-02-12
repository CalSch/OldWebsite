alert("No syntax error!");
try {

	function testJQ(){
		if (typeof($) === undefined){
			alert("Could not find JQuery");
		} else {
			alert("JQuery found!");
		}
	}
	
	var choice=prompt(`Welcome to the JavaScript Util!
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
