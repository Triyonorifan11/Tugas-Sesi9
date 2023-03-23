import { loader, dataRow, clearTable } from "./templates.js";
import { getdata, createNewData } from "./fetchData.js";

const tableData = document.querySelector('#TableData');
const form_new_data = document.getElementById('form_new_data');

tableData.innerHTML = loader()

const data = await getdata();
tableData.innerHTML = clearTable()
data.forEach(item => {
    tableData.innerHTML += dataRow(item)
});


form_new_data.addEventListener('submit', async function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;

    const sendData = {
        name,
        username,
        email,
        website
    };

    const result = await createNewData(sendData)
    if(result){
        e.preventDefault()
    }
})

