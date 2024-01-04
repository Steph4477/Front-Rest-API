// components/Button.ts
export function createButton(id: string, text: string, onClick: () => void) {
    const button = document.createElement('button');
    button.id = id;
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
  }