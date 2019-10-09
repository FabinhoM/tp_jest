const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('Total Count', function () {

    test('Count 10 Books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(10)
        };
        const repository = new BookRepository(dbMock);
        
        expect(repository.getTotalCount()).toBe(10);
    });
});

describe('Total Price', function () {

    test('Total price of 4 books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([4.8, 10.2, 5.0, 2.5])
        };
        const repository = new BookRepository(dbMock);
        
        expect(repository.getTotalPrice()).toBe(22.5);
    });
});
