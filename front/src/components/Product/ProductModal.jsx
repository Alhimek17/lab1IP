import { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner } from 'react-bootstrap';

function ProductModal({ show, product, categories, onSave, onHide, loading }) {
  const [editedProduct, setEditedProduct] = useState(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prev => ({
      ...prev,
      [name]: name === 'categoryId' ? parseInt(value) : value
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
  };

  if (!editedProduct) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование товара</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Название</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={editedProduct.price}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Размер</Form.Label>
            <Form.Control
              type="text"
              name="size"
              value={editedProduct.size}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Категория</Form.Label>
            <Form.Select
              name="categoryId"
              value={editedProduct.categoryId}
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Отмена
        </Button>
        <Button variant="primary" onClick={handleSave} disabled={loading}>
          {loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              <span className="ms-2">Сохранение...</span>
            </>
          ) : (
            'Сохранить изменения'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;