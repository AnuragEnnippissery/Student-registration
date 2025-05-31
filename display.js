//console.log("display js")
/*document.getElementById("showName").textContent = "Name: " + sessionStorage.getItem("fullname");
document.getElementById("showClass").textContent = "Class: " + sessionStorage.getItem("formclass");
document.getElementById("showAddress").textContent = "Address: " + sessionStorage.getItem("formAddress");
document.getElementById("showPhone").textContent = "Phone: " + sessionStorage.getItem("formPhone"); */

//sessionStorage.getItem("studentsData", JSON.stringify(studentsData));
// Get the studentsData object from sessionStorage
/*const studentsData = JSON.parse(sessionStorage.getItem("studentsData")) || {};

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
}*/
//new method
const studentsData = JSON.parse(sessionStorage.getItem("studentsData")) || {};
const displayContainer = document.getElementById("displayAllStudents");
displayContainer.innerHTML = "";

// Loop through each student and display
for (const studentId in studentsData) {
    const student = studentsData[studentId];

    const studentDiv = document.createElement("div");
    studentDiv.className = "student-entry";

    const nameP = document.createElement("p");
    const classP = document.createElement("p");
    const addressP = document.createElement("p");
    const phoneP = document.createElement("p");

    nameP.innerHTML = `<strong>Name: </strong>${student.fullname}`;
    classP.innerHTML = `<strong>Class:</strong> ${student.class}`;
    addressP.innerHTML = `<strong>Address:</strong> ${student.address}`;
    phoneP.innerHTML = `<strong>Phone:</strong> ${student.phone}`;

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    studentDiv.append(nameP, classP, addressP, phoneP, editBtn, deleteBtn, document.createElement("hr"));
    displayContainer.appendChild(studentDiv);

    // DELETE functionality
    deleteBtn.addEventListener("click", () => {
        delete studentsData[studentId];
        sessionStorage.setItem("studentsData", JSON.stringify(studentsData));
        location.reload(); // refresh to update view
    });

    // EDIT functionality
    editBtn.addEventListener("click", () => {
        // Replace <p> tags with input fields
        const nameInput = document.createElement("input");
        nameInput.value = student.fullname;

        const classInput = document.createElement("input");
        classInput.value = student.class;

        const addressInput = document.createElement("input");
        addressInput.value = student.address;

        const phoneInput = document.createElement("input");
        phoneInput.value = student.phone;

        // Replace content
        studentDiv.innerHTML = ""; // clear current content
        studentDiv.append(nameInput, classInput, addressInput, phoneInput);

        const saveBtn = document.createElement("button");
        saveBtn.textContent = "Save";
        studentDiv.appendChild(saveBtn);

        saveBtn.addEventListener("click", () => {
            studentsData[studentId] = {
                fullname: nameInput.value,
                class: classInput.value,
                address: addressInput.value,
                phone: phoneInput.value
            };

            sessionStorage.setItem("studentsData", JSON.stringify(studentsData));
            location.reload(); // refresh to update view
        });
    });
}

