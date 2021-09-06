export const toCamelCase = (string: []) => {
 //TODO: Convert and swap key from json response   
}

export const convertISOToDate = (dateAsIso: string) => {
    let date = new Date(dateAsIso);
    let year = date.getFullYear();
    let month = (date.getMonth()+1).toString();
    let dt = date.getDate().toString();

    if (Number(dt) < 10) {
        dt = '0' + dt;
    }
    
    if (Number(month) < 10) {
        month = '0' + month;
    }

    return year + '-' + month + '-' + dt    
}

