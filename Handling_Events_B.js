//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var x = document.getElementById('demo');
    x.onclick = function () {
        document.body.innerHTML = Date();
    }
};
