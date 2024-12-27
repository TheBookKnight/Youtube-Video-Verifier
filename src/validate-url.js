module.exports = {
    validateUrl: function (input) {
        if (typeof input === 'string') {
            return input.includes('http://') || input.includes('https://');
        }
        return false;
    }
};