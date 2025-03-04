import { useState } from "react";

const OrderDetails = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Women's Sneaker",
      price: 54.99,
      quantity: 1,
      color: "WHITE/GOLD/GUM",
      size: "6.0",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
    {
      id: 2,
      name: "Women's Boot",
      price: 84.99,
      quantity: 1,
      color: "PURPLE/WHITE",
      size: "6.0",
      image:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="card w-full bg-base-100 shadow-xl p-4 md:p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="flex flex-col md:flex-row items-start md:items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12"
                    />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <div className="flex items-center gap-2">
                      <button
                        className="btn btn-xs btn-outline"
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-xs btn-outline"
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="divider"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
            <button
              className="btn btn-secondary w-full md:w-auto"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-middle">
        <div className="modal-box">
          <div className="modal-action mt-0">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>

          <div className="max-w-xl mx-auto my-10 p-8 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="city"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="postalCode"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="country"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default OrderDetails;
