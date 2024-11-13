import React from 'react'

const ResponsiveImages = ({ src, srcSet, sizes, alt}) => {
  return (
    <img
    src= {src}
    srcSet={srcSet}
    sizes={sizes}
    alt={alt}
    loading="lazy"
    className="template__right--images"
    />
  )
}

export default ResponsiveImages;