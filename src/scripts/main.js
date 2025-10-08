'use strict';

const table = document.querySelector('.field');
const tbody = table.querySelector('tbody');
const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

let rowsCount = tbody ? tbody.rows.length : 0;
let colsCount = tbody && tbody.rows[0] ? tbody.rows[0].cells.length : 0;

function updateButtons() {
  appendRow.disabled = rowsCount >= 10;
  removeRow.disabled = rowsCount <= 2;
  appendColumn.disabled = colsCount >= 10;
  removeColumn.disabled = colsCount <= 2;
}

appendRow.addEventListener('click', () => {
  if (rowsCount < 10 && tbody) {
    const tr = document.createElement('tr');

    for (let i = 0; i < colsCount; i++) {
      const td = document.createElement('td');

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
    rowsCount++;
    updateButtons();
  }
});

removeRow.addEventListener('click', () => {
  if (rowsCount > 2 && tbody) {
    tbody.lastElementChild.remove();
    rowsCount--;
    updateButtons();
  }
});

appendColumn.addEventListener('click', () => {
  if (colsCount < 10 && tbody) {
    for (let i = 0; i < tbody.rows.length; i++) {
      const td = document.createElement('td');

      tbody.rows[i].appendChild(td);
    }

    colsCount++;
    updateButtons();
  }
});

removeColumn.addEventListener('click', () => {
  if (colsCount > 2 && tbody) {
    for (let i = 0; i < tbody.rows.length; i++) {
      tbody.rows[i].lastElementChild.remove();
    }

    colsCount--;
    updateButtons();
  }
});

updateButtons();
