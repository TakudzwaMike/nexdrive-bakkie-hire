import { motion } from "motion/react";
import { Truck, Shield, Clock, BadgePercent, Headset, ChevronRight } from "lucide-react";
import logo from "../assets/logo.png";
import heroBakkie from "../assets/hero_bakkie.png";
import singleCabBakkie from "../assets/single_cab_bakkie.png";
import doubleCabBakkie from "../assets/double_cab_bakkie.png";
import superCabBakkie from "../assets/super_cab_bakkie.png";
import logisticsBakkie from "../assets/logistics_bakkie.png";
import urbanEliteImg from "../assets/urban_elite.jpg";
import heavyDutyImg from "../assets/heavy_duty.png";
import safariEditionImg from "../assets/safari_edition.jpg";
import courierPlusImg from "../assets/courier_plus.jpg";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="NexDrive Logo" className="h-16 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-600">
          <a href="#home" className="px-4 py-2 rounded-full hover:bg-accent hover:text-primary transition-all">Home</a>
          <a href="#fleet" className="px-4 py-2 rounded-full hover:bg-accent hover:text-primary transition-all">Our Fleet</a>
          <a href="#services" className="px-4 py-2 rounded-full hover:bg-accent hover:text-primary transition-all">Services</a>
          <a href="#about" className="px-4 py-2 rounded-full hover:bg-accent hover:text-primary transition-all">About Us</a>
          <a href="#contact" className="ml-4 px-5 py-2.5 bg-primary text-white rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/20">Book Now</a>
        </div>

        <button className="md:hidden p-2 text-slate-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <img 
          src={heroBakkie} 
          alt="Bakkie on a road" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-4 py-1.5 bg-accent text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-6">
            Your Reliable Bakkie Hiring Company
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Reliable Bakkie Hire, <span className="text-primary">When You Need It Most</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg">
            Affordable, reliable, and ready for any task. Whether it's for business logistics or personal moving, NexDrive has the perfect bakkie for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-light transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
              Book Now <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#fleet" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all">
              View Fleet
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-300 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  const features = [
    { icon: Truck, title: "Reliable Vehicles", desc: "Our fleet is meticulously maintained to ensure zero downtime for your business." },
    { icon: BadgePercent, title: "Affordable Pricing", desc: "Competitive rates with no hidden costs. We offer flexible daily and weekly plans." },
    { icon: Clock, title: "24/7 Availability", desc: "Need a bakkie at odd hours? Our support and booking system is always online." },
    { icon: Headset, title: "Expert Support", desc: "Professional customer service to help you choose the right vehicle for your needs." },
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Why Choose NexDrive?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We pride ourselves on being more than just a rental company; we are your dependable transport partner.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:bg-accent transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <f.icon className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl mb-3">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const INITIAL_FLEET = [
  {
    id: "1",
    name: "Standard Single Cab",
    type: "Single Cab",
    image: singleCabBakkie,
    desc: "The reliable workhorse for your business.",
    longDesc: "Built for heavy-duty tasks, our Standard Single Cab bakkies offer maximum load space and durability. Ideal for construction, agriculture, and general logistics.",
    specs: { fuel: "Diesel", capacity: "1.2 Tons", transmission: "Manual" },
    features: ["Reinforced Bed", "Tow Bar", "Air Conditioning"],
    price: 850
  },
  {
    id: "2",
    name: "Premium Double Cab 4x4",
    type: "Double Cab",
    image: doubleCabBakkie,
    desc: "Versatility meets comfort and power.",
    longDesc: "The perfect balance between passenger comfort and cargo capacity. With 4x4 capability, this bakkie handles any terrain with ease, making it ideal for both crew transport and personal adventure.",
    specs: { fuel: "Diesel", capacity: "1.0 Ton", transmission: "Automatic" },
    features: ["4x4 Drive", "Leather Seats", "Infotainment System"],
    price: 1250
  },
  {
    id: "3",
    name: "Extended Super Cab",
    type: "Super Cab",
    image: superCabBakkie,
    desc: "Extra space where it counts.",
    longDesc: "The Super Cab offers the best of both worlds: a long load bed with extra internal storage space behind the front seats. Keep your tools secure and your cargo safe.",
    specs: { fuel: "Petrol", capacity: "1.1 Tons", transmission: "Manual" },
    features: ["Extended Cab", "Remote Locking", "ABS"],
    price: 950
  },
  {
    id: "4",
    name: "Logistics Specialist",
    type: "Single Cab",
    image: logisticsBakkie,
    desc: "Optimized for urban deliveries.",
    longDesc: "Specifically configured for logistics and courier services, this bakkie features a high canopy and rear-step for easy loading and unloading in urban environments.",
    specs: { fuel: "Diesel", capacity: "1.2 Tons", transmission: "Manual" },
    features: ["High Canopy", "Rear Step", "Tracking System"],
    price: 900
  },
  {
    id: "5",
    name: "Enterprise Fleet Edition",
    type: "Double Cab",
    image: heroBakkie,
    desc: "The ultimate business companion.",
    longDesc: "A flagship vehicle in our fleet, designed for long-distance travel and professional presence. Offers premium safety features and exceptional fuel economy.",
    specs: { fuel: "Diesel", capacity: "1.0 Ton", transmission: "Automatic" },
    features: ["Reverse Camera", "Cruise Control", "Safety Rails"],
    price: 1350
  },
  {
    id: "6",
    name: "Heavy-Duty Workhorse",
    type: "Single Cab",
    image: heavyDutyImg,
    desc: "For the toughest site jobs.",
    longDesc: "Strictly built for the most demanding physical tasks. This single cab bakkie features a reinforced chassis and a high-impact load bed, making it the top choice for hauling heavy construction materials and industrial equipment.",
    specs: { fuel: "Diesel", capacity: "1.5 Tons", transmission: "Manual" },
    features: ["All-Terrain Tires", "Heavy Duty Suspension", "Bull Bar"],
    price: 1100
  },
  {
    id: "7",
    name: "Urban Elite 4x2",
    type: "Double Cab",
    image: urbanEliteImg,
    desc: "The professional's urban utility.",
    longDesc: "Combining sleek urban aesthetics with the core functionality of a 1-ton bakkie. This double cab is perfect for corporate site visits and high-end logistics where both style and a large load bed are required.",
    specs: { fuel: "Petrol", capacity: "0.9 Ton", transmission: "Automatic" },
    features: ["Park Assist", "Bluetooth", "Climate Control"],
    price: 1150
  },
  {
    id: "8",
    name: "Contractor's Special",
    type: "Super Cab",
    image: "https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&q=80&w=800",
    desc: "Balanced for individual contractors.",
    longDesc: "Our most popular model for independent contractors. Reliable mechanicals and a versatile cab configuration that adapts to your daily needs.",
    specs: { fuel: "Diesel", capacity: "1.1 Tons", transmission: "Manual" },
    features: ["Central Locking", "Power Steering", "USB Charging"],
    price: 880
  },
  {
    id: "9",
    name: "Safari Edition 4x4",
    type: "Double Cab",
    image: safariEditionImg,
    desc: "Built for rugged terrain.",
    longDesc: "A bakkie that laughs at difficult roads. Equipped with a specialized 4x4 drivetrain, snorkel, and all-terrain protection, it's designed specifically for heavy-duty rural transport and remote site logistics.",
    specs: { fuel: "Diesel", capacity: "1.0 Ton", transmission: "Manual" },
    features: ["Snorkel", "Off-road Tires", "Winch Ready"],
    price: 1450
  },
  {
    id: "10",
    name: "Courier Plus",
    type: "Single Cab",
    image: courierPlusImg,
    desc: "Efficiency at its best.",
    longDesc: "A lightweight, nimble single cab bakkie designed for rapid urban deliveries. Excellent fuel efficiency makes it the top choice for high-volume logistics.",
    specs: { fuel: "Petrol", capacity: "0.8 Ton", transmission: "Manual" },
    features: ["Eco Mode", "Cargo Nets", "Compact Size"],
    price: 750
  }
];

