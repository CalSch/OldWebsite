try {
  function init() {
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
    var ie=document.getElementById("cal-ie") || document.createElement("div"); //Div that contains the textarea and update button
    ie.id="cal-ie";

    var box=document.getElementById("cal-ie-box") || document.createElement("textarea"); //Textarea with the HTML
    box.rows=30;
    box.cols=60;
    box.innerHTML=h;
    box.id="cal-ie-box";

    let updateBttn=document.getElementById("cal-ie-update") || document.createElement("button"); //Update button
    updateBttn.innerText="Update";
    updateBttn.id="cal-ie-update";
    //TODO add an update function so the Update Button actually does something

    //Styling
    updateBttn.style.backgroundColor="dodgerblue";
    updateBttn.style.color="white";
    updateBttn.style.borderStyle="solid";
    updateBttn.style.borderColor="dodgerblue";
    updateBttn.style.borderRadius="5px";

    ie.appendChild(box);
    ie.appendChild(updateBttn);
    document.body.appendChild(ie);

    alert("Done!");
  }
  init();
}
catch(err) {
  alert(err.message);
}
