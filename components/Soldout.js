/**
 * This is a React component that renders a "Soldout" label in a black background with white text.
 * @returns A React functional component named "Soldout" is being returned. It renders a div element
 * with a class name and some inline styles. The div displays the text "Soldout".
 */
export default function Soldout() {
  return (
    <div className="absolute right-0 z-10 h-8 w-[6.4rem] bg-black p-1 pt-2 text-center text-xs text-white sm:right-4 sm:top-4 sm:p-1.5 sm:text-sm lg:mx-auto">
      Soldout
    </div>
  );
}
