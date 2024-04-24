import './App.scss';
import { useState } from 'react';
import Lists from './components/Lists';
import SubLists from './components/SubLists';

const App = () => {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [listNum, setListNum] = useState(0);
  const [item, setItem] = useState('');

  const handleListSubmit = (event) => {
    event.preventDefault();
    if (title === '') return;
    setLists((lists) => [...lists, { title, isCompleted: false, subLists: [] }]);
    setTitle('');
    setListNum(lists.length);
  };

  const handleAddList = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeList = (index) => {
    setListNum(index);
  };

  const handleUpdateList = (index) => {
    const newLists = lists.map((list, listIndex) => {
      if (listIndex === index) {
        list.isCompleted = !list.isCompleted;
      }
      return list;
    });
    setLists(newLists);
  };

  const handleRemoveList = (index) => {
    const newLists = [...lists];
    newLists.splice(index, 1);
    setLists(newLists);
  };

  const handleSubListSubmit = (event) => {
    event.preventDefault();
    if (item === '') return;
    const newSubLists = [...lists[listNum].subLists, { item, isCompleted: false }];
    setLists((lists) => {
      lists[listNum].subLists = newSubLists;
      return lists;
    });
    setItem('');
  };

  const handleAddSubList = (event) => {
    setItem(event.target.value);
  };

  const handleUpdateSubList = (index) => {
    const newSubLists = lists[listNum].subLists.map((list, listIndex) => {
      if (listIndex === index) {
        list.isCompleted = !list.isCompleted;
      }
      return list;
    });
    setLists(
      lists.map((list, index) =>
        index === listNum
          ? {
              title: lists[listNum].title,
              isCompleted: lists[listNum].isCompleted,
              subLists: newSubLists,
            }
          : list,
      ),
    );
  };

  const handleRemoveSubList = (index) => {
    const newSubLists = [...lists[listNum].subLists];
    newSubLists.splice(index, 1);
    setLists(
      lists.map((list, index) =>
        index === listNum
          ? { title: lists[listNum].title, isCompleted: false, subLists: newSubLists }
          : list,
      ),
    );
  };

  return (
    <div>
      <header className="header"></header>
      <Lists
        lists={lists}
        title={title}
        handleListSubmit={handleListSubmit}
        handleAddList={handleAddList}
        handleChangeList={handleChangeList}
        handleUpdateList={handleUpdateList}
        handleRemoveList={handleRemoveList}
      />
      <SubLists
        item={item}
        lists={lists[listNum]}
        handleSubListSubmit={handleSubListSubmit}
        handleAddSubList={handleAddSubList}
        handleUpdateSubList={handleUpdateSubList}
        handleRemoveSubList={handleRemoveSubList}
      />
      <footer></footer>
    </div>
  );
};

export default App;
