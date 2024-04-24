import './SubLists.scss';

const SubLists = ({
  lists,
  item,
  handleSubListSubmit,
  handleAddSubList,
  handleUpdateSubList,
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
                  <span
                    className={
                      list.isCompleted ? 'sub-list__done-item' : 'sub-list__unfinished-item'
                    }
                  >
                    {list.item}
                  </span>
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
