import React from 'react';

function Button() {
    return (
        <div className=' flex justify-end'>
            <button className=' w-24 h-9 bg-gray-100 text-black font-bold text-sm rounded-xl mt-2 mr-1'>New Post</button>
            <button className="btn focus-outline inline-flex cursor-pointer select-none flex-row
        items-center  bg-gray-800 rounded-xl
        duration-200 ease-in-out typo-callout justify-center font-bold iconOnly h-10 m-1 w-10 p-0 mt-2 rounded-12 btn-tertiaryFloat laptop:flex">
            <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none size-6"><path d="M7.833 13a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005H6.167a3.167 3.167 0 01-3.162-2.987L3 17.833v-1.666a3.167 3.167 0 012.987-3.162l.18-.005h1.666zm10 0a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005h-1.666a3.167 3.167 0 01-3.162-2.987l-.005-.18v-1.666a3.167 3.167 0 012.987-3.162l.18-.005h1.666zm-10 1.5H6.167c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152v-1.666c0-.872-.67-1.588-1.523-1.66l-.144-.007zm10 0h-1.666c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152v-1.666c0-.872-.67-1.588-1.523-1.66l-.144-.007zM7.833 3a3.167 3.167 0 013.162 2.987l.005.18v1.666a3.167 3.167 0 01-2.987 3.162l-.18.005H6.167a3.167 3.167 0 01-3.162-2.987L3 7.833V6.167a3.167 3.167 0 012.987-3.162L6.167 3h1.666zm12.528 3.259a.75.75 0 01-.009 1.484l-.102.007h-2.5v2.5a.75.75 0 01-1.491.111l-.009-.11V7.75h-2.5l-.111-.009a.75.75 0 01.009-1.484l.102-.007h2.5v-2.5a.75.75 0 011.491-.111l.009.11V6.25h2.5l.111.009zM7.833 4.5H6.167c-.872 0-1.588.67-1.66 1.523l-.007.144v1.666c0 .872.67 1.588 1.523 1.66l.144.007h1.666l.144-.006a1.667 1.667 0 001.516-1.509l.007-.152V6.167c0-.872-.67-1.588-1.523-1.66L7.833 4.5z" fill="gray" fill-rule="evenodd"></path></svg>
            </button>
            <button class="btn focus-outline inline-flex cursor-pointer select-none flex-row
        items-center bg-gray-800 rounded-xl
        duration-200 ease-in-out typo-callout justify-center font-bold iconOnly h-10 m-1 w-10 p-0  mt-2 rounded-12 btn-tertiaryFloat "><svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 pointer-events-none"><path d="M12 3a2.312 2.312 0 012.25 2.847 6.39 6.39 0 014.106 5.491l.015.264.004.21v2.226l.072.022c.803.28 1.405.988 1.53 1.852l.018.175.005.158c0 1.224-.95 2.226-2.154 2.307l-.159.006-2.046-.001-.013.033a3.94 3.94 0 01-3.216 2.384l-.21.016-.202.005a3.926 3.926 0 01-3.536-2.22l-.083-.183-.015-.035H6.313c-1.171 0-2.139-.87-2.292-1.998l-.016-.156L4 16.245c0-.903.52-1.693 1.325-2.076l.165-.071.135-.048v-2.238A6.377 6.377 0 019.75 5.846 2.312 2.312 0 0112 3zm0 3.938c-.437 0-.86.057-1.262.165l-.148.042a4.876 4.876 0 00-3.46 4.441l-.005.226v2.808c0 .414-.31.756-.71.806l-.197.012a.813.813 0 00-.007 1.613l.101.007h3.25l.005.143a2.438 2.438 0 002.272 2.289l.161.005.16-.005a2.438 2.438 0 002.272-2.265l.005-.168h3.25l.102-.006a.813.813 0 000-1.612l-.196-.012a.813.813 0 01-.712-.704l-.006-.103v-2.807l-.003-.183a4.878 4.878 0 00-3.461-4.485l-.143-.041A4.881 4.881 0 0012 6.937zM12 4.5a.812.812 0 10.788 1.013l.018-.099.007-.101A.812.812 0 0012 4.5z" fill="gray" fill-rule="evenodd"></path></svg></button>
        <div className=' flex justify-between bg-gray-800 rounded-xl  h-9 m-2 w-35 p-0'>
        <button className=' ml-4  text-center btn focus-outline inline-flex cursor-pointer select-none flex-row
        items-center  shadow-none transition
        duration-200 ease-in-out typo-callout justify-center font-bold h-9 px-3 rounded-10 btn-tertiary gap-1 text-accent-bacon-default pl-3 text-pink-500 ' ><svg width="1em" height="1em" viewBox="0 0 24 24" fill="FC538D" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M23.772 14.342a12.062 12.062 0 000-4.684l-.49.097-.491.097a11.056 11.056 0 010 4.296l.49.097.49.097zm-1.793 4.325l-.416-.278-.415-.278a11.066 11.066 0 01-3.037 3.037l.278.415.278.416a12.066 12.066 0 003.312-3.312zm-7.637 5.105l-.097-.49-.097-.491a11.057 11.057 0 01-4.296 0l-.097.49-.097.49a12.062 12.062 0 004.684 0zm-9.01-1.793l.279-.416.278-.415a11.066 11.066 0 01-3.037-3.037l-.415.278-.416.278a12.066 12.066 0 003.312 3.312zM.229 14.342a12.058 12.058 0 010-4.684l.49.097.491.097a11.059 11.059 0 000 4.296l-.49.097-.49.097zm1.793-9.01l.416.279.415.278A11.066 11.066 0 015.89 2.852l-.278-.415-.278-.416A12.066 12.066 0 002.02 5.333zM9.658.229l.097.49.097.491a11.059 11.059 0 014.296 0l.097-.49.097-.49a12.058 12.058 0 00-4.684 0zm9.01 1.793l-.279.416-.278.415c1.2.804 2.233 1.837 3.037 3.037l.415-.278.416-.278a12.066 12.066 0 00-3.312-3.312z" fill="#FC538D"></path></svg>0</button>
        
        <button type="button" aria-label="Profile settings"><div className=" flex justify-center mr-1" aria-label="Reputation">
            <div className=' flex justify-center pt-1' >
            <svg width="1em" height="1em" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 pointer-events-none text-accent-onion-default"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13.605A5.333 5.333 0 108 2.938a5.333 5.333 0 000 10.667zm1.213-8.672a.494.494 0 00-.812-.517L4.944 7.922a.494.494 0 00.35.843H7.82l-1.034 2.844a.494.494 0 00.812.518l3.456-3.507a.494.494 0 00-.348-.842H8.179l1.034-2.845z" fill="indigo"></path></svg> 10</div >
            <img className=" mr-1 w-8 h-8 ml-2  rounded-xl" loading="lazy" type="avatar" alt="shadow87's profile" src="https://lh3.googleusercontent.com/a/ACg8ocIm_SM-0_zautwQ8Qt2T4cGVTymynnE_8xtZC76tNkrJA=s96-c"/> 
            </div>
        </button>
    </div>
        </div>
    );
}
export function BigButton(){
    return 
}

export default Button;