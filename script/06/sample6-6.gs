function setTempDataToUserSheet(userId, param, targetCol) {
  const userIdsList = USER_SHEET.getRange(1, 1, USER_SHEET.getLastRow(), 1).getValues().flat();
  const targetRow = userIdsList.indexOf(userId) + 1;

  USER_SHEET.getRange(targetRow, targetCol).setValue(param);
}