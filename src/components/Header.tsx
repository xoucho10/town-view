"use client"
import Link from "next/link"
import { useState } from "react"
export default function Header(){
const [open, setOpen] = useState(false)
return(
<>
<header className="sticky top-0 z-50 bg-[#F9F3E3]/95 backdrop-blur-xl border-b border-[#E8DCC0] px-4 md:px-10 py-3 flex justify-between items-center">
<Link href="/" className="flex gap-3 items-center" onClick={()=>setOpen(false)}>
<div className="w-10 h-10 bg-white border border-[#E8DCC0] rounded-full shadow-sm grid place-items-center font-black text-[13px]">ITV</div>
<div><h1 className="font-black text-[13px] md:text-[14px]">IGANGA TOWN VIEW SS</h1><p className="text-[7.5px] tracking-[0.25em] opacity-60 font-bold">EST. 1998 • S1–S6 UNEB • KIGULU BIKADHO</p></div>
</Link>
<nav className="hidden xl:flex gap-5 text-[10.5px] font-semibold items-center">
<Link href="/" className="font-black border-b-2 border-[#E8DCC0] pb-1">Home</Link>
<Link href="/about" className="opacity-60 hover:opacity-100">About</Link>
<Link href="/academics" className="opacity-60 hover:opacity-100">Academics</Link>
<Link href="/news" className="opacity-60 hover:opacity-100">News</Link>
<Link href="/students" className="opacity-60 hover:opacity-100">Students</Link>
<Link href="/gallery" className="opacity-60 hover:opacity-100">Gallery</Link>
<Link href="/clubs" className="opacity-60 hover:opacity-100">Clubs</Link>
<Link href="/alumni" className="opacity-60 hover:opacity-100">Alumni</Link>
<Link href="/contact" className="opacity-60 hover:opacity-100">Contact</Link>
<Link href="/admissions" className="bg-white border border-[#E8DCC0] px-6 py-2.5 rounded-full font-black shadow-sm hover:bg-[#2b1d14] hover:text-white transition">Apply 2026 →</Link>
</nav>
<div className="xl:hidden flex items-center gap-2">
<Link href="/admissions" className="bg-white border border-[#E8DCC0] px-4 py-2 rounded-full text-[11px] font-black shadow-sm">Apply →</Link>
<button onClick={()=>setOpen(!open)} className="w-10 h-10 bg-white border border-[#E8DCC0] rounded-full grid place-items-center shadow-sm">
<div className="space-y-1"><div className="w-4 h-0.5 bg-[#2b1d14]"></div><div className="w-4 h-0.5 bg-[#2b1d14]"></div><div className="w-4 h-0.5 bg-[#2b1d14]"></div></div>
</button>
</div>
</header>
{open && (
<div className="xl:hidden fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm" onClick={()=>setOpen(false)}>
<div className="absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-white border-l border-[#E8DCC0] shadow-[-10px_0_40px_rgba(0,0,0,0.15)] p-6 overflow-y-auto" onClick={e=>e.stopPropagation()}>
<div className="flex justify-between items-center"><div className="flex gap-2 items-center"><div className="w-8 h-8 bg-[#F9F3E3] border rounded-full grid place-items-center font-black text-[11px]">ITV</div><b className="text-[12px]">TOWN VIEW SS</b></div><button onClick={()=>setOpen(false)} className="w-8 h-8 bg-[#F9F3E3] border rounded-full grid place-items-center">✕</button></div>
<div className="mt-8 space-y-1">
<Link href="/" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full bg-[#2b1d14] text-white font-black text-[13px]">Home <span>→</span></Link>
<Link href="/about" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">About <span>→</span></Link>
<Link href="/academics" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Academics — S1-S6 <span>→</span></Link>
<Link href="/news" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">News & Updates <span>→</span></Link>
<Link href="/students" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Students — 1114 <span>→</span></Link>
<Link href="/gallery" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Gallery <span>→</span></Link>
<Link href="/clubs" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Clubs <span>→</span></Link>
<Link href="/alumni" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Alumni — 2500+ <span>→</span></Link>
<Link href="/contact" onClick={()=>setOpen(false)} className="flex justify-between py-3 px-4 rounded-full border border-[#E8DCC0] text-[13px] font-bold">Contact <span>→</span></Link>
</div>
<div className="mt-6 p-4 bg-[#F9F3E3] border border-[#E8DCC0] rounded-[16px]"><div className="text-[10px] font-black opacity-60">ADMISSIONS 2026 OPEN</div><Link href="/admissions" onClick={()=>setOpen(false)} className="mt-3 block text-center bg-[#2b1d14] text-white rounded-full py-3 text-[12px] font-black">Apply for 2026 →</Link></div>
</div>
</div>
)}
</>
)
}
