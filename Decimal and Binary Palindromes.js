function palindromeType(n) {
    let str = String(n)
    let revOfStr = [...str].reverse().join("")
    let bin = n.toString(2)
    let revOfBin = [...bin].reverse().join("")
    if (str === revOfStr && bin === revOfBin) return "Decimal and binary."
    if (str === revOfStr) return "Decimal only."
    if (bin === revOfBin) return "Binary only."
    return "Neither!"
}
