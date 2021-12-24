function handleRef(t) {
    let e = document.getElementById('ref'); 
    if (e.disabled == false) { 
        e.disabled = true
        t.innerHTML = 'enable' 
    } else { 
        e.disabled = false
        t.innerHTML = 'disable'
    }
}

let m = document.getElementById("main");
m.value = localStorage.main
m.addEventListener("change", function() {
    localStorage.main = m.value
})

let r = document.getElementById("ref");
r.value = localStorage.ref
r.addEventListener("change", function() {
    localStorage.ref = r.value
})