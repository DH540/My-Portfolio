function Modal({ isOpen, content, onClose }) {
  if (!isOpen || !content) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-white text-neutral-900 p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-neutral-500 hover:text-neutral-900"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-2">{content.title}</h3>
        <p className="text-neutral-600">{content.blurb}</p>
      </div>
    </div>
  );
}

export default Modal;