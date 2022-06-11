import React, { useContext, useState } from 'react';
import ImageContext from '../Context/ImageContext';

function NewImage() {
  const [photo, setPhoto] = useState('');
  const { images, setImages } = useContext(ImageContext);

  const handleChange = ({target}) => {
    setPhoto(target.value)
  }

  const addImage = () => {
    setImages([
      ...images,
      photo,
    ]);
    setPhoto('');
  }


  return(
    <div>
      <input
        type="text"
        onChange={ handleChange }
        value={photo}
      />

       <button
        type="button"
        onClick={ addImage }
        >
         Adicionar imagem
       </button> 
    </div>
  )
}

export default NewImage;