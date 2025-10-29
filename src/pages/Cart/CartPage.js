import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";
import { useCart } from "../../context";

export const CartPage = () => {
   const {cartList} =  useCart();

  return (
    <main className="container mx-auto my-10 px-4">
        {cartList.length > 0 ? <CartList/> : <CartEmpty/>}
    </main>
  )
}
