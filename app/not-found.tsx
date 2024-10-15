import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <section className="relative z-10 pt-[150px] pb-[120px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-16px]">
          <div className="w-full px-4">
            <div className="max-w-[530px] mx-auto text-center">
              <div className="mx-auto text-center">
                <h2 className="font-bold text-primary m-0 text-[100px] md:text-[150px]">
                  404
                </h2>
              </div>
              <h3 className="dark:text-white font-bold text-black text-3xl sm:text-4xl mb-4">
                Sorry, the page can’t be found
              </h3>
              <p className="font-medium text-body-color text-base sm:text-lg leading-relaxed sm:leading-relaxed mb-10">
                The page you were looking for appears to have been moved,
                deleted or does not exist.
              </p>
              <Link
                href="/"
                className="text-base font-medium text-white dark:text-black bg-primary py-3 px-8 md:px-9 lg:px-8 xl:px-9 hover:shadow-signUp rounded-sm transition"
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
