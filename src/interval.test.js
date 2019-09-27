const Interval = require('./interval');

var interval1 = new Interval(5, 10);
var interval2 = new Interval(8, 15);
var interval3 = new Interval(12, 13);
var interval4 = new Interval(6, 9);

    describe('overlaps', function () {
        test('interval1 overlap the interval2', () => {
            expect(interval1.overlaps(interval2)).toBe(true);
        });
    
        test('interval1 do not overlap interval3', () => {
            expect(interval1.overlaps(interval3)).toBe(false);
        });
    });

    describe('includes', function () {
        test('interval4 is includes the interval1', () => {
            expect(interval1.includes(interval4)).toBe(true);
        });
    
        test('interval2 is not includes in interval1', () => {
            expect(interval1.includes(interval2)).toBe(false);
        });

        test('interval3 is not includes in interval1', () => {
            expect(interval1.includes(interval3)).toBe(false);
        });
    });

    describe('union', function () {
        test('Union if overlaps true', () => {
            expect(interval1.union(interval2)).toStrictEqual([new Interval(5,15)]);
        });
        test('Union if overlaps false', () => {
            expect(interval1.union(interval3)).toStrictEqual([new Interval(5,10), new Interval(12,13)]);
        });

    });