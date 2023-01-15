import { CodeBracketIcon } from '@heroicons/react/24/outline'

function Footer({ }) {
    return (
        <div className='flex items-center place-content-center'>
            <span className="text-center  text-white text-sm">Crafted by <a href="https://twitter.com/blixthalka" className="text-blue-400 hover:text-blue-500">@blixthalka</a></span>
            <CodeBracketIcon className="w-6 h-6 text-gray-500 ml-3" />
        </div>
    )
}

export default Footer;
