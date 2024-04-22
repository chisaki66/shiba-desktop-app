import './Lists.scss';

const Lists = ({
  lists,
  handleListSubmit,
  title,
  handleAddList,
  handleChangeSubList,
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
              <button className="list__button" onClick={() => handleChangeSubList(index)}>
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
