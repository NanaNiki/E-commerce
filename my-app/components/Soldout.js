/**
 * This is a React component that renders a "Soldout" label in a black background with white text.
 * @returns A React functional component named "Soldout" is being returned. It renders a div element
 * with a class name and some inline styles. The div displays the text "Soldout".
 */
export default function Soldout() {
    return (
        <div className="z-10 absolute sm:top-4 sm:right-4 right-0 text-center sm:p-1.5 pt-2 p-1 lg:mx-auto bg-black w-[6.4rem] h-8 text-white sm:text-sm text-xs">
          Soldout
          </div>
    )
}