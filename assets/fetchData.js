import flashMessage from "./function.js";
const url = 'http://localhost:3000/data'

async function getdata() {
   return fetch(url)
        .then(response => response.json())
        .then(getData => getData)
}

async function getDataById(id){
    return fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => data);
}

async function createNewData(data){
    return fetch(url,{
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(respose => respose.json())
        .then(function(data){
            flashMessage('Success', `Berhasil tambah ${data.email}`, 'success')
            return data;
        })
        .catch(function(err){
            flashMessage('Error', `Gagal ${err}`, 'success')
        })
}


export {getdata, createNewData, getDataById};