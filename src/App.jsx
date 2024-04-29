import './App.scss';
import { useState } from 'react';
import Lists from './components/Lists';
import SubLists from './components/SubLists';

const App = () => {
  const [title, setTitle] = useState('');
  const [lists, setLists] = useState([]);
  const [listNum, setListNum] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="header" />
      <main className="main">
        <Lists
          lists={lists}
          title={title}
          setLists={setLists}
          setTitle={setTitle}
          setListNum={setListNum}
          setShowSidebar={setShowSidebar}
        />
        {showSidebar ? (
          <SubLists
            lists={lists}
            listNum={listNum}
            list={lists[listNum]}
            title={lists[listNum]?.title}
            setLists={setLists}
          />
        ) : null}
      </main>
    </>
  );
};

export default App;
