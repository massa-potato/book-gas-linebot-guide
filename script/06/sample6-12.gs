function handleFollowEvent(event) {
  const userId = event.source.userId;
  setUserDataToUserSheet(userId);
}