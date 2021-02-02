alert("Starting"); //To test if there's a syntax error, if there is it wont run

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
var ie=document.createElement("div"); //Div that contains the textarea and update button
ie.id="cal-ie";

var box=document.createElement("textarea"); //Textarea with the HTML
box.rows=30;
box.cols=60;
box.innerHTML=h;
box.id="cal-ie-box";

var updateBttn=document.createElement("button"); //Update button
updateBttn.innerText="Update";
updateBttn.id="cal-ie-update";
updateBttn.style.backgroundColor="dodgerblue";
updateBttn.style.color="white";

updateBttn.style.borderStyle="solid";
updateBttn.style.borderColor="dodgerblue";
updateBttn.style.borderRadius="5px";

ie.appendChild(box);
ie.appendChild(updateBttn);
document.body.appendChild(ie);

alert("Done!");
