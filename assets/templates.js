// for loading in row table
const loader = () => `
<tr>
    <td colspan="6" class="px-2">
        <div class="d-flex align-items-center px-5">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>
    </td>
</tr>
`

// insert data in row
const dataRow = (element) => `
<tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.website}</td>
    <td>
        <button type="button" class="btn btn-secondary btn-sm" title="detail data" id="btn_detail" data-bs-toggle="modal" data-id-user="${element.id}" data-bs-target="#exampleModal">
            <i class="bi bi-info-circle"></i>
        </button>
        <button type="button" class="btn btn-info btn-sm" title="edit data" id="btn_edit" data-bs-toggle="modal" data-id-user="${element.id}" data-bs-target="#exampleModal">
            <i class="bi bi-pencil-square"></i>
        </button>
        <button type="button" class="btn btn-danger btn-sm" title="hapus data" id="btn_delete"  data-id-user="${element.id}">
            <i class="bi bi-trash"></i>
        </button>
    </td>
</tr>
`;

const clearTable = () => ``

export { loader, clearTable, dataRow };