export type NoDistribute<T> = T & {};

// type Wrapped<T> = NoDistribute<T> extends [boolean] ? 'Y' : 'N';

type CompareUnion<T, U> = [T] extends [U] ? true : false;

type CompareRes1 = CompareUnion<1 | 2, 1 | 2 | 3>; // true
type CompareRes2 = CompareUnion<1 | 2, 1>; // false
