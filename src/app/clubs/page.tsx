import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page(){
return(
<main className="bg-white text-[#2b1d14]">
<Header/>
<section className="px-6 md:px-10 py-12">
<div className="max-w-[1280px] mx-auto">
<div className="inline-flex bg-[#F9F3E3] border border-[#E8DCC0] rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest">CLUBS & ACTIVITIES • EVERY STUDENT MUST JOIN ONE</div>
<h1 className="font-black text-[36px] md:text-[50px] leading-[0.9] mt-4">Talent Beyond Classroom — 7 Active Clubs</h1>
<p className="text-[13px] opacity-70 max-w-[60ch] mt-4 leading-7">We believe discipline + academics + talent. Every student from S1-S6 must join at least one club. Clubs meet Wed 3-5pm and Fri 3-5pm. Inter-club competitions each term.</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm"><div className="text-[22px]">🎤</div><b className="block mt-3 text-[14px]">Debate Club</b><div className="text-[9px] opacity-50 font-bold mt-1">FRIDAY 3PM • 40+ MEMBERS • CHAMPIONS 2024</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Patron:</b> Mr. Okello English Dept<br/><b>Head:</b> Sarah Nalwoga S6 Arts — Best Speaker Iganga District 2024<br/><b>Activities:</b> Weekly debates, public speaking, essay writing, UNEB English prep, inter-school debates, radio talk shows.<br/><b>Achievements:</b> Winners Iganga District 2024, Runners-up Busoga Region 2023.<br/><b>Why join:</b> Builds confidence for UACE General Paper, law, leadership.</div></div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30"><div className="text-[22px]">🎭</div><b className="block mt-3 text-[14px]">Drama & Music (MDD)</b><div className="text-[9px] opacity-50 font-bold mt-1">WED & SAT • TRADITIONAL & MODERN</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Patron:</b> Ms. Namuli CRE Dept<br/><b>Activities:</b> Traditional dance (Maganda, Busoga), Modern dance, Drama, Poetry, Music. Performs on Visitors Day, Sports Day March, Open Day, Speech Day.<br/><b>Costumes:</b> School provides for competitions.<br/><b>Why join:</b> Talent, culture, discipline, teamwork.</div></div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm"><div className="text-[22px]">⚜️</div><b className="block mt-3 text-[14px]">Scouts & Prefects Body</b><div className="text-[9px] opacity-50 font-bold mt-1">MONDAY PARADE • 40+ MEMBERS • DISCIPLINE ARM</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Patron:</b> Mr. Balikowa Sports Dept<br/><b>Head:</b> David Okello S5 PCM — Deputy Prefect & Sports Captain<br/><b>Activities:</b> First Aid, Knot tying, Camping, Parade every Monday assembly 7:30am, Compound cleaning Saturdays, Community service in Iganga Town.<br/><b>Ranks:</b> Head Prefect, Deputy, Information, Timekeeper, Health, Sports, Entertainment.<br/><b>Why join:</b> Leadership, service, discipline — motto in action.</div></div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30"><div className="text-[22px]">💻</div><b className="block mt-3 text-[14px]">ICT & Computer Club</b><div className="text-[9px] opacity-50 font-bold mt-1">LAB • 40 COMPUTERS • CODING</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Patron:</b> Mr. Mukisa ICT Dept<br/><b>Activities:</b> Typing, MS Office, Internet safety, Basic coding (Scratch, HTML), UNEB ICT practicals, Computer maintenance.<br/><b>Alumni:</b> Daniel Balikowa 2016 — now Software Engineer Kampala — started here.<br/><b>Why join:</b> Essential for UCE ICT, future jobs.</div></div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-white shadow-sm"><div className="text-[22px]">✝️</div><b className="block mt-3 text-[14px]">Scripture Union & Muslim</b><div className="text-[9px] opacity-50 font-bold mt-1">MORAL • PRAYER • SERVICE</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Patrons:</b> Ms. Aisha (Muslim) & Mr. Paul (Christian)<br/><b>Activities:</b> Morning devotion Tue/Thu, Friday prayers, Sunday service, Community outreach to Iganga Hospital, Charity for orphans.<br/><b>Why join:</b> Values — Excellence Discipline Service.</div></div>
<div className="rounded-[20px] border border-[#E8DCC0] p-6 bg-[#F9F3E3]/30"><div className="text-[22px]">🏅</div><b className="block mt-3 text-[14px]">Sports — 4 Houses</b><div className="text-[9px] opacity-50 font-bold mt-1">LION • ELEPHANT • LEOPARD • RHINO • MARCH 2026</div><div className="text-[11px] mt-3 leading-6 opacity-80"><b>Sports:</b> Football (boys & girls), Netball, Volleyball, Athletics (100m-5000m), Tug of War, Chess.<br/><b>House Colors:</b> Lion-Red, Elephant-Blue, Leopard-Yellow, Rhino-Green — White & Khaki uniform with house T-shirt on sports day.<br/><b>Calendar:</b> Inter-class Jan, Inter-house March (Sports Day), USSSA District April, Parents Day performance.<br/><b>Why join:</b> Health, teamwork, school pride.</div></div>
</div>
</div>
</section>
<Footer/>
</main>
)
}
