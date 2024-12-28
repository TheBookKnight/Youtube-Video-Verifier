export const isYoutube = (input) => {
    return input.includes('youtube.com') // for long urls
        || input.includes('youtu.be'); // for short urls
};