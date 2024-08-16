class Product {
    constructor(product_name, price, category, probability_sales_per_day, status) {
      this.product_name = product_name;
      this.price = price;
      this.category = category;
      this.frequency = 0; //this may high selling product or low selling product
      this.probability_sales_per_day = probability_sales_per_day; //in that area
      this.status = status;//deliveryed,not delivered , cancelled ,returned_withissue,returned_withoutissue
    }
  }
  
  let item1 = new Product("Product1", 10.0, "Category1", 0.5, "available");
  let item2 = new Product("Product2", 15.0, "Category2", 0.7, "available");
  let item3 = new Product("Product3", 20.0, "Category3", 0.6, "available");
  let item4 = new Product("Product4", 25.0, "Category4", 0.8, "available");
  let item5 = new Product("Product5", 30.0, "Category5", 0.9, "available");
  
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
  