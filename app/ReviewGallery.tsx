'use client';

import { useEffect, useRef, useState } from 'react';

type Review = {
  src: string;
  alt: string;
};

export default function ReviewGallery({ reviews }: { reviews: Review[] }) {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (selectedReview && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [selectedReview]);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <div className="review-grid">
        {reviews.map((review, index) => (
          <article className="review-card" key={review.src}>
            <button
              className="review-open"
              type="button"
              onClick={() => setSelectedReview(review)}
              aria-label={`Открыть отзыв ${index + 1} в полном размере`}
            >
              <img src={review.src} alt={review.alt} loading="lazy" />
              <span>Открыть</span>
            </button>
          </article>
        ))}
      </div>

      <dialog
        className="review-lightbox"
        ref={dialogRef}
        onClose={() => setSelectedReview(null)}
        onCancel={() => setSelectedReview(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeDialog();
          }
        }}
        aria-label="Отзыв в полном размере"
      >
        {selectedReview && (
          <div className="review-lightbox-content">
            <img src={selectedReview.src} alt={selectedReview.alt} />
            <button className="review-lightbox-close" type="button" onClick={closeDialog} aria-label="Закрыть отзыв">
              <span aria-hidden="true">×</span>
            </button>
          </div>
        )}
      </dialog>
    </>
  );
}
