import { FaMoneyCheck, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

export default function stripeSuccess() {
  return (
    <div className="">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <FaMoneyCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you purchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>

          <button asChild className="mt-5">
            <Link href={"/"} className="text-accent flex items-center gap-x-2">
              Return To Home<FaArrowRight></FaArrowRight>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
