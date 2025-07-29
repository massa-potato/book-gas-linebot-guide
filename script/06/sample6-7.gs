function getTempDataFromUserSheet(userId) {
  const userList = USER_SHEET.getDataRange().getValues();

  for(const data of userList) {
    if(data[0] === userId) {
      return data;
    }
  }
}