import { validateUrl } from './src/validate-url.js';
import { isYoutube } from './src/is-youtube.js';

const listOfVerifications = [
    validateUrl,
    isYoutube,
];

export const verifyYoutubeVideo = (input) => {
    input = input.trim();
    for (const verification of listOfVerifications) {
        if (!verification(input)) {
            return false;
        }
    }
    return true;
}