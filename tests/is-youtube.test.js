import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isYoutube } from '../src/is-youtube.js';

describe('isYoutube', () => {
    it('should return true if it is a Youtube Url', () => {
        assert(isYoutube('https://www.youtube.com'), true)
        assert(isYoutube('https://www.youtube.com/watch?v=k4Xx0k_TVY0'), true)
    });

    it('should return true if it is a shortened Youtube Url', () => {
        assert(isYoutube('https://youtu.be/k4Xx0k_TVY0?si=KQzFRngjTV-1s7ER'), true)
    });

    it('should return false if it is not a Youtube Url', () => {
        assert.equal(isYoutube('http://www.something.com'), false)
        assert.equal(isYoutube('https://rumble.com/'), false)
    });
});