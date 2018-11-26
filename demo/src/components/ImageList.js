
import React from 'react';
import ImageCard from './ImageCard';
import './list.css';

const ImageList = props =>{
    console.log(props.images)
    // const img = props.images.map((image) =>{
    //         return <img alt={image.description} key={image.id} src ={image.urls.regular} />
    // })

    const images = props.images.map( el => {
        // console.log("image", image)
        return <img className='image-item' key={el.id} alt={el.description}
        src={el.urls.regular}/>
});
// const images = props.images.map( el => {
//     return <ImageCard key={el.id} image={el}/>
// });

    return(
        <div className='image-list'>{images}</div>
    )
};

export default ImageList;