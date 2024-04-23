import './Lists.scss';

const Lists = ({
  lists,
  handleListSubmit,
  title,
  handleAddList,
  handleChangeList,
  handleUpdateList,
  handleEditList,
  handleRemoveList,
}) => {
  return (
    <div>
      <main className="list">
        <form onSubmit={handleListSubmit}>
          <input placeholder="新しいリストを入力..." value={title} onChange={handleAddList} />
        </form>
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
      </main>
    </div>
  );
};

export default Lists;
