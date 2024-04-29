import './Lists.scss';
import ListsNone from './ListsNone';
import shiba from '../images/shiba.png';

const Lists = ({ lists, title, setLists, setTitle, setListNum, setShowSidebar }) => {
  const handleListSubmit = (event) => {
    event.preventDefault();
    if (title === '') return;
    setLists((lists) => [...lists, { title, isCompleted: false, subLists: [] }]);
    setTitle('');
    setListNum(lists.length);
  };

  const handleAddList = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeList = (index) => {
    setListNum(index);
    setShowSidebar(true);
  };

  const handleUpdateList = (index) => {
    const newLists = lists.map((list, listIndex) => {
      if (listIndex === index) {
        list.isCompleted = !list.isCompleted;
      }
      return list;
    });
    setLists(newLists);
  };

  const handleRemoveList = (index) => {
    // TODO: dialog で確認できるようにする
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

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
      {lists.length !== 0 ? (
        <ul>
          {lists.map((list, index) => (
            <li className="list__item" key={index}>
              {/* TODO: デザインを変更する */}
              <input
                className="list__checkbox"
                type="checkbox"
                checked={list.isCompleted}
                onChange={() => handleUpdateList(index)}
              />
              <button
                className={`list__button-item ${list.isCompleted ? 'list__done-item' : 'list__unfinished-item'}`}
                onClick={() => handleChangeList(index)}
              >
                {list.title}
              </button>
              <div
                className="list__action-button"
                onClick={() => handleRemoveList(index)}
                style={{ cursor: 'pointer' }}
              >
                ⋯
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ListsNone width={180} />
      )}
    </div>
  );
};

export default Lists;
