import NewImage from './Components/NewImage';
import PhotoAlbum from './Components/PhotoAlbum';
import ImageProvider from './Context/ImageProvider';

function App() {
  return (
    <ImageProvider>
      <NewImage />
      <PhotoAlbum />
    </ImageProvider>  
  );
}

export default App;
