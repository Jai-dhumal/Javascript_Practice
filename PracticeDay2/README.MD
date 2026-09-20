# JavaScript Practice – Day 2

This folder contains my **Day 2 JavaScript practice programs**.

The main focus of Day 2 was to strengthen my understanding of **loops, conditions, arithmetic operations, and basic number logic** in JavaScript.

## 📚 Programs Practiced

| No. | Program                    | Concept                            |
| --- | -------------------------- | ---------------------------------- |
| 1   | Print 1–100                | `for` loop                         |
| 2   | Print 100–1                | Reverse loop                       |
| 3   | Print Even Numbers up to N | Loop + condition                   |
| 4   | Print Odd Numbers up to N  | Loop + condition                   |
| 5   | Sum 1–N                    | Loop + accumulator                 |
| 6   | Sum Even Numbers up to N   | Loop + condition + sum             |
| 7   | Multiplication Table       | Loop + multiplication              |
| 8   | Factorial                  | Loop + multiplication              |
| 9   | Count Digits               | `while` loop + division            |
| 10  | Sum of Digits              | `%` operator + division            |
| 11  | Reverse a Number           | `%` operator + number manipulation |
| 12  | Check Palindrome Number    | Reverse + comparison               |

## 🧠 Concepts Learned

### 1. Loops

Practiced using:

```javascript
for
while
```

Loops help execute a block of code repeatedly.

### 2. `%` Modulus Operator

The `%` operator gives the **remainder**.

For example:

```javascript
57 % 10
```

gives:

```text
7
```

This is useful for getting the **last digit** of a number.

### 3. Dividing by 10

For number-based problems, dividing by 10 helps remove the last digit.

```javascript
Math.floor(n / 10)
```

Example:

```text
1234 → 123 → 12 → 1 → 0
```

### 4. Accumulator

Used a variable to continuously store a result.

Example:

```javascript
let sum = 0;

sum = sum + i;
```

This was used for problems such as:

* Sum 1–N
* Sum of even numbers
* Sum of digits

### 5. Number Manipulation

Practiced extracting and manipulating digits using:

```javascript
n % 10
Math.floor(n / 10)
```

This helped solve:

* Count digits
* Sum of digits
* Reverse a number
* Palindrome number

## 🔄 Important Number Pattern

One of the most important patterns learned today:

```javascript
let lastdigit = n % 10;
n = Math.floor(n / 10);
```

### Meaning

```text
n % 10
     ↓
Get the last digit

Math.floor(n / 10)
     ↓
Remove the last digit
```

For example:

```text
n = 1234

1234 % 10 → 4
1234 / 10 → 123

123 % 10 → 3
123 / 10 → 12

12 % 10 → 2
12 / 10 → 1

1 % 10 → 1
1 / 10 → 0
```

This pattern is useful for many number-based programming problems.

## 🎯 Day 2 Goal

The goal of this practice session was not just to write the programs, but to understand the **logic behind each program** and become comfortable with:

* Loops
* Conditions
* Counters
* Accumulators
* `%` operator
* Integer division
* Number manipulation
* Comparing values

## 📁 Folder Structure

```text
Day-2/
│
├── print1to100.js
├── print100to1.js
├── evenNumbers.js
├── oddNumbers.js
├── sum1toN.js
├── sumEven.js
├── multiplicationTable.js
├── factorial.js
├── countDigits.js
├── sumOfDigits.js
├── reverseNumber.js
├── palindromeNumber.js
└── README.md
```

> **Note:** The filenames above are examples. My actual filenames may be different.

## 🚀 Practice Purpose

This folder is created for **learning and practice purposes**.

The programs are written while learning JavaScript fundamentals and are part of my daily coding practice.

I will continue adding more JavaScript practice programs as I progress.

---

**Day 2 completed ✅**
