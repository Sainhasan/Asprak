function akses(event) {
    event.preventDefault();
    var user = document.forms["formlogin"]["user"].value;
    var pas= document.forms["formlogin"]["pas"].value;
    var username = "ira"
    var password = "cantik"

    if ( user === username && pas === password) {
        window.location.href="homepage.html";
    }
    else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Username atau Kata Sandi Salah,COBA LAGI!',
        });
    }

}
