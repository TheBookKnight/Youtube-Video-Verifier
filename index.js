module.exports = {
    "yt-verify": function (input) {
        input = input.trim();
        return typeof input === "string";
    }
}