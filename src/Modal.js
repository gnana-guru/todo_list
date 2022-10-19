import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const Modal = ({ open, item, setOpenModal }) => {
    const [editItem, setEditItem] = useState(null);
  const {list} = useSelector((state) => state.AppData);
  const dispatch = useDispatch();

  useEffect(() => {
    setEditItem(item)
  }, [item])

  const handleUpdate = () => {
    let updatedList = [...list];
    let itemIndex = updatedList.findIndex((item) => item.id === editItem.id);

    updatedList[itemIndex] = editItem;
    console.log('list', updatedList, itemIndex)
    dispatch({ type: "LIST", data: updatedList });
    setOpenModal(false);
  };

  return (
    <div className={`modal ${open ? "open-modal" : ""}`}>
      <div className="modal-content">
        <h2>Edit Todo Item</h2>
        <div>
          <h4>Title</h4>
          <input
            onChange={(e) => {
              let newItem = { ...editItem };
              newItem.title = e.target.value;
              setEditItem(newItem);
            }}
            value={editItem?.title}
            className="title"
          />
        </div>
        <p>{`Status: ${editItem?.status}`}</p>
        <div className="button-container">
          <button className="cancel-button" onClick={() => setOpenModal(false)}>
            Cancel
          </button>
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
