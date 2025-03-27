"use client"


export const DisplayMsgBtn = () => {
    const handleOnClick = () => {
        if (!window.hello) return

        window.hello.ccall('myFunction', null, null, null)
        alert('Check console for output')
    }

    return <button onClick={handleOnClick} className='bg-white duration-300 disabled:opacity-45 text-black py-1 px-3 cursor-pointer rounded-md text-2xl font-[500]'>
        Display Message
    </button>
}