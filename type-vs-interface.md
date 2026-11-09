# TypeScript `type` vs `interface`: Core Differences and When to Use Each

## Introduction

Every TypeScript developer eventually asks whether to write `type` or `interface`. Both describe the shape of data, and for simple objects they look nearly identical. However, they differ in important ways that affect flexibility and maintainability. Understanding those differences helps you pick the right tool instead of choosing by habit.

## Body

**Extending and merging.** Interfaces extend other interfaces using `extends`, and they support declaration merging, meaning two declarations with the same name combine automatically. Type aliases cannot merge; they use intersections instead.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
} // merged: { name; age }

type Admin = { role: string };
type SuperUser = Admin & { level: number };
```

**Flexibility.** A `type` alias can represent unions, primitives, tuples, and mapped types. An `interface` can only describe object shapes.

```typescript
type ID = string | number;
type Point = [number, number];
type Status = 'active' | 'inactive';
type Readonly<T> = { readonly [K in keyof T]: T[K] };
```

**Classes.** Classes can implement either one, but interfaces are the conventional choice for defining class contracts.

```typescript
interface Logger {
  log(msg: string): void;
}

class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg);
  }
}
```

**Error messages and performance.** Interfaces often produce clearer error messages and can be faster for the compiler when extended heavily.

## Conclusion

Use `interface` for object shapes, public APIs, and class contracts, especially when merging or extension may be needed. Choose `type` for unions, tuples, primitives, and advanced type transformations. Above all, stay consistent within your codebase, since either choice works well when applied thoughtfully.
