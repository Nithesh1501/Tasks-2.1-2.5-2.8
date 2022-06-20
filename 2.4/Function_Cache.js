const cache = func => {
    const mem = {};
    return (...a) => {
        let args = JSON.stringify(...a);
        return mem.hasOwnProperty(args) ? mem[args] : mem[args] = func(...a);
    }
};
