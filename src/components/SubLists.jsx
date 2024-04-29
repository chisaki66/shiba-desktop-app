import './SubLists.scss';
import { useState } from 'react';
import ListsNone from './ListsNone';
import shiba_1 from '../images/shiba_1.png';

const SubLists = ({ lists, list, listNum, title, setLists }) => {
  const [item, setItem] = useState('');

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
    const newSubLists = lists[listNum].subLists.map((subList, listIndex) => {
      if (listIndex === index) {
        subList.isCompleted = !subList.isCompleted;
      }
      return subList;
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

  const handleEditSubList = (index, newItem) => {
    const newSubLists = lists[listNum].subLists.map((subList, listIndex) => {
      if (listIndex === index) {
        subList.item = newItem;
      }
      return subList;
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
    // TODO: dialog で確認できるようにする
    const newSubLists = [...lists[listNum].subLists];
    newSubLists.splice(index, 1);
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

  return (
    <div className="sub-list">
      <div className="sub-list__header">
        {/* TODO: random で異なる image が表示されるようにする */}
        <img className="sub-list__header-img" src={shiba_1} alt="shiba_1" />
        <form className="sub-list__header-form" onSubmit={handleSubListSubmit}>
          <input
            className="sub-list__header-input"
            placeholder="リストを入力..."
            value={item}
            onChange={handleAddSubList}
          />
        </form>
      </div>
      {/* TODO: 編集できる仕様に変更する */}
      <div className="sub-list__title">{title}</div>
      {list.subLists.length !== 0 ? (
        <ul>
          {list
            ? list.subLists.map((sublist, index) => (
                <li className="sub-list__item" key={index}>
                  {/* TODO: デザインを変更する */}
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
                    ⋯
                  </div>
                </li>
              ))
            : null}
        </ul>
      ) : (
        <ListsNone width={140} />
      )}
    </div>
  );
};

export default SubLists;
