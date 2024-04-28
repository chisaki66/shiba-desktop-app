import './SubLists.scss';
import ListsNone from './ListsNone';
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
        {/* TODO: random で異なる image が表示されるようにする */}
        <img className="sub-list__header-img" src={shiba_1} alt="shiba_1" />
        <form className="sub-list__header-form" onSubmit={handleSubListSubmit}>
          <input
            className="sub-list__header-input"
            placeholder="リストを入力..."
            value={item}
            onChange={handleAddSubList}
          />
        </form>
      </div>
      {/* TODO: 編集できる仕様に変更する */}
      <div className="sub-list__title">{title}</div>
      {list.subLists.length !== 0 ? (
        <ul>
          {list
            ? list.subLists.map((sublist, index) => (
                <li className="sub-list__item" key={index}>
                  {/* TODO: デザインを変更する */}
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
                    ⋯
                  </div>
                </li>
              ))
            : null}
        </ul>
      ) : (
        <ListsNone width={140} />
      )}
    </div>
  );
};

export default SubLists;
