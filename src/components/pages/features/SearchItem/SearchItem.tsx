import style from "./searchItem.module.scss";

interface SearchItemProps {
  name: string;
  findHandle: (name: string) => void;
}

const SearchItem: React.FC<SearchItemProps> = (props) => {
  const { name, findHandle } = props;

  return (
    <div className={style.item} onClick={() => findHandle(name)}>
      {name}
    </div>
  );
};

export default SearchItem;
