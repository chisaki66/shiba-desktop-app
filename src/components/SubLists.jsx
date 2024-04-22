import './SubLists.scss';

const SubLists = ({ lists, item, handleSubListSubmit, handleAddSubList }) => {
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
                  <span>{list.item}</span>
                  <div className="sub-list__action-button" style={{ cursor: 'pointer' }}>
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
