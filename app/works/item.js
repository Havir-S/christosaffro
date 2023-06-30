import Image from "next/image";
import Link from "next/link";

export default function Item({ children, name, src, contain }) {
  return (
    <Link href="/">
      <div className="relative max-w-[400px] mx-auto h-48 rounded-lg">
        <Image
          placeholder="blur"
          blurDataURL="data:..."
          src={src}
          alt={name}
          fill
          className={`${
            contain ? "object-contain" : "object-cover"
          } rounded-lg`}
        />
      </div>
      <div className="text-center max-w-[350px] mx-auto mt-4">
        <h2 className="text-xl  text-gray-200">{name}</h2>
        <p className="text-sm text-gray-300">{children}</p>
      </div>
    </Link>
  );
}
