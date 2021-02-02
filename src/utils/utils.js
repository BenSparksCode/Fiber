const currency = require('currency.js')

export const shortenHash = (hash) => {
    if (!hash) return null
    return hash.substring(0, 6) + "..." + hash.substring(hash.length - 6)
}

export const formatBlockNum = (blockNum) => {
    if (!blockNum) return null
    return currency(blockNum, { symbol: "", separator: " ", precision: 0 }).format()
}

export const currencyFormat = (amount) => {
    if (!amount) amount = 0
    return currency(amount, { symbol: "$", separator: " ", precision: 0 }).format()
}

export const getCardDate = (date) => {
    if (!date) return null
    const options = {
        year: 'numeric', month: 'short', day: 'numeric',
    }
    return Intl.DateTimeFormat('en-GB', options).format(date)
} 

export const getCardTime = (date) => {
    if (!date) return null
    const options = {
        hour: 'numeric', minute: 'numeric',
        hour12: false,
    }
    return Intl.DateTimeFormat(navigator?.languages[0] ?? 'en-GB', options).format(date)
} 
