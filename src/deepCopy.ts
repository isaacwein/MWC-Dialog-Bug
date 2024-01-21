export function deepCopy(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (hash.has(obj)) {
        return hash.get(obj);
    }

    // Start with a shallow copy
    let result = Array.isArray(obj) ? [...obj] : {...obj};
    hash.set(obj, result);

    // Deep copy for each property
    Object.keys(result).forEach(key => {
        result[key] = typeof result[key] === 'object' ? deepCopy(result[key], hash) : result[key];
    });

    return result;
}
