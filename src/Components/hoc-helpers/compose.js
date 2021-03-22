const compose = (...funcs) => (component)  => {
    return funcs.reduceRight((prev, fn) => fn(prev), component)
}

export default compose;