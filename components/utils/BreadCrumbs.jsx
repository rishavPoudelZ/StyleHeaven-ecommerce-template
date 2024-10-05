import Image from "next/image";
import Link from "next/link";

function BreadCrumbs({ pathname }) {
  // Split the path into an array of segments
  const pathSegments = pathname.split("/").filter((segment) => segment);

  return (
    <div className={`w-full h-[20vh] lg:h-[30vh] relative ${pathname =='/' ? 'hidden' : 'block'}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={"/hero2.jpg"}
          alt="BreadCrumbs Background Image"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full text-black">
        <div className="breadcrumbs text-sm bg-opacity-50 p-2 rounded-md">
          <ul className="flex space-x-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
              return (
                <li key={index}>
                  <Link href={href}>
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbs;
