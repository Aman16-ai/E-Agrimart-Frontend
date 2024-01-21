export function capitalize(str) {
    if(str !== undefined) {
        return str[0].toUpperCase() + str.slice(1,str.length)
    }
    return str
}

export function indianFormattedString(str) {
    if(str !== undefined) {
        return str.toLocaleString('en-IN')
    }
}

export function getFallBackString(str) {
    if(str !== undefined) {
        return str[0]?.toUpperCase()
    }
}