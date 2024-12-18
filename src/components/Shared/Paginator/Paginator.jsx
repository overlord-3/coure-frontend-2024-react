import React from 'react'
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react"

export const Paginator = ({pages, pressHandler, page, prev, next, size = 3}) => {
    let firstIndex = page
    let lastIndex = page + size - 1

    return (
        <div className='paginator-wrapper'>
            <button onClick={() => {
                if(prev) pressHandler(page - 1)
            }}
            className={prev ? 'paginator-wrapper__item active' : 'paginator-wrapper__item'}>
                <IconChevronLeft/>
            </button>
            {firstIndex > 1 && 
            <>
                <button onClick={() => pressHandler(1)} className='paginator-wrapper__item'>{1}</button>
                <span>...</span>
            </>}
            {(new Array(size)).fill('fill').map((_, index) => {
                
                const el = firstIndex + index

                return (
                <button key={el} 
                onClick={() => pressHandler(el)}
                className={page === el ? 'paginator-wrapper__item active' : 'paginator-wrapper__item'}>
                    {el}
                </button>
            )})}
            {lastIndex < pages && 
            <>
                <span>...</span>
                <button onClick={() => pressHandler(pages)} className='paginator-wrapper__item'>{pages}</button>
            </>}
            <button onClick={() => {
                if(next) pressHandler(page + 1)
            }}
            className={next ? 'paginator-wrapper__item active' : 'paginator-wrapper__item'}>
                <IconChevronRight/>
            </button>
        </div>
    )
}
