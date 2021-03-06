import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans: 0}
    this.imgRef = React.createRef();
  }

  onImageLoad() {
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({spans})
  }

  render() {
    const {alt_description, urls} = this.props.image;
    return (
      <div style={{gridRowEnd: `span ${this.state.spans}`}}>
        <img ref={this.imgRef} alt={alt_description} src={urls.regular} onLoad={this.onImageLoad.bind(this)}/>
      </div>
    )
  }
}


export default ImageCard;
