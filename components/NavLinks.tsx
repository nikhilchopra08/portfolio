import Link from "next/link";

type Props = {
    href : string,
    title : string
}

const NavLinks = ({ href, title } : Props) => {
    return (
        <Link href={href} className="block py-2 pl-3 pr-4 text-white">{title}
        </Link>
    );
};

export default NavLinks;
