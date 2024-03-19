function hello() {
    let text = findLine.value;

    if (text.length === 0) {
        fetch("http://[::1]:3000")
            .then(response => response.json())
            .then(user => returnData(user))
            .catch(error => console.log(error))
    } else {
        fetch("http://[::1]:3000?term=" + text)
            .then(response => response.json())
            .then(user => returnData(user))
            .catch(error => console.log(error))
    }
}

function returnData(data) {
    let container = document.getElementById("container");
    container.innerHTML = '';

    for (let i = 0; i < data.length; ++i) {
        let section = document.createElement('section');
        section.className = "test";
        section.onclick = function () {Test(data[i])};

        let firstLine = document.createElement('p');
        firstLine.className = "name";
        firstLine.innerHTML = data[i].name;

        let info = document.createElement("section");
        info.className = "info";

        let number = document.createElement("section");
        number.className = "number";
        number.innerHTML="<img src='./image/phoneIcon.svg'>";

        let numberText = document.createElement("p");
        numberText.className = "numberText";
        numberText.innerHTML = data[i].phone;

        let email = document.createElement("section");
        email.className = "email";
        email.innerHTML="<img src='./image/emailIcon.svg'>";

        let emailText = document.createElement("p");
        emailText.className = "emailText";
        emailText.innerHTML = data[i].email;

        number.appendChild(numberText);
        info.appendChild(number)

        email.appendChild(emailText);
        info.appendChild(email);

        section.appendChild(firstLine)
        section.appendChild(info)

        container.appendChild(section);
    }
}

function Test(data) {
    console.log(data);
    let container = document.getElementById("main");

    let dialog = document.createElement("dialog");
    dialog.ariaLabel = "allInfo";
    dialog.className = "dialog";
    dialog.ariaModal = true;

    let info = document.createElement("section");
    info.className = "info";

    let firstLine = document.createElement("section")
    firstLine.className = "firstLine"

    let name = document.createElement("p");
    name.innerHTML = data.name;
    name.className = "name";

    let close= document.createElement("section");
    close.innerHTML="<img src='./image/closeIcon.svg'>";
    close.onclick = function() {dialog.close()};
    close.className = "close";

    let mainInfo = document.createElement("section");
    mainInfo.className = "mainInfo";

    let number = document.createElement("p");
    number.innerHTML = "Телефон:";
    let numberText = document.createElement("p");
    numberText.innerHTML = data.phone;

    let email = document.createElement("p");
    email.innerHTML = "Почта:";
    let emailText = document.createElement("p");
    emailText.innerHTML = data.email;

    let hire_date = document.createElement("p");
    hire_date.innerHTML = "Дата приема:";
    let hire_dateText = document.createElement("p");
    hire_dateText.innerHTML = data.hire_date;

    let position_name
        = document.createElement("p");
    position_name
        .innerHTML = "Должность";
    let position_nameText = document.createElement("p");
    position_nameText.innerHTML = data.position_name;

    let department = document.createElement("p");
    department.innerHTML = "Дополнительная информация:";
    let departmentText = document.createElement("p");
    departmentText.innerHTML = data.department;

    mainInfo.appendChild(number);
    mainInfo.appendChild(numberText);
    mainInfo.appendChild(email);
    mainInfo.appendChild(emailText);
    mainInfo.appendChild(hire_date);
    mainInfo.appendChild(hire_dateText);
    mainInfo.appendChild(position_name);
    mainInfo.appendChild(position_nameText);
    mainInfo.appendChild(department);
    mainInfo.appendChild(departmentText);

    firstLine.appendChild(name);
    firstLine.appendChild(close);
    info.appendChild(firstLine);
    info.appendChild(mainInfo);

    dialog.appendChild(info);

    container.appendChild(dialog);
    dialog.showModal();
}