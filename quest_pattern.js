const n = 5;
const totalRows = 2 * n - 1;

for (let i = 1; i <= totalRows; i++) {

    let row = "";
    let starsRow = i <= n ? i : totalRows - i + 1;

    for (let s = 1; s <= n - starsRow; s++) {
        row += " ";
    }
    row += "*";
    if (starsRow > 1) {
        for (let s = 1; s <= (starsRow - 1) * 2 - 1; s++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}