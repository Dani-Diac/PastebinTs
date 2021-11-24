var pastesList = [];
function getData() {
    var name = document.getElementById('inputName').value;
    var text = document.getElementById('inputText').value;
    addNewPaste(name, text);
}
function addNewPaste(titleArg, textArg) {
    pastesList = JSON.parse(localStorage.getItem('pastesList') || '[]');
    var date = new Date().toLocaleString();
    var paste = {
        title: titleArg,
        text: textArg,
        created: date
    };
    pastesList.push(paste);
    localStorage.setItem("pastesList", JSON.stringify(pastesList));
    window.location.href = "/paste.html";
}
;
function showData() {
    document.getElementById('show').onclick = null;
    pastesList = JSON.parse(localStorage.getItem('pastesList') || '[]');
    var info = document.getElementById('pastes');
    for (var _i = 0, _a = pastesList.reverse(); _i < _a.length; _i++) {
        var paste = _a[_i];
        var name_1 = document.createElement('p');
        var text = document.createElement('textextarea');
        var date = document.createElement('p');
        date.className = "paste";
        name_1.innerHTML = "Title: " + paste.title;
        text.innerHTML = "Paste: " + paste.text;
        date.innerHTML = "Created: " + paste.created;
        info.appendChild(name_1);
        info.appendChild(text);
        info.appendChild(date);
    }
}
