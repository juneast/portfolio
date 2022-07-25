import React, { useEffect } from 'react'

import SimpleImageSlider from 'react-simple-image-slider'

const img = [
    {url : '/img/structure.png'}
]

const Gallery = ({images}) => {
    useEffect(()=>{
        const myEl = document.getElementsByClassName('rsis-container')
        for(let i=0; i<myEl.length; i++){
            for(let j=0; j<myEl[i].children.length; j++){
                myEl[i].children[j].style.backgroundSize = 'contain'
                myEl[i].children[j].style.backgroundRepeat = 'no-repeat'
                myEl[i].children[j].style.backgroundPosition = 'center center'
            }
        }
    }, [])
    return (
        <div>
            <SimpleImageSlider 
                style={{
                    backgroundSize:'contain'
                }}
                width={600}
                height={600}
                images={images}
                showBullets={images.length>1}
                showNavs={images.length>1}
            />
        </div>
    )
}

export default Gallery