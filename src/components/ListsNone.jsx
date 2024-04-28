import './ListsNone.scss';
import shiba_none from '../images/shiba_none.png';

const ListsNone = ({ width }) => {
  return (
    <div className="lists-none">
      <img className="lists-none__img" width={width} src={shiba_none} alt="shiba_none" />
      <p className="lists-none__text">まだリストはありません！</p>
    </div>
  );
};

export default ListsNone;
