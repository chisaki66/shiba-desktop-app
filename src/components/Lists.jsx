import './Lists.scss';

const Lists = ({ lists, handleListSubmit, title, handleAddList, handleChangeSubList }) => {
  return (
    <div>
      <main>
        <form onSubmit={handleListSubmit}>
          <input placeholder="新しいリストを入力..." value={title} onChange={handleAddList} />
        </form>
        <ul>
          {lists.map((list, index) => (
            <li key={index}>
              <button onClick={() => handleChangeSubList(index)}>{list.title}</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Lists;
