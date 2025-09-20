import { Card, Button } from 'react-bootstrap';

function ProductCard({ product, category, supplier, onEdit, onDelete }) {
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Цена: {product.price} руб.</Card.Text>
        <Card.Text>Размер: {product.size}</Card.Text>
        <Card.Text>Категория: {category?.name || 'Не указана'}</Card.Text>
        <Card.Text>Поставщик: {supplier?.name || 'Не указан'}</Card.Text>
        <div className="d-flex gap-2">
          <Button variant="warning" size="sm" onClick={() => onEdit(product.id)}>
            Редактировать
          </Button>
          <Button variant="danger" size="sm" onClick={() => onDelete(product.id)}>
            Удалить
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;