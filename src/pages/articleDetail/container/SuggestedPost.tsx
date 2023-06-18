import React from 'react'
import { Link } from 'react-router-dom'
type PostType = {
    _id: string
    image: string
    title: string
    created: string
}

type Props = {
    className: string
    header: string
    post: PostType[]
    tag: string[]
}

const SuggestedPost = ({ className, header, post, tag }: Props) => {
    return (
        <div className={`w-full rounded-lg p-4 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <h2 className='font-roboto font-medium text-dark-hard md:text-xl'>{header} </h2>
            <div className='grid lg:grid-cols-1 gap-y-5 mt-5 md:grid-cols-2 md:gap-x-5'>
                {post.map((item) => (
                    <div key={item._id} className='flex space-x-3 flex-nowrap items-center'>
                        <img src={item.image} className='aspect-square object-cover rounded-lg w-1/5' alt="laptop" />
                        <div className='text-sm font-roboto text-dark-hard font-medium'>
                            <h3 className='text-sm font-roboto text-dark-hard font-medium md:text-base lg:text-lg'>{item.title}</h3>
                            <span className='text-xs opacity-60'>
                                {new Date(item.created).toLocaleDateString('en-US', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className='font-roboto font-medium text-dark-hard mt-8 md:text-xl'>
                Tags
            </h2>
            <div className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>
                {
                    tag.map((item, index) => (
                        <Link key={index} to="/" className='inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm'>
                            {item}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default SuggestedPost