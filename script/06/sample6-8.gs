function setDataToKirokuSheet(data) {
  data.push(new Date());
  KIROKU_SHEET.appendRow(data);
}