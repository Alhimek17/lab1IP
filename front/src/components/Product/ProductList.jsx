import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductList({ products, categories, suppliers, onEdit, onDelete }) {
  return (
    <Row>
      {products.map(product => {
        const category = categories.find(c => c.id === product.categoryId);
        const supplier = suppliers.find(s => s.id === product.supplierId);
        
        return (
          <Col key={product.id} md={4} className="mb-4">
            <ProductCard
              product={product}
              category={category}
              supplier={supplier}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </Col>
        );
      })}
    </Row>
  );
}

export default ProductList;