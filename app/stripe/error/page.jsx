import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ErrorStripe() {
    return (
      <div className="py-10 flex items-center justify-center flex-col gap-y-5">
        <h2>Something went wrong....</h2>
        <Link href={"/"} className="text-accent flex items-center gap-x-2">Return To Home<FaArrowRight></FaArrowRight></Link>
      </div>
    );
  }