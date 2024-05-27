import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallbackSrc, alt, classStyle, cssStyle}) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      className={classStyle}
      src={error ? fallbackSrc : src}
      onError={handleImageError}
      alt={alt}
    />
  );
};

export default ImageWithFallback