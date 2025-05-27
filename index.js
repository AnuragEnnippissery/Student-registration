console.log("hello")

//console.log(fullname)
//let inputValue = document.getElementById("myInput").value;
function display(event){
    event.preventDefault();
    let fullname=document.getElementById("fname").value;
    console.log(fullname)
    
    let formclass=document.getElementById("fclass").value;
    console.log(formclass)

    let formAddress=document.getElementById("faddress").value;
    console.log(formAddress)

    let formPhone=document.getElementById("fphone").value;
    console.log(formPhone)
    //------code to add data to session storage
    let studentsData = JSON.parse(sessionStorage.getItem("studentsData")) || {};

    const studentId = Date.now().toString(); // or use your own unique way

    studentsData[studentId] = {
        fullname: fullname,
        class: formclass,
        address: formAddress,
        phone: formPhone
        };

    sessionStorage.setItem("studentsData", JSON.stringify(studentsData));


    /*sessionStorage.setItem("fullname", fullname);
    sessionStorage.setItem("formclass", formclass);
    sessionStorage.setItem("formAddress", formAddress);
    sessionStorage.setItem("formPhone", formPhone);*/
    //----------------code end --------------------

    let itemName=document.getElementById("resultName")
    itemName.innerHTML=fullname;
    const deleteButton=document.createElement("button")
    const editButton=document.createElement("button")
    const toDoDiv=document.getElementById("namePara")
    const buttonGroup = document.createElement("div");
    buttonGroup.className = "button-group";

    buttonGroup.appendChild(deleteButton)
    buttonGroup.appendChild(editButton)

    toDoDiv.appendChild(buttonGroup);
    //deleteButton.innerHTML=`<i class="fa-solid fa-trash"></i>`
    deleteButton.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    editButton.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;

    deleteButton.addEventListener('click',()=>{
        toDoDiv.remove()
    })

    editButton.addEventListener('click',()=>{
        const input = document.createElement("input");
        input.value = itemName.textContent;

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        toDoDiv.replaceChild(input, itemName);
        toDoDiv.replaceChild(saveButton, buttonGroup);

        saveButton.addEventListener("click", () => {
            itemName.textContent = input.value;
            toDoDiv.replaceChild(itemName, input);
            toDoDiv.replaceChild(buttonGroup, saveButton);
            //sessionStorage.setItem("fullname", input.value);
            studentsData[studentId].fullname = input.value;
            sessionStorage.setItem("studentsData", JSON.stringify(studentsData));

        })
    })

    //-------------------class-------------------------------------//
    let itemClass =document.getElementById("resultClass")
    itemClass.innerHTML=formclass;
    const deleteButton1=document.createElement("button")
    const editButton1=document.createElement("button")
    const toDoDiv1=document.getElementById("classPara")

    const buttonGroup1 = document.createElement("div");
    buttonGroup1.className = "button-group";

    buttonGroup1.appendChild(deleteButton1)
    buttonGroup1.appendChild(editButton1)

    toDoDiv1.appendChild(buttonGroup1);
    //deleteButton.innerHTML=`<i class="fa-solid fa-trash"></i>`
    deleteButton1.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    editButton1.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;
    deleteButton1.addEventListener('click',()=>{
        toDoDiv1.remove()
    })

    editButton1.addEventListener('click',()=>{
        const input1 = document.createElement("input");
        input1.value = itemClass.textContent;

        const saveButton1 = document.createElement("button");
        saveButton1.textContent = "Save";

        toDoDiv1.replaceChild(input1, itemClass);
        toDoDiv1.replaceChild(saveButton1, buttonGroup1);

        saveButton1.addEventListener("click", () => {
            itemClass.textContent = input1.value;
            toDoDiv1.replaceChild(itemClass, input1);
            toDoDiv1.replaceChild(buttonGroup1, saveButton1);
            //sessionStorage.setItem("formclass", input1.value);
            studentsData[studentId].formclass = input1.value;
            sessionStorage.setItem("studentsData", JSON.stringify(studentsData));

        })
    })

    //----------------------address---------------------------------  //
    let itemAddress =document.getElementById("resultAddress")
    itemAddress.innerHTML=formAddress;

    const deleteButton2=document.createElement("button")
    const editButton2=document.createElement("button")
    const toDoDiv2=document.getElementById("addressPara")

    const buttonGroup2 = document.createElement("div");
    buttonGroup2.className = "button-group";

    buttonGroup2.appendChild(deleteButton2)
    buttonGroup2.appendChild(editButton2)

    toDoDiv2.appendChild(buttonGroup2);
    editButton2.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;
    deleteButton2.innerHTML=`<i class="fa-solid fa-trash"></i>`;

    deleteButton2.addEventListener('click',()=>{
        toDoDiv2.remove()
    })

    editButton2.addEventListener('click',()=>{
        const input2 = document.createElement("input");
        input2.value = itemAddress.textContent;

        const saveButton2 = document.createElement("button");
        saveButton2.textContent = "Save";

        toDoDiv2.replaceChild(input2, itemAddress);
        toDoDiv2.replaceChild(saveButton2, buttonGroup2);

        saveButton2.addEventListener("click", () => {
            itemAddress.textContent = input2.value;
            toDoDiv2.replaceChild(itemAddress, input2);
            toDoDiv2.replaceChild(buttonGroup2, saveButton2);
            //sessionStorage.setItem("formAddress", input2.value);
            studentsData[studentId].formAddress = input2.value;
            sessionStorage.setItem("studentsData", JSON.stringify(studentsData));

        })
    })

    //-------------------phone-------------------------------------//
    let itemPhone =document.getElementById("resultPhone")
    console.log(formPhone)
    itemPhone.innerHTML=formPhone;

    const deleteButton3=document.createElement("button")
    const editButton3=document.createElement("button")
    const toDoDiv3=document.getElementById("phonePara")

    

    const buttonGroup3 = document.createElement("div");
    buttonGroup3.className = "button-group";

    buttonGroup3.appendChild(deleteButton3)
    buttonGroup3.appendChild(editButton3)

    toDoDiv3.appendChild(buttonGroup3);

    //deleteButton.innerHTML=`<i class="fa-solid fa-trash"></i>`
    deleteButton3.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    editButton3.innerHTML=`<i class="fa-solid fa-pen-to-square"></i>`;

    deleteButton3.addEventListener('click',()=>{
        toDoDiv3.remove()
    })

    editButton3.addEventListener('click',()=>{
        const input3 = document.createElement("input");
        input3.value = itemPhone.textContent;

        const saveButton3 = document.createElement("button");
        saveButton3.textContent = "Save";

        toDoDiv3.replaceChild(input3, itemPhone);
        toDoDiv3.replaceChild(saveButton3, buttonGroup3);

        saveButton3.addEventListener("click", () => {
            itemPhone.textContent = input3.value;
            toDoDiv3.replaceChild(itemPhone, input3);
            toDoDiv3.replaceChild(buttonGroup3, saveButton3);
            //sessionStorage.setItem("formPhone", input3.value);
            studentsData[studentId].formPhone = input3.value;
            sessionStorage.setItem("studentsData", JSON.stringify(studentsData));

        })
    })

}