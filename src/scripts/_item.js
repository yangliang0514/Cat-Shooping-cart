export default class Item {
  constructor(element) {
    this.id = element.parentElement.parentElement.dataset.productId
    this.name = element.parentElement.children[0].textContent
    this.price = +element.parentElement.children[1].textContent.slice(1)
    this.quantity = 1
  }
}
