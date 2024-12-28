import { describe, it } from 'node:test';
import assert from 'node:assert';
import { verifyYoutubeVideo } from '../index.js';

describe('verifyYoutubeVideo', () => {
    it('should return true if it is a working Youtube video url', () => {
        assert(verifyYoutubeVideo('https://www.youtube.com/watch?v=k4Xx0k_TVY0'), true)
    });

    it('should return true if it is a working, shortened Youtube video url', () => {
        assert(verifyYoutubeVideo('https://youtu.be/k4Xx0k_TVY0?si=KQzFRngjTV-1s7ER'), true)
    });

    it('should return false if it is not a working Youtube video url', () => {
        assert.equal(verifyYoutubeVideo('https://rumble.com/'), false)
    });
});