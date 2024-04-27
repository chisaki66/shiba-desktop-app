import './SubLists.scss';
import shiba_1 from '../images/shiba_1.png';

const SubLists = ({
  item,
  list,
  title,
  handleSubListSubmit,
  handleAddSubList,
  handleUpdateSubList,
  handleEditSubList,
  handleRemoveSubList,
}) => {
  return (
    <div className="sub-list">
      <div className="sub-list__header">
        <img className="sub-list__header-img" src={shiba_1} alt="shiba_1" />
        <form className="sub-list__header-form" onSubmit={handleSubListSubmit}>
          <input
            className="sub-list__header-input"
            placeholder="タスクを入力..."
            value={item}
            onChange={handleAddSubList}
          />
        </form>
      </div>
      <div className="sub-list__title">{title}</div>
      <ul>
        {list
          ? list.subLists.map((sublist, index) => (
              <li className="sub-list__item" key={index}>
                <input
                  type="checkbox"
                  checked={sublist.isCompleted}
                  onChange={() => handleUpdateSubList(index)}
                />
                {sublist.isCompleted ? (
                  <span className="sub-list__done-item">{sublist.item}</span>
                ) : (
                  <input
                    className="sub-list__unfinished-item"
                    value={sublist.item}
                    onChange={(event) => handleEditSubList(index, event.target.value)}
                  />
                )}
                <div
                  className="sub-list__action-button"
                  onClick={() => handleRemoveSubList(index)}
                  style={{ cursor: 'pointer' }}
                >
                  X
                </div>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default SubLists;
