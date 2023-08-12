import { millisecondsToMinutes } from './milliseconds-to-minutes';

describe('MillisecondsToMinutes tests', () => {
	it('expect 1000ms to be 00:01', () => {
		const res = millisecondsToMinutes(1000);
		expect(res).toEqual('00:01');
	});
	it('expect 10000ms to be 00:10', () => {
		const res = millisecondsToMinutes(10000);
		expect(res).toEqual('00:10');
	});

	it('expect 60000ms to be 01:00', () => {
		const res = millisecondsToMinutes(60000);
		expect(res).toEqual('01:00');
	});
	it('expect 600000ms to be 10:00', () => {
		const res = millisecondsToMinutes(600000);
		expect(res).toEqual('10:00');
	});

	it('expect 36000000ms to be 10:00:00', () => {
		const res = millisecondsToMinutes(36000000);
		expect(res).toEqual('10:00:00');
	});
});
