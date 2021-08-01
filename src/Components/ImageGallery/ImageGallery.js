import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import s from "./imageGallery.module.css";

const ImageGallery = ({ images, onClick }) => {
  console.log(images);
  return (
    <ul className={s.gallery}>
      {images.length > 0 &&
        images.map((img) => ImageGalleryItem({ ...img, onClick }))}
    </ul>
  );
};
export default ImageGallery;
