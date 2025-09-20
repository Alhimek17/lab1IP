import { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

function ProductForm({ categories, onSubmit, loading }) {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    size: '',
    categoryId: categories[0]?.id || '',
    supplierId: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({
      ...prev,
      [name]: name === 'categoryId' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Название</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Цена</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Размер</Form.Label>
        <Form.Control
          type="text"
          name="size"
          value={product.size}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Категория</Form.Label>
        <Form.Select
          name="categoryId"
          value={product.categoryId}
          onChange={handleChange}
          required
        >
          {categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        {loading ? (
          <>
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            <span className="ms-2">Добавление...</span>
          </>
        ) : (
          'Добавить'
        )}
      </Button>
    </Form>
  );
}

export default ProductForm;