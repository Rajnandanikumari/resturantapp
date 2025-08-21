import React from 'react'
import Hero from './hero'
import LoginModal from './login'

export default function Page() {
    return (
        <>
            <Hero />
            <div className='bg-black'>
                <LoginModal />
            </div>

        </>
    )
}
