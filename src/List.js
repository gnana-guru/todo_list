import "./App.css";
import Edit from "./edit.svg";
import Delete from "./delete.svg";
import { useSelector, useDispatch } from "react-redux";

const List = ({ setOpenModal, setSelectedItem }) => {
  const { list } = useSelector((state) => state.AppData);
  const dispatch = useDispatch();
  

  const handleDelete = (listItem) => {
    let updatedList = list.filter(item => item.id !== listItem.id)
    dispatch({type: 'LIST', data: updatedList})
  }

  const handleChangeStatus = (listItem, index) => {
    let updatedList = [...list]
    updatedList[index] = {...listItem, status: listItem.status == 'pending' ? 'completed' : 'pending'}
    dispatch({type: 'LIST', data: updatedList})
  }

  return (
    <div>
      <h3 className="list-title">List</h3>
      {list.length
        ? list.map((item, index) => {
            return (
              <div className="container">
                <div className="details">
                  <p className="item-title">{item.title}</p>
                  <p>{item.status}</p>
                </div>
                <div>
                  <div className="image-container">
                    <img
                      src={Edit}
                      alt={"Edit"}
                      className="edit-icon"
                      onClick={() => {
                          setOpenModal(true);
                          setSelectedItem(item);
                        }}
                    />
                    <img src={Delete} alt={"Delete"} className="edit-icon" onClick={handleDelete.bind(this, item)} />
                  </div>
                  <button className="status-button" onClick={handleChangeStatus.bind(this,item, index)}>Change Status</button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default List;
