export default function SocialMedia ({ LogoComponent, name }) {
    return (
        <li>
            <a href={"#"} className="text-gray-400 hover:text-pink-400">
                <span className="sr-only">{name}</span>
                <LogoComponent className="size-5" fill="currentColor" clipRule="evenodd" fillRule="evenodd" />
            </a>
        </li>
    );
}