import './Lists.scss';
import shiba from '../images/shiba.png';

const Lists = ({
  lists,
  handleListSubmit,
  title,
  handleAddList,
  handleChangeList,
  handleUpdateList,
  handleRemoveList,
}) => {
  return (
    <div className="list">
      <div className="list__header">
        <img className="list__header-img" src={shiba} alt="shiba" />
        <form className="list__header-form" onSubmit={handleListSubmit}>
          <input
            className="list__header-input"
            placeholder="新しいリストを入力..."
            value={title}
            onChange={handleAddList}
          />
        </form>
      </div>
      <ul>
        {lists.map((list, index) => (
          <li className="list__item" key={index}>
            <input
              type="checkbox"
              checked={list.isCompleted}
              onChange={() => handleUpdateList(index)}
            />
            <button
              className={list.isCompleted ? 'list__done-item' : 'list__unfinished-item'}
              onClick={() => handleChangeList(index)}
            >
              {list.title}
            </button>
            <div
              className="list__action-button"
              onClick={() => handleRemoveList(index)}
              style={{ cursor: 'pointer' }}
            >
              X
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
