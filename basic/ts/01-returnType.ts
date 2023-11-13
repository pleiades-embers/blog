

// type ReturnType<T> = T extends (...args:any) => infer R ? R : any



type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<<T>() => T>; // unknown
type T2 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
