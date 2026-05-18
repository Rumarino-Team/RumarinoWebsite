import { divisions } from "@/lib/team-data";
import { leadership } from "@/lib/leadership-data";
import { ArrowRight, Users, Mail, Linkedin, GraduationCap, Briefcase } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
        <div className="inline-block mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#1FB355] to-[#51DFC9] rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#1FB355] to-[#51DFC9] rotate-45 transform"></div>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#51DFC9] to-[#1FB355] rounded-full"></div>
          </div>
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6">
            <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
              MEET THE RUMARINO TEAM
            </span>
          </h1>
          <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We are a collective of innovators, engineers, and strategists united by a single mission: to conquer the challenges of underwater robotics.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <div className="font-headline text-3xl text-[#00A68C] mb-2">40+</div>
            <div className="font-roboto text-sm text-gray-400 uppercase tracking-wider">Team Members</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <div className="font-headline text-3xl text-[#51DFC9] mb-2">4</div>
            <div className="font-roboto text-sm text-gray-400 uppercase tracking-wider">Divisions</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <div className="font-headline text-3xl text-[#1FB355] mb-2">10+</div>
            <div className="font-roboto text-sm text-gray-400 uppercase tracking-wider">Years Active</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
            <div className="font-headline text-3xl text-white mb-2">6+</div>
            <div className="font-roboto text-sm text-gray-400 uppercase tracking-wider">Majors</div>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="space-y-16">
          {divisions.map((division, index) => (
            <Link 
              href={`/team/${division.slug}`} 
              key={division.slug}
              className="group block"
            >
              <section className="relative overflow-hidden rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/20 hover:-translate-y-2">
                {/* Background Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12">
                  
                  {/* Text Content */}
                  <div className={`relative z-10 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#00A68C] to-[#51DFC9]"></div>
                      <h2 className="font-headline text-3xl md:text-4xl font-bold text-white group-hover:text-[#51DFC9] transition-colors duration-300">
                        {division.name}
                      </h2>
                    </div>
                    
                    <p className="font-roboto text-gray-400 mb-6 text-lg leading-relaxed">
                      {division.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="font-roboto text-sm text-gray-400">
                          {division.members.length} miembros
                        </span>
                      </div>
                      
                      <div className="font-semibold text-[#51DFC9] flex items-center gap-2 group-hover:text-[#1FB355] transition-colors duration-300">
                        <span className="font-roboto font-medium">View Members</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className={`relative aspect-[16/10] rounded-xl overflow-hidden ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                    <Image
                      src={division.divisionImage}
                      alt={`${division.name} division photo`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint={division.divisionImageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-roboto text-sm text-white">
                          {division.members.length} members
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>

        {/* Leadership Preview */}
        <div className="mt-20 pt-16 border-t border-gray-700/50">
          <div className="text-center mb-12">
            <h3 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                LEADERSHIP SPOTLIGHT
              </span>
            </h3>
            <p className="font-roboto text-gray-400 max-w-2xl mx-auto">
              Meet some of our captains and division leads
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadership.slice(0, 6).map((member) => (
              <div 
                key={member.name}
                className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50 hover:border-[#00A68C]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#00A68C]/10 backdrop-blur-sm"
              >
                {/* Member Photo */}
                <div className="relative w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#00A68C]/30">
                  <Image
                    src={member.photoUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Member Info */}
                <h4 className="font-headline text-xl text-center text-white mb-2">
                  {member.name}
                </h4>
                <p className="font-roboto text-sm text-[#51DFC9] text-center mb-3">
                  {member.position}
                </p>
                
                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-400">
                    <GraduationCap className="h-4 w-4" />
                    <span className="font-roboto text-sm">{member.major}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-roboto text-sm">{member.year} Year</span>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-700/50">
                  {member.email && (
                    <a 
                      href={member.email}
                      className="p-2 rounded-full bg-gray-700/50 hover:bg-[#00A68C]/20 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-gray-300 hover:text-white" />
                    </a>
                  )}
                  {member.linkedinUrl && member.linkedinUrl !== '#' && (
                    <a 
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-700/50 hover:bg-[#00A68C]/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-gray-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 pt-16 border-t border-gray-700/50">
          <div className="bg-gradient-to-r from-[#00A68C]/10 to-[#51DFC9]/10 rounded-3xl p-12 max-w-4xl mx-auto border border-[#00A68C]/20 text-center">
            <h3 className="font-headline text-3xl md:text-4xl text-white mb-6">
              Want to <span className="text-[#1FB355]">Join</span> Our Team?
            </h3>
            <p className="font-roboto text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate students who want to push the boundaries of underwater robotics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link 
                  href="/contact" 
                  className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5" />
                  <span>Contact Us to Join</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
              <Button asChild size="lg" className="group">
                <Link 
                  href="/activities" 
                  className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#1FB355] to-[#00A68C] hover:from-[#00A68C] hover:to-[#51DFC9] text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Users className="h-5 w-5" />
                  <span>See Our Activities</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}