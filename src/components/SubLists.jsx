import './SubLists.scss';

const SubLists = ({ lists, item, handleSubListSubmit, handleAddSubList }) => {
  return (
    <>
      <main className="main">
        <form onSubmit={handleSubListSubmit}>
          <input placeholder="タスクを入力..." value={item} onChange={handleAddSubList} />
        </form>
        <ul>
          {lists
            ? lists.subLists.map((list, index) => (
                <li key={index}>
                  <span>{list.item}</span>
                </li>
              ))
            : null}
        </ul>
      </main>
    </>
  );
};

export default SubLists;
