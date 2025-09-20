import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <Container className="p-3">
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} Магазин. Все права защищены.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
