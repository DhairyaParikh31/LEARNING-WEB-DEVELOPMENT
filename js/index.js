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
    event.preventDefault(); 
    var selectedOption = document.querySelector('input[name="mcq"]:checked');
    var marksDisplay = document.getElementById('marksDisplay');
    var marks = 0;
    if (selectedOption) {
        
        switch (selectedOption.value) {
            case "vad":
                marks = 500;
                break;
            case "srt":
                marks = 800;
                break;
            case "ahmd":
                marks = 750; 
                break;
            default:
                marks = 0; 
                break;
        }
        marksDisplay.textContent = "Price for selected city: " + marks + " $";
    } else {
        marksDisplay.textContent = "Please select an option.";
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
function showVideoPopup() {
    $('#videoModal').modal('show');
}