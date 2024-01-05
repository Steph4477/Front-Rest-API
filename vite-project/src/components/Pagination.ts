import { createButton } from './Button';

export function Pagination(onPrev: () => void, onNext: () => void) {
  const container = document.createElement('div');

  const prevButton = createButton('prev-page', 'Précédent', onPrev);
  const nextButton = createButton('next-page', 'Suivant', onNext);

  container.appendChild(prevButton);
  container.appendChild(nextButton);

  return container;
}