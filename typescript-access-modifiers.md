# Access Modifiers in TypeScript OOP: public, private, protected, and readonly

## Introduction

Access modifiers control who can see and change the members of a class. They support encapsulation, a core principle of object-oriented programming, by hiding internal details and exposing only a safe interface. TypeScript offers `public`, `private`, `protected`, and `readonly`, and it enforces them at compile time.

## Body

**public** is the default. Public members are accessible from anywhere.

**private** restricts access to the declaring class only.

```typescript
class Account {
  public owner: string;
  private balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
}

const acc = new Account('Sam', 100);
acc.balance = 500; // Error: 'balance' is private
```

**protected** allows access inside the class and its subclasses, but not from outside.

```typescript
class Person {
  protected id = 1;
}

class Employee extends Person {
  showId() {
    return this.id;
  } // OK
}

new Employee().id; // Error: 'id' is protected
```

**readonly** allows a property to be set only at declaration or in the constructor.

```typescript
class Config {
  readonly version: string;
  constructor(v: string) {
    this.version = v;
  }
}

new Config('1.0').version = '2.0'; // Error: read-only
```

Parameter properties shorten this: `constructor(private readonly name: string) {}`.

## Conclusion

Use `private` to hide internals, `protected` to share them with subclasses, `public` for your intended API, and `readonly` for values that should never change. Note that these checks exist only at compile time, so use `#field` when you need true runtime privacy.
