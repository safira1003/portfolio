

export default function SectionTemp({ id, children }) {
    return (
        <section id={id}>
            <div className="border-1 border-stone-200 w-3/4 mx-auto"></div>
            <div className="flex items-center min-h-screen py-[20%] md:py-[10%] text-white font-fira-mono">
                {children}
            </div>
        </section>
    )
}