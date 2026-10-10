
const Modal = ({ open, setOpen, title, children }) => {
  return open ? (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalHeader">
          <h1>{title} User</h1>
          <button onClick={() => setOpen(false)} className="closeBtn" type="button">X</button>
        </div>
        {children}
      </div>
    </div>
  ) : null
}
export default Modal
