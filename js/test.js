let h="<html><head>"+document.head.innerHTML+"</head><body>"+document.body.innerHTML+"</body></html>";
let a=document.createElement("textarea");
a.rows=30;
a.cols=60;
a.innerText=h;
document.body.appendChild(a);
alert("Done!");
