import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    {/* Бренд, логотип или название
    <a className="navbar-brand" href="#">Магазин</a> */}

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


      <div className="container mt-4 text-center">
        <h1>Добро пожаловать в наш магазин</h1>
        <Link to="/products" className="btn btn-primary mt-3">
          Перейти к товарам
        </Link>
        <div className="mt-4">
          <img
            src="/mainlogo.jpg"
            alt="Логотип"
            className="img-fluid"
            style={{ maxWidth: '600px', margin: '0 auto', display: 'block' }}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
