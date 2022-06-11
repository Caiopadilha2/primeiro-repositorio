import React, { useContext } from 'react';
import ImageContext from '../Context/ImageContext';
import ImageCard from './ImageCard';

function PhotoAlbum () {
  const { images } = useContext(ImageContext);
  // console.log(images);

  return(
    <div>
      {images.map((image, index) => <ImageCard key={index} imageUrl={image}/>)}
    </div>
  )
}

export default PhotoAlbum;