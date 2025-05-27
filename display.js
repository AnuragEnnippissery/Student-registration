//console.log("display js")
/*document.getElementById("showName").textContent = "Name: " + sessionStorage.getItem("fullname");
document.getElementById("showClass").textContent = "Class: " + sessionStorage.getItem("formclass");
document.getElementById("showAddress").textContent = "Address: " + sessionStorage.getItem("formAddress");
document.getElementById("showPhone").textContent = "Phone: " + sessionStorage.getItem("formPhone"); */

//sessionStorage.getItem("studentsData", JSON.stringify(studentsData));
// Get the studentsData object from sessionStorage
const studentsData = JSON.parse(sessionStorage.getItem("studentsData")) || {};

// Reference the container where you'll display all students
const displayContainer = document.getElementById("displayAllStudents");

// Clear previous display
displayContainer.innerHTML = "";

// Loop through each student and display their details
for (const studentId in studentsData) {
    const student = studentsData[studentId];

    const studentDiv = document.createElement("div");
    studentDiv.className = "student-entry";

    studentDiv.innerHTML = `
        <p><strong>Name:</strong> ${student.fullname}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>
        <hr>
    `;

    displayContainer.appendChild(studentDiv);
}
