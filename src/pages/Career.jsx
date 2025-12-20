import React from 'react'

export default function Career() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-4xl text-center">

        {/* Badge */}
        <span className="inline-block mb-6 px-5 py-2 text-sm font-semibold text-green-500 tracking-wide bg-white/10 backdrop-blur-md rounded-full border border-white/20">
          Careers at BitNextro
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          We’re Not Hiring Yet — <br />
          <span className="bg-linear-to-r from-sky-400 via-orange-400 to-green-400 bg-clip-text text-transparent">
            But Something Big Is Coming 
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
          At <span className="font-semibold text-white">BitNextro Solutions Pvt. Ltd.</span>,
          we believe great technology is built by curious minds, bold thinkers,
          and people who love solving real-world problems.
          <br /><br />
          We’re currently laying the foundation for an exciting team and will
          be opening opportunities very soon for passionate individuals ready
          to shape the future of IT, cybersecurity, and digital innovation.
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold mb-2">Innovative Work</h3>
            <p className="text-gray-300 text-sm">
              Work on next-gen technologies that make a real impact.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold mb-2">Growth Mindset</h3>
            <p className="text-gray-300 text-sm">
              Learn, experiment, and grow with a forward-thinking team.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
            <h3 className="text-xl font-bold mb-2">Modern Culture</h3>
            <p className="text-gray-300 text-sm">
              A culture that values ideas, ownership, and creativity.
            </p>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="text-lg text-green-400 font-semibold">
          📢 Hiring will begin very soon. Stay tuned!
        </div>

      </div>
    </section>
  );
}

