import { looseShallowEqual } from '..'

test.each([
  [
    { a: 0, b: 'text', c: null, d: undefined },
    { a: 0, b: 'text', c: null, d: undefined },
    true,
  ],
  [
    { a: 0, b: 'text', c: null, d: null },
    { a: 0, b: 'text', c: null, d: undefined },
    false,
  ],
  [
    { a: 0, b: 'text', c: null, d: undefined },
    { a: 0, b: 'text', c: null },
    true,
  ],
  [
    { a: 0, b: 'text', c: null, d: undefined },
    { a: 0, b: 'text', d: undefined },
    false,
  ],
  [{ a: 0, b: 'text', c: null }, { a: 0, b: 'text', d: undefined }, false],
  [{ a: 0, b: 'text', c: null, d: undefined }, undefined, false],
])('%p, %p => %p', (a, b, expected) =>
  expect(looseShallowEqual(a, b)).toBe(expected),
)
