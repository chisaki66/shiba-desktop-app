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
  };

  const handleAddList = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeSubList = (index) => {
    setListNum(index);
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

  return (
    <div>
      <header className="header"></header>
      <Lists
        lists={lists}
        title={title}
        handleListSubmit={handleListSubmit}
        handleAddList={handleAddList}
        handleChangeSubList={handleChangeSubList}
      />
      <SubLists
        item={item}
        handleSubListSubmit={handleSubListSubmit}
        handleAddSubList={handleAddSubList}
        subLists={lists[listNum].subLists}
      />
      <footer></footer>
    </div>
  );
};

export default App;
