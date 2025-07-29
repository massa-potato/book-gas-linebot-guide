function sendReminder() {
  const messages = [{ type: 'text', text: '本日もおつかれさまでした。作業の記録を忘れずに。' }];
  sendBroadcastMessage(messages);
}