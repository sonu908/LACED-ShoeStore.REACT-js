import { StarIcon } from "@heroicons/react/20/solid";
import { Button } from "@mui/material";
import NavWlogo from "./NavWlogo"

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Page({ ViewSneaker }) {
  return (
    <div className="bg-white">
      <NavWlogo/>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {ViewSneaker.name}
          </h2>
          <p className="mt-4 text-gray-500">{ViewSneaker.description}</p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div className="border-t border-gray-200 pt-4">
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>{" "}
              <form className="mt-10">
                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Colour : {ViewSneaker.Colour}
                  </h3>
                </div>

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">
                      Available Sizes
                    </h3>
                    <Button variant="outlined">{ViewSneaker.size}</Button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to bag
                </button>
              </form>{" "}
            </div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src={ViewSneaker.image_url}
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg  "
          />
          <img
            src={ViewSneaker.image_urltwo}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg "
          />
          <img
            src={ViewSneaker.image_urlthree}
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg "
          />
          <img
            src={ViewSneaker.image_urlfour}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
