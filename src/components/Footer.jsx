import { ArrowPathIcon } from '@heroicons/react/24/outline';

function Footer() {
    return (
        <div>

            <div className='flex items-center  mt-5'>
                <ArrowPathIcon className="w-5 h-5 text-gray-500 mr-3" />
                <span className="text-center  text-white text-sm">Follow <a href="https://twitter.com/srindex_" className="text-blue-400 hover:text-blue-500">@srindex_</a> for Twitter updates.</span>

            </div>
        </div>
    )
}

export default Footer;
