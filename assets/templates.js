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

const dataRow = (element) =>  `
<tr>
    <td>${element.id}</td>
    <td>${element.name}</td>
    <td>${element.username}</td>
    <td>${element.email}</td>
    <td>${element.website}</td>
    <td>
        <button type="button" class="btn btn-secondary btn-sm" data-bs-toggle="modal" data-is-user="${element.id}" data-bs-target="#exampleModal">
            Info
        </button>
    </td>
</tr>
`;

const clearTable = () => ``

export {loader, clearTable, dataRow};