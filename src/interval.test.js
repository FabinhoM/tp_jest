const Interval = require('./interval');

var interval1 = new Interval(5, 10);
var interval2 = new Interval(8, 15);
var interval3 = new Interval(12, 13);
    
    describe('overlaps', function () {
        test('interval1 overlap the interval2', () => {
            expect(interval1.overlaps(interval2)).toBe(true);
        });
    
        test('interval1 do not overlap interval3', () => {
            expect(interval1.overlaps(interval3)).toBe(false);
        });
    });
