
function validateForm() {
    var firstname = document.forms["myform"]["firstname"].value;
    var lastname = document.forms["myform"]["lastname"].value;
    var email = document.forms["myform"]["email"].value;

    if (firstname == "") {
        window.alert("Please enter your first name");
        return false;
    }
    if (lastname === "") {
        window.alert("Please enter your last name");
        return false;
    }
    if (email === "")
    {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }
    if (email.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }

    if (email.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(firstname)) {
        alert("no numbers in first name");
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(lastname)) {
        alert("no numbers in last name");
        return false;
    }
}






















