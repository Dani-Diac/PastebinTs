interface Paste {
 text: string;
 title: string;
 description: string;
}


function savePaste(paste: Paste): void {
  var paste = {
    text: (<HTMLInputElement>document.getElementById('inputText')).value,
    title: (<HTMLInputElement>document.getElementById('inputName')).value,
    description: (<HTMLInputElement>document.getElementById('inputDescription')).value
  };
  localStorage.setItem("context", JSON.stringify(paste));
  window.location.href = "/paste.html";
}

function getContext(): Paste {
  var pasteStr = localStorage.getItem('context');
  try {
    return JSON.parse(pasteStr);
  } catch(e) {
    return null;
  }
}

function showContext() {
  var savedContext = getContext();
  document.getElementById('name').innerHTML = "Name: " + savedContext.title;
  document.getElementById('paste').innerHTML = "Paste: " + savedContext.text;
  document.getElementById('description').innerHTML = "Description: " + savedContext.description;
}
