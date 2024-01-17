export function capitalize(str) {
    if(str !== undefined) {
        return str[0].toUpperCase() + str.slice(1,str.length)
    }
    return str
}

