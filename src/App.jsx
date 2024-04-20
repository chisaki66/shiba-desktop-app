import './App.scss';
import { useState } from 'react';
import Lists from './components/Lists';
import SubLists from './components/SubLists';

const App = () => {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [listNum, setListNum] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === '') return;
    setLists((lists) => [...lists, { title, isCompleted: false, subLists: [] }]);
    setTitle('');
  };

  const handleAddList = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeTitle = (index) => {
    setListNum(index);
  };

  return (
    <div>
      <header className="header"></header>
      <Lists
        lists={lists}
        handleSubmit={handleSubmit}
        handleAddList={handleAddList}
        handleChangeTitle={handleChangeTitle}
      />
      <SubLists lists={lists[listNum]} />
      <footer></footer>
    </div>
  );
};

export default App;
