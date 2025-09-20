import { useState, useEffect } from 'react';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
} from './productService';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error('Ошибка при загрузке товаров:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (product) => {
    try {
      setLoading(true);
      await createProduct(product);
      await fetchProducts();
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = async (id) => {
    try {
      setModalLoading(true);
      const product = await getProduct(id);
      setCurrentProduct(product);
      setShowModal(true);
    } catch (error) {
      console.error('Ошибка при получении товара:', error);
    } finally {
      setModalLoading(false);
    }
  };

  const handleSaveChanges = async (product) => {
    try {
      setModalLoading(true);
      await updateProduct(product.id, product);
      setShowModal(false);
      await fetchProducts();
    } catch (error) {
      console.error('Ошибка при обновлении товара:', error);
    } finally {
      setModalLoading(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
      try {
        setLoading(true);
        await deleteProduct(id);
        await fetchProducts();
      } catch (error) {
        console.error('Ошибка при удалении товара:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  return {
    products,
    loading,
    modalLoading,
    showModal,
    currentProduct,
    handleAddProduct,
    handleEditClick,
    handleSaveChanges,
    handleDeleteProduct,
    closeModal
  };
}
