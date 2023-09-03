import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { BsSlashLg, BsGithub } from 'react-icons/bs'

const Style = 'hover:bg-gray-300/40 rounded-[2px] px-1 py-0.5 duration-300 ease-in-out'

export default function Header() {
    return (
        <div className={cn('flex justify-between items-center h-12 w-full px-2',
            'sticky top-0 z-50  bg-white/60 backdrop-blur-sm shadow-sm border border-t-0 border-slate-800')}>
            <div className='flex items-center gap-1 font-semibold'>
                <Link href={'https://dhirajp.vercel.app'} className={Style}>Dhiraj</Link>
                <BsSlashLg className="h-12 -rotate-12 " />
                <Link href={''} className={Style}>Supabase-Gallery</Link>
            </div>
            <Link href="https://github.com/dhiraj512/Image-Gallery" className={Style}>
                <BsGithub size={20} className='m-1' />
            </Link>
        </div>
    )
}
