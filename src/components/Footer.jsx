import { PaintBrushIcon } from '@heroicons/react/24/outline';

function Footer() {
    return (
        <div>
            <div className='flex items-center  mt-5'>
                <PaintBrushIcon className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-center  text-white text-sm">Skapad av <a href="https://twitter.com/blixthalka" className="text-blue-400 hover:text-blue-500">@blixthalka</a></span>
            </div>
        </div>
    )
}

export default Footer;
