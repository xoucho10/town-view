import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">ACADEMICS • UNEB CENTRE NO: UXXXX • 17 CLASSROOMS</div>
<h1 className="font-black text-[36px] md:text-[52px] leading-[0.88] mt-4">S1–S6 Academic Excellence: O-Level & A-Level UNEB Centre</h1>
<p className="text-[13px] opacity-70 max-w-[65ch] mt-4 leading-7">We follow Ugandan Competency-Based New Curriculum for S1-S4 and traditional A-Level curriculum. We are UNEB registered centre. Continuous assessment, projects, mocks, practicals, career guidance.</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30">
<div className="w-12 h-12 bg-white border border-[#E8DCC0] rounded-full grid place-items-center font-black">S1</div>
<h3 className="font-black text-[15px] mt-4">S1–S2: Foundation Stage</h3>
<div className="text-[9px] font-bold tracking-widest opacity-50 mt-1">12 COMPULSORY SUBJECTS • NEW CURRICULUM</div>
<div className="text-[11px] mt-3 leading-6 opacity-80">
<b>Subjects:</b> Mathematics, English Language, Biology, Chemistry, Physics, History & Political Education, Geography, CRE, Entrepreneurship Education, Agriculture, ICT, Luganda/Lusoga, Physical Education, Art & Design.<br/><br/>
<b>Assessment:</b> 20% class activities, 20% projects, 60% end-term competency exam. Agriculture plots for practicals.<br/>
<b>Uniform:</b> White & Khaki checked daily. Parade Monday.
</div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm">
<div className="w-12 h-12 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full grid place-items-center font-black">S3</div>
<h3 className="font-black text-[15px] mt-4">S3–S4: UCE Mastery</h3>
<div className="text-[9px] font-bold tracking-widest opacity-50 mt-1">UNEB UCE • 858 STUDENTS • MOCKS & PRACTICALS</div>
<div className="text-[11px] mt-3 leading-6 opacity-80">
<b>Core 8:</b> English, Math, Biology, Chemistry, Physics, History, Geography, CRE/Commerce.<br/>
<b>Optional:</b> Agriculture, ICT, Entrepreneurship, Luganda, Art.<br/>
<b>Facilities:</b> Science Lab for Physics/Chemistry/Biology practicals, ICT lab for computer practicals.<br/>
<b>Prep:</b> District mocks Nov, UNEB registration Feb, practicals in our lab. 2024: 92% Division 1-3.<br/>
<b>Classes:</b> 5 streams S3, 5 streams S4 — 45 students per class avg.
</div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30">
<div className="w-12 h-12 bg-white border border-[#E8DCC0] rounded-full grid place-items-center font-black">S5</div>
<h3 className="font-black text-[15px] mt-4">S5–S6: UACE & University Track</h3>
<div className="text-[9px] font-bold tracking-widest opacity-50 mt-1">256 STUDENTS • ARTS & SCIENCES • 85% JOIN UNIVERSITY</div>
<div className="text-[11px] mt-3 leading-6 opacity-80">
<b>Arts Combos:</b> HEL (History Economics Luganda), HEG (History Economics Geography), LEG (Luganda Economics Geography), BEG (Divinity Economics Geography), HLD, HEL/ICT.<br/>
<b>Science Combos:</b> PCM (Physics Chemistry Math), PCB (Physics Chemistry Biology), BCM (Biology Chemistry Math), BCA (Biology Chemistry Agriculture), MEG (Math Economics Geography).<br/>
<b>Subsidiary:</b> General Paper + ICT for all A-Level.<br/>
<b>Career:</b> University application guidance, bursary info, alumni mentorship — doctors, lawyers, engineers visit.
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
<div className="rounded-[16px] border border-[#E8DCC0] p-4 bg-white text-center"><div className="font-black text-[18px]">17</div><div className="text-[10px] opacity-60">Classrooms</div><div className="text-[9px] mt-1">45 avg per class</div></div>
<div className="rounded-[16px] border border-[#E8DCC0] p-4 bg-white text-center"><div className="font-black text-[18px]">1 Lab</div><div className="text-[10px] opacity-60">Science Lab</div><div className="text-[9px] mt-1">Physics Chem Bio</div></div>
<div className="rounded-[16px] border border-[#E8DCC0] p-4 bg-white text-center"><div className="font-black text-[18px]">1 Library</div><div className="text-[10px] opacity-60">+ ICT Lab</div><div className="text-[9px] mt-1">40 computers</div></div>
<div className="rounded-[16px] border border-[#E8DCC0] p-4 bg-white text-center"><div className="font-black text-[18px]">7:30am</div><div className="text-[10px] opacity-60">Assembly Daily</div><div className="text-[9px] mt-1">Discipline first</div></div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
