import { describe, it } from 'node:test';
import assert from 'node:assert';
import { isUrl } from '../src/is-url.js';

describe('validateUrl', () => {
    it('should return true for valid urls', () => {
        assert(isUrl('https://www.youtube.com'), true)
        assert(isUrl('https://www.google.com'), true)
        assert(isUrl('http://www.something.com'), true)
    });

    it('should return false for invalid urls', () => {
        assert.equal(isUrl(''), false)
        assert.equal(isUrl(123), false)
        assert.equal(isUrl('url'), false)
    });
});