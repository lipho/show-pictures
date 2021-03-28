import React from 'react';
import './ImageList.css';
import ImageCard from "./ImageCard";

const ImageList = props => {
  const displayImages = props.images.map(i => <ImageCard image={i} key={i.id} />);
  return (
    <div className='image-list'>{displayImages}</div>
  )
}

export default ImageList;
