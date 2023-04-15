import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import Cart from "./_cart"
import Item from "./_item"

const addButtons = document.querySelectorAll(".btn.btn-sm.btn-warning.fw-light")
const cartList = document.querySelector(".cart")
const emptyCartBtn = document.querySelector(".empty-cart")

addButtons.forEach((el) =>
  el.addEventListener("click", (e) => {
    const productId =
      e.currentTarget.parentElement.parentElement.dataset.productId

    if (Cart.cartItems.some((el) => el.id === productId)) {
      return Cart.updateQuantity(productId)
    }

    Cart.addToCart(new Item(e.currentTarget))
  })
)

cartList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove-item-btn")) {
    return Cart.removeFromcart(e.target)
  }

  if (e.target.classList.contains("remove-item-btn-icon")) {
    return Cart.removeFromcart(e.target.parentElement)
  }
})

emptyCartBtn.addEventListener("click", () => Cart.emptyCart())
