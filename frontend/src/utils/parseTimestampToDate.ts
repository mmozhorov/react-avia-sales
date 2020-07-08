export default ( date: string ) => {
    const desiredDate = new Date(date);
    const day = desiredDate.getDay() + 1;
    const month = desiredDate.getMonth() + 1;
    const year = desiredDate.getFullYear();
    return `${day}.${month}.${year}`;
}