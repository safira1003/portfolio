

export default function PrimaryButton({ link, children, onClick = null }) {
    return (
        <a
            onClick={() => {
                onClick("contact");
            }}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer flex items-center justify-center gap-3 px-4 py-2 rounded-full border-2 hover:bg-white hover:text-black 
            bg-black text-white border-white transition-colors duration-500'>
            {children}
        </a>
    )
}