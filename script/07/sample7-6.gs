function handleFollowEvent(event) {
  const userId = event.source.userId;
  const userName = getUserName(userId);
  setUserDataToUserSheet(userId, userName);
}