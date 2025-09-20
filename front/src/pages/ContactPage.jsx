import React from 'react';


function ContactPage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Переключить навигацию"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        <h1 className="text-center">Контакты</h1>
        <p className="text-center">Свяжитесь с нами удобным для вас способом.</p>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="bi bi-telephone display-4"></i>
            <h3>Телефон</h3>
            <p>+7 (900) 123-45-67</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-envelope display-4"></i>
            <h3>Email</h3>
            <p>armnkr5@gmail.com</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-geo-alt display-4"></i>
            <h3>Адрес</h3>
            <p>г. Ульяновск, ул. Волжская, д. 10</p>
          </div>
        </div>
      </div>

      <footer className="text-center mt-4 p-3 bg-light">
        <p>
          Свяжитесь с нами в Telegram:{" "}
          <a href="https://t.me/sopran0zzz" target="_blank" rel="noreferrer">tg</a>
        </p>
      </footer>
    </>
  );
}

export default ContactPage;
