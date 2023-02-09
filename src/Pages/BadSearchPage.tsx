import React from 'react'

export const BadSearchPage = () => {
    return (
        <div className='flex flex-col items-center text-center gap-4 mt-16'>
            <img src="src\assets\images\frowning-face.png" alt="" height={'56px'} width={'56px'} />
            <div>
                <p className='font-bold mb-4'>No Definitions Found</p>
                <p className='text-subtitle'>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again
                    at a later time or head to the web instead.
                </p>
            </div>
        </div>
    )
}
