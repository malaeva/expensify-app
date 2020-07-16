const { TestScheduler } = require("jest");

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDay = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDay = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//
//
//
// tests

test('should generate set start date action object', () => {
    const action = setStartDay('0');
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: '0'
    })
});

test('should generate set start date action object', () => {
    const action = setEndDay('0');
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: '0'
    })
});

test('should generate set text filter objext with text value', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate set text filter object with default text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
});

test('should generate action object sortByDate', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
});

test('should generate action object sortByAmount filter', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
});