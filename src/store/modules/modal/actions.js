export function openModal(product) {
  return {
    type: '@modal/OPEN',
    product,
  };
}

export function closeModal() {
  return {
    type: '@modal/CLOSE',
  };
}
