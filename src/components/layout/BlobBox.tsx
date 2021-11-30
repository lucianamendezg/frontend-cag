import React from 'react';
import styled from 'styled-components';

const outputBlobs = (blobs: any) =>
  blobs.map(
    (blob: any, bi: number) =>
      `
      &.blob-${blob.id}-${bi} {
        opacity: ${blob.opacity};
        -moz-transform: ${`translate(${blob.translate})`} ${blob.transform};
        -ms-transform: ${`translate(${blob.translate})`} ${blob.transform};
        -webkit-transform: ${`translate(${blob.translate})`} ${blob.transform};
        transform: ${`translate(${blob.translate})`} ${blob.transform};
        z-index: ${blob.zIndex};
      }
    `
  );

const BlobBox = (props: any) => {
  const { blobs } = props;

  const Blobs = styled.div`
    display: none;
    z-index: -1;
    transform-style: preserve-3d;

    @media (min-width: 768px) {
      display: block;
    }

    img {
      position: absolute;
      overflow: visible;

      ${outputBlobs(blobs)}
    }
  `;

  return (
    <Blobs>
      {blobs.map((blob: any, bi: number) => {
        return (
          <img
            alt=""
            className={`blob-${blob.id}-${bi}`}
            key={blob.id}
            src={blob.blob}
          />
        );
      })}
    </Blobs>
  );
};

export default BlobBox;