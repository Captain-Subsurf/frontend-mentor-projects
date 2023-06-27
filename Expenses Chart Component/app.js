import {expenseData} from "./expense_data.js";

const expenseChart = document.querySelector(".expense-chart");

const totalAmt = expenseData.reduce((prev, curr) => {
    prev += curr.amount;
    return prev;
}, 0);

const highestAmt = expenseData.reduce((prev, curr) => {
    if (prev > curr.amount) return prev;
    return curr.amount;
}, -1);

expenseData.forEach(data => {
    const chartEl = document.createElement("div");
    const bar = document.createElement("div");
    const day = document.createElement("p");

    chartEl.classList.add("chart-element");
    bar.classList.add("bar");
    day.classList.add("chart-text");

    if (data.amount === highestAmt) bar.classList.add("blue-bar")

    chartEl.style.height = (getBarHeight(data.amount)*3.5) + "%";
    bar.setAttribute("data-amount", "$" + data.amount);
    day.textContent = data.day;

    chartEl.appendChild(bar);
    chartEl.appendChild(day);
    expenseChart.appendChild(chartEl);
});

function getBarHeight(amt) {
    let height = (amt / totalAmt) * 100;
    console.log(amt, height);
    return height;
}