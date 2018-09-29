// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {}
    if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange" }
    var current = currency
    var arr = [{ name: "H", value: 50 }, { name: "Q", value: 25 }, { name: "D", value: 10 }, { name: "N", value: 5 }, { name: "P", value: 1 }]
    arr.forEach(function (e) {
        var num = Math.floor(current / e.value)
        if (num >= 1) {
            current = current - num * e.value
            result[e.name] = num
        }
    })
    return result


































}
