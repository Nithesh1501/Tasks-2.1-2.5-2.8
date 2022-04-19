Object.prototype.hash = function (string) {
    try {
        return eval(`this.${string}`)
    }
    catch (e) {
        return undefined
    }
}

