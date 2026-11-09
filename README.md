# B8A1: Problem Solving with TypeScript and OOP

This repository contains the solutions for the B8A1 assignment on core TypeScript concepts from Modules 1, 2, and 3. All coding solutions are implemented in a single `solutions.ts` file, supported by two technical blog posts.

## Assignment Topics

The solution file covers:

1. Optional parameters and default behavior with `multiplyValue`
2. Union types and `typeof` narrowing with `processInput`
3. Readonly tuples with `formatCoordinate`
4. Generic rest parameters with `concatenateArrays`
5. Interfaces and non-mutating array filtering with `Course` and `getPopularCourses`
6. Generic `keyof` constraints with `pluckValues`
7. Classes, inheritance, and access modifiers with `Employee` and `Manager`
8. Promises, `async`/`await`, and delayed validation with `validateAgeAsync`

## Repository Contents

```text
.
├── solutions.ts
├── type-vs-interface.md
├── typescript-access-modifiers.md
└── README.md
```

### Coding Solution

[`solutions.ts`](solutions.ts) contains all eight required problems. The functions, interface, classes, methods, parameter types, and return types use the exact names and signatures specified in the assignment.

### Blog Posts

- [`type-vs-interface.md`](type-vs-interface.md) explains the differences between TypeScript `type` aliases and `interface` declarations and when to choose each.
- [`typescript-access-modifiers.md`](typescript-access-modifiers.md) explains `public`, `private`, `protected`, and `readonly` in TypeScript OOP.

## Running the TypeScript File

### Prerequisites

- Node.js
- TypeScript, installed globally or available through `npx`

This repository does not currently include a `package.json` or `tsconfig.json`, so the file can be checked directly with the TypeScript compiler:

```bash
npx tsc solutions.ts --target ES2019 --module commonjs --noEmit
```

To compile and run the generated JavaScript:

```bash
npx tsc solutions.ts --target ES2019 --module commonjs
node solutions.js
```
