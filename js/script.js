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