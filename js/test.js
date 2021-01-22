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
  h=h.replace(">", "&rt;");
}
let a=document.createElement("textarea");
a.rows=30;
a.cols=60;
a.innerText=h;
document.body.appendChild(a);
alert("Done!");
