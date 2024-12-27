import { describe, it } from 'node:test';
import assert from 'node:assert';
import { validateUrl } from '../src/validate-url.js';

describe('YouTube', () => {
    it('validateUrl should work', () => {
        assert(validateUrl('https://www.youtube.com'), true)
        assert(validateUrl('https://www.google.com'), true)
        assert(validateUrl('http://www.something.com'), true)
    });
});