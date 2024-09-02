'use client';

export default function NotFound() {
    return(
        <html>
            <body className="flex flex-col items-center justify-center">
                <h1 className="text-[32px] font-bold tracking-wides mt-10 md:mt-14">Sonething went wrong!</h1>
                <div className="h-1 w-10/12 bg-white xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-8/12 mt-3"></div>
                <span className="icon-[ph--smiley-sad] w-14 h-14 colot-[#f2f2f2] mt-6"></span>
            </body>
        </html>
    )
}