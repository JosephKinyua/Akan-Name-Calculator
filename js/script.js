// the form must be checked to make sure all the mandatory fields are filled in .It requires just a loop through each field in the form and check
// for data.
//  the data that is entered must be checked for correct form and value,Implement appropriate logic to test correctness of data.
function validate() {
    var genders = document.getElementsByName("gender");
    if (document.myForm.century.value >= 22 && document.myForm.century.value < 19) {
        console.log("Please provide a valid century");
        document.myForm.year.focus();
        return false;
    } else if (document.myForm.year.value == "") {
        console.log("Please provide a valid year");
        document.myForm.year.focus();
        return false;
    } else if (document.myForm.month.value == "" || document.myForm.month.value <= 0 || document.myForm.month.value > 12) {
        console.log("Please provide valid day of birth");
        document.myForm.month.focus();
        return false;
    } else if (document.myForm.date.value == "" || document.myForm.date.value <= 0 || document.myForm.date.value > 31) {
        console.log("Please provide a valid date");
        document.myForm.day.focus();
        return false;
    } else if (genders[0].checked == false && genders[1].checked == false) {
        console.log("You must select male or female");
        return false;
    } else {
        return true;
    }
}
// putting the male name,female name and the day values in an array
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];
var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function calculateDay() {
    var CC = parseInt(document.getElementById("century").value);
    var YY = parseInt(document.getElementById("year").value);
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value);
    days = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    console.log(days);
    return (Math.ceil(days));
}

function yourGender() {
    var genders = document.getElementsByName("gender");
    if (genders[0].checked == true) {
        var gender = "male";
    } else if (genders[1].checked == true) {
        var gender = "female";
    } else {
        return false;
    }
    switch (gender) {
        case "male":
            if (dayCheck == 1) {
                console.log("Born on " + weekDay[0] + " the akan name is " + maleNames[0]);
            } else if (dayCheck == 2) {
                console.log("Born on " + weekDay[1] + " the akan name is " + maleNames[1]);
            } else if (dayCheck == 3) {
                console.log("Born on " + weekDay[2] + " the akan name is " + maleNames[2]);
            } else if (dayCheck == 4) {
                console.log("Born on " + weekDay[3] + " the akan name is " + maleNames[3]);
            } else if (dayCheck == 5) {
                console.log("Born on" + weekDay[4] + " the akan name is " + maleNames[4]);
            } else if (dayCheck == 6) {
                console.log("Born on " + weekDay[5] + " the akan name is " + maleNames[5]);
            } else if (dayCheck == 7) {
                console.log("Born on " + weekDay[6] + " the akan name is " + maleNames[6]);
            }
            break;
        case "female":
            if (dayCheck == 1) {
                console.log("Born on " + weekDay[0] + "  the akan name is " + femaleNames[0]);
            } else if (dayCheck == 2) {
                console.log("Born on " + weekDay[1] + "  the akan name is " + femaleNames[1]);
            } else if (dayCheck == 3) {
                console.log("Born on" + weekDay[2] + "  the akan name is " + femaleNames[2]);
            } else if (dayCheck == 4) {
                console.log("Born on " + weekDay[3] + "  the akan name is " + femaleNames[3]);
            } else if (dayCheck == 5) {
                console.log("Born on" + weekDay[4] + "  the akan name is " + femaleNames[4]);
            } else if (dayCheck == 6) {
                console.log("Born on" + weekDay[5] + "  the akan name is " + femaleNames[5]);
            } else if (dayCheck == 7) {
                console.log("Born on" + weekDay[6] + "   the akan name is " + femaleNames[6]);
            }
            break
        default:
    }
}

function yourName() {

}