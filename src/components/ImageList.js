import React from 'react';

const ImageList = props => {
  const displayImages = props.images.map(i => <img alt={i.alt_description} key={i.id} src={i.urls.regular} />);
  return (
    <div>{displayImages}</div>
  )
}

export default ImageList;
