type Transform<A> = A extends Promise<infer Inner> ? Inner : never
type Result = Transform<Promise<string>> // Result is string type

type InsideArray<A> = A extends Array<infer Inside> ? Inside : never
type Str = InsideArray<Array<string>>; // Str is string