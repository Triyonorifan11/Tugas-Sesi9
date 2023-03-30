import { loader, dataRow, clearTable } from "./templates.js";
import { getdata, createNewData, getDataById, updateData, deleteData } from "./fetchData.js";
import { format_date } from "./function.js";

const tableData = document.querySelector('#TableData');
const dateTime = document.getElementById('dateTime');
const time = document.getElementById('time');
const form_new_data = document.getElementById('form_new_data');
const modal_title = document.querySelector('.modal-title');
const name_detail = document.getElementById("name");
const username_detail = document.getElementById("username");
const email_detail = document.getElementById("email");
const website_detail = document.getElementById("website");
const input_id_user = document.getElementById("id_user");
const btn_new = document.querySelector('#btn_new');
const btn_save = document.querySelector('#btn_save');


function refreshTime() {
    let date = new Date();
    let jam = `${("0" + date.getHours()).slice(-2)} : ${("0" + date.getMinutes()).slice(-2)} : ${("0" + date.getSeconds()).slice(-2)} WIB`
    date.toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
    time.innerHTML = jam;
}

setInterval(refreshTime, 1000);

tableData.innerHTML = loader();
const date_now = new Date();
dateTime.innerHTML = format_date(date_now);

// read data and append to row table
const data = await getdata();
tableData.innerHTML = clearTable()
data.forEach(item => {
    tableData.innerHTML += dataRow(item)
});

// initioal btn action column
const btn_detail = document.querySelectorAll('#btn_detail');
const btn_edit = document.querySelectorAll('#btn_edit');
const btn_delete = document.querySelectorAll('#btn_delete');

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

// untuk edit data
btn_edit.forEach((btnEdit) => {
    btnEdit.addEventListener('click', async function (e) {
        e.preventDefault();
        const id_user = btnEdit.getAttribute('data-id-user')
        const data = await getDataById(id_user);
        modal_title.innerHTML = "Edit User"
        name_detail.value = data.name;
        username_detail.value = data.username;
        email_detail.value = data.email;
        website_detail.value = data.website;
        input_id_user.value = id_user;
        btn_save.classList.remove('d-none');
    })
})

// for delete data
btn_delete.forEach((btnDelete) => {
    btnDelete.addEventListener('click', async function (e) {
        e.preventDefault();
        const id_user = btnDelete.getAttribute('data-id-user')
        const data = await getDataById(id_user);
        Swal.fire({
            title: `Hapus data ${data.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Hapus',
            confirmButtonColor: '#dc3545',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteData(data);
            }
        })
    })
})

// submit create, edit data
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

    if (modal_title.innerHTML == "Create New") {
        await createNewData(sendData);
    } else if (modal_title.innerHTML == "Edit User") {
        sendData.id = input_id_user.value
        await updateData(sendData);
    }
})

btn_new.addEventListener('click', function (e) {
    e.preventDefault();
    modal_title.innerHTML = "Create New"
    name_detail.value = '';
    username_detail.value = '';
    email_detail.value = '';
    website_detail.value = '';
    btn_save.classList.remove('d-none');
})


$('#Data').DataTable({
    columnDefs: [{
        targets: 'no-sort',
        orderable: false
    }]
})