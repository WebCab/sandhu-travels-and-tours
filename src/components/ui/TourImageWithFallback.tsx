'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface TourImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  src: string;
  fallbackSrc?: string;
}

export default function TourImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...props
}: TourImageWithFallbackProps) {
  const defaultFallback =
    fallbackSrc ||
    `https://placehold.co/800x500/0f2e2a/faf7f2?text=${encodeURIComponent(alt || 'Sandhu Travels')}`;

  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (!hasError) {
          setHasError(true);
          setImgSrc(defaultFallback);
        }
      }}
    />
  );
}
