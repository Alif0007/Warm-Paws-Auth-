import toast, { Toaster } from "react-hot-toast";
import {  useLoaderData, useParams } from "react-router";


const ServiceDetails = () => {

    const data = useLoaderData()
    const id = useParams()
    

    const ser = data.filter(s=>s.serviceId==id.serviceId)
    
    const service = ser[0]


  

 

  const handleBook = (e) => {
    e.preventDefault();
    
    e.target.name.value= ""
    e.target.email.value= ""
    // alert(`Booking confirmed for !`);
    toast.success(`Booking confirmed for ${service.serviceName} !`)
  };




    return (
        <div>
            <div className="max-w-4xl mx-auto bg-blue-50 p-6 rounded-xl shadow-lg mt-10 border border-blue-300">
      
      {/* Image */}
      <img
        src={service.image}
        alt={service.serviceName}
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />

      {/* Service Info */}
      <h1 className="text-3xl font-bold text-blue-900 text-center">{service.serviceName}</h1>
      <p className="text-gray-700 mt-2 text-center">{service.description}</p>

      <div className="grid grid-cols-2 gap-4 mt-6 bg-white p-4 rounded-lg shadow">
        <p><span className="font-semibold">Price:</span> ${service.price}/day</p>
        <p><span className="font-semibold">Rating:</span> ⭐ {service.rating}</p>
        <p><span className="font-semibold">Provider:</span> {service.providerName}</p>
        <p><span className="font-semibold">Email:</span> {service.providerEmail}</p>
        <p><span className="font-semibold">Category:</span> {service.category}</p>
        <p><span className="font-semibold">Slots Available:</span> {service.slotsAvailable}</p>
      </div>

      {/* Booking Form */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Book This Service 🐾❄️
        </h2>

        <form onSubmit={handleBook} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your name"
              
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded-lg"
              placeholder="Enter your email"
              
              required
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-white w-full py-2 rounded-xl shadow font-semibold transition-all"
          >
            Book Now
          </button>
        </form>
        {/* React Toaster...................  */}
        <Toaster/>
      </div>
    </div>
        </div>
    );
};

export default ServiceDetails;