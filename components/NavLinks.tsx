import Link from "next/link";

type Props = {
    href : string,
    title : string
}

const NavLinks = ({ href, title } : Props) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <div className="block py-2 pl-3 pr-4 text-white">{title}
                </div>
            </a>
    );
};

export default NavLinks;
