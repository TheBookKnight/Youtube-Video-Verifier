import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateUrl } from '../src/validate-url.js';

describe('YouTube', () => {
    it('validateUrl should return true for valid urls', () => {
        assert(validateUrl('https://www.youtube.com'), true)
        assert(validateUrl('https://www.google.com'), true)
        assert(validateUrl('http://www.something.com'), true)
    });

    it('validateUrl should return false for invalid urls', () => {
        assert.equal(validateUrl(''), false)
        assert.equal(validateUrl(123), false)
        assert.equal(validateUrl('url'), false)
    });
});