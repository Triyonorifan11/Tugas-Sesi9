function flashMessage(title, text, icon) {
    Swal.fire({
        title,
        text,
        icon
    })
}

function format_date(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const dateTemp = new Date(date);
    return dateTemp.toLocaleDateString("id-ID", options);
}

export { flashMessage , format_date}