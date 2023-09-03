'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function ImageCard({ image }: { image: ImageProps }) {
    const [isLoading, setLoading] = useState(true)
    return (
        <div className="group bg-white shadow-sm border overflow-hidden border-slate-500 hover:shadow-2xl duration-300 ease-in-out p-2">
            <Image
                alt=""
                src={image.src}
                width="400"
                height="400"
                className={clsx(
                    'duration-500 ease-in-out group-hover:opacity-75 w-full h-auto',
                    isLoading
                        ? 'scale-105 blur-sm grayscale'
                        : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
            />
            <h1 className="font-semibold text-base my-1">{image.title}</h1>
            <div className='flex gap-2 flex-wrap'>
                {image.tags.map((t) => (
                    <p className='text-xs before:content-["#"] text-black border border-slate-800/60 py-[1px] px-[2px]' key={t}>{t}</p>
                ))}
            </div>
        </div>
    )
}
