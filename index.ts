interface Paste {
  title: string;
  text: string;
  created: string;
}
let pastesList: Paste[] = [];

function getData() {
  let name = (<HTMLInputElement>document.getElementById('inputName')).value;
  let text = (<HTMLInputElement>document.getElementById('inputText')).value;
  addNewPaste(name, text);
}

function addNewPaste(titleArg: string, textArg: string): void {
  pastesList = JSON.parse(localStorage.getItem('pastesList') || '[]');
  let date = new Date().toLocaleString();
  let paste: Paste = {
    title: titleArg,
    text: textArg,
    created: date
  };
  pastesList.push(paste);
  localStorage.setItem("pastesList", JSON.stringify(pastesList));
  window.location.href = "/paste.html";
};

function showData() {
  document.getElementById('show').onclick = null;
  pastesList = JSON.parse(localStorage.getItem('pastesList') || '[]');
  let info = document.getElementById('pastes');
  for (let paste of pastesList.reverse()) {
    let name = document.createElement('p');
    let text = document.createElement('textextarea');
    let date = document.createElement('p');
    date.className = "paste";
    name.innerHTML = "Title: " + paste.title;
    text.innerHTML = "Paste: " + paste.text;
    date.innerHTML = "Created: " +  paste.created;
    info.appendChild(name);
    info.appendChild(text);
    info.appendChild(date);

  }
}
