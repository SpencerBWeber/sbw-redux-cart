class Product {
  constructor(id, name, price, description) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

export default [
  new Product(1, "Shirt", 19.99, "Sleeves sold separately"),
  new Product(2, "Shoe", 29.99, "Buy one get one 2x the price"),
  new Product(3, "Pants", 0.99, "Grandma's hand-me-downs"),
  new Product(4, "Pipe", 129.99, "Too rich for your blood"),
  new Product(5, "Xbox", 499.99, "Double the price, double the weight"),
  new Product(6, "PS4", 299.99, "I got you fam")
];
