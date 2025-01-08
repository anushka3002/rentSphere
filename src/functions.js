export function formattedDate(stringDate) {
    const date = new Date(stringDate); 
    const day = date.getDate(); 
    const month = date.toLocaleString("en-US", { month: "short" }); 
    return `${day} ${month}`;
}