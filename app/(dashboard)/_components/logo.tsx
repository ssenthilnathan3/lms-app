import Image from "next/image";

const Logo = () => {
    return (
        <Image
            width={20}
            height={20}
            src={'/logo.svg'}
            alt="logo"
        />
    );
}
 
export default Logo;