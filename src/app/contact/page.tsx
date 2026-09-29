import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12 md:py-16">
<div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
<div>
<h1 className="font-black text-[36px] md:text-[50px] leading-[0.9]">Visit Us in Kigulu Bikadho, Iganga</h1>
<p className="text-[13px] opacity-70 mt-4 leading-7">We are located 50m from URA Service Center, Jinja Road, Iganga Town Council. 800m from Iganga Main Taxi Park. Open Mon-Sat for admissions, tours every Wednesday 10am.</p>
<div className="mt-8 space-y-4">
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-[#F9F3E3]/40 flex gap-4"><div className="w-10 h-10 bg-white border border-[#E8DCC0] rounded-full grid place-items-center flex-shrink-0">📍</div><div><b className="text-[12px]">Location & Directions</b><div className="text-[11px] opacity-70 mt-1 leading-6">Kigulu Bikadho Cell, Iganga Town Council, Jinja Road, Iganga District, Eastern Uganda<br/>Coordinates: 0.614°N, 33.47106°E • Near URA Service Center • 50m off Jinja Road • Boda from Taxi Park: UGX 2,000<br/>Landmark: White & Khaki gate, 17 classrooms block visible from road</div></div></div>
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm flex gap-4"><div className="w-10 h-10 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full grid place-items-center flex-shrink-0">📞</div><div><b className="text-[12px]">Phone & Email</b><div className="text-[11px] opacity-70 mt-1 leading-6">Admissions: +256 751 123 456 (Call/WhatsApp) • +256 770 987 654<br/>Headteacher Mr. Paul Mukisa: +256 772 XXX XXX<br/>Email: admissions@igangatownview.sc.ug • info@igangatownview.sc.ug • igangatownviewss@gmail.com<br/>Response within 24 hours Mon-Sat</div></div></div>
<div className="rounded-[18px] border border-[#E8DCC0] p-5 bg-white shadow-sm flex gap-4"><div className="w-10 h-10 bg-[#F9F3E3] border border-[#E8DCC0] rounded-full grid place-items-center flex-shrink-0">🕒</div><div><b className="text-[12px]">Office Hours & Tours</b><div className="text-[11px] opacity-70 mt-1 leading-6">Mon-Fri: 8:00am - 4:30pm • Sat: 9:00am - 1:00pm • Sun: Closed (except boarding)<br/>School Tours: Every Wednesday 10am & 2pm — Free, no appointment needed<br/>Interviews: Every Saturday 9am during admissions season Nov-Jan<br/>Assembly: Visitors can attend 7:30am Monday assembly with permission</div></div></div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-[20px] border border-[#E8DCC0] p-3 bg-[#F9F3E3]/30">
<div className="rounded-[14px] overflow-hidden h-[340px] bg-white border border-[#E8DCC0] grid place-items-center text-center p-6">
<div><div className="text-[30px]">🗺️</div><div className="font-black text-[13px] mt-2">Google Map: Kigulu Bikadho, Jinja Road</div><div className="text-[10px] opacity-60 mt-1">0.614°N, 33.47106°E • Near URA Center • Iganga Town Council<br/>Embed: &lt;iframe src="https://maps.google.com/?q=0.614,33.47106"&gt;</div><div className="mt-4 inline-block bg-[#2b1d14] text-white rounded-full px-5 py-2 text-[11px] font-bold">Open in Google Maps →</div></div>
</div>
</div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
<b className="text-[14px]">Send us a Message</b>
<div className="mt-4 space-y-3"><input placeholder="Your Name" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[12px]"/><input placeholder="Your Phone +256" className="w-full border border-[#E8DCC0] rounded-full px-4 py-3 text-[12px]"/><textarea placeholder="Message: Admissions, Fees, Tour, etc." className="w-full border border-[#E8DCC0] rounded-[16px] px-4 py-3 text-[12px] h-[80px]"></textarea><button className="w-full bg-[#2b1d14] text-white rounded-full py-3 text-[12px] font-bold">Send Message →</button></div>
</div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
