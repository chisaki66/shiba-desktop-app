import './SubLists.scss';

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
    <>
      <main className="sub-list">
        <form onSubmit={handleSubListSubmit}>
          <input placeholder="タスクを入力..." value={item} onChange={handleAddSubList} />
        </form>
        <div>{title}</div>
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
      </main>
    </>
  );
};

export default SubLists;
