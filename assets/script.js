import { loader, dataRow, clearTable } from "./templates.js";
import { getdata, createNewData, getDataById } from "./fetchData.js";
import { format_date } from "./function.js";

const tableData = document.querySelector('#TableData');
const dateTime = document.getElementById('dateTime');
const form_new_data = document.getElementById('form_new_data');
const modal_title = document.querySelector('.modal-title');
const name_detail = document.getElementById("name");
const username_detail = document.getElementById("username");
const email_detail = document.getElementById("email");
const website_detail = document.getElementById("website");
const btn_new = document.querySelector('#btn_new');
const btn_save = document.querySelector('#btn_save');


tableData.innerHTML = loader();
const date_now = new Date();
dateTime.innerHTML = format_date(date_now);


const data = await getdata();
tableData.innerHTML = clearTable()
data.forEach(item => {
    tableData.innerHTML += dataRow(item)
});

const btn_detail = document.querySelectorAll('#btn_detail');
// show detail data by id
btn_detail.forEach((btnDetail) => {
    btnDetail.addEventListener('click', async function (e) {
        e.preventDefault();
        const id_user = btnDetail.getAttribute('data-id-user')
        const data = await getDataById(id_user);
        modal_title.innerHTML = "Detail User"
        name_detail.value = data.name;
        username_detail.value = data.username;
        email_detail.value = data.email;
        website_detail.value = data.website;
        btn_save.classList.add('d-none');
        
    })
})

// submit create data
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
    if (result) {
        e.preventDefault()
    }
})

btn_new.addEventListener('click', function(e){
    e.preventDefault();
    modal_title.innerHTML = "Create New"
    name_detail.value = '';
    username_detail.value = '';
    email_detail.value = '';
    website_detail.value = '';
    btn_save.classList.remove('d-none');
})