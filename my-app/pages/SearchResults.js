import Image from "next/image";

export default function SearchResults({ filteredPlants }) {

  return (
    <div className="overflow-y-scroll scroll-smooth">
      {filteredPlants.map((plant) => {
        return (
          <div key={plant.id} className="flex flex-col">
            <div className="flex flex-row">
              <Image
                width={80}
                height={80}
                src={plant.image}
                alt={plant.name}
                className="p-2"
              />
              <div className="flex flex-col my-auto">
                <h2 className="font-bold">{plant.name}</h2>
                <h3>{plant.price}€</h3>
                <div className="hidden sm:flex flex-row justify-end">
                  <h5 className="font-xs opacity-40 italic">
                    #{plant.tags.join(" #")}
                  </h5>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-stone-400 rounded-full"></div>
          </div>
        );
      })}
    </div>
  );
}
