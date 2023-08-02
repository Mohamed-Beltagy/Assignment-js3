var siteName = document.getElementById('siteName');
var siteURL = document.getElementById('siteURL');
var errorText = document.getElementById("error_text")
var sit = [];

if (localStorage.getItem("sit") != null) {
    sit = JSON.parse(localStorage.getItem("sit"));
    display(sit);
};


function add() {
    var sitInfo = {
        name: siteName.value,
        url: siteURL.value
    };
    sit.push(sitInfo);
    localStoragesit()
    display(sit);
    clear();
};


function display(sits) {
    var cartona = ``;
    for (var i = 0; i < sit.length; i++) {
        cartona += `<tr>
        <td>${i + 1}</td>
        <td>${sit[i].name}</td>
        <td><button class="btn btn-success media-btn"><a href="${sit[i].url}" target="_blank"><i class="fa-solid fa-eye me-2"></i> visit</a></button></td>
        <td><button onclick="Delete(${i})" class="btn  btn-danger media-btn"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
    </tr>`
    }
    document.getElementById('newRow').innerHTML = cartona;
};

function localStoragesit() {
    localStorage.setItem("sit", JSON.stringify(sit));
}

function clear() {
    siteName.value = "";
    siteURL.value = "";
}

function Delete(index) {
    sit.splice(index, 1);
    localStoragesit()
    display(sit);
}

function validateSiteName() {
    var regex = /[A-Za-z]{1,}/;
    if (regex.test(siteName.value) == true) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");
        return true;
    } else {
        siteName.classList.remove("is-valid");
        siteName.classList.add("is-invalid");
        return false;
    }
}

function validateSiteUrl() {
    var regex = /^(https:\/\/)+(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{1,}$/
    if (regex.test(siteURL.value) == true) {
        siteURL.classList.add("is-valid");
        siteURL.classList.remove("is-invalid");
        errorText.classList.replace("d_block", "d-none");
        return true;
    } else {
        siteURL.classList.remove("is-valid");
        siteURL.classList.add("is-invalid");
        errorText.classList.replace("d-none", "d_block");
        return false;
    }
}