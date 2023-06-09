import { flashMessage } from "./function.js";
const url = 'http://localhost:3000/data'

// get all data
async function getdata() {
    return fetch(url)
        .then(response => response.json())
        .then(getData => getData)
}

// get data by id
async function getDataById(id) {
    return fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => data);
}

// update/edit data
async function updateData(data) {
    const id = data.id;
    return fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(respose => respose.json())
        .then(function (data) {
            flashMessage('Success', `Berhasil Edit ${data.email}`, 'success')
            
        })
        .catch(function (err) {
            flashMessage('Error', `Gagal ${err}`, 'success')
        })
}

// create new data
async function createNewData(data) {
    return fetch(url, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(respose => respose.json())
        .then(function (data) {
            flashMessage('Success', `Berhasil tambah ${data.email}`, 'success')

        })
        .catch(function (err) {
            flashMessage('Error', `Gagal ${err}`, 'error')
        })
}

// delete Data
async function deleteData(data) {
    const id = data.id;
    return fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(respose => respose.json())
        .then(function () {
            flashMessage('Success', `Berhasil Hapus Data`, 'success')
        })
        .catch(function (err) {
            flashMessage('Error', `Gagal ${err}`, 'success')
        })
}


export { getdata, createNewData, getDataById, updateData, deleteData };