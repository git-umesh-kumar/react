export default function Card() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-4 rounded-t-lg aspect-[4/3] object-cover w-full"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product_image1"
        />
      </a>

      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>

        <div className="flex items-center mt-2.5 mb-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M20.924 7.625a1.52 1.52 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.53 1.53 0 0 0-2.752 0L7.365 5.847l-5.05.734A1.53 1.53 0 0 0 1.463 9.2l3.656 3.563-.863 5.03a1.53 1.53 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.53 1.53 0 0 0 2.226-1.617l-.863-5.03 3.656-3.563a1.52 1.52 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <svg
            className="w-4 h-4 text-gray-300 dark:text-gray-600"
            fill="currentColor"
            viewBox="0 0 22 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M20.924 7.625a1.52 1.52 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.53 1.53 0 0 0-2.752 0L7.365 5.847l-5.05.734A1.53 1.53 0 0 0 1.463 9.2l3.656 3.563-.863 5.03a1.53 1.53 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.53 1.53 0 0 0 2.226-1.617l-.863-5.03 3.656-3.563a1.52 1.52 0 0 0 .387-1.575Z" />
          </svg>

          <span className="ml-3 bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-900">
            4.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
