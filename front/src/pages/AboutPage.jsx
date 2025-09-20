import { Container } from 'react-bootstrap';
import { PeopleFill, BagCheckFill, ShieldLockFill } from 'react-bootstrap-icons';

function AboutPage() {
  return (
    <Container>
      <h1 className="text-center mb-4">О нас</h1>
      <p className="text-center mb-5">
        Мы - команда энтузиастов, предоставляющая лучшие товары для наших клиентов. 
        Наш магазин предлагает только качественные продукты по доступным ценам.
      </p>
      
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <PeopleFill size={48} className="mb-3" />
          <h3>Наша команда</h3>
          <p>Профессионалы с многолетним опытом работы.</p>
        </div>
        <div className="col-md-4 mb-4">
          <BagCheckFill size={48} className="mb-3" />
          <h3>Лучшие товары</h3>
          <p>Мы тщательно отбираем продукцию для вас.</p>
        </div>
        <div className="col-md-4 mb-4">
          <ShieldLockFill size={48} className="mb-3" />
          <h3>Надежность</h3>
          <p>Гарантия качества и безопасности покупок.</p>
        </div>
      </div>
    </Container>
  );
}

export default AboutPage;