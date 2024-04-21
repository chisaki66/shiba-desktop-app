import './SubLists.scss';

const SubLists = ({ subLists, item, handleSubListSubmit, handleAddSubList }) => {
  return (
    <>
      <main className="main">
        <form onSubmit={handleSubListSubmit}>
          <input placeholder="タスクを入力..." value={item} onChange={handleAddSubList} />
        </form>
        <ul>
          {subLists.map((list, index) => (
            <li key={index}>
              <span>{list.item}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default SubLists;
