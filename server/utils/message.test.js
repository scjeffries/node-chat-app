const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Scott';
        const text = 'I need a nap.';
        const message = generateMessage(from, text);
        expect(message).toInclude({ from, text });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        const from = 'Scott';
        const latitude = '40.968966099999996';
        const longitude = '-81.3140454';
        const message = generateLocationMessage(from, latitude, longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(message.createdAt).toBeA('number');
    });
});