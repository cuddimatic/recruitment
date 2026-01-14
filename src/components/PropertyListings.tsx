interface PropertyCardProps {
  image: string;
  label: string;
  title: string;
}

const PropertyCard = ({ image, label, title }: PropertyCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl group cursor-pointer">
      <div>
        <div className="relative h-[260px]">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white/80 text-xs font-medium uppercase tracking-wide mb-1">
              {label}
            </p>
            <h3 className="text-white text-lg font-semibold">{title}</h3>

            <div className="flex items-center gap-1.5 mt-3 justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
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
    <div className="relative">
      <div className="grid grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyListings;
