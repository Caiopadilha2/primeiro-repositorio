import React, { useState } from 'react';
import ImageContext from './ImageContext';

function ImageProvider({children}) { 
  const [images, setImages] = useState([]);

  const contextValue = {
    images,
    setImages,
  }

  return (
    <ImageContext.Provider value={ contextValue }>
      {children}
    </ImageContext.Provider>
  )
}

export default ImageProvider;