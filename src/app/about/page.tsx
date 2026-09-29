import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12 md:py-16">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">ABOUT US • EST. 1998 • KIGULU BIKADHO</div>
<div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 mt-6">
<div>
<h1 className="font-black text-[36px] md:text-[54px] leading-[0.88] tracking-[-0.03em]">A School Built on Excellence, Discipline & Service Since 1998</h1>
<div className="mt-6 text-[13px] leading-[1.8] opacity-80 space-y-4">
<p><b>Iganga Town View Secondary School</b> is a licensed <b>Private Partnership Secondary School</b> located in Kigulu Bikadho Cell, Iganga Town Council, Jinja Road, Iganga District, Eastern Uganda. Coordinates: <b>0.614°N, 33.47106°E</b> — 50 meters from URA Service Center, 800m from Iganga Main Taxi Park, on Jinja-Iganga Highway.</p>
<p>Founded in 1998 with 47 students and 3 teachers, today we serve <b>1114 students: 858 O-Level (S1-S4) and 256 A-Level (S5-S6)</b>. We are registered UNEB centre for both UCE and UACE. Day & Boarding.</p>
<p><b>Motto:</b> Excellence • Discipline • Service. <b>Vision:</b> To be a centre of academic excellence producing disciplined, God-fearing and productive citizens. <b>Mission:</b> To provide quality education through discipline, hard work and service.</p>
<p><b>Uniform:</b> White short-sleeved shirt with school badge, Khaki trouser for boys / Khaki skirt for girls, brown belt, black shoes, white socks. Boarding uniform includes white T-shirt for prep. Pride of Town View.</p>
<p><b>Core Values:</b> 1. Discipline — Assembly 7:30am daily, prefect system, Scouts. 2. Excellence — 85% university transition, top in Iganga District UCE 2024. 3. Service — Community outreach, Scripture Union, Scouts first aid camps. 4. Integrity — No tolerance for malpractice.</p>
</div>
<div className="mt-8 grid grid-cols-3 gap-3">
<div className="bg-[#F9F3E3] border border-[#E8DCC0] rounded-[16px] p-4 text-center"><div className="font-black text-[20px]">27</div><div className="text-[10px] font-bold opacity-60">YEARS OF LEGACY</div></div>
<div className="bg-white border border-[#E8DCC0] rounded-[16px] p-4 text-center shadow-sm"><div className="font-black text-[20px]">2500+</div><div className="text-[10px] font-bold opacity-60">ALUMNI SINCE 1998</div></div>
<div className="bg-[#F9F3E3] border border-[#E8DCC0] rounded-[16px] p-4 text-center"><div className="font-black text-[20px]">42+</div><div className="text-[10px] font-bold opacity-60">DEDICATED TEACHERS</div></div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm">
<b className="text-[13px]">Timeline</b>
<div className="mt-4 space-y-3 text-[11px] leading-5">
<div className="flex gap-3"><b>1998</b><span>Founded in Kigulu Bikadho with 3 classrooms</span></div>
<div className="flex gap-3"><b>2005</b><span>UNEB Centre accreditation for UCE</span></div>
<div className="flex gap-3"><b>2012</b><span>Started A-Level: HEL, PCM, PCB</span></div>
<div className="flex gap-3"><b>2018</b><span>Mr. Paul Mukisa becomes Headteacher — M.Ed</span></div>
<div className="flex gap-3"><b>2024</b><span>1114 students, 1 Lab, 1 Library, ICT Lab, 17 Classes</span></div>
<div className="flex gap-3"><b>2026</b><span>Admissions open, target 1300 students, new lab block</span></div>
</div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/50">
<b className="text-[13px]">Why Parents Choose Us</b>
<div className="text-[11px] mt-3 leading-6 opacity-80">
• Licensed by MoES Uganda • Private Partnership<br/>
• 7:30am Assembly • Strict Discipline • Prefect & Scouts System<br/>
• 17 Classrooms • Science Lab • Library • ICT Lab • 12 Latrines<br/>
• Day & Boarding • Meals • Prep 7pm-10pm • Safe Compound<br/>
• Football, Netball, Athletics • 4 Houses: Lion, Elephant, Leopard, Rhino<br/>
• Debate (Fri 3pm), Drama, Music, Scripture Union, ICT Club<br/>
• Bursaries for orphans & top PLE
</div>
</div>
</div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
