import { VscFolderLibrary } from "react-icons/vsc";
import { SavedLibraryContainer } from "./styledComponents";

const LibraryCardList = [
  {
    id: 1,
    date: new Date(),
  },
  {
    id: 2,
    date: new Date(),
  },
  {
    id: 3,
    date: new Date(),
  },
  {
    id: 4,
    date: new Date(),
  },
  {
    id: 5,
    date: new Date(),
  },
  {
    id: 6,
    date: new Date(),
  },
];

const SavedLibrary = () => {
  const libraryCard = (card) => {
    return (
      <li key={card.id}>
        <VscFolderLibrary size={20} />
        <h4>{`My Saved Library ${card.id}`}</h4>
        <p>{` ${new Date(
          card.date.getFullYear(),

          card.date.getMonth(),
          card.date.getDate() - (LibraryCardList.length - card.id)
        ).getDate()} - ${
          card.date.getMonth() + 1
        } - ${card.date.getFullYear()}`}</p>
      </li>
    );
  };
  return (
    <SavedLibraryContainer>
      {LibraryCardList.map((card) => libraryCard(card))}
    </SavedLibraryContainer>
  );
};

export default SavedLibrary;
