import React, { useState } from 'react';


function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview = { id: Date.now(), name: name.trim(), text: text.trim() };
    setReviews((prev) => [...prev, newReview]);
    setName('');
    setText('');
  };

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
        <h1 className="text-center">Отзывы клиентов</h1>

        <div id="reviews-container" className="mt-3">
          {reviews.length === 0 && <p className="text-center text-muted">Отзывов пока нет.</p>}
          {reviews.map(({ id, name, text }) => (
            <div key={id} className="alert alert-secondary mt-3">
              <strong>{name}:</strong> {text}
            </div>
          ))}
        </div>

        <h2 className="mt-4">Добавить отзыв</h2>
        <form id="review-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="reviewerName" className="form-label">Ваше имя</label>
            <input
              type="text"
              className="form-control"
              id="reviewerName"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="reviewText" className="form-label">Ваш отзыв</label>
            <textarea
              className="form-control"
              id="reviewText"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Оставить отзыв</button>
        </form>
      </div>
    </>
  );
}

export default Reviews;
