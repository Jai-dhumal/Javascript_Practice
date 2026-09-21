# JavaScript Practice – Day 3

## 📚 Topics Covered

Day 3 focuses on **loops, conditions, number logic, and pattern printing** in JavaScript.

The main goal is to understand the **core logic behind each problem**, not just memorize the code.

---

## 📝 Practice Problems

### 1. Check Prime

Check whether a given number is a prime number.

**Example:**

```text
Input: 7
Output: Prime
```

---

### 2. Print Primes from 1 to N

Print all prime numbers between `1` and `N`.

**Example:**

```text
Input: 20

Output:
2
3
5
7
11
13
17
19
```

---

### 3. Find GCD / HCF

Find the Greatest Common Divisor (GCD) or Highest Common Factor (HCF) of two numbers.

**Example:**

```text
Input: 12, 18
Output: 6
```

**Core idea:**
Find the largest number that divides both numbers completely.

---

### 4. Find LCM

Find the Least Common Multiple (LCM) of two numbers.

**Example:**

```text
Input: 12, 18
Output: 36
```

**Core idea:**
Find the smallest number that is divisible by both numbers.

---

### 5. Check Armstrong Number

Check whether a number is an Armstrong number.

**Example:**

```text
Input: 153

1³ + 5³ + 3³ = 153

Output: Armstrong Number
```

**Core concepts:**

* `% 10` → get the last digit
* `Math.floor(num / 10)` → remove the last digit
* Power of a digit

---

### 6. Count Prime Numbers up to N

Count how many prime numbers exist between `1` and `N`.

**Example:**

```text
Input: 10

Prime numbers:
2, 3, 5, 7

Output: 4
```

---

### 7. Print a Star Triangle

Print a right-angled star triangle.

**Output:**

```text
*
**
***
****
*****
```

**Core idea:**

* Outer loop → controls rows
* Inner loop → controls stars in each row

---

### 8. Print an Inverted Star Triangle

Print stars in decreasing order.

**Output:**

```text
*****
****
***
**
*
```

**Core idea:**
The number of stars decreases by one after every row.

---

### 9. Print a Number Triangle

Print numbers in a triangular pattern.

**Example:**

```text
1
12
123
1234
12345
```

**Core idea:**
Use nested loops where the inner loop prints numbers from `1` to the current row number.

---

### 10. Print Floyd's Triangle

Print consecutive numbers in a triangular format.

**Output:**

```text
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

**Core idea:**

* Outer loop → controls rows
* Inner loop → controls how many numbers are printed
* A separate variable keeps increasing continuously

---

## 🧠 Important Concepts Practiced

* `for` loops
* `while` loops
* Nested loops
* `if / else`
* `%` modulus operator
* `Math.floor()`
* Number manipulation
* Prime number logic
* GCD / HCF
* LCM
* Armstrong numbers
* Pattern printing
* Loop tracing

---

## 🎯 Day 3 Learning Goal

By the end of Day 3, I should be able to:

* Understand how to check whether a number is prime.
* Print and count prime numbers.
* Understand the difference between GCD and LCM.
* Extract digits from a number.
* Understand Armstrong number logic.
* Use nested loops for patterns.
* Understand how outer and inner loops work together.
* Trace a program manually before writing the code.

---

## 📂 Suggested File Structure

```text
Day-3/
│
├── 01_checkPrime.js
├── 02_printPrimes.js
├── 03_gcd.js
├── 04_lcm.js
├── 05_armstrong.js
├── 06_countPrimes.js
├── 07_starTriangle.js
├── 08_invertedStarTriangle.js
├── 09_numberTriangle.js
└── 10_floydTriangle.js
```

---

## 💡 Practice Rule

For every problem:

1. Understand the problem.
2. Write the core logic in simple words.
3. Dry run with a small example.
4. Write the JavaScript code.
5. Test with different inputs.
6. Only then move to the next problem.

**Focus on understanding the logic instead of memorizing the code.**

---

## 🚀 Progress

* [ ] Check Prime
* [ ] Print Primes from 1 to N
* [ ] Find GCD / HCF
* [ ] Find LCM
* [ ] Check Armstrong Number
* [ ] Count Prime Numbers up to N
* [ ] Print Star Triangle
* [ ] Print Inverted Star Triangle
* [ ] Print Number Triangle
* [ ] Print Floyd's Triangle

---

### Day 3 Status

**Practice Type:** JavaScript Fundamentals
**Main Focus:** Loops + Number Logic + Nested Loops + Patterns
**Difficulty:** Beginner
