import { Container } from 'react-bootstrap';
import ProductForm from '../components/Product/ProductForm';
import ProductList from '../components/Product/ProductList';
import ProductModal from '../components/Product/ProductModal';

import { useProducts } from '../services/useProducts';
import { useCategories } from '../services/useCategories';
import { useSuppliers } from '../services/useSuppliers';

function ProductsPage() {
  const {
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
  } = useProducts();

  const { categories } = useCategories();
  const { suppliers } = useSuppliers();

  if (loading && products.length === 0) {
    return (
      <Container className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Загрузка...</span>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-center mb-4">Товары</h1>

      <div className="mb-5">
        <h2>Добавить новый товар</h2>
        <ProductForm
          categories={categories}
          onSubmit={handleAddProduct}
          loading={loading}
        />
      </div>

      <h2 className="mb-4">Список товаров</h2>
      <ProductList
        products={products}
        categories={categories}
        suppliers={suppliers}
        onEdit={handleEditClick}
        onDelete={handleDeleteProduct}
      />

      <ProductModal
        show={showModal}
        product={currentProduct}
        categories={categories}
        onSave={handleSaveChanges}
        onHide={closeModal}
        loading={modalLoading}
      />
    </Container>
  );
}

export default ProductsPage;
