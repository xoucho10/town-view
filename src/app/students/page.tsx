import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">STUDENTS • 1114 STUDENTS • WHITE & KHAKI • DAY & BOARDING</div>
<h1 className="font-black text-[36px] md:text-[50px] leading-[0.9] mt-4">Student Life: Discipline, Academics, Talent, Service</h1>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="md:col-span-2 rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm">
<b className="text-[14px]">Daily Schedule — Boarding & Day</b>
<div className="mt-4 text-[11px] leading-7 grid grid-cols-1 md:grid-cols-2 gap-2">
<div>⏰ 5:00am — Wake up, cleaning</div><div>⏰ 6:00am — Morning prep (boarders)</div><div>⏰ 7:30am — Assembly (All) • Monday parade + inspection</div><div>⏰ 8:00am-1:00pm — Lessons 1-5</div><div>⏰ 1:00-2:00pm — Lunch (Day & Boarding)</div><div>⏰ 2:00-4:00pm — Lessons 6-7</div><div>⏰ 4:00-5:30pm — Games: Football, Netball, Athletics</div><div>⏰ 3:00-5:00pm Wed/Fri — Clubs: Debate, Drama, Scouts, ICT</div><div>⏰ 7:00-10:00pm — Night prep (boarders) • Day leave at 5:30pm</div><div>⏰ 10:00pm — Lights out</div>
</div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/50">
<b className="text-[14px]">Uniform & Discipline</b>
<div className="mt-3 text-[11px] leading-6 opacity-80">
<b>Boys:</b> White short-sleeved shirt with badge on pocket, Khaki trouser, brown belt, black shoes, white socks, white vest for games.<br/>
<b>Girls:</b> White short-sleeved blouse with badge, Khaki skirt (knee length), white socks, black shoes, white T-shirt for games.<br/>
<b>Boarding:</b> White T-shirt for prep, bed sheets white, bucket, basin.<br/>
<b>Rules:</b> No phones S1-S4, S5-S6 phones kept by admin, no makeup, hair cut short, nails short, inspection Monday.<br/>
<b>Houses:</b> Lion (Red), Elephant (Blue), Leopard (Yellow), Rhino (Green) — compete on Sports Day March.
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="rounded-[18px] overflow-hidden border border-[#E8DCC0] h-[220px] relative"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent w-full text-white text-[11px] font-black">S4 Science Lab • Chemistry practical</div></div>
<div className="rounded-[18px] overflow-hidden border border-[#E8DCC0] h-[220px] relative"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent w-full text-white text-[11px] font-black">Debate Club • Friday 3pm</div></div>
<div className="rounded-[18px] overflow-hidden border border-[#E8DCC0] h-[220px] relative"><img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent w-full text-white text-[11px] font-black">Scouts Parade • Monday 7:30am</div></div>
<div className="rounded-[18px] overflow-hidden border border-[#E8DCC0] h-[220px] relative"><img src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent w-full text-white text-[11px] font-black">Boarding • Meals • Prep 7pm</div></div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
