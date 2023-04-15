class Cart {
  constructor() {
    this.cartItems = []
    this.cartList = document.querySelector("#kart")
    this.totalPrice = document.querySelector(".total-price")
  }

  addToCart(item) {
    this.cartItems.push(item)
    this._updateListTotal()
  }

  updateQuantity(itemId) {
    const index = this.cartItems.findIndex((el) => el.id === itemId)
    this.cartItems[index].quantity += 1
    this._updateListTotal()
  }

  removeFromcart(button) {
    const index = this.cartItems.findIndex(
      (el) => el.id === button.parentElement.parentElement.dataset.id
    )
    this.cartItems.splice(index, 1)
    this._updateListTotal()
  }

  emptyCart() {
    this.cartItems = []
    this._updateListTotal()
  }

  _updateListTotal() {
    const items = this.cartItems.reduce(function (acc, item) {
      return (
        acc +
        `
        <tr data-id="${item.id}">
          <td>${item.name}</td>
          <td><input type="number" class="quantity" value="${
            item.quantity
          }" /></td>
          <td>$${item.price}</td>
          <td>$${item.price * item.quantity}</td>
          <td>
            <button class="remove-item-btn btn btn-danger btn-sm">
              <i class="remove-item-btn-icon fas fa-trash-alt"></i>
            </button>
          </td>
        </tr>`
      )
    }, "")

    const totalPrice = this.cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )

    this.cartList.innerHTML = items
    this.totalPrice.textContent = `$${Math.round(totalPrice * 100) / 100}`
  }
}

export default new Cart()
