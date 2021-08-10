  let res
  function shorturl() {
    document.getElementById("searchbtn").disabled=true;
	document.getElementById("searchbtn").innerHTML='<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>请稍候...';
    fetch("https://duanurl.tk/", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: trim(document.querySelector("#url").value0+"&mmmm="+trim(document.querySelector("#final").value) })
    }).then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    res = myJson;
    document.getElementById("searchbtn").disabled=false;
	document.getElementById("searchbtn").innerHTML='压缩';
    if(res.key==trim(document.querySelector("#final").value){
         document.getElementById("text").value="https://duanurl.tk/"+res.key;
        }else{
          document.getElementById("text").value=res.key;
      }
  function copyurl () {
    var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  }
