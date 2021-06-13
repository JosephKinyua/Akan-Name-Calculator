// the form must be checked to make sure all the mandatory fields are filled in .It requires just a loop through each field in the form and check
// for data.
//  the data that is entered must be checked for correct form and value,Implement appropriate logic to test correctness of data.
function validate() {
    var genders = document.getElementsByName("gender");
    if (document.myForm.century.value >= 22 && document.myForm.century.value < 19) {
        console.log("Please provide a valid century");
        document.myForm.year.focus();
        return false;
    }
}