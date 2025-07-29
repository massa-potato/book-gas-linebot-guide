function setUserDataToUserSheet(userId, userName) {
  const userData = USER_SHEET.getDataRange().getValues();
  userData.shift();

  if(userData) {
      for(const user of userData) {
        if(user[0] === userId) return; // userIdが既に登録済みなら何もしない
      } 
  }

  USER_SHEET.appendRow([userId, userName]);
}