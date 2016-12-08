import test from 'ava';
import fibonacciSequence from '../lib/fibonacciSequence';

test('first 2', (t) => {
    t.deepEqual(
        fibonacciSequence(2),
        [1, 1]
    );
});

test('first 3', t => {
    t.deepEqual(
        fibonacciSequence(3),
        [1, 1, 2]
    );
});

test('first 1', function(t) {
    t.deepEqual(
        fibonacciSequence(1),
        [1]
    );
});

test('first 0', function(t) {
    t.deepEqual(
        fibonacciSequence(0),
        []
    );
});
