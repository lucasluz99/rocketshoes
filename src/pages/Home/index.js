import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../../store/modules/cart/actions';

import Modal from '../../components/Modal';

import { ProductList, Pagination } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

function Home({ addToCartRequest, amount, modal }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageExists, setPageExists] = useState(true);
  const pageLimit = 6;

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(
        `products?_page=${currentPage}&_limit=${pageLimit}`
      );
      console.tron.log(response.data);
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, [currentPage, pageLimit]);

  function handleAddToCart(product) {
    addToCartRequest(product.id);
  }

  async function nextPage() {
    const response = await api.get(
      `products?_page=${currentPage + 2}&_limit=${pageLimit}`
    );

    if (response.data.length === 0) {
      setCurrentPage(currentPage + 1);
      setPageExists(false);
      return;
    }
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setPageExists(true);
    setCurrentPage(currentPage - 1);
  }

  return (
    <>
      <Pagination>
        {currentPage !== 1 && (
          <li>
            <button onClick={prevPage} type="button">
              Anterior
            </button>
          </li>
        )}
        <li>
          <span>{currentPage}</span>
        </li>
        <li>
          {pageExists && (
            <button onClick={nextPage} type="button">
              Próximo
            </button>
          )}
        </li>
      </Pagination>
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button onClick={() => handleAddToCart(product)} type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
                {amount[product.id] || 0}
              </div>
              <span>Adicionar ao carrinho</span>
            </button>
          </li>
        ))}
      </ProductList>
      {modal.open && <Modal product={modal.product} />}
    </>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.products.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
  modal: state.modal,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
