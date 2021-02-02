alert("Starting");
let h=`<html>
  <head>
    `+document.head.innerHTML+`
  </head>
  <body>
    `+document.body.innerHTML+`
  </body>
</html>`;
while (h.search("<") != -1 || h.search(">") != -1) {
  h=h.replace("<", "&lt;");
  h=h.replace(">", "&gt;");
}
var ie=document.createElement("div");
ie.id="cal-ie";
var box=document.createElement("textarea");
box.rows=30;
box.cols=60;
box.innerHTML=h;
box.id="cal-ie-box";
var updateBttn=document.createElement("button");
updateBttn.innerText="Update";
updateBttn.id="cal-ie-update";
updateBttn.backgroundColor="dodgerblue";
updateBttn.color="white";
/*
updateBttn.borderStyle="groove";
updateBttn.borderColor="dodgerblue";
*/
ie.appendChild(box);
ie.appendChild(updateBttn);
document.body.appendChild(ie);

alert("Done!");
