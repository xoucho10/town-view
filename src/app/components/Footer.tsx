import Link from "next/link"
export default function Footer(){
return(
<footer className="w-full border-t border-[#E8DCC0] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">

{/* LEFT - WHITE */}
<div className="bg-white px-6 md:px-10 py-10 md:py-12">
<div className="max-w-[720px]">
<div className="flex gap-4 items-start">
<div className="w-16 h-16 bg-[#F9F3E3] border border-[#E8DCC0] rounded-[12px] grid place-items-center font-black text-[14px] flex-shrink-0 shadow-sm">ITV</div>
<div>
<h3 className="font-black text-[18px] tracking-tight">Iganga Town View SS</h3>
<p className="font-bold text-[12px] mt-1">Excellence • Discipline • Service</p>
<p className="text-[11px] leading-[1.6] opacity-70 mt-3 max-w-[52ch]">Iganga Town View SS is a licensed private partnership secondary school covering S1 to S6 (O-Level & A-Level) in Kigulu Bikadho, Jinja Road, Iganga Town Council. The school is community-founded, disciplined and accredited by the Ministry of Education & Sports Uganda. White & Khaki uniform • 1114 students • Est. 1998 • 0.614°N, 33.47106°E</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
<div>
<b className="text-[13px]">Important</b>
<div className="mt-3 flex flex-col gap-2.5 text-[11px] opacity-70">
<Link href="/academics" className="hover:opacity-100 hover:underline">Term Planner</Link>
<Link href="/alumni" className="hover:opacity-100 hover:underline">Alumni Network</Link>
<Link href="/academics" className="hover:opacity-100 hover:underline">Achievements</Link>
<Link href="/admissions" className="hover:opacity-100 hover:underline">Apply 2026</Link>
</div>
</div>
<div>
<b className="text-[13px]">Get in touch</b>
<div className="mt-3 flex flex-col gap-2.5 text-[11px] opacity-70">
<Link href="/contact" className="hover:opacity-100 hover:underline">Contact Us</Link>
<Link href="/gallery" className="hover:opacity-100 hover:underline">Gallery & Media</Link>
<Link href="/news" className="hover:opacity-100 hover:underline">News & Updates</Link>
<Link href="/about" className="hover:opacity-100 hover:underline">Privacy & Fees</Link>
</div>
</div>
<div>
<b className="text-[13px]">School</b>
<div className="mt-3 flex flex-col gap-2.5 text-[11px] opacity-70">
<Link href="/about" className="hover:opacity-100 hover:underline">Our Story</Link>
<Link href="/about" className="hover:opacity-100 hover:underline">Our History — Since 1998</Link>
<Link href="/students" className="hover:opacity-100 hover:underline">Board & Prefects</Link>
<Link href="/academics" className="hover:opacity-100 hover:underline">Facilities: Lab • Library</Link>
<Link href="/contact" className="hover:opacity-100 hover:underline">Careers • Teaching Jobs</Link>
</div>
</div>
</div>
</div>
</div>

{/* RIGHT - LIGHT KHAKI #F9F3E3 - Like Gayaza green side */}
<div className="bg-[#F9F3E3] px-6 md:px-10 py-10 md:py-12 border-t lg:border-t-0 lg:border-l border-[#E8DCC0]">
<div className="max-w-[420px]">
<div>
<b className="text-[15px]">Looking for us?</b>
<p className="text-[11px] opacity-60 mt-2">Don't be shy, call us or send us an email — Admissions office open Mon-Sat</p>
<div className="mt-6 space-y-3.5 text-[11px]">
<div className="flex gap-2.5 items-center"><span className="w-7 h-7 bg-white border border-[#E8DCC0] rounded-full grid place-items-center text-[12px]">☎</span> +256 751 123 456 / +256 770 987 654</div>
<div className="flex gap-2.5 items-center"><span className="w-7 h-7 bg-white border border-[#E8DCC0] rounded-full grid place-items-center text-[11px]">✉</span> admissions@igangatownview.sc.ug</div>
<div className="flex gap-2.5 items-center"><span className="w-7 h-7 bg-white border border-[#E8DCC0] rounded-full grid place-items-center text-[11px]">📍</span> Kigulu Bikadho, Jinja Road, Iganga • Near URA Center</div>
<div className="flex gap-2.5 items-center"><span className="w-7 h-7 bg-white border border-[#E8DCC0] rounded-full grid place-items-center text-[10px]">🕒</span> 08:00 - 17:00 Monday - Saturday • Tours Wed</div>
</div>
</div>

<div className="mt-12">
<b className="text-[15px]">Newsletter</b>
<p className="text-[11px] opacity-60 mt-2">Subscribe to get updates about admissions, results, sports day delivered to your inbox.</p>
<div className="mt-4 flex gap-2">
<input placeholder="Your email for updates" className="flex-1 bg-white border border-[#E8DCC0] rounded-full px-4 py-2.5 text-[11px] outline-none focus:border-[#2b1d14]"/>
<button className="bg-[#2b1d14] text-white rounded-full px-5 py-2.5 text-[11px] font-bold">Join</button>
</div>
<div className="mt-4 flex gap-2">
<span className="w-8 h-8 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm text-[11px]">f</span>
<span className="w-8 h-8 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm text-[11px]">X</span>
<span className="w-8 h-8 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm text-[11px]">W</span>
<span className="w-8 h-8 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm text-[10px]">▶</span>
</div>
</div>

<div className="mt-12 flex justify-end opacity-30">
<div className="w-8 h-8 border-b-2 border-l-2 border-[#2b1d14] rotate-45"></div>
</div>
</div>
</div>

</div>

{/* BOTTOM BAR - White + Khaki blend */}
<div className="bg-white border-t border-[#E8DCC0] px-6 md:px-10 py-4">
<div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between gap-2 text-[9px] opacity-40 tracking-wide">
<span>© 2026 IGANGA TOWN VIEW SECONDARY SCHOOL • WHITE BODY • LIGHT KHAKI FOOTER SPLIT • S1–S6 • 1114 STUDENTS • 0.614°N, 33.47106°E</span>
<span className="font-bold">Excellence • Discipline • Service • Kigulu Bikadho • Jinja Road • Iganga • Private Partnership • Licensed</span>
</div>
</div>
</footer>
)
}
