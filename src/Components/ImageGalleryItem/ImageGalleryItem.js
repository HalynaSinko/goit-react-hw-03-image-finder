import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <li key={id} className={s.item}>
      <img
        src={webformatURL}
        data-source={largeImageURL}
        alt={tags}
        className={s.image}
      />
    </li>
  );
};

export default ImageGalleryItem;
