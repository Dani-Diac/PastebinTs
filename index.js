function savePaste(paste) {
    var paste = {
        text: document.getElementById('inputText').value,
        title: document.getElementById('inputName').value,
        description: document.getElementById('inputDescription').value
    };
    localStorage.setItem("context", JSON.stringify(paste));
    window.location.href = "/paste.html";
}
function getContext() {
    var pasteStr = localStorage.getItem('context');
    try {
        return JSON.parse(pasteStr);
    }
    catch (e) {
        return null;
    }
}
function showContext() {
    var savedContext = getContext();
    document.getElementById('name').innerHTML = "Name: " + savedContext.title;
    document.getElementById('paste').innerHTML = "Paste: " + savedContext.text;
    document.getElementById('description').innerHTML = "Description: " + savedContext.description;
}