import { useState, useEffect } from "react";

export const Fleet = () => {
  const [vehicles, setVehicles] = useState(INITIAL_FLEET);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    const savedFleet = localStorage.getItem("nexdrive_fleet");
    if (savedFleet) {
      setVehicles(JSON.parse(savedFleet));
    }
  }, []);

  const addVehicle = (newVehicle: any) => {
    const updatedFleet = [...vehicles, { ...newVehicle, id: Date.now().toString() }];
    setVehicles(updatedFleet);
    localStorage.setItem("nexdrive_fleet", JSON.stringify(updatedFleet));
    setShowAddForm(false);
  };

  return (
    <section id="fleet" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl mb-4">Our Professional Fleet</h2>
            <p className="text-slate-600 max-w-xl">Explore our range of 10+ specialized bakkies. We have the perfect vehicle for every load and terrain.</p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsAdmin(!isAdmin)}
              className="px-4 py-2 border border-slate-200 rounded-full text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              {isAdmin ? "Exit Admin" : "Admin Dashboard"}
            </button>
            {isAdmin && (
              <button 
                onClick={() => setShowAddForm(true)}
                className="px-5 py-2 bg-primary text-white rounded-full text-xs font-semibold hover:bg-primary-light transition-all shadow-lg shadow-primary/20"
              >
                + Add Vehicle
              </button>
            )}
            <a href="#contact" className="text-primary font-semibold flex items-center gap-2 hover:underline ml-4">
              Get a custom quote <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <motion.div 
              key={v.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedVehicle(v)}
              className="group cursor-pointer p-6 rounded-[2rem] hover:bg-accent transition-all duration-300 bg-white border border-slate-100"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={v.image} 
                  alt={v.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  {v.type}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-4 py-2 rounded-2xl shadow-lg">
                  <p className="text-primary font-bold text-lg">R{v.price}<span className="text-[10px] text-slate-500 font-normal uppercase ml-1">/ day</span></p>
                </div>
              </div>
              <h3 className="text-2xl mb-2 group-hover:text-primary transition-colors">{v.name}</h3>
              <p className="text-slate-600 text-sm mb-6 line-clamp-2">{v.desc}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {v.features.slice(0, 2).map((feat: string, fi: number) => (
                    <span key={fi} className="text-[10px] uppercase tracking-wider font-bold bg-slate-50 px-2.5 py-1.5 rounded-lg text-slate-500">
                      {feat}
                    </span>
                  ))}
                </div>
                <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vehicle Details Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedVehicle(null)}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl overflow-hidden overflow-y-auto max-h-[90vh]"
          >
            <div className="grid lg:grid-cols-2">
              <div className="h-80 lg:h-full relative">
                <img src={selectedVehicle.image} className="w-full h-full object-cover" alt={selectedVehicle.name} />
                <button 
                  onClick={() => setSelectedVehicle(null)}
                  className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                >
                  <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">{selectedVehicle.type}</span>
                  <h3 className="text-3xl md:text-4xl mb-4">{selectedVehicle.name}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{selectedVehicle.longDesc}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Fuel</p>
                      <p className="font-semibold text-slate-800">{selectedVehicle.specs.fuel}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Payload</p>
                      <p className="font-semibold text-slate-800">{selectedVehicle.specs.capacity}</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Trans</p>
                      <p className="font-semibold text-slate-800">{selectedVehicle.specs.transmission}</p>
                    </div>
                  </div>

                  <h4 className="font-bold text-slate-900 mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-y-3 mb-10">
                    {selectedVehicle.features.map((f: string, fi: number) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-sm shadow-primary/50" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">Daily Rate</p>
                      <p className="text-4xl font-display font-bold text-primary">R{selectedVehicle.price}</p>
                    </div>
                    <a href="#contact" onClick={() => setSelectedVehicle(null)} className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-light transition-all shadow-xl shadow-primary/20">
                      Book This Bakkie
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Add Vehicle Modal (Admin) */}
      {showAddForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowAddForm(false)} className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-white w-full max-w-lg rounded-[2.5rem] p-10 shadow-2xl"
          >
            <h3 className="text-2xl mb-6">Add New Bakkie to Fleet</h3>
            <form onSubmit={(e: any) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              addVehicle({
                name: formData.get("name"),
                type: formData.get("type"),
                image: formData.get("image") || singleCabBakkie,
                desc: formData.get("desc"),
                longDesc: formData.get("longDesc"),
                specs: {
                  fuel: formData.get("fuel"),
                  capacity: formData.get("capacity"),
                  transmission: formData.get("transmission")
                },
                features: formData.get("features")?.toString().split(",").map(f => f.trim()) || [],
                price: Number(formData.get("price"))
              });
            }} className="space-y-4">
              <input name="name" placeholder="Vehicle Name" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" required />
              <div className="grid grid-cols-2 gap-4">
                <select name="type" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl">
                  <option>Single Cab</option>
                  <option>Double Cab</option>
                  <option>Super Cab</option>
                </select>
                <input name="price" type="number" placeholder="Price (R)" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" required />
              </div>
              <input name="image" placeholder="Image URL (Unsplash or Assets)" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" />
              <input name="desc" placeholder="Short Description" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" required />
              <textarea name="longDesc" placeholder="Full Details Description" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" rows={3} required />
              <div className="grid grid-cols-3 gap-4">
                <input name="fuel" placeholder="Fuel Type" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs" required />
                <input name="capacity" placeholder="Capacity" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs" required />
                <input name="transmission" placeholder="Trans" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs" required />
              </div>
              <input name="features" placeholder="Features (comma separated)" className="w-full px-5 py-3 bg-slate-50 border border-slate-100 rounded-xl" />
              <div className="flex gap-4 pt-4">
                <button type="button" onClick={() => setShowAddForm(false)} className="flex-1 py-4 border border-slate-100 rounded-xl font-bold hover:bg-slate-50">Cancel</button>
                <button type="submit" className="flex-1 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-light shadow-lg shadow-primary/20">Add to Fleet</button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export const Services = () => {
  const services = [
    { title: "Construction", desc: "Reliable transport for building materials, tools, and site equipment. We understand the demands of the construction industry." },
    { title: "Logistics & Deliveries", desc: "Efficient solutions for last-mile deliveries and business logistics. Keep your supply chain moving without the overhead of owning a fleet." },
    { title: "Personal Use", desc: "Moving house or buying new furniture? Our bakkies are perfect for those one-off tasks that require extra space." },
  ];

  return (
    <section id="services" className="section-padding bg-primary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-light font-bold uppercase tracking-widest text-xs mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Tailored Solutions for Every Need</h2>
            <div className="space-y-8">
              {services.map((s, i) => (
                <div key={i} className="border-l-2 border-primary-light/30 pl-6 hover:border-primary-light transition-colors">
                  <h3 className="text-xl mb-2">{s.title}</h3>
                  <p className="text-blue-100/70 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src={logisticsBakkie} 
                alt="Logistics" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl hidden md:block max-w-xs">
              <p className="text-slate-900 font-display font-bold text-xl mb-2">Trusted by local contractors and businesses across the country.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">About NexDrive</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Founded on the principles of reliability and customer trust, NexDrive has grown to become a leading name in bakkie hire. We understand that when you need a vehicle, you need it to be ready, reliable, and affordable.
          </p>
          <p className="text-slate-600 mb-12">
            Our mission is to empower businesses and individuals by providing high-quality transport solutions that are accessible and easy to book. From small personal tasks to large-scale industrial projects, we are your dependable partner on the road.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-12">
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-2xl hover:bg-accent transition-colors">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Reliability</p>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-2xl hover:bg-accent transition-colors">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Support</p>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} className="p-4 rounded-2xl hover:bg-accent transition-colors">
              <p className="text-3xl font-bold text-primary">50+</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Vehicles</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden grid lg:grid-cols-2">
          <div className="p-12 lg:p-20">
            <h2 className="text-3xl md:text-4xl mb-6">Get a Quote Today</h2>
            <p className="text-slate-600 mb-10">Fill out the form below and our team will get back to you with a tailored rental plan within the hour.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-accent/30 transition-all" placeholder="Dumisani Zvoushe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-accent/30 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Vehicle Type</label>
                <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-accent/30 transition-all">
                  <option>Single Cab Bakkie</option>
                  <option>Double Cab 4x4</option>
                  <option>Super Cab</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-accent/30 transition-all" placeholder="Tell us about your requirements..."></textarea>
              </div>
              <button className="w-full py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary-light transition-all shadow-lg shadow-primary/20">
                Send Request
              </button>
            </form>
          </div>
          
          <div className="bg-primary p-12 lg:p-20 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Headset className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-lg">+27 (76) 503-8692</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg">info@nexdrive.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">Address</p>
                    <p className="text-lg">217 Robert Street, Pretoria, 0184</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-blue-200 text-sm italic">"Your Reliable Bakkie Hiring Company"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="NexDrive Logo" className="h-12 w-auto" />
        </div>
        
        <div className="flex gap-8 text-sm text-slate-500">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Fleet Guidelines</a>
        </div>
        
        <p className="text-sm text-slate-400">
          © 2026 NexDrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
