export function formatDate(inputDate) {
    const date = new Date(inputDate);
    
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    
    const formattedDate = `${month}/${day}/${year} ${formattedHours}:${minutes.toString().padStart(2, '0')} ${amOrPm}`;
    
    return formattedDate;
}