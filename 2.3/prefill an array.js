function prefill(n, v) {
    if(typeof n === 'boolean' || !isFinite(n) || !Number.isInteger(Number(n)) || Number(n) < 0)
        throw new TypeError(n + " is invalid")
    arr = []
    arr.length = n
    arr.fill(v)
    return arr
}