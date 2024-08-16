function buy(item, quantity) {
    item.frequency += quantity;
    item.status = "under_delivery";
  }
  
  function returnItem(item) {
    item.frequency--;
    item.status = "cancelled";
  }
  
  function notAnIssue(item) {
    item.status = "cancel_NoIssue";
  }
  
  function isIssue(item) {
    item.status = "cancel_haveIssue";
  }