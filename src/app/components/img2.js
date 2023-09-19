'use client'

import React, { useState } from 'react';
import { Stack, Box, Img } from '@chakra-ui/react';
import GridLayout from 'react-grid-layout';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const No2 = () => {
    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 1, h: 1 },
        { i: 'b', x: 1, y: 0, w: 1, h: 1 },
        { i: 'c', x: 2, y: 0, w: 1, h: 1 },
        { i: 'd', x: 3, y: 0, w: 1, h: 1 },
        { i: 'e', x: 0, y: 1, w: 1, h: 1 },
        { i: 'f', x: 1, y: 1, w: 1, h: 1 },
        { i: 'g', x: 2, y: 1, w: 1, h: 1 },
        { i: 'h', x: 3, y: 1, w: 1, h: 1 },
    ]);

    const onLayoutChange = (newLayout) => {
        setLayout(newLayout);
    };

    const handleDrop = (draggedItem, targetItem) => {
        const updatedLayout = layout.map((item) => {
            if (item.i === draggedItem.id) {
                return { ...item, x: targetItem.x, y: targetItem.y };
            }
            if (item.i === targetItem.id) {
                return { ...item, x: draggedItem.x, y: draggedItem.y };
            }
            return item;
        });

        setLayout(updatedLayout);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <GridLayout
                className="layout"
                layout={layout}
                cols={4}
                rowHeight={200} // Adjust the height as needed
                width={'25%'}
                onLayoutChange={onLayoutChange}
            >
                <GalleryItem key="a" id="a" src="/assets/img1.png" onDrop={handleDrop} />
                <GalleryItem key="b" id="b" src="/assets/img2.png" onDrop={handleDrop} />
                <GalleryItem key="c" id="c" src="/assets/img3.png" onDrop={handleDrop} />
                <GalleryItem key="d" id="d" src="/assets/img4.png" onDrop={handleDrop} />
                {/* Add more images as needed */}
            </GridLayout>
        </DndProvider>
    );
};

const GalleryItem = ({ id, src, onDrop }) => {
    const [{ isDragging }, ref] = useDrag(() => ({
        type: 'GALLERY_ITEM',
        item: { id, x: 0, y: 0 },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: 'GALLERY_ITEM',
        drop: (item) => {
            onDrop(item, { id, x: 0, y: 0 });
        },
    }));

    const opacity = isDragging ? 0.5 : 1;

    return (
        <div ref={(node) => ref(drop(node))} style={{ opacity }}>
            <Box w="100%" h="auto">
                <Img src={src} w="100%" h="auto" p={'10px'} />
            </Box>
        </div>
    );
};

export default No2;

