'use client'

import { defaultImageFilterValue, getFilteredImages, getImageCategories } from '@/lib/filter'
import React, { useMemo, useState } from 'react'
import { ImageListFilter } from './ImageListFilter'
import ImageCard from './ImageCard'
import Masonry from 'react-masonry-css'

export default function Images({ images }: { images: ImageProps[] }) {
    const [filter, setFilter] = useState<ImageFilterValue>(
        defaultImageFilterValue
    )
    const allImages = getFilteredImages(images, filter)
    const categories = useMemo(() => getImageCategories(images), [images])

    const [grid, setGrid] = useState("3");
    const handleSelectGrid = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setGrid(event.target.value);
    };
    const number = parseInt(grid);
    const breakpointColumnsObj = {
        default: number,
        800: 2,
        500: 1,
    };

    return (
        <>
            <div className='flex justify-between m-5 md:m-0 md:my-5'>
                <ImageListFilter
                    categories={categories}
                    value={filter}
                    onChange={setFilter}
                />
                <select value={grid} aria-label='Column' onChange={handleSelectGrid} className="border h-9 hidden md:flex border-slate-500 bg-white px-3 py-2 text-sm ring-offset-white  placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2">
                    <option value="2">2 Column</option>
                    <option defaultChecked value="3">3 Column</option>
                    <option value="4">4 Column</option>
                </select>
            </div>
            <Masonry
                as='main'
                breakpointCols={breakpointColumnsObj}
                className="flex space-x-4 p-4 md:p-0 "
                columnClassName="space-y-4">
                {allImages?.map((image) => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </Masonry>
        </>
    )
}
