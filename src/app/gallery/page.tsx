import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">GALLERY & MEDIA • PHOTOS & VIDEOS • 2024-2026</div>
<h1 className="font-black text-[36px] md:text-[50px] leading-[0.9] mt-4">Campus Life in Pictures & Motion — White & Khaki Pride</h1>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Classrooms — 17 Rooms • 45 per class</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Science Lab — Physics Chem Bio Practicals</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Library — 2000+ Books + ICT Lab 40 PCs</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-15116327648-9bca21d7ca6d?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Sports — Football, Netball, Athletics, 4 Houses</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Assembly 7:30am — Monday Parade & Inspection</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Debate Club — Friday 3pm — Champions 2024</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative"><img src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?w=500" className="w-full h-full object-cover"/><div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[10px] font-bold">Boarding — Dorms, Meals, Prep 7pm, Safe</div></div>
<div className="rounded-[16px] overflow-hidden border border-[#E8DCC0] h-[180px] relative bg-[#F9F3E3] grid place-items-center text-[11px] font-bold">+ 200 More Photos<br/><span className="text-[9px] opacity-60">Request via WhatsApp</span></div>
</div>

<div className="mt-12">
<h2 className="font-black text-[24px]">Video Gallery — Campus in Motion</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
<div className="md:col-span-2 rounded-[20px] overflow-hidden border border-[#E8DCC0] bg-black relative h-[380px] shadow-lg"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" className="w-full h-full object-cover opacity-60"/><div className="absolute inset-0 grid place-items-center"><div className="w-20 h-20 bg-white rounded-full grid place-items-center text-[28px]">▶</div></div><div className="absolute bottom-0 p-6 text-white"><div className="bg-white text-black rounded-full px-3 py-1 text-[9px] font-black inline-block">OFFICIAL TOUR 2026</div><div className="font-black text-[18px] mt-2">Campus Tour: White & Khaki, 17 Classes, Lab, Library, Boarding</div></div></div>
<div className="space-y-4"><div className="rounded-[14px] border border-[#E8DCC0] p-3 flex gap-3 bg-white"><div className="w-[100px] h-[70px] bg-black rounded-[10px] grid place-items-center text-white">▶</div><div><b className="text-[11px]">Sports Day March 2025</b><div className="text-[9px] opacity-60">Lion House Wins • 2:34</div></div></div><div className="rounded-[14px] border border-[#E8DCC0] p-3 flex gap-3 bg-white"><div className="w-[100px] h-[70px] bg-black rounded-[10px] grid place-items-center text-white">▶</div><div><b className="text-[11px]">Debate Wins District 2024</b><div className="text-[9px] opacity-60">Sarah Nalwoga • 4:12</div></div></div><div className="rounded-[14px] border border-[#E8DCC0] p-3 flex gap-3 bg-white"><div className="w-[100px] h-[70px] bg-black rounded-[10px] grid place-items-center text-white">▶</div><div><b className="text-[11px]">Prefects Installation 2025</b><div className="text-[9px] opacity-60">Oath ceremony • 3:05</div></div></div><div className="rounded-[14px] border border-[#E8DCC0] p-3 flex gap-3 bg-white"><div className="w-[100px] h-[70px] bg-black rounded-[10px] grid place-items-center text-white">▶</div><div><b className="text-[11px]">Scouts Service Taxi Park</b><div className="text-[9px] opacity-60">Community • 2:10</div></div></div></div>
</div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
