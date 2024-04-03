function jfun1(){
    var city= document.getElementById("GUJ").value;
    if(city=="Rajkot"){
        alert("City is Rajkot");
    }else if(city=="Surat"){
        alert("City is Surat");
    }else if(city=="AHM"){
        alert("City is AHM");
    }
    document.getElementById("selectedCity").innerText = city;

}
function calculateMarks() {
    var selectedOption = document.querySelector('input[name="mcq"]:checked');

    if (selectedOption) {
        var marks = 0;

        // Assign marks based on the selected option
        switch (selectedOption.value) {
            case "CSE":
                marks = 10; // Assigning 10 marks for CSE option
                break;
            case "ME":
                marks = 8; // Assigning 8 marks for ME option
                break;
            case "CHEM":
                marks = 6; // Assigning 6 marks for CHEM option
                break;
            default:
                marks = 0; // Default case if no option is selected
                break;
        }

        // Display the marks
        alert("You got " + marks + " marks.");
    } else {
        // If no option is selected
        alert("Please select an option.");
    }
}
function jfun2() {
    var name = document.frm.name.value;
    var phnum = document.frm.PhoneNumber.value;
    var email = document.frm.Email.value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.frm.course.value;
    var skillsList = [];
    var skillsCheckboxes = document.querySelectorAll('input[name="Skills"]:checked');
    skillsCheckboxes.forEach(function(checkbox) {
        skillsList.push(checkbox.value);
    });
    var skills = skillsList.join(", ");
    
    var remark = document.frm.message.value;
    
    alert("Name: " + name + "\nPhoneNumber: " + phnum + "\nEmail: " + email + "\nGender: " + gender + "\nCourse: " + course + "\nSkills: " + skills + "\nRemarks: " + remark);
}
