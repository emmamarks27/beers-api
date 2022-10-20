function toSnakeCase(str) {
    return str.split(" ").map(word => word.toLowerCase()).join("_");
}

module.exports = { toSnakeCase }
