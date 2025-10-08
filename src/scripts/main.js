'use strict';

const table = document.querySelector('.field');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');
const tbody = table.querySelector('tbody');

let rowsCount = table.rows.length;
let colsCount = table.rows[0].cells.length;

function updateButtons() {
  if (rowsCount === 10) {
    appendRow.disabled = true;
  }

  if (rowsCount < 10) {
    appendRow.disabled = false;
  }

  if (rowsCount === 2) {
    removeRow.disabled = true;
  }

  if (rowsCount > 2) {
    removeRow.disabled = false;
  }

  if (colsCount === 10) {
    appendColumn.disabled = true;
  }

  if (colsCount < 10) {
    appendColumn.disabled = false;
  }

  if (colsCount === 2) {
    removeColumn.disabled = true;
  }

  if (colsCount > 2) {
    removeColumn.disabled = false;
  }
}

appendRow.addEventListener('click', () => {
  if (rowsCount < 10) {
    const tr = document.createElement('tr');

    for (let i = 0; i < colsCount; i++) {
      tr.appendChild(document.createElement('td'));
    }

    tbody.appendChild(tr);
    rowsCount++;
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  if (rowsCount > 2) {
    tbody.lastElementChild.remove();
    rowsCount--;
    updateButtons();
  }
});

appendColumn.addEventListener('click', () => {
  if (colsCount < 10) {
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      const td = document.createElement('td');

      rows[i].appendChild(td);
    }

    colsCount++;
    updateButtons();
  }
});

removeColumn.addEventListener('click', () => {
  if (colsCount > 2) {
    const rows = table.rows;

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      row.lastElementChild.remove();
    }

    colsCount--;
    updateButtons();
  }
});

updateButtons();
