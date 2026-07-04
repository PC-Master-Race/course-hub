---
layout: lesson
title: "Creating Simple Formulas"
topic: "excel-1"
last_updated: 2026-07-02
youtube_id: "JUp8B2r7zD8"
practice_files:
  - name: "Weekly Grocery Budget Spreadsheet"
    filename: "sample_budget.xlsx"
    format: "Excel Workbook (.xlsx)"
---

The real power of Excel comes from its ability to perform math automatically. In Excel, a mathematical equation is called a **Formula**.

By using formulas, you can add, subtract, multiply, and divide numbers in a flash.

---

## The Golden Rule: Start with `=`

Every single formula in Excel must begin with an **equals sign (`=`)**. 
If you forget the equals sign, Excel will just treat your formula as plain text and won't do the math.

- **Incorrect:** `5 + 10` (Excel will just show the text "5 + 10")
- **Correct:** `=5 + 10` (Excel will calculate and display `15`)

---

## Using Cell References

Instead of typing numbers directly into your formulas, you should use **cell references** (the cell names). This tells Excel to look at whatever number is inside that cell. If that number changes, the formula automatically updates!

Let's look at an example:
- If cell **A1** contains `10` and cell **A2** contains `15`.
- In cell **A3**, you type: `=A1+A2`
- Cell **A3** will display **25**.
- If you change the number in **A1** from `10` to `20`, cell **A3** will instantly update to show **35**!

---

## Basic Math Operators

Excel uses standard keyboard keys for math operations:
- **Addition (`+`)**: Adds cells (e.g. `=A1+A2`)
- **Subtraction (`-`)**: Subtracts cells (e.g. `=A1-A2`)
- **Multiplication (`*`)**: Multiplies cells. Use the asterisk key (Shift + 8) (e.g. `=A1*A2`)
- **Division (`/`)**: Divides cells. Use the forward slash key (e.g. `=A1/A2`)

---

## The SUM Function

If you have a long column of numbers, adding them one-by-one (`=A1+A2+A3+A4+A5`) takes too long. Excel has a built-in shortcut called **functions**. 

To add a long list of numbers, use the **SUM** function:
`=SUM(A1:A5)`

The colon (`:`) tells Excel to include the entire range from A1 through A5.
