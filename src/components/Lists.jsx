import './Lists.scss';

const Lists = ({ lists, handleSubmit, title, handleAddList, handleChangeTitle }) => {
  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <input placeholder="新しいリストを入力..." value={title} onChange={handleAddList} />
        </form>
        <ul>
          {lists.map((list, index) => (
            <li key={index}>
              <button onClick={() => handleChangeTitle(index)}>{list.title}</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Lists;
