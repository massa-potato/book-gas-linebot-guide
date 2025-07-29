function outputLog(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('ログ');

  sheet.appendRow([
    new Date(), 
    JSON.stringify(data)
  ]);
}