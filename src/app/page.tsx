import Header from "./components/Header"
import Footer from "./components/Footer"
import Link from "next/link"
export default function Home(){
return(
<main className="bg-white text-[#2b1d14] overflow-x-hidden selection:bg-[#F9F3E3]">

<Header/>

{/* TOP TICKER - Gayaza style but premium */}
<div className="bg-[#2b1d14] text-[#F9F3E3] text-[10px] tracking-wide py-2 overflow-hidden whitespace-nowrap">
<div className="animate-[marquee_20s_linear_infinite] flex gap-10">
<span>● ADMISSIONS 2026 NOW OPEN: S1-S6 • Day & Boarding • Bursaries Available • Apply before Jan 31, 2026</span>
<span>● 1114 Students • 17 Classrooms • 1 Lab • 1 Library • 42+ Teachers • White & Khaki Uniform • Licensed by MoES</span>
<span>● Assembly 7:30am Daily • Prefect System • Sports Day March 2026 • Lion • Elephant • Leopard • Rhino Houses</span>
</div>
</div>

{/* HERO - FULL BLEED PREMIUM - NOT BORING */}
<section className="relative min-h-[85vh] w-full flex items-center overflow-hidden">
<img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000&q=80&auto=format" className="absolute inset-0 w-full h-full object-cover"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#F9F3E3_0%,transparent_40%)]"></div>

<div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-[#2b1d14] text-white rounded-full px-4 py-1.5 text-[10px] font-black tracking-widest shadow-lg">
<span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span> EST. 1998 • PRIVATE PARTNERSHIP • LICENSED • KIGULU BIKADHO, IGANGA
</div>
<h1 className="mt-6 text-[40px] md:text-[64px] font-black leading-[0.85] tracking-[-0.04em]">We Don't Just<br/>Teach.<br/><span className="bg-[#F9F3E3] border border-[#E8DCC0] px-3 rounded-[12px]">We Transform.</span></h1>
<p className="mt-6 text-[13px] md:text-[14px] leading-[1.8] opacity-70 max-w-[48ch] font-medium">A premium secondary school in Iganga — <b>S1–S6 UNEB Centre</b>. 1114 students in White & Khaki. Discipline first, academics strong, talent celebrated. 0.614°N, 33.47106°E — Near URA Centre, Jinja Road.</p>

<div className="flex flex-wrap gap-3 mt-8">
<Link href="/admissions" className="bg-[#2b1d14] text-white px-8 py-4 rounded-full text-[13px] font-black shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:scale-[1.02] transition">Apply for 2026 →</Link>
<Link href="/gallery" className="bg-white border border-[#E8DCC0] px-8 py-4 rounded-full text-[13px] font-black shadow-sm hover:bg-[#F9F3E3] transition">▷ Watch Campus Life</Link>
</div>

<div className="flex gap-6 mt-10 border-t border-[#E8DCC0]/60 pt-6">
<div><div className="font-black text-[20px]">1114+</div><div className="text-[10px] opacity-60 font-bold">STUDENTS</div></div>
<div className="w-[1px] bg-[#E8DCC0]"></div>
<div><div className="font-black text-[20px]">27 Yrs</div><div className="text-[10px] opacity-60 font-bold">LEGACY</div></div>
<div className="w-[1px] bg-[#E8DCC0]"></div>
<div><div className="font-black text-[20px]">S1–S6</div><div className="text-[10px] opacity-60 font-bold">UNEB CENTRE</div></div>
<div className="w-[1px] bg-[#E8DCC0]"></div>
<div><div className="font-black text-[20px]">85%</div><div className="text-[10px] opacity-60 font-bold">UNIVERSITY</div></div>
</div>
</div>

{/* GLASS CARD - Interactive Bento */}
<div className="grid grid-cols-1 gap-4">
<div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-6 border border-white shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
<div className="flex justify-between"><span className="text-[10px] font-black tracking-widest opacity-40">WHY PARENTS CHOOSE US</span><span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-1 rounded-full">● OPEN NOW</span></div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-[14px] bg-[#F9F3E3] border border-[#E8DCC0] p-3"><div className="text-[18px]">🎓</div><div className="font-black text-[11px] mt-1">UNEB Results</div><div className="text-[9px] opacity-60 mt-1">Top in Iganga District 2024</div></div>
<div className="rounded-[14px] bg-white border border-[#E8DCC0] p-3"><div className="text-[18px]">🕢</div><div className="font-black text-[11px] mt-1">Discipline</div><div className="text-[9px] opacity-60 mt-1">7:30am Assembly • Prefects</div></div>
<div className="rounded-[14px] bg-white border border-[#E8DCC0] p-3"><div className="text-[18px]">🏠</div><div className="font-black text-[11px] mt-1">Boarding</div><div className="text-[9px] opacity-60 mt-1">Safe • Meals • Prep 7pm</div></div>
<div className="rounded-[14px] bg-[#F9F3E3] border border-[#E8DCC0] p-3"><div className="text-[18px]">🏅</div><div className="font-black text-[11px] mt-1">4 Houses</div><div className="text-[9px] opacity-60 mt-1">Lion • Elephant • Leopard • Rhino</div></div>
</div>
<div className="mt-4 flex gap-2"><Link href="/students" className="flex-1 bg-[#2b1d14] text-white rounded-full py-2.5 text-[11px] font-bold text-center">See Student Life</Link><Link href="/about" className="flex-1 bg-white border border-[#E8DCC0] rounded-full py-2.5 text-[11px] font-bold text-center">About Us</Link></div>
</div>

<div className="bg-[#2b1d14] text-[#F9F3E3] rounded-[20px] p-4 flex items-center gap-4 border border-[#3d2b1f]">
<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200" className="w-12 h-12 rounded-full object-cover border-2 border-[#E8DCC0]"/>
<div><div className="text-[11px] font-black">Head Prefect Says:</div><div className="text-[11px] opacity-80 leading-4">"Town View gave me voice — from Debate to leadership of 1114 students!" — Sarah Nalwoga S6</div></div>
</div>
</div>
</div>
</section>

{/* NEWS - INTERACTIVE CARDS WITH HOVER */}
<section className="px-6 md:px-10 py-14 bg-white">
<div className="max-w-[1280px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
<div><div className="text-[10px] font-black tracking-[0.2em] opacity-40">WHAT'S HAPPENING</div><h2 className="font-black text-[30px] md:text-[38px] tracking-[-0.02em] mt-1 leading-[0.9]">News that feels<br/>like Gayaza style</h2></div>
<Link href="/news" className="bg-[#F9F3E3] border border-[#E8DCC0] px-6 py-3 rounded-full text-[11px] font-black hover:bg-[#E8DCC0] transition">View All Updates →</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-7 group rounded-[24px] overflow-hidden border border-[#E8DCC0] bg-white shadow-sm hover:shadow-xl transition duration-500 cursor-pointer">
<div className="h-[280px] relative overflow-hidden"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/><div className="absolute top-4 left-4 bg-white rounded-full px-4 py-1.5 text-[10px] font-black shadow-sm">13 JUNE 2025 • INSTALLATION DAY</div><div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white"><div className="text-[10px] font-bold tracking-widest opacity-80">LEADERSHIP</div><h3 className="font-black text-[22px] leading-[1.1] mt-1">Student Leaders Formal Installation — Sarah Nalwoga takes oath</h3></div></div>
<div className="p-5 flex justify-between items-center"><span className="text-[11px] opacity-60">Allen Chapel style • 1114 students • Prefect system</span><span className="text-[11px] font-black underline">Read Story →</span></div>
</div>
<div className="md:col-span-5 grid grid-cols-1 gap-6">
<div className="group rounded-[20px] overflow-hidden border border-[#E8DCC0] bg-white shadow-sm hover:shadow-lg transition cursor-pointer flex">
<div className="w-[140px] h-[140px] flex-shrink-0"><img src="https://images.unsplash.com/photo-15116327648-9bca21d7ca6d?w=400" className="w-full h-full object-cover group-hover:scale-105 transition"/></div>
<div className="p-4"><div className="text-[9px] font-black opacity-40">SPORTS • MAY 2024</div><div className="font-black text-[13px] leading-4 mt-1">Lion House Wins Athletics — Preps for March 2026</div><div className="text-[10px] opacity-60 mt-2">Football • Netball • Tug of War</div></div>
</div>
<div className="group rounded-[20px] overflow-hidden border border-[#E8DCC0] bg-white shadow-sm hover:shadow-lg transition cursor-pointer flex">
<div className="w-[140px] h-[140px] flex-shrink-0"><img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=400" className="w-full h-full object-cover group-hover:scale-105 transition"/></div>
<div className="p-4"><div className="text-[9px] font-black opacity-40">ACADEMICS • NEW CURRICULUM</div><div className="font-black text-[13px] leading-4 mt-1">S3 Agriculture Plots — Drip Irrigation Project</div><div className="text-[10px] opacity-60 mt-2">12 subjects • Project-based</div></div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] bg-[#F9F3E3]/50 p-4 flex justify-between items-center">
<div><div className="font-black text-[12px]">More Updates Daily</div><div className="text-[10px] opacity-60">Assembly • UNEB • Mocks • Clubs</div></div>
<Link href="/news" className="w-10 h-10 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm">→</Link>
</div>
</div>
</div>
</div>
</section>

{/* STUDENTS BENTO - NOT BORING */}
<section className="px-6 md:px-10 py-14 bg-[#F9F3E3]/25 border-y border-[#E8DCC0]/30">
<div className="max-w-[1280px] mx-auto">
<div className="flex justify-between items-end mb-8"><div><div className="text-[10px] font-black tracking-[0.2em] opacity-40">WHITE & KHAKI PRIDE</div><h2 className="font-black text-[32px] tracking-[-0.02em] mt-1">Students in Action</h2></div><Link href="/students" className="hidden md:flex bg-white border border-[#E8DCC0] px-5 py-2.5 rounded-full text-[11px] font-black shadow-sm">Meet Our Students →</Link></div>
<div className="grid grid-cols-12 gap-4">
<div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-4">
<div className="group relative rounded-[20px] overflow-hidden border border-[#E8DCC0] h-[200px] md:h-[280px]"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div><div className="absolute bottom-0 p-5 text-white"><div className="bg-white text-black rounded-full px-3 py-1 text-[9px] font-black inline-block">LAB • PRACTICALS</div><div className="font-black text-[14px] mt-2">S4 Science Lab Day — Chemistry practicals</div></div></div>
<div className="group relative rounded-[20px] overflow-hidden border border-[#E8DCC0] h-[200px] md:h-[280px]"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600" className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div><div className="absolute bottom-0 p-5 text-white"><div className="bg-[#F9F3E3] text-black rounded-full px-3 py-1 text-[9px] font-black inline-block">DEBATE • FRI 3PM</div><div className="font-black text-[14px] mt-2">Debate Club — Won Iganga District 2024</div></div></div>
</div>
<div className="col-span-12 md:col-span-4 grid grid-cols-1 gap-4">
<div className="group relative rounded-[20px] overflow-hidden border border-[#E8DCC0] h-[200px] md:h-[136px]"><img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500" className="w-full h-full object-cover"/><div className="absolute inset-0 bg-black/40"></div><div className="absolute inset-0 p-4 text-white flex flex-col justify-end"><div className="font-black text-[13px]">Scouts Parade — Monday Assembly</div><div className="text-[10px] opacity-80">40+ members • Discipline • Service</div></div></div>
<div className="rounded-[20px] border border-[#E8DCC0] bg-white p-5 shadow-sm">
<div className="flex -space-x-2"><div className="w-8 h-8 rounded-full bg-[#F9F3E3] border-2 border-white grid place-items-center text-[10px] font-black">S6</div><div className="w-8 h-8 rounded-full bg-[#F9F3E3] border-2 border-white grid place-items-center text-[10px] font-black">S5</div><div className="w-8 h-8 rounded-full bg-[#2b1d14] text-white border-2 border-white grid place-items-center text-[9px] font-black">1114</div></div>
<div className="font-black text-[13px] mt-3">Day & Boarding Family</div><div className="text-[11px] opacity-60 mt-1 leading-5">White shirt, Khaki skirt/trouser, brown belt, badge. Meals, prep 7pm, lights out 10pm. Safe boarding.</div>
<Link href="/students" className="mt-3 inline-block text-[10px] font-black underline">Explore Student Life →</Link>
</div>
</div>
</div>
</div>
</section>

{/* VIDEO - FIXED - NO RICKROLL */}
<section className="px-6 md:px-10 py-14 bg-white">
<div className="max-w-[1280px] mx-auto">
<div className="flex justify-between items-end mb-8"><div><div className="text-[10px] font-black tracking-[0.2em] opacity-40">CAMPUS IN MOTION</div><h2 className="font-black text-[30px] tracking-[-0.02em] mt-1">Not Just Photos — Feel It</h2></div><Link href="/gallery" className="bg-[#2b1d14] text-white px-5 py-2.5 rounded-full text-[11px] font-black">Open Video Gallery →</Link></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 group rounded-[24px] overflow-hidden border border-[#E8DCC0] bg-black relative h-[360px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] cursor-pointer">
<img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition"/>
<div className="absolute inset-0 grid place-items-center"><div className="w-20 h-20 bg-white rounded-full grid place-items-center text-[28px] shadow-2xl group-hover:scale-110 transition">▶</div></div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent text-white"><div className="inline-flex bg-white text-black rounded-full px-3 py-1 text-[9px] font-black">OFFICIAL TOUR • 2026</div><div className="font-black text-[20px] mt-2">Campus Tour: 17 Classrooms, Lab, Library, Boarding</div><div className="text-[11px] opacity-80 mt-1">White & Khaki • Kigulu Bikadho • Jinja Road • 0.614°N</div></div>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="rounded-[16px] border border-[#E8DCC0] bg-white p-3 flex gap-3 shadow-sm hover:bg-[#F9F3E3]/50 transition cursor-pointer"><div className="w-[120px] h-[78px] rounded-[12px] bg-black relative overflow-hidden flex-shrink-0"><img src="https://images.unsplash.com/photo-15116327648-9bca21d7ca6d?w=300" className="w-full h-full object-cover opacity-70"/><div className="absolute inset-0 grid place-items-center text-white">▶</div></div><div><div className="font-black text-[12px] leading-4">Sports Day 2025 Highlights</div><div className="text-[10px] opacity-60 mt-1">Lion House Champion • 1114 students</div><div className="mt-2 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-2 py-1 text-[8px] font-bold inline-block">2:34 • Watch Now</div></div></div>
<div className="rounded-[16px] border border-[#E8DCC0] bg-white p-3 flex gap-3 shadow-sm hover:bg-[#F9F3E3]/50 transition cursor-pointer"><div className="w-[120px] h-[78px] rounded-[12px] bg-black relative overflow-hidden flex-shrink-0"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300" className="w-full h-full object-cover opacity-70"/><div className="absolute inset-0 grid place-items-center text-white">▶</div></div><div><div className="font-black text-[12px] leading-4">Debate Wins District 2024</div><div className="text-[10px] opacity-60 mt-1">Sarah Nalwoga • Motion: Climate</div><div className="mt-2 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-2 py-1 text-[8px] font-bold inline-block">4:12 • Watch Now</div></div></div>
<div className="rounded-[16px] border border-[#E8DCC0] bg-[#F9F3E3] p-4 text-center"><div className="font-black text-[13px]">Want more videos?</div><div className="text-[10px] opacity-60 mt-1">Drama, Scouts, ICT Lab, Prefects Installation</div><Link href="/gallery" className="mt-3 block bg-white border border-[#E8DCC0] rounded-full py-2 text-[11px] font-black shadow-sm">Open Gallery →</Link></div>
</div>
</div>
</div>
</section>

{/* FINAL CTA - NOT BORING */}
<section className="px-6 md:px-10 py-6 pb-14">
<div className="max-w-[1280px] mx-auto">
<div className="rounded-[28px] bg-[#2b1d14] text-white p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#F9F3E3]/10 rounded-full blur-[60px]"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div><div className="text-[10px] font-black tracking-[0.2em] opacity-50">ADMISSIONS 2026 • NOV 1 - JAN 31</div><h2 className="font-black text-[28px] md:text-[40px] leading-[0.9] mt-3">Your child's<br/>secondary journey<br/>starts in Iganga.</h2><p className="text-[12px] opacity-60 mt-4 max-w-[36ch] leading-6">Day & Boarding available. White shirt, Khaki trouser/skirt, brown belt, badge. 1114 students already chose Town View. Will you?</p></div>
<div className="bg-white text-[#2b1d14] rounded-[20px] p-6 border border-[#E8DCC0]"><div className="font-black text-[14px]">Quick Apply Check</div><div className="mt-3 space-y-2 text-[11px]"><div className="flex justify-between bg-[#F9F3E3]/60 rounded-full px-4 py-2.5 border border-[#E8DCC0]"><span>S1 Entry</span><b>PLE Results</b></div><div className="flex justify-between bg-[#F9F3E3]/60 rounded-full px-4 py-2.5 border border-[#E8DCC0]"><span>S5 Entry</span><b>UCE Results</b></div><div className="flex justify-between bg-[#F9F3E3]/60 rounded-full px-4 py-2.5 border border-[#E8DCC0]"><span>Fees</span><b>Day & Boarding</b></div></div><Link href="/admissions" className="mt-4 block bg-[#2b1d14] text-white rounded-full py-3 text-center text-[12px] font-black">Apply Now for 2026 →</Link></div>
</div>
</div>
</div>
</section>

<Footer/>
</main>
)
}
