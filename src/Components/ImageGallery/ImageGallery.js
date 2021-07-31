import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import s from "./imageGallery.module.css";

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ul className={s.gallery}>
      {images.length > 0 && images.map((img) => ImageGalleryItem({ ...img }))}
    </ul>
  );
};
export default ImageGallery;
