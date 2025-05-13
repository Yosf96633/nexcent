export default function Tesla() {
  const logos = [
    "/Logo1.png",
    "/Logo2.png",
    "/Logo3.png",
    "/Logo4.png",
    "/Logo5.png",
    "/Logo6.png",
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#F5F7FA]">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Tesla Image */}
        <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/tesla.png"
              alt="Tesla"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
            sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
            Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
            molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
            molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
            ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
            turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
            sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
            neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
            dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-green-500 font-medium text-xl mb-1">Tim Smith</h3>
          <p className="text-gray-500 mb-8">
            British Dragon Boat Racing Association
          </p>

          {/* Logos and Link */}
          <div className="flex flex-wrap items-center gap-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            ))}

          
          </div>
        </div>
      </div>
    </div>
  );
}
