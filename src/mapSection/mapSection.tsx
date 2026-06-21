import { Clock, PhoneCall } from "lucide-react"; // Imported PhoneCall for the emergency section

export const MapSection = () => {
  return (
    <section className="bg-[#121212] text-white py-16 lg:py-24 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full">
            Our Location
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Visit Our <span className="text-orange-500">Studio.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            We are conveniently located in the heart of the city. Stop by or get directions below.
          </p>
        </div>

        {/* Responsive Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Left Column: Emergency Alert & Working Hours */}
          <div className="flex flex-col gap-4 lg:col-span-1 justify-center">
            {/* Emergency Callout */}
            <div className="p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl flex items-center gap-4">
              <div className="p-3 bg-orange-500 rounded-xl text-white shrink-0 animate-pulse">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-orange-500">Emergency Available</h4>
                <p className="mt-0.5 text-sm text-zinc-300 font-medium">24/7 Rapid Response Support</p>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl flex items-start gap-4 h-full justify-center flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-orange-600/10 rounded-xl text-orange-500 shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-xl text-white">Working Hours</h4>
              </div>
              
              <div className="w-full space-y-3 text-sm text-zinc-400">
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800/50">
                  <span className="font-medium text-zinc-300">Mon – Fri</span>
                  <span className="font-semibold text-white">09:00 – 19:00</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-zinc-800/50">
                  <span className="font-medium text-zinc-300">Saturday</span>
                  <span className="font-semibold text-white">10:00 – 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-zinc-500">Sunday</span>
                  <span className="font-semibold text-zinc-500 line-through">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Responsive Map Element */}
          <div className="lg:col-span-2 w-full min-h-[350px] sm:min-h-[450px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
            <iframe
              title="Denta Premium Studio Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.441148116049!2d-74.00944718459226!3d40.71277597933011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3163a7f2db%3A0xc90f12218f68c7c9!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};