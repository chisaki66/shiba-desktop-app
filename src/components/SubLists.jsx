import './SubLists.scss';

const SubLists = ({
  lists,
  item,
  handleSubListSubmit,
  handleAddSubList,
  handleUpdateSubList,
  handleEditSubList,
  handleRemoveSubList,
}) => {
  return (
    <>
      <main className="sub-list">
        <form onSubmit={handleSubListSubmit}>
          <input placeholder="タスクを入力..." value={item} onChange={handleAddSubList} />
        </form>
        <ul>
          {lists
            ? lists.subLists.map((list, index) => (
                <li className="sub-list__item" key={index}>
                  <input
                    type="checkbox"
                    checked={list.isCompleted}
                    onChange={() => handleUpdateSubList(index)}
                  />
                  {list.isCompleted ? (
                    <span className="sub-list__done-item">{list.item}</span>
                  ) : (
                    <input
                      className="sub-list__unfinished-item"
                      value={list.item}
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
      </main>
    </>
  );
};

export default SubLists;
