import Image from "next/image";
import Link from "next/link";

function CategoryCard({ name, title }) {
  return (
    <div className="bg-gray-800 rounded-xl ">
      <Link href={`/sellgame?category=${name}`}>
        <Image
          width={900}
          height={900}
          className="w-90 h-30 lg:w-200 lg:h-50 object-cover "
          src={`/images/${name}.jpg`}
          alt={name}
        />
      </Link>
      <p className="m-1 lg:m-2 text-xs lg:text-xl ">{title}</p>
    </div>
  );
}

export default CategoryCard;
