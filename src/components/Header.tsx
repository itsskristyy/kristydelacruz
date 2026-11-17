const Header = () => {
return (
    <header className="flex items-center justify-between border-b border-black px-6 py-4 font-mono">
        <span className="text-lg font-bold lowercase">kristy de la cruz</span>
        <nav className="flex gap-6 text-sm">
            <a href="#work" className="hover:underline">work</a>
            <a href="#about" className="hover:underline">about</a>
            <a href="#contact" className="hover:underline">contact</a>
        </nav>
    </header>
)
}
export default Header;