import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image
        src={
          "https://framerusercontent.com/images/YAKjpE5UjeRCh9Jz6ngRkur4s.png?scale-down-to=2048"
        }
        alt="test-3"
        height={1200}
        width={1000}
      ></Image>
    </div>
  );
};

export default Logo;
