import { Users } from 'lucide-react';

export default function ActivitiesPage() {  
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">Beyond the Robot</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          At RUMarino, we build more than autonomous vehicles. We build community, 
          develop skills, and create opportunities that shape the future of our members.
        </p>
      </section>

      {/* SECTION 1: COMPETITIONS & CHALLENGES */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Competitions & Challenges
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proving our skills beyond the underwater realm
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* L3Harris Shark Tank Card */}
          <div className="bg-gray-800/50 rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold">UPRM Shark Tank</h3>
                <p className="text-gray-400 text-sm">Organized by L3Harris</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {/* Logros pasados */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <span>3rd Place</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="font-medium">2024 Edition</span>
                    <p className="text-sm text-gray-400">Among 15+ competing teams</p>
                  </div>
                </div>
                
                {/* Próxima competencia */}
                <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-700/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs font-bold">
                      UPCOMING
                    </div>
                    <span className="text-sm font-medium text-gray-300">2025 Competition</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="font-semibold">Competing again in February 2025</span> – 
                    Preparing to showcase our latest innovations and compete for the top spot.
                  </p>
                  <div className="mt-3 text-sm text-gray-400">
                    <span className="font-medium">Submission Deadline:</span> February 9, 2025
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 pt-2">
                Annual internal competition where student groups pitch their projects 
                to L3Harris industry experts for funding, mentorship, and recognition.
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Public Speaking', 'Business Pitching', 'Project Management', 
                    'Technical Documentation', 'Strategic Planning'].map((skill) => (
                    <span key={skill} className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <h4 className="font-semibold mb-3">2025 Competition Timeline:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Video Submission</span>
                    <span className="font-medium">Feb 9</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Top 5 Announcement</span>
                    <span className="font-medium">Feb 16</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Final Presentation</span>
                    <span className="font-medium">Feb 24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AUVSI Foundation Card */}
          <div className="bg-gray-800/50 rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <h3 className="text-2xl font-bold">AUVSI Foundation</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              The premier international competition for autonomous underwater vehicles, 
              where we compete against top universities worldwide.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Competition Focus:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Autonomous Navigation Challenges
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Technical Documentation & Reporting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Real-world Problem Solving
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Team Growth:</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-[#00A68C]">30+</div>
                    <div className="text-sm text-gray-400">Team Members</div>
                  </div>
                  <div className="text-center p-3 bg-gray-700/50 rounded-lg">
                    <div className="text-2xl font-bold text-[#00A68C]">9+</div>
                    <div className="text-sm text-gray-400">Years Competing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FUNDRAISING & SUSTAINABILITY */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Fundraising & Sustainability
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we fuel our passion and ensure the team's future
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Pizza Fridays */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <img 
                src="/pizza_sale_3.webp" 
                alt="Pizza Sales" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">Pizza Sales</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                  Weekly tradition that funds our projects while bringing the campus community together.
                </p>
                <div className="pt-4 border-t border-gray-700 mt-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Every Month</span>
                    <span className="font-semibold text-green-400">200+ slices/month</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pickleball Tournament */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <img 
                src="/pickleball_4.webp" 
                alt="Pickleball Tournament" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">Pickleball Tournament</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                  Annual community sports event that promotes healthy competition and team bonding.
                </p>
                <div className="pt-4 border-t border-gray-700 mt-auto">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Annual Event</span>
                    <span className="font-semibold text-green-400">50+ Participants</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate Sponsorships */}
            <div className="bg-gray-800/50 rounded-2xl shadow-xl border border-gray-700/50 hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
              <img 
                src="/outreach_8.webp" 
                alt="Industry Partnerships" 
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">Industry Partnerships</h3>
                <p className="text-gray-400 mb-6 text-sm flex-grow">
                  Building relationships with leading companies that support our mission and provide real-world insights.
                </p>
                <div className="pt-4 border-t border-gray-700 mt-auto">
                  <div className="text-sm text-gray-500">
                    Partners: Boeing, GM, L3Harris, Lockheed Martin, NAVSEA, among many others
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUTREACH & EDUCATION */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Outreach & Education
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Inspiring the next generation of engineers and scientists
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* School Visits */}
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">School Visits</h3>
            <p className="text-gray-300 mb-6">
              We visit local schools to demonstrate our AUV and show students 
              the exciting possibilities in STEM fields.
            </p>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-[#00A68C]">20+</div>
                <div className="text-gray-400">Schools Visited</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-[#00A68C]">1000+</div>
                <div className="text-gray-400">Students Inspired</div>
              </div>
            </div>
          </div>

          {/* Workshops & Talks */}
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Technical Workshops</h3>
            <p className="text-gray-300 mb-6">
              Hands-on sessions where we teach programming, electronics, 
              and mechanical design to interested students.
            </p>
            <div className="space-y-3">
              {['Python for Robotics', 'CAD Design Basics', 'Electronics 101', '3D Printing'].map((topic) => (
                <span key={topic} className="inline-block bg-gray-800/70 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TEAM CULTURE */}
      <section className="py-16">
        <div className="conbg-gradient-to-r from-gray-800 to-black py-16tainer mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            More Than a Team, A Family
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-xl font-bold mb-3">Mentorship Program</h3>
              <p className="text-gray-400">
                Experienced members guide newcomers through their first year.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-xl font-bold mb-3">Social Events</h3>
              <p className="text-gray-400">
                Regular gatherings, celebrations, and team-building activities.
              </p>
            </div>
            
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-xl font-bold mb-3">Career Development</h3>
              <p className="text-gray-400">
                Resume workshops, interview prep, and industry connections.
              </p>
            </div>
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto">
            <p className="text-xl text-gray-400 italic">
              "At RUMarino, we don't just build robots together – we build friendships, 
              skills, and futures that last a lifetime."
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20 border border-[#00A68C]/30 rounded-3xl p-12 max-w-4xl mx-auto backdrop-blur-sm">
          
          <h2 className="font-headline text-3xl md:text-4xl text-white mb-6">
            Ready to Be Part of <span className="text-[#51DFC9]">Something Bigger?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join a team that values growth, community, and innovation – both in and out of the workshop.
          </p>

          <a
            href="https://tally.so/r/pbOZ8b"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Users className="size-6" />
            Join Our Diverse Community
          </a>

        </div>
      </section>
    </div>
  );
}