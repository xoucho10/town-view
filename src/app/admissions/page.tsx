import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12 md:py-16">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10">
<div>
<div className="inline-flex bg-[#2b1d14] text-white rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">ADMISSIONS OPEN • NOV 1, 2025 – JAN 31, 2026 • DAY & BOARDING</div>
<h1 className="font-black text-[36px] md:text-[52px] leading-[0.88] mt-4">Join 1114 Students Who Chose Town View SS — Apply for 2026</h1>
<p className="text-[13px] opacity-70 mt-4 leading-7">We admit S1–S6. S1 requires PLE results, S5 requires UCE results. Bursaries available for orphans, vulnerable, top PLE performers (Aggregate 4-8). Interviews every Saturday 9am.</p>

<div className="mt-8 space-y-4">
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm"><b className="text-[13px]">Requirements Checklist</b><div className="mt-3 text-[11px] leading-6 grid grid-cols-1 md:grid-cols-2 gap-2"><div>✓ PLE Result Slip (S1) — Original & copy</div><div>✓ UCE Result Slip (S5) — Original & copy</div><div>✓ Previous School Report (S2-S6)</div><div>✓ Birth Certificate / National ID for parent</div><div>✓ 2 Passport photos in White & Khaki (if available)</div><div>✓ Recommendation letter from previous school</div><div>✓ Interview with Headteacher Mr. Paul Mukisa</div><div>✓ Medical form filled at school</div></div></div>

<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-[#F9F3E3]/50"><b className="text-[13px]">Fees Structure 2026 (Provisional)</b><div className="mt-3 text-[11px] leading-7">
<b>Day Scholars:</b> S1-S4: UGX 450,000 per term • S5-S6: UGX 650,000 per term (includes lunch, lab, library, ICT, sports, clubs)<br/>
<b>Boarding:</b> S1-S4: UGX 850,000 per term • S5-S6: UGX 950,000 per term (includes meals 3x, accommodation, prep, security)<br/>
<b>Other:</b> Admission fee UGX 50,000 (once) • Uniform: White shirt, Khaki trouser/skirt available at school shop UGX 80,000 set<br/>
<b>Payment:</b> Centenary Bank — Iganga Town View SS Account: XXXXXX • MoMo Pay: +256 751 123 456<br/>
<b>Bursaries:</b> 10% discount for orphans with proof, 15% for PLE aggregate 4-8, siblings discount 5%.
</div></div>

<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm"><b className="text-[13px]">Admissions Calendar</b><div className="mt-3 text-[11px] leading-6">
<b>Nov 1, 2025:</b> Applications open — forms at office & online<br/>
<b>Nov-Dec 2025:</b> Interviews every Saturday 9am — Come with documents<br/>
<b>Jan 10, 2026:</b> PLE results — S1 placement<br/>
<b>Jan 15-31, 2026:</b> Reporting for S1, S2-S6 continuing<br/>
<b>Feb 10, 2026:</b> S1-S6 classes start • Orientation week<br/>
<b>Feb 15, 2026:</b> UCE results — S5 placement
</div></div>
</div>
</div>

<div className="bg-white border border-[#E8DCC0] rounded-[24px] p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
<h3 className="font-black text-[18px]">Online Application Form 2026</h3>
<p className="text-[11px] opacity-60 mt-1">Fill and submit — Admissions office will call within 24 hours</p>
<div className="mt-6 space-y-3">
<input placeholder="Student Full Name (as on PLE/UCE)" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px] outline-none focus:border-[#2b1d14]"/>
<div className="grid grid-cols-2 gap-3"><input placeholder="Class: S1, S2, S3, S4, S5, S6" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/><input placeholder="Age & Gender" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/></div>
<input placeholder="Previous School & District" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/>
<input placeholder="PLE Aggregate / UCE Results (e.g., Aggregate 12, UCE 2nd Grade)" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/>
<input placeholder="Parent/Guardian Name" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/>
<input placeholder="Parent Phone +256 XXX XXX XXX" className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px]"/>
<div className="grid grid-cols-2 gap-3"><select className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px] bg-white"><option>Day Scholar</option><option>Boarding</option></select><select className="w-full border border-[#E8DCC0] rounded-full px-5 py-3.5 text-[12px] bg-white"><option>Bursary? No</option><option>Orphan - Need Bursary</option><option>Top PLE - Need Bursary</option></select></div>
<textarea placeholder="Why do you want to join Town View SS? Any special needs?" className="w-full border border-[#E8DCC0] rounded-[18px] px-5 py-3.5 text-[12px] h-[90px]"></textarea>
<button className="w-full bg-[#2b1d14] text-white rounded-full py-4 text-[13px] font-black shadow-lg">Submit Application for 2026 →</button>
<div className="text-[10px] opacity-50 text-center leading-5">By submitting, you agree to school rules: White & Khaki uniform, 7:30am assembly, discipline, fees payment per term.<br/>Or visit: Kigulu Bikadho, Jinja Road, Iganga • Mon-Sat 8am-4:30pm • Call: +256 751 123 456</div>
</div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
