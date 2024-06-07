import React, { useState } from 'react';

const ImageWithFallback = ({ src, fallbackSrc, alt, className, cssStyle}) => {
  const [error, setError] = useState(false);

  const handleImageError = () => {
    setError(true);
  };

  return (
    <img
      className={className}
      src={error ? fallbackSrc : src}
      onError={handleImageError}
      alt={alt}
    />
  );
};

export default ImageWithFallback