import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">ALUMNI • 2500+ SINCE 1998 • 85% UNIVERSITY</div>
<h1 className="font-black text-[36px] md:text-[50px] leading-[0.9] mt-4">From Kigulu Bikadho to the World — Our Proud Alumni</h1>
<p className="text-[13px] opacity-70 max-w-[60ch] mt-4 leading-7">Since 1998, Town View SS has produced doctors, lawyers, engineers, teachers, business people. 85% join university. Alumni meet every December 28th. Join network: alumni@igangatownview.sc.ug</p>

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10">
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-[#F9F3E3]/40"><div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-white border border-[#E8DCC0] grid place-items-center font-black">JK</div><div><b className="text-[13px]">Dr. James Kisige</b><div className="text-[9px] opacity-60 font-bold">CLASS OF 2015 • UCE 1ST GRADE, UACE 18 PTS</div></div></div><div className="text-[11px] mt-4 leading-6">MBChB Makerere 2023. Now at Iganga General Hospital. "Town View discipline in S1-S6 made me survive medical school. Morning assembly 7:30am taught time management."</div><div className="text-[9px] mt-3 opacity-50">Mentors S5 PCB students • Speaks on career day</div></div>
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm"><div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-[#F9F3E3] border border-[#E8DCC0] grid place-items-center font-black">FN</div><div><b className="text-[13px]">Fatuma Namatovu</b><div className="text-[9px] opacity-60 font-bold">2018 • HEAD PREFECT • ADVOCATE</div></div></div><div className="text-[11px] mt-4 leading-6">LLB UCU Mukono 2023, Diploma Law Development Centre 2024. Advocate in Kampala. "Debate Club Friday 3pm gave me voice. Prefectship taught leadership of 1114 students."</div><div className="text-[9px] mt-3 opacity-50">Supports debate club • UGX 200k annual donation</div></div>
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-[#F9F3E3]/40"><div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-white border border-[#E8DCC0] grid place-items-center font-black">DB</div><div><b className="text-[13px]">Daniel Balikowa</b><div className="text-[9px] opacity-60 font-bold">2016 • ICT CLUB • SOFTWARE ENGINEER</div></div></div><div className="text-[11px] mt-4 leading-6">BSc Computer Science Makerere 2021. Software Engineer SafeBoda Kampala. "ICT lab was my first code editor. Mr. Mukisa ICT taught me HTML in S3. Now I code for a living."</div><div className="text-[9px] mt-3 opacity-50">Donated 5 computers to ICT lab 2024</div></div>
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm"><div className="flex gap-3 items-center"><div className="w-12 h-12 rounded-full bg-[#F9F3E3] border border-[#E8DCC0] grid place-items-center font-black">AN</div><div><b className="text-[13px]">Aisha Nabirye</b><div className="text-[9px] opacity-60 font-bold">2019 • TEACHER • TOWN VIEW SS</div></div></div><div className="text-[11px] mt-4 leading-6">B.A Education Kyambogo 2023. Now teaching Geography S1-S4 at Town View. "Taught by Mr. Mukisa, now teaching with him. Full circle! White & Khaki pride."</div><div className="text-[9px] mt-3 opacity-50">Geography Dept • Scouts patron assistant</div></div>
</div>

<div className="mt-10 rounded-[20px] border border-[#E8DCC0] p-6 bg-[#2b1d14] text-white flex flex-col md:flex-row justify-between gap-4 items-center">
<div><b className="text-[16px]">Join Alumni Network — Give Back</b><div className="text-[11px] opacity-60 mt-1">Annual meeting Dec 28th • WhatsApp group • Mentorship • Bursary fund • Contact: alumni@igangatownview.sc.ug</div></div>
<div className="bg-white text-[#2b1d14] rounded-full px-6 py-3 text-[12px] font-black">Join Now →</div>
</div>

{/* ===== NEW SECTION ADDED BELOW — WITHOUT CHANGING ABOVE ===== */}
<div className="mt-16 border-t border-[#E8DCC0] pt-12">
<div className="flex flex-col md:flex-row justify-between gap-6">
<div>
<div className="inline-flex bg-[#2b1d14] text-white rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">ALUMNI MEMBERSHIP 2026 • OFFICIAL APPLICATION</div>
<h2 className="font-black text-[28px] md:text-[38px] leading-[0.9] mt-4">Alumni Membership Application — Charges & Impact</h2>
<p className="text-[12px] opacity-70 max-w-[60ch] mt-3 leading-6">Your membership fee is not just a subscription — it directly builds the next generation in Kigulu Bikadho. 100% of alumni contributions go to development fund audited by Board of Governors.</p>
</div>
<div className="bg-[#F9F3E3] border border-[#E8DCC0] rounded-[16px] p-4 h-fit md:w-[320px]">
<b className="text-[12px]">Where Your Money Goes — Transparency</b>
<div className="mt-3 space-y-2 text-[11px]">
<div className="flex justify-between"><span>🧪 30% — Science Lab & Library</span><b>New chemicals, books</b></div>
<div className="flex justify-between"><span>🎓 30% — Bursary Fund</span><b>Orphans & top PLE</b></div>
<div className="flex justify-between"><span>💻 20% — ICT Lab</span><b>Computers & Internet</b></div>
<div className="flex justify-between"><span>🏫 20% — Classrooms & Boarding</span><b>17 → 20 rooms target</b></div>
</div>
<div className="mt-3 text-[9px] opacity-60">Audited annually • Report shared Dec 28th meeting • Receipt via WhatsApp</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

<div className="rounded-[20px] border-2 border-[#2b1d14] p-6 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#2b1d14] text-white text-[9px] font-black px-3 py-1 rounded-bl-[12px]">MOST POPULAR</div>
<div className="w-10 h-10 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full grid place-items-center">🎓</div>
<b className="block mt-4 text-[16px]">Annual Member</b>
<div className="text-[9px] font-bold opacity-50 mt-1">FOR ALL ALUMNI • RENEW EVERY DEC</div>
<div className="mt-4 flex items-baseline gap-1"><span className="font-black text-[30px]">UGX 50,000</span><span className="text-[11px] opacity-60">/ year</span></div>
<div className="mt-4 text-[11px] leading-6 space-y-1.5">
<div>✓ Alumni ID Card — White & Khaki design</div>
<div>✓ WhatsApp Group + Annual Meeting Dec 28th</div>
<div>✓ Mentorship — Career talk to S5-S6</div>
<div>✓ Vote in Alumni Executive 2026-2028</div>
<div>✓ 1 Free school tour with family</div>
<div>✓ Name on Alumni Wall in Library</div>
</div>
<div className="mt-6 bg-[#F9F3E3] border border-[#E8DCC0] rounded-[14px] p-3">
<div className="text-[10px] font-black">IMPACT:</div><div className="text-[10px] opacity-70 mt-1 leading-5">UGX 50k = 1 term bursary support for 1 orphan OR 10 science lab chemicals OR 5 library books. Directly helps 858 O-Level students.</div>
</div>
<button className="mt-5 w-full bg-[#2b1d14] text-white rounded-full py-3 text-[12px] font-black">Apply for Annual — Pay Now →</button>
</div>

<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30">
<div className="w-10 h-10 bg-white border border-[#E8DCC0] rounded-full grid place-items-center">💎</div>
<b className="block mt-4 text-[16px]">Lifetime Member</b>
<div className="text-[9px] font-bold opacity-50 mt-1">ONE TIME • FOREVER • LEGACY</div>
<div className="mt-4 flex items-baseline gap-1"><span className="font-black text-[30px]">UGX 500,000</span><span className="text-[11px] opacity-60">/ once</span></div>
<div className="mt-4 text-[11px] leading-6 space-y-1.5">
<div>✓ Everything in Annual — Lifetime</div>
<div>✓ Gold Alumni Badge + Certificate framed</div>
<div>✓ Permanent name on Founders Wall — Main gate</div>
<div>✓ 1 Classroom desk named after you / family</div>
<div>✓ Free entry to all school events forever</div>
<div>✓ Can contest for Alumni Chairperson</div>
</div>
<div className="mt-6 bg-white border border-[#E8DCC0] rounded-[14px] p-3">
<div className="text-[10px] font-black">IMPACT:</div><div className="text-[10px] opacity-70 mt-1 leading-5">UGX 500k = 1 computer for ICT Lab (40 needed) OR 1 year full bursary for 1 S1 top PLE student OR renovation of 1 classroom blackboard to whiteboard. Like Daniel Balikowa donated 5 PCs.</div>
</div>
<button className="mt-5 w-full bg-white border border-[#E8DCC0] rounded-full py-3 text-[12px] font-black shadow-sm">Apply for Lifetime →</button>
</div>

<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm">
<div className="w-10 h-10 bg-[#2b1d14] text-white rounded-full grid place-items-center">🏢</div>
<b className="block mt-4 text-[16px]">Corporate / Diaspora Sponsor</b>
<div className="text-[9px] font-bold opacity-50 mt-1">FOR COMPANIES & ALUMNI ABROAD • CSR</div>
<div className="mt-4 flex items-baseline gap-1"><span className="font-black text-[30px]">UGX 1M+</span><span className="text-[11px] opacity-60">/ year</span></div>
<div className="mt-4 text-[11px] leading-6 space-y-1.5">
<div>✓ Everything in Lifetime</div>
<div>✓ Company logo on Speech Day banner</div>
<div>✓ Sponsor a full student S1-S4 (UGX 2M/year)</div>
<div>✓ Naming: Lab, Library shelf, Dormitory block</div>
<div>✓ Tax receipt for CSR</div>
<div>✓ Annual report with photos of impact</div>
</div>
<div className="mt-6 bg-[#F9F3E3]/60 border border-[#E8DCC0] rounded-[14px] p-3">
<div className="text-[10px] font-black">IMPACT:</div><div className="text-[10px] opacity-70 mt-1 leading-5">UGX 1M+ = Construction of 1 new latrine (12 exist, need 20) OR 2 bunk beds for boarding OR 1 year salary support for 1 science teacher. Build legacy.</div>
</div>
<button className="mt-5 w-full bg-white border border-[#E8DCC0] rounded-full py-3 text-[12px] font-black shadow-sm">Become Sponsor →</button>
</div>

</div>

<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white">
<b className="text-[14px]">Alumni Membership Application Form</b>
<div className="mt-1 text-[11px] opacity-60">Fill — Pay via MoMo / Bank — Get ID in 24hrs via WhatsApp</div>
<div className="mt-5 space-y-3">
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<input placeholder="Full Name (as at school)" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
<input placeholder="Year of Completion e.g. 2015" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<input placeholder="Class: e.g., S4, S6 HEL, PCB" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
<input placeholder="Phone +256 (WhatsApp)" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
</div>
<input placeholder="Email address" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
<input placeholder="Current Job / Business / Location" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px]"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<select className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px] bg-white"><option>Choose Membership</option><option>Annual — UGX 50,000 / year</option><option>Lifetime — UGX 500,000 once</option><option>Corporate/Diaspora — UGX 1M+ / year</option></select>
<select className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[11px] bg-white"><option>Payment Method</option><option>MTN MoMo: +256 751 123 456</option><option>Airtel Money: +256 770 987 654</option><option>Centenary Bank: Account XXXXXX</option><option>Cash at School Office</option></select>
</div>
<textarea placeholder="How do you want to help? e.g., Mentorship, Donate books, Sponsor student, Career talk, Pay fees for orphan" className="w-full border border-[#E8DCC0] rounded-[16px] px-4 py-3 text-[11px] h-[80px]"></textarea>
<button className="w-full bg-[#2b1d14] text-white rounded-full py-3.5 text-[12px] font-black">Submit Alumni Application & Pay →</button>
<div className="text-[9px] opacity-50 text-center leading-4">After payment, send MoMo message screenshot to +256 751 123 456. ID card ready in 24hrs. Receipt issued. Dec 28th meeting venue shared.</div>
</div>
</div>

<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/40">
<b className="text-[14px]">How Your Contribution Built Town View — Real Examples</b>
<div className="mt-4 space-y-4 text-[11px] leading-6">
<div className="bg-white border border-[#E8DCC0] rounded-[14px] p-4 flex gap-3"><div className="w-8 h-8 bg-[#F9F3E3] rounded-full grid place-items-center flex-shrink-0">💻</div><div><b>ICT Lab 2024 — Daniel Balikowa (2016)</b><div className="opacity-70 mt-1">Donated 5 computers (UGX 2.5M) from Lifetime + Corporate. Before: 35 PCs, now 40 PCs. 256 A-Level students now learn coding. Target: 60 PCs by 2027. Your UGX 500k = 1 PC.</div></div></div>
<div className="bg-white border border-[#E8DCC0] rounded-[14px] p-4 flex gap-3"><div className="w-8 h-8 bg-[#F9F3E3] rounded-full grid place-items-center flex-shrink-0">📚</div><div><b>Library Books 2023 — Fatuma Namatovu (2018)</b><div className="opacity-70 mt-1">Annual contributions UGX 200k x 3 years = 60 books for UCE English & Literature. Helped Anita Namuli get Aggregate 16. 2000+ books now, need 5000 by 2027.</div></div></div>
<div className="bg-white border border-[#E8DCC0] rounded-[14px] p-4 flex gap-3"><div className="w-8 h-8 bg-[#F9F3E3] rounded-full grid place-items-center flex-shrink-0">🎓</div><div><b>Bursary Fund 2024 — Group of 2015 Class</b><div className="opacity-70 mt-1">12 members x UGX 50k annual = UGX 600k = full year bursary for 1 orphan S1 student who scored Aggregate 9. Currently 8 orphans supported. Need 20 by 2027. Your UGX 50k keeps 1 child in school.</div></div></div>
<div className="bg-white border border-[#E8DCC0] rounded-[14px] p-4 flex gap-3"><div className="w-8 h-8 bg-[#F9F3E3] rounded-full grid place-items-center flex-shrink-0">🧪</div><div><b>Science Lab Chemicals 2025 — Dr. James Kisige (2015)</b><div className="opacity-70 mt-1">Donated lab chemicals UGX 1.2M + mentors PCB students. UCE 2024 practicals pass rate 92% because of enough chemicals. Before: sharing beakers. Now: 1 student 1 beaker.</div></div></div>
</div>
<div className="mt-6 rounded-[14px] bg-[#2b1d14] text-white p-4">
<b className="text-[11px]">Transparency Promise</b><div className="text-[10px] opacity-70 mt-2 leading-5">Every shilling tracked. Alumni treasurer (elected Dec 28th) + Headteacher + BOG rep sign off. Bank statement shared in WhatsApp group quarterly. Physical receipts at office Kigulu Bikadho. No cash without receipt.</div>
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
