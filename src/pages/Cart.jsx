import React from 'react';
import { FormularioCarrito } from '../components/Carrito/Formulario';
import { ContentWrap } from '../components/ContentWrap/ContentWrap';
import { useCartContext } from '../state/Cart.context';
import CartTotal from '../components/CartTotal/CartTotal';

export const Cart = () => {
  const { cart, getTotalPriceGames, removeProduct, getTotalItems, cleanCart } =
    useCartContext();

  return (
    <ContentWrap>
      <h3 className="text-3xl font-semibold text-center text-white p-5 mb-2">🛒CARRITO DE COMPRAS🛒</h3>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-4 py-3">Nombre</th>
              <th className="px-4 py-3">Precio</th>
              <th className="px-4 py-3">Cantidad</th>
              <th className="px-4 py-3">Subtotal</th>
              <th className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((game) => (
                <tr
                  key={game.id}
                  className="border-b hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900"
                >
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 dark:text-white">
                    {game.title}
                  </th>
                  <td className="px-4 py-2">${game.price.toLocaleString('es-UY')}</td>
                  <td className="px-4 py-2">{game.cantidad}</td>
                  <td className="px-4 py-2">${(game.price * game.cantidad).toLocaleString('es-UY')}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      onClick={() => removeProduct(game.id)}
                      className="font-semibold text-red-600 hover:underline dark:text-red-500 hover:cursor-pointer"
                    >
                      Remover
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b items-center hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900">
                <th
                  colSpan={6}
                  className="whitespace-nowrap text-center px-4 py-2 font-medium text-gray-900 dark:text-white"
                >
                  No hay juegos en el carrito
                </th>
              </tr>
            )}
          </tbody>
          <tfoot className="text-md bg-gray-50 uppercase text-gray-400 dark:bg-gray-700 dark:text-gray-400">
            <tr className="font-semibold text-gray-900 dark:text-white">
              <th colSpan={2} className="px-4 py-2 text-base">
                Total
              </th>
              <td className="px-4 py-2">{getTotalItems}</td>
              <td className="px-4 py-2">${getTotalPriceGames.toLocaleString('es-UY')}</td>
              <td className="px-4 py-2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="flex justify-center p-8">
        <button onClick={cleanCart} className="px-4 py-2 bg-red-500 rounded-lg text-md font-semibold text-white hover:bg-red-500">
          Vaciar Carrito
        </button>
      </div>
      
      <FormularioCarrito />
      <CartTotal total={getTotalPriceGames} />
    </ContentWrap>
  );
};