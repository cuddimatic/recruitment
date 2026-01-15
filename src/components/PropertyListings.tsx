interface PropertyCardProps {
  image: string;
  label: string;
  title: string;
}

const PropertyCard = ({ image, label, title }: PropertyCardProps) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden rounded-xl">
      <div className="relative h-[220px] sm:h-[240px] lg:h-[260px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-white/80 sm:text-xs">
            {label}
          </p>

          <h3 className="truncate text-sm font-semibold text-white sm:text-base lg:text-lg">
            {title}
          </h3>

          <div className="mt-3 flex justify-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
            <span className="h-2 w-2 rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
};

const properties = [
  {
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    label: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
    label: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    label: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
  },
];

const PropertyListings = () => {
  return (
    <section className="relative">
      <div className="flex gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {properties.map((property, index) => (
          <div key={index} className="w-[260px] shrink-0 sm:w-auto">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyListings;
