'use client'

import React, { useState } from 'react';
import { Box, Img } from '@chakra-ui/react';
import GridLayout from 'react-grid-layout';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const No1 = () => {
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 2, h: 1 },
    { i: 'b', x: 2, y: 0, w: 2, h: 1 },
  ]);

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={100}
        width={800}
        onLayoutChange={onLayoutChange}
      >
        <GalleryItem key="a" id="a" src="/assets/img1.png" />
        <GalleryItem key="b" id="b" src="/assets/img2.png" />
        {/* Add more images as needed */}
      </GridLayout>
    </DndProvider>
  );
};

const GalleryItem = ({ id, src }) => {
  const [{ isDragging }, ref] = useDrag(() => ({
    type: 'GALLERY_ITEM',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: 'GALLERY_ITEM',
    drop: () => ({ id }),
  }));

  const opacity = isDragging ? 0.5 : 1;

  return (
    <div ref={(node) => ref(drop(node))} style={{ opacity }}>
      <Box w="100%" h="auto">
        <Img src={src} w="100%" h="auto" />
      </Box>
    </div>
  );
};

export default No1;
