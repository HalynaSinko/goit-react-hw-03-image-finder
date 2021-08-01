import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({
  id,
  webformatURL,
  largeImageURL,
  tags,
  onClick,
}) => {
  return (
    <li key={id} className={s.item}>
      <img
        src={webformatURL}
        data-source={largeImageURL}
        alt={tags}
        className={s.image}
        onClick={(event) => onClick(event.currentTarget)}
      />
    </li>
  );
};

export default ImageGalleryItem;
