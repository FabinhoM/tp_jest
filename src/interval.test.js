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
        test('interval1 overlap interval4', () => {
            expect(interval1.overlaps(interval4)).toBe(true);
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
        test('interval1 is not includes the interval4', () => {
            expect(interval4.includes(interval1)).toBe(false);
        });
    
        test('interval1 is not includes in interval2', () => {
            expect(interval2.includes(interval1)).toBe(false);
        });

        test('interval1 is not includes in interval3', () => {
            expect(interval3.includes(interval1)).toBe(false);
        });
    });

    describe('union', function () {
        test('Union if overlaps true', () => {
            expect(interval1.union(interval2)).toStrictEqual([new Interval(5,15)]);
        });
        test('Union if overlaps true', () => {
            expect(interval2.union(interval1)).toStrictEqual([new Interval(5,15)]);
        });
        test('Union if overlaps false', () => {
            expect(interval1.union(interval3)).toStrictEqual([new Interval(5,10), new Interval(12,13)]);
        });
        test('Union if overlarps false', () => {
            expect(interval3.union(interval1)).toStrictEqual([new Interval(5,10), new Interval(12,13)]);
        });
        test('Union if overlaps true + intervale1 include interval4', () => {
            expect(interval1.union(interval4)).toStrictEqual([new Interval(5,10)]);
        });
        test('Union if overlaps true + intervale1 include interval4', () => {
            expect(interval4.union(interval1)).toStrictEqual([new Interval(5,10)]);
        });


    });

    describe('intersection', function () {
        test('Intersection should be [8,10] ', () => {
            expect(interval1.intersection(interval2)).toStrictEqual([new Interval(8,10)]);
        });
        test('Intersection should be [10,8] ', () => {
            expect(interval2.intersection(interval1)).toStrictEqual([new Interval(8,10)]);
        });
        test('Intersection should be [] ', () => {
            expect(interval1.intersection(interval3)).toStrictEqual([]);
        });
        test('Intersection should be [6,9] ', () => {
            expect(interval1.intersection(interval4)).toStrictEqual([new Interval(6,9)]);
        });
        test('Intersection should be [6,9] ', () => {
            expect(interval4.intersection(interval1)).toStrictEqual([new Interval(6,9)]);
        });
        test('Intersection should be [] ', () => {
            expect(interval3.intersection(interval1)).toStrictEqual([]);
        });


    });

    describe('exclusion', function () {
        test('exclusion should be [5,8] and [10,15]', () => {
            expect(interval1.exclusion(interval2)).toStrictEqual([new Interval(5,8), new Interval(10,15)]);
        });
        test('exclusion should be [5,8] and [10,15]', () => {
            expect(interval2.exclusion(interval1)).toStrictEqual([new Interval(5,8), new Interval(10,15)]);
        });
        test('exclusion should be [5,10] [12,13] ', () => {
            expect(interval1.exclusion(interval3)).toStrictEqual([new Interval(5,10), new Interval(12,13)]);
        });
        test('exclusion should be [5,10] [12,13] ', () => {
            expect(interval3.exclusion(interval1)).toStrictEqual([new Interval(5,10), new Interval(12,13)]);
        });
        test('exclusion should be [5,6] [9,10]', () => {
            expect(interval1.exclusion(interval4)).toStrictEqual([new Interval(5,6), new Interval(9,10)]);
        });
        test('exclusion should be [5,6] [9,10]', () => {
            expect(interval4.exclusion(interval1)).toStrictEqual([new Interval(5,6), new Interval(9,10)]);
        });

    });