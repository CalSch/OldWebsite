let h=document.innerHTML;
while (h.search("<") != -1 || h.search(">") != -1) {
  h=h.replace("<", "&lt;");
  h=h.replace(">", "&gt;");
}
let a=document.createElement("textarea");
a.rows=30;
a.cols=60;
a.innerHTML=h;
a.id.add("ie-box");
document.body.appendChild(a);

alert("Done!");
