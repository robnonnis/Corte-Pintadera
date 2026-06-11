import { useState, useEffect } from "react";

// Google Fonts: Cormorant Garamond + Jost
const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap"
    rel="stylesheet"
  />
);

const c = {
  // Palette Casa Pintadera — Pierre de Nod + Bianco Calibrato + Wengé
  cream:   "#faf7f2",   // avorio caldo — sfondo app
  sand:    "#e8dcc8",   // sabbia — bordi, separatori
  hazel:   "#CEAD85",   // Pierre de Nod — accento principale
  hazelL:  "#d4b896",   // Pierre de Nod chiaro
  mastic:  "#8a7d6e",   // mastice — testi secondari
  warm:    "#3D1F10",   // wengé — testi scuri (colore serramenti)
  white:   "#fdfaf5",   // bianco avorio — card
  sage:    "#6b8f71",   // verde salvia — pulsanti Maps
  bannerBg:"#f0e6d6",
  bannerAccent:"#CEAD85",
};

// Placeholder colorato quando non ci sono foto reali
const Foto = ({ src, alt, style, onClick }) => (
  <div style={{ background: `linear-gradient(135deg, ${c.sand}, ${c.hazel}30)`, display:"flex", alignItems:"center", justifyContent:"center", ...style, overflow:"hidden", cursor: onClick?"pointer":"default" }} onClick={onClick}>
    <span style={{ fontSize:32, opacity:0.4 }}>🏡</span>
  </div>
);

const s = {
  app: { minHeight:"100vh", fontFamily:"'Jost', sans-serif", fontWeight:300, color:c.warm, background:c.cream, maxWidth:480, margin:"0 auto" },
  hero: { background:`linear-gradient(160deg, #5c3018 0%, #7a4428 100%)`, textAlign:"center", padding:"28px 24px 26px", borderRadius:"0 0 28px 28px", position:"relative", overflow:"hidden" },
  heroTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300, fontSize:58, lineHeight:1.0, color:"#faf7f2", margin:0, letterSpacing:1 },
  heroSub: { fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginTop:14 },
  eye: { fontSize:10, letterSpacing:"4px", textTransform:"uppercase", color:"#CEAD85", fontWeight:500, marginBottom:12 },
  sectionLabel: { fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic, margin:"24px 0 16px", textAlign:"center" },
  grid: { display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12, padding:"0 20px", maxWidth:400, margin:"0 auto" },
  card: { background:c.white, borderRadius:20, padding:"22px 8px 16px", display:"flex", flexDirection:"column", alignItems:"center", gap:8, cursor:"pointer", border:`1px solid ${c.hazel}20` },
  cardLabel: { fontSize:8.5, letterSpacing:"1.5px", textTransform:"uppercase", textAlign:"center", fontWeight:500, color:c.warm, lineHeight:1.4 },
  pageHead: { background:`linear-gradient(160deg, #CEAD85 0%, #d4b896 100%)`, padding:"50px 24px 28px", borderRadius:"0 0 24px 24px" },
  pageTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontWeight:300, fontSize:38, color:c.warm, lineHeight:1.1, margin:0 },
  back: { display:"inline-flex", alignItems:"center", gap:7, background:"rgba(255,255,255,0.18)", border:"1px solid rgba(255,255,255,0.25)", borderRadius:20, color:"rgba(253,250,245,0.9)", fontSize:11, letterSpacing:"1.5px", textTransform:"uppercase", cursor:"pointer", marginBottom:20, padding:"7px 14px", fontFamily:"'Jost', sans-serif", backdropFilter:"blur(4px)" },
  content: { padding:"24px 20px 60px" },
  infoCard: { background:c.white, borderRadius:18, padding:"20px 18px", marginBottom:12, border:`1px solid ${c.hazel}15` },
  cardTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:21, fontWeight:400, marginBottom:10, display:"flex", alignItems:"center", gap:8, color:c.warm },
  row: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0", borderBottom:`1px solid ${c.sand}` },
  rowLast: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"11px 0" },
  rowLabel: { fontSize:13.5, color:c.warm },
  rowValue: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:16, color:c.hazel },
  rule: { display:"flex", gap:12, padding:"11px 0", borderBottom:`1px solid ${c.sand}`, fontSize:13.5, lineHeight:1.5, alignItems:"flex-start" },
  ruleLast: { display:"flex", gap:12, padding:"11px 0", fontSize:13.5, lineHeight:1.5, alignItems:"flex-start" },
  dot: { width:6, height:6, borderRadius:"50%", background:c.hazel, flexShrink:0, marginTop:6 },
  hlBox: { background:`linear-gradient(135deg, ${c.hazel}, ${c.hazelL})`, borderRadius:18, padding:"20px 18px", color:c.warm, marginBottom:12 },
  hlTitle: { fontFamily:"'Cormorant Garamond', Georgia, serif", fontSize:22, fontWeight:300, marginBottom:8, color:c.warm },
  darkBox: { background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:14, padding:"16px 18px", marginBottom:12 },
  mapBtn: { display:"flex", alignItems:"center", gap:10, background:c.sage, color:"white", borderRadius:14, padding:"14px 16px", textDecoration:"none", fontSize:13, marginTop:10 },
  pdfBtn: { display:"flex", alignItems:"center", gap:10, background:c.hazel, color:c.warm, borderRadius:14, padding:"14px 16px", textDecoration:"none", fontSize:13, marginTop:10, cursor:"pointer", border:"none", width:"100%", justifyContent:"flex-start" },
  tel: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", borderBottom:`1px solid ${c.sand}`, textDecoration:"none" },
  telLast: { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"12px 0", textDecoration:"none" },
  gallery: { display:"flex", gap:10, overflowX:"auto", scrollbarWidth:"none", marginBottom:16 },
  wifiBox: { background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:14, padding:18, textAlign:"center", marginTop:10 },
  tag: { background:c.sand, borderRadius:20, padding:"5px 13px", fontSize:11, color:c.warm },
  tagA: { background:c.hazel, borderRadius:20, padding:"5px 13px", fontSize:11, color:c.warm },
};

const Ic = {
  back:     ()=><svg viewBox="0 0 24 24" style={{width:16,height:16,stroke:"currentColor",fill:"none",strokeWidth:1.5}}><polyline points="15 18 9 12 15 6"/></svg>,
  home:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"}}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  lock:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12" strokeWidth="3" strokeLinecap="round"/><path d="M8 12h8"/></svg>,
  wifi:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill={c.warm}/></svg>,
  building: ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  check:    ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><polyline points="3 6 4 7 6 5"/><polyline points="3 12 4 13 6 11"/><polyline points="3 18 4 19 6 17"/></svg>,
  pin:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  compass:  ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill={c.warm} fillOpacity="0.15"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  pasta:    ()=>(
    <svg viewBox="0 0 24 24" style={{width:28,height:28,fill:"none",strokeLinecap:"round",strokeLinejoin:"round"}}>
      <line x1="7" y1="2" x2="7" y2="22" stroke={c.warm} strokeWidth="1.5"/>
      <line x1="4" y1="2" x2="4" y2="8" stroke={c.warm} strokeWidth="1.5"/>
      <line x1="10" y1="2" x2="10" y2="8" stroke={c.warm} strokeWidth="1.5"/>
      <path d="M4 8 Q7 11 10 8" stroke={c.warm} strokeWidth="1.5" fill="none"/>
      <path d="M17 2 L20 8 L17 11 L17 22" stroke={c.warm} strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  cal:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  star:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  bag:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>,
  faq:      ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
  help:     ()=><svg viewBox="0 0 24 24" style={{width:28,height:28,stroke:c.warm,fill:"none",strokeWidth:1.3}}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round"/></svg>,
  mapW:     ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:"white",fill:"none",strokeWidth:1.5}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  docW:     ()=><svg viewBox="0 0 24 24" style={{width:20,height:20,stroke:c.warm,fill:"none",strokeWidth:1.5}}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  phone:    ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.hazel,fill:"none",strokeWidth:1.5}}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.22 1.22 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.07-1.07a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
  trash:    ()=><svg viewBox="0 0 24 24" style={{width:18,height:18,stroke:c.hazel,fill:"none",strokeWidth:1.5}}><path d="M3 6h18"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>,
};

function Row({l,v,link,last}) {
  const st = last ? s.rowLast : s.row;
  if (link) return <a href={link} target="_blank" rel="noreferrer" style={{...st, textDecoration:"none"}}><span style={s.rowLabel}>{l}</span><span style={{...s.rowValue}}>{v} ›</span></a>;
  return <div style={st}><span style={s.rowLabel}>{l}</span><span style={s.rowValue}>{v}</span></div>;
}

function Rule({t, last}) {
  return <div style={last ? s.ruleLast : s.rule}><div style={s.dot}/><span>{t}</span></div>;
}

function PH({go}) {
  return (
    <div style={s.app}>
      <FontLink/>
      <div style={s.hero}>
        <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,background:`radial-gradient(circle, ${c.hazel}30 0%, transparent 70%)`,pointerEvents:"none"}}/>
        <div style={{position:"absolute",top:-40,left:-40,width:140,height:140,background:`radial-gradient(circle, ${c.hazel}15 0%, transparent 70%)`,pointerEvents:"none"}}/>
        <h1 style={{...s.heroTitle,marginTop:0,fontSize:50}}>
          Ben<em style={{fontStyle:"italic", color:"#CEAD85"}}>venuti</em>
        </h1>
        <div style={{width:32,height:1,background:"rgba(206,173,133,0.5)",margin:"10px auto 8px"}}/>
        <img src="https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_420/v1781124478/IMG_0212_s1qsxy.jpg" alt="Corte Pintadera"
          style={{width:200,maxWidth:"72%",display:"block",margin:"0 auto 8px",
          mixBlendMode:"screen",opacity:1}}/>
        <div style={{fontSize:11, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.8)", marginTop:4, fontFamily:"'Jost', sans-serif", fontWeight:300}}>Via Cimitero 38/A</div>
        <div style={{fontSize:10, letterSpacing:"4px", textTransform:"uppercase", color:"rgba(206,173,133,0.75)", marginTop:5, fontFamily:"'Jost', sans-serif", fontWeight:300}}>Uta · Cagliari · Sardegna</div>
      </div>

      <div style={{fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic,
        margin:"22px 0 10px", textAlign:"center"}}>All'arrivo</div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, padding:"0 20px", maxWidth:400, margin:"0 auto 4px"}}>
        {[
          ["benvenuto", <Ic.home/>, "Benvenuto", "Informazioni & contatti"],
          ["checkin",   <Ic.lock/>, "Check-in / out", "Orari & istruzioni"],
        ].map(([id,icon,label,sub])=>(
          <div key={id} onClick={()=>go(id)} style={{
            background:`linear-gradient(135deg, ${c.hazel}18, ${c.hazelL}28)`,
            borderRadius:18, padding:"18px 14px", cursor:"pointer",
            border:`1px solid ${c.hazel}40`, textAlign:"center",
          }}>
            <div style={{marginBottom:8}}>{icon}</div>
            <div style={{fontSize:11, fontWeight:500, color:c.warm, letterSpacing:"0.5px"}}>{label}</div>
            <div style={{fontSize:9.5, color:c.mastic, marginTop:3, lineHeight:1.3}}>{sub}</div>
          </div>
        ))}
      </div>

      <div style={{fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic,
        margin:"20px 0 12px", textAlign:"center"}}>La guida completa</div>
      <div style={s.grid}>
        {[
          ["appartamento", <Ic.building/>,"L'appartamento"],
          ["wifi",         <Ic.wifi/>,    "Wi-Fi"],
          ["regole",       <Ic.check/>,   "Regole casa"],
          ["esplorare",    <Ic.compass/>, "Da scoprire"],
          ["ristoranti",   <Ic.pasta/>,   "Ristoranti"],
          ["eventi",       <Ic.cal/>,     "Eventi"],
          ["recensioni",   <Ic.star/>,    "Recensioni"],
          ["spesa",        <Ic.bag/>,     "Spesa"],
          ["servizi",      <Ic.faq/>,     "Servizi utili"],
          ["faq",          <Ic.help/>,    "FAQ"],
        ].map(([id,icon,label])=>(
          <div key={id} style={s.card} onClick={()=>go(id)}>
            {icon}
            <span style={s.cardLabel}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PageHead({title, sub, back, icon}) {
  return (
    <>
      <FontLink/>
      <div style={s.pageHead}>
        <button style={s.back} onClick={back}><Ic.back/> Home</button>
        <div style={{marginBottom:8}}>{icon}</div>
        <h2 style={s.pageTitle}>{title}</h2>
        {sub && <div style={{fontSize:11,color:"rgba(61,31,16,0.5)",marginTop:6,letterSpacing:"1px",fontFamily:"'Jost',sans-serif"}}>{sub}</div>}
      </div>
    </>
  );
}

function Card({children, style}) {
  return <div style={{...s.infoCard,...style}}>{children}</div>;
}
function CT({icon,text}) {
  return <div style={s.cardTitle}>{icon&&<span style={{flexShrink:0}}>{icon}</span>}{text}</div>;
}

// ── SCREENS ──────────────────────────────────

function Benvenuto({go}) {
  return <div style={s.app}>
    <PageHead title="Benvenuti a Corte Pintadera" back={()=>go("home")} icon={<Ic.home/>}/>
    <div style={s.content}>

      <div style={{...s.hlBox, textAlign:"center", padding:"28px 20px"}}>
        <div style={{fontFamily:"'Dancing Script', 'Caveat', cursive", fontSize:32, fontWeight:700,
          color:c.warm, lineHeight:1.2, marginBottom:10}}>
          Siamo felici di ospitarvi
        </div>
        <p style={{fontSize:13.5, lineHeight:1.75, opacity:0.85, margin:0, color:c.warm}}>
          Questa guida vi aiuterà a vivere al meglio il soggiorno.<br/>
          Per qualsiasi necessità non esitate a contattarci.
        </p>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet"/>

      <Card>
        <CT icon={<Ic.pin/>} text="Dove siamo"/>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:20,margin:"4px 0 12px",color:c.warm}}>
          Via Cimitero 38/A<br/>Uta (CA) — Sardegna
        </p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer"
          style={{display:"block", borderRadius:12, overflow:"hidden", marginBottom:12, textDecoration:"none"}}>
          <img
            src="https://staticmap.openstreetmap.de/staticmap.php?center=39.2929,8.9621&zoom=15&size=800x320&markers=39.2929,8.9621,red-pushpin"
            alt="Mappa Corte Pintadera"
            loading="lazy"
            style={{width:"100%", height:140, objectFit:"cover", display:"block"}}
            onError={e=>{
              e.target.style.display="none";
              e.target.nextSibling.style.display="flex";
            }}
          />
          <div style={{display:"none", background:`linear-gradient(135deg, ${c.sand}, ${c.hazelL}60)`,
            height:140, borderRadius:12, alignItems:"center", justifyContent:"center",
            flexDirection:"column", gap:8}}>
            <span style={{fontSize:32}}>🗺️</span>
            <span style={{fontSize:12, color:c.mastic}}>Via Cimitero 38/A, Uta</span>
          </div>
        </a>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}>
          <Ic.mapW/> Apri in Google Maps
        </a>
      </Card>

      <Card>
        <CT icon={<Ic.pin/>} text="Come arrivare"/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"0 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>✈️ &nbsp;In volo o in nave</div>
        <Row l="Aeroporto di Cagliari-Elmas" v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l="Porto di Cagliari" v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari"/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"12px 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>🚗 &nbsp;Da altre città</div>
        <Row l="Cagliari" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l="Oristano" v="~1h" link="https://maps.google.com/?q=Oristano+Sardegna"/>
        <Row l="Nuoro" v="~2h" link="https://maps.google.com/?q=Nuoro+Sardegna"/>
        <Row l="Sassari" v="~2h 30min" link="https://maps.google.com/?q=Sassari+Sardegna"/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"12px 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>🚌 &nbsp;Trasporto pubblico</div>
        <div style={{display:"flex", flexDirection:"column", gap:8, paddingTop:4}}>
          {[
            {label:"Treno · Trenitalia",sub:"Stazione Uta-Villaspeciosa ~5 min · 06:27–20:53",link:"https://www.trenitalia.com",bg:"#1a3a6a",emoji:"🚆"},
            {label:"Bus · ARST",sub:"Linea 125 Uta–Cagliari · Prima 05:40 · Ultima ~22:00",link:"https://www.arst.sardegna.it",bg:"#2a5a2a",emoji:"🚌"},
            {label:"Bus urbano · CTM",sub:"Rete metropolitana di Cagliari",link:"https://www.ctmcagliari.it",bg:"#6a2a1a",emoji:"🚎"},
          ].map(({label,sub,link,bg,emoji})=>(
            <a key={label} href={link} target="_blank" rel="noreferrer" style={{
              display:"flex", alignItems:"center", gap:12, background:bg,
              borderRadius:12, padding:"10px 14px", textDecoration:"none",
            }}>
              <span style={{fontSize:20}}>{emoji}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:13, color:"white", fontWeight:500}}>{label}</div>
                <div style={{fontSize:10.5, color:"rgba(255,255,255,0.6)", marginTop:2}}>{sub}</div>
              </div>
              <span style={{fontSize:14, color:"rgba(255,255,255,0.5)"}}>›</span>
            </a>
          ))}
        </div>
      </Card>

      <div style={{background:`linear-gradient(135deg, ${c.hazel}20, ${c.hazelL}30)`,
        borderRadius:18, padding:"20px 18px", border:`1px solid ${c.hazel}40`}}>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:19, fontWeight:400,
          color:c.warm, marginBottom:14}}>Siamo qui per voi</div>
        {[
          {name:"Alessandro", num:"328 469 9520", tel:"tel:+393284699520", emoji:"👨"},
          {name:"Roberta", num:"347 320 8852", tel:"tel:+393473208852", emoji:"👩"},
        ].map(({name,num,tel,emoji})=>(
          <a key={name} href={tel} style={{
            display:"flex", alignItems:"center", gap:14,
            padding:"12px 0", borderBottom:`1px solid ${c.hazel}30`,
            textDecoration:"none", marginBottom:0,
          }}>
            <div style={{width:42, height:42, borderRadius:"50%",
              background:`linear-gradient(135deg, ${c.hazel}, ${c.hazelL})`,
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:20, flexShrink:0}}>{emoji}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:14, color:c.warm, fontWeight:500}}>{name}</div>
              <div style={{fontSize:12, color:c.mastic, marginTop:2}}>Proprietario · disponibile sempre</div>
            </div>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:17, color:c.hazel, fontWeight:400}}>{num}</div>
          </a>
        ))}
      </div>
    </div>
  </div>;
}

function Checkin({go}) {
  return <div style={s.app}>
    <PageHead title="Check-in / out" back={()=>go("home")} icon={<Ic.lock/>}/>
    <div style={s.content}>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12}}>
        <div style={{background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>Arrivo</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>15:00</div>
          <div style={{fontSize:11, color:c.hazel, marginTop:6}}>dalle ore</div>
        </div>
        <div style={{background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>Partenza</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>10:30</div>
          <div style={{fontSize:11, color:c.hazel, marginTop:6}}>entro le ore</div>
        </div>
      </div>

      <Card>
        <CT text="🧳 All'arrivo"/>
        <Rule t="Vi accoglieremo personalmente — o vi lasciamo le istruzioni per il self check-in"/>
        <Rule t="Parcheggio libero in strada davanti all'ingresso"/>
        <Rule t="Trovate lenzuola, asciugamani e kit di benvenuto già pronti" last/>
      </Card>

      <Card>
        <CT text="👋 Alla partenza"/>
        <Rule t="Lasciate le chiavi sul tavolo in cucina"/>
        <Rule t="Buttate i rifiuti seguendo la raccolta differenziata (vedi FAQ)"/>
        <Rule t="Se avete bisogno di conservare i bagagli qualche ora, chiedeteci!" last/>
      </Card>

      <Card>
        <CT text="🚗 Parcheggio & accesso"/>
        <Rule t="Parcheggio libero e gratuito in Via Cimitero"/>
        <Rule t="Il cancello si apre con il telecomando che trovate all'interno"/>
        <Rule t="Citofono disponibile se necessario" last/>
      </Card>
    </div>
  </div>;
}

function Wifi({go}) {
  return <div style={s.app}>
    <PageHead title="Wi-Fi" back={()=>go("home")} icon={<Ic.wifi/>}/>
    <div style={s.content}>
      <Card>
        <CT icon={<Ic.wifi/>} text="Fibra ottica — disponibile ovunque"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,marginBottom:8}}>Copertura in tutto l'appartamento e in veranda.</p>
        <div style={s.wifiBox}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.mastic,marginBottom:6}}>Nome rete</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>CasaUta_Guest</div></div>
        <div style={{...s.wifiBox,marginTop:10}}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.mastic,marginBottom:6}}>Password</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>— — — — — —</div><div style={{fontSize:10,color:"rgba(245,240,232,0.4)",marginTop:6}}>⚠️ Chiedete la password all'arrivo</div></div>
      </Card>
      <Card><CT text="Problemi di connessione?"/><p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>Spegnete e riaccendete il router (armadio nel corridoio). Se il problema persiste, contattateci.</p></Card>
    </div>
  </div>;
}

const FOTO = {
  cucina:    "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777653108/IMG_9577_xhquge.png",
  camera:    "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777653099/IMG_9578_zsnug5.png",
  veranda1:  "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777734588/IMG_9647_sdz159.png",
  veranda2:  "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777734588/IMG_9650_ipg8kw.png",
  ingresso:  "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777734589/IMG_9649_gyjnyf.png",
  bagno:     "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777734584/IMG_9645_wvvvpr.png",
  cancello:  "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777734586/IMG_9646_onqx6z.png",
};

function FotoSlide({imgs, height=200}) {
  const [idx, setIdx] = useState(0);
  if (!imgs || imgs.length === 0) return null;
  return (
    <div style={{position:"relative", marginBottom:14}}>
      <img src={imgs[idx]} alt="" style={{width:"100%", height, objectFit:"cover", borderRadius:14, display:"block"}}/>
      {imgs.length > 1 && (
        <>
          <button onClick={()=>setIdx((idx-1+imgs.length)%imgs.length)} style={{
            position:"absolute", left:8, top:"50%", transform:"translateY(-50%)",
            background:"rgba(255,255,255,0.85)", border:"none", borderRadius:"50%",
            width:32, height:32, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center"
          }}>‹</button>
          <button onClick={()=>setIdx((idx+1)%imgs.length)} style={{
            position:"absolute", right:8, top:"50%", transform:"translateY(-50%)",
            background:"rgba(255,255,255,0.85)", border:"none", borderRadius:"50%",
            width:32, height:32, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center"
          }}>›</button>
          <div style={{position:"absolute", bottom:8, left:"50%", transform:"translateX(-50%)",
            display:"flex", gap:4}}>
            {imgs.map((_,i)=><div key={i} style={{width:i===idx?16:6, height:6,
              borderRadius:3, background:i===idx?"white":"rgba(255,255,255,0.5)", transition:"width .2s"}}/>)}
          </div>
        </>
      )}
    </div>
  );
}

function Appartamento({go}) {
  return <div style={s.app}>
    <PageHead title="L'Appartamento" sub="50 m² interno · 40 m² veranda" back={()=>go("home")} icon={<Ic.building/>}/>
    <div style={s.content}>

      <FotoSlide imgs={[FOTO.cancello, FOTO.ingresso, FOTO.veranda1, FOTO.veranda2]} height={220}/>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14}}>
        {[["~50 m²","Interno"],["~40 m²","Veranda"],["2×","Clima Wi-Fi"]].map(([val,label])=>(
          <div key={label} style={{background:c.white, borderRadius:14, padding:"14px 8px", textAlign:"center", border:`1px solid ${c.hazel}20`}}>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.hazel, lineHeight:1}}>{val}</div>
            <div style={{fontSize:10, color:c.mastic, marginTop:4, letterSpacing:"0.5px"}}>{label}</div>
          </div>
        ))}
      </div>

      <Card>
        <CT text="🍳 Cucina"/>
        <FotoSlide imgs={[FOTO.cucina]} height={180}/>
        {["Piano cottura a induzione","Forno elettrico","Lavastoviglie","Frigorifero","Climatizzatore Wi-Fi","Tavolo allungabile + 4 sedie","Divano letto 3 posti","Vetrata su veranda"].map((t,i,a)=>(
          <Rule key={i} t={t} last={i===a.length-1}/>
        ))}
        <div style={{marginTop:10, background:`linear-gradient(135deg,${c.hazel}15,${c.hazelL}20)`,
          borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:10}}>
          <span style={{fontSize:20}}>🌸</span>
          <span style={{fontSize:12, color:c.warm, lineHeight:1.5}}>
            <strong>Affresco anni '50</strong> — motivi floreali rosa dipinti a mano da artigiani sardi
          </span>
        </div>
      </Card>

      <Card>
        <CT text="🛏️ Camera da letto"/>
        <FotoSlide imgs={[FOTO.camera]} height={180}/>
        {["Letto matrimoniale con contenitore","Armadio ~4 metri","Settimino","Comodini con applique su entrambi i lati","Condizionatore Wi-Fi"].map((t,i,a)=>(
          <Rule key={i} t={t} last={i===a.length-1}/>
        ))}
        <div style={{marginTop:10, background:`linear-gradient(135deg,${c.hazel}15,${c.hazelL}20)`,
          borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:10}}>
          <span style={{fontSize:20}}>✦</span>
          <span style={{fontSize:12, color:c.warm, lineHeight:1.5}}>
            <strong>Affresco anni '50</strong> — geometrie dorate, unico nel suo genere
          </span>
        </div>
      </Card>

      <Card>
        <CT text="🚿 Bagno"/>
        <FotoSlide imgs={[FOTO.bagno]} height={160}/>
        {["Box doccia scorrevole 80×100 cm","Colonna doccia con getti massaggio","Mobile lavandino con cassettoni","Specchio con illuminazione LED","Ventilazione automatica"].map((t,i,a)=>(
          <Rule key={i} t={t} last={i===a.length-1}/>
        ))}
      </Card>

      <Card>
        <CT text="🌿 Veranda e giardino"/>
        <FotoSlide imgs={[FOTO.veranda1, FOTO.veranda2]} height={160}/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>
          Veranda coperta ~40 m² con accesso diretto dalla vetrata della cucina. Giardinetto privato — ideale per colazioni all'aperto e aperitivi al tramonto.
        </p>
      </Card>

      <div style={{display:"flex",flexWrap:"wrap",gap:8, marginTop:4}}>
        {["Wi-Fi fibra","2 Climatizzatori","Parcheggio libero","Giardino privato","Lavastoviglie","Forno"].map((t,i)=>(
          <span key={t} style={i===0?s.tagA:s.tag}>{t}</span>
        ))}
      </div>

      <div style={{background:`linear-gradient(135deg,${c.hazel}18,${c.hazelL}28)`,
        borderRadius:16, padding:"16px 18px", marginTop:14,
        border:`1px solid ${c.hazel}35`, display:"flex", gap:14, alignItems:"flex-start"}}>
        <span style={{fontSize:28, flexShrink:0}}>🧱</span>
        <div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18,
            fontWeight:400, color:c.warm, marginBottom:6}}>Costruita in <em>ladiri</em></div>
          <p style={{fontSize:13, color:c.mastic, lineHeight:1.7, margin:0}}>
            La casa è edificata con i tradizionali mattoni di argilla cruda essiccata al sole,
            tipici dell'architettura rurale del Campidano sardo. I <strong>ladiri</strong> garantiscono
            un'eccellente coibentazione naturale: fresco d'estate, caldo d'inverno.
            Un patrimonio costruttivo millenario, autentico e raro.
          </p>
        </div>
      </div>
    </div>
  </div>;
}

function Regole({go}) {
  return <div style={s.app}>
    <PageHead title="Regole casa" back={()=>go("home")} icon={<Ic.check/>}/>
    <div style={s.content}>
      <Card><CT text="📋 Generali"/>
        <Rule t={<span>Check-in dalle <strong>15:00</strong> — Check-out entro <strong>10:30</strong></span>}/>
        <Rule t="Non sono ammessi animali domestici"/>
        <Rule t="Vietato fumare all'interno"/>
        <Rule t={<span>Silenzio dalle <strong>22:30</strong> alle <strong>08:00</strong></span>}/>
        <Rule t="Numero massimo ospiti come da prenotazione" last/>
      </Card>
      <Card><CT text="🧹 Pulizia e cura"/>
        <Rule t="Lasciare la casa in ordine alla partenza"/>
        <Rule t="Differenziare i rifiuti (istruzioni in FAQ)"/>
        <Rule t="Segnalare eventuali danni prima del check-out" last/>
      </Card>
      <Card><CT text="🔒 Sicurezza"/>
        <Rule t="Chiudere sempre a chiave uscendo"/>
        <Rule t="Non lasciare rubinetti aperti o fornelli accesi"/>
        <Rule t={<span>Emergenze: <strong>112</strong></span>} last/>
      </Card>
    </div>
  </div>;
}

function Posizione({go}) {
  return <div style={s.app}>
    <PageHead title="Come arrivare" back={()=>go("home")} icon={<Ic.pin/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.pin/>} text="Indirizzo"/>
        <p style={{fontFamily:"Georgia,serif",fontSize:19,marginBottom:12,color:c.warm}}>Via Cimitero 38/A<br/>Uta (CA) — Sardegna</p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> Apri in Google Maps</a>
      </Card>
      <Card><CT text="🚌 Mezzi pubblici"/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v="›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 10px"}}>Prima 05:40 · Ultima ~22:00 · tutti i giorni</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="›" link="https://www.trenitalia.com" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>06:27–20:53 · ~22 min per Cagliari</p>
      </Card>
      <Card><CT text="🚗 In auto — distanze"/>
        <Row l="✈️ Aeroporto Cagliari" v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l="🏖️ Poetto (mare)" v="~15 min" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
        <Row l="🏙️ Cagliari centro" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l="🏭 Zona ind. Macchiareddu" v="~5 min" link="https://maps.google.com/?q=Macchiareddu+Uta"/>
        <Row l="🦜 Oasi WWF Santa Gilla" v="~10 min" link="https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"/>
        <Row l="⛴️ Porto di Cagliari" v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari" last/>
      </Card>
    </div>
  </div>;
}

function Esplorare({go}) {
  const [tab, setTab] = useState(null);

  const tabs = [
    {
      id:"vicino", label:"A due passi", emoji:"🌿",
      color:"#2d4a2d", accent:"#6db86d",
      tagline:"Tutto raggiungibile a piedi o in 15 minuti",
      data:[
        { title:"Chiesa romanica di Santa Maria", dist:"5 min", emoji:"⛪",
          mood:"Patrimonio del XII sec.",
          desc:"Pietra calcarea, volte basse e luce filtrata. Una delle chiese medievali più integre del Campidano — vale dieci minuti di sosta.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Santa_Maria_xtazex.jpg",
          link:"https://maps.google.com/?q=Chiesa+Santa+Maria+Uta"},
        { title:"Parco S'Ollivariu", dist:"5 min", emoji:"🌳",
          mood:"Mattinata tranquilla",
          desc:"Lecci, sentieri ombreggiati e silenzio. Il posto giusto per iniziare la giornata prima che il paese si svegli.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/parcom_uta_xnujth.jpg",
          link:"https://maps.google.com/?q=Parco+S+Ollivariu+Uta"},
        { title:"Cinema Vittoria", dist:"a piedi", emoji:"🎬",
          mood:"Sala storica anni '50",
          desc:"Una piccola sala cinematografica storica nel cuore di Uta. Programmazione mista, atmosfera d'altri tempi. Un'esperienza autentica e rara.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/cinema_vittoria_mgdibo.jpg",
          link:"https://maps.google.com/?q=Cinema+Vittoria+Uta+Sardegna"},
        { title:"Laguna di Santa Gilla — uccelli migratori", dist:"10 min", emoji:"🦩",
          mood:"Spettacolo naturale gratuito",
          desc:"Laguna costiera dove svernano fenicotteri rosa, aironi, cormorani e migliaia di uccelli migratori. Non serve una riserva — basta affacciarsi dalla strada panoramica per uno spettacolo unico.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/santa_gilla_hnx9nk.jpg",
          link:"https://maps.google.com/?q=Laguna+Santa+Gilla+Cagliari"},
        { title:"Saline di Conti Vecchi", dist:"10 min", emoji:"🧂",
          mood:"Foto imperdibili",
          desc:"Ex saline industriali con vasche che cambiano colore dal bianco candido al rosa acceso. Un paesaggio surreale e fotogenico a due passi.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744896/conti_vecchi_xdy4by.jpg",
          link:"https://maps.google.com/?q=Saline+Conti+Vecchi+Assemini"},
        { title:"Oasi del Cervo e della Luna — Monte Arcosu", dist:"20 min", emoji:"🦌",
          mood:"Foresta primordiale · WWF",
          desc:"La più grande foresta mediterranea privata d'Europa, gestita dal WWF. Sede del rarissimo Cervo sardo. Trekking tra lecci e sughere. All'interno dell'oasi si trova La Locanda dei Buoni e Cattivi: cucina sarda autentica nel bosco — da non perdere.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747199/wwf_xq90yh.webp",
          link:"https://maps.google.com/?q=Oasi+WWF+Monte+Arcosu+Uta+Sardegna"},
        { title:"Parco Naturale di Gutturu Mannu", dist:"25 min", emoji:"🏞️",
          mood:"Wilderness del Sulcis",
          desc:"Uno dei parchi più estesi e meno frequentati della Sardegna. Boschi di lecci, torrenti, fauna selvatica. Sentieri per tutti i livelli — quasi sconosciuto ai turisti.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/gutturu_mannu_bomtbd.jpg",
          link:"https://maps.google.com/?q=Gutturu+Mannu+Sardegna"},
      ]
    },
    {
      id:"cagliari", label:"Cagliari", emoji:"🏙️",
      color:"#1e2d40", accent:"#6aaee0",
      tagline:"Il capoluogo in 20 minuti — mare, storia, vita",
      data:[
        { title:"Poetto — 11 km di sabbia fine", dist:"15 min", emoji:"🏖️",
          mood:"Mare & relax",
          desc:"La spiaggia urbana più lunga della Sardegna. D'estate chioschi e movida, in primavera solo vento e orizzonte. Entrami validi.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/poetto_hefkna.jpg",
          link:"https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"},
        { title:"Sella del Diavolo", dist:"20 min", emoji:"🥾",
          mood:"Tramonto da ricordare",
          desc:"Il promontorio tra Poetto e Calamosca. Il sentiero sale tra mirto e lentisco: in cima, il Golfo di Cagliari si apre tutto insieme.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/sella_del_diavolo_xmwacr.jpg",
          link:"https://maps.google.com/?q=Sella+del+Diavolo+Cagliari"},
        { title:"Molentargius — fenicotteri & bici fino al Poetto", dist:"15 min", emoji:"🦩",
          mood:"Esperienza unica da non perdere",
          desc:"Parco naturale con colonie di fenicotteri rosa che nidificano tutto l'anno — fenomeno rarissimo in Europa. Il percorso in bici attraverso le saline e lo stagno fino alla spiaggia del Poetto è un'esperienza indimenticabile: natura selvatica e mare nello stesso giro. Noleggio bici disponibile all'ingresso del parco.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/Molentargius_tl1ctr.jpg",
          link:"https://maps.google.com/?q=Parco+Molentargius+Cagliari"},
        { title:"Parco di Monte Claro", dist:"20 min", emoji:"🌳",
          mood:"Verde nel cuore di Cagliari",
          desc:"Il grande parco storico di Cagliari con villa ottocentesca, laghetto, alberi centenari e percorsi pedonali. Perfetto per una mattinata rilassante in città.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/monte_claro_syefhj.jpg",
          link:"https://maps.google.com/?q=Parco+Monte+Claro+Cagliari"},
        { title:"Marina, Castello & Su Siccu", dist:"20 min", emoji:"🏙️",
          mood:"Aperitivo & storia",
          desc:"Il quartiere Marina per i tapas sardi e i vicoli animati; Castello per i panorami sul golfo; Su Siccu per una serata sul lungomare.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744881/cagliari_vqtn9u.jpg",
          link:"https://maps.google.com/?q=Cagliari+centro+storico"},
        { title:"Mercato di San Benedetto", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/San_benedetto_gwtodd.jpg", dist:"20 min", emoji:"🐟", mood:"Esperienza autentica",
          desc:"Uno dei mercati coperti più grandi d'Europa. ⚠️ La sede storica è al momento chiusa per ristrutturazione: i banchi sono trasferiti nella struttura temporanea in Piazza Nazzari, a pochi passi. Il piano del pesce resta uno spettacolo — andate la mattina.",
          link:"https://maps.google.com/?q=Mercato+San+Benedetto+Cagliari"},
      ]
    },
    {
      id:"cultura", label:"Cultura & Storia", emoji:"🏛️",
      color:"#3a2510", accent:"#d4845f",
      tagline:"Romani, aragonesi, artigiani e minatori",
      data:[
        { title:"San Sperate — Pinuccio Sciola", dist:"15 min", emoji:"🎨",
          mood:"Da non perdere",
          desc:"Il paese-museo: ogni muro è un'opera, ogni vicolo una sorpresa. Le pietre sonore di Sciola vibrano al tocco — un'esperienza che non si dimentica.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/Pinuccio_sciola_lj3opa.jpg",
          link:"https://maps.google.com/?q=Murales+San+Sperate+Sardegna"},
        { title:"Scavi di Nora", dist:"25 min", emoji:"🏛️",
          mood:"2.800 anni di storia",
          desc:"Teatro romano, terme puniche, mosaici e colonne — tutto affacciato sul mare. Una delle città antiche più scenografiche d'Italia.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/nora_ertuqj.jpg",
          link:"https://maps.google.com/?q=Nora+sito+romano+Pula"},
        { title:"Su Nuraxi di Barumini — UNESCO", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/su_nuraxi_xaetjk.webp", dist:"50 min", emoji:"🗿", mood:"Patrimonio dell'umanità",
          desc:"L'unico sito UNESCO della Sardegna: il villaggio nuragico più importante dell'isola, con la torre centrale del 1500 a.C. Visite guidate ogni 30 minuti. Imperdibile.",
          link:"https://maps.google.com/?q=Su+Nuraxi+Barumini"},
        { title:"Grotte Is Zuddas", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Grotte_is_zuddas_mdgf28.jpg", dist:"50 min", emoji:"💎", mood:"Meraviglia sotterranea",
          desc:"A Santadi, grotte con rarissime aragoniti eccentriche che sfidano la gravità. Visita guidata di ~1 ora a temperatura costante di 16° — perfetta anche nelle giornate più calde.",
          link:"https://maps.google.com/?q=Grotte+Is+Zuddas+Santadi"},
        { title:"Villa d'Orri", dist:"25 min", emoji:"🏰",
          mood:"Eleganza ottocentesca",
          desc:"Dimora nobiliare immersa in un parco di lecci centenari. Architettura neoclassica e atmosfera sospesa nel tempo.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Villa_d_orri_taitht.avif",
          link:"https://maps.google.com/?q=Villa+d+Orri+Sarroch"},
        { title:"Miniere & Geoparco di Iglesias", dist:"50 min", emoji:"⛏️",
          mood:"Patrimonio UNESCO",
          desc:"Gallerie, laverie e paesaggi industriali restituiti alla memoria collettiva. Il Museo del Carbone di Serbariu è il punto di partenza ideale.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/geoparco_etvg6s.jpg",
          link:"https://maps.google.com/?q=Miniere+Iglesias+Sardegna"},
      ]
    },
    {
      id:"natura", label:"Natura & Sapori", emoji:"🌊",
      color:"#0e2a35", accent:"#4ab8c8",
      tagline:"Spiagge, cammini, vini e isole",
      data:[
        { title:"Cantine Argiolas, Mesa, Audarya", dist:"20–40 min", emoji:"🍷",
          mood:"Degustazione",
          desc:"Vermentino, Cannonau, Carignano. Le cantine del Campidano aprono le porte per visite e degustazioni in paesaggi da cartolina.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/cantine_n27jpi.jpg",
          link:"https://maps.google.com/?q=Cantine+Argiolas+Serdiana"},
        { title:"Cammini — Sant'Efisio, 100 Torri, Santa Barbara", dist:"vari", emoji:"🚶",
          mood:"Pellegrinaggio & trekking",
          desc:"Antichi percorsi a piedi attraverso la Sardegna del sud. Il Cammino dei 100 Torri costiero è tra i più scenografici; Sant'Efisio il più spirituale.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/cammino_santa_barbara_jmtavj.jpg",
          link:"https://maps.google.com/?q=Cammino+Sant+Efisio+Sardegna"},
        { title:"Sentieri del Carignano — Sulcis", dist:"50 min", emoji:"🥾",
          mood:"Viticoltura eroica",
          desc:"Vigneti a piede franco tra i più antichi d'Europa, aggrappati alle scogliere a strapiombo sul mare. Un trekking fuori dal comune.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/sentiero_carignano_pwfsai.jpg",
          link:"https://maps.google.com/?q=Carignano+del+Sulcis+vigneti"},
        { title:"Chia — dune e torri", dist:"45 min", emoji:"🏖️",
          mood:"Spiaggia da sogno",
          desc:"Acqua caraibica, dune di sabbia bianca e una torre aragonese sul promontorio. Tra le spiagge più belle d'Europa. Arrivate presto.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/chia_a9gzlt.jpg",
          link:"https://maps.google.com/?q=Spiaggia+Chia+Sardegna"},
        { title:"Spiaggia di Tuerredda", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Tuerredda_ealwbe.webp", dist:"55 min", emoji:"🏝️", mood:"Caraibi sardi",
          desc:"Sabbia bianchissima e acqua turchese poco profonda, con l'isolotto raggiungibile a nuoto. Tra le spiagge più belle d'Italia. In alta stagione arrivate entro le 9:30.",
          link:"https://maps.google.com/?q=Spiaggia+Tuerredda"},
        { title:"Belvedere Nebida & Pan di Zucchero", dist:"1h 10min", emoji:"🗼",
          mood:"Panorama mozzafiato",
          desc:"Lo scoglio più alto del Mediterraneo visto dall'alto. Al tramonto la luce arancione sulla roccia bianca è inarrivabile.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/belvedere-di-nebida_phr0o8.webp",
          link:"https://maps.google.com/?q=Belvedere+Nebida+Sardegna"},
        { title:"Carloforte — Isola di San Pietro", dist:"1h 20min + traghetto", emoji:"⛵",
          mood:"Isola nell'isola",
          desc:"Borgo tabarkino con accento ligure, strade strette e tonno rosso del Mediterraneo. Una giornata intera non basta.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/carloforte_houlpq.jpg",
          link:"https://maps.google.com/?q=Carloforte+Isola+San+Pietro"},
        { title:"Villasimius & Costa Rei", dist:"1h", emoji:"🌊",
          mood:"Fondali cristallini",
          desc:"Il sud-est della Sardegna è quasi caraibico. Acque trasparenti, barriera corallina, dune di quarzo rosa. Perfetto per snorkeling.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744889/villasimius_uvzqrv.jpg",
          link:"https://maps.google.com/?q=Villasimius+Sardegna"},
        { title:"Spiaggia di Scivu & Torre dei Corsari", dist:"1h 10min", emoji:"🏖️",
          mood:"Selvaggia e incontaminata",
          desc:"Due spiagge rimaste intatte, senza strade asfaltate. Sabbia finissima e mare verde smeraldo tra le dune del Sulcis.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747342/scivu_iqjmjj.jpg",
          link:"https://maps.google.com/?q=Spiaggia+Scivu+Sardegna"},
        { title:"Dune di Piscinas", dist:"1h 20min", emoji:"🏜️",
          mood:"Il deserto d'Europa",
          desc:"Le dune più alte d'Europa — fino a 60 metri — si affacciano su un mare spettacolare. Un paesaggio da Sahara nel cuore della Sardegna.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/piscinas_srqqdj.webp",
          link:"https://maps.google.com/?q=Dune+di+Piscinas+Sardegna"},
        { title:"Golfo di Orosei & Cala Goloritzé", dist:"~3h", emoji:"🌊",
          mood:"Top 10 spiagge al mondo",
          desc:"Cala Goloritzé, Cala Luna, Cala Mariolu — le calette del golfo compaiono ogni anno tra le spiagge più belle del mondo. Vale il viaggio.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/goloritze_gkcup9.jpg",
          link:"https://maps.google.com/?q=Golfo+di+Orosei+Sardegna"},
        { title:"Arcipelago della Maddalena", dist:"~3h", emoji:"⛵",
          mood:"Parco Nazionale marino",
          desc:"Sette isole, acque trasparenti e graniti rosa. Traghetto da Palau. Una delle aree marine protette più belle del Mediterraneo.",
          photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/maddalena_mgxpth.jpg",
          link:"https://maps.google.com/?q=Arcipelago+della+Maddalena+Sardegna"},
      ]
    },
  ];

  const [meteo, setMeteo] = useState(null);
  const [meteoLoad, setMeteoLoad] = useState(false);

  const fetchMeteo = async () => {
    setMeteoLoad(true);
    try {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=39.29&longitude=8.96" +
        "&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,relativehumidity_2m" +
        "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum" +
        "&timezone=Europe%2FRome&forecast_days=3";
      const res = await fetch(url);
      const d = await res.json();

      const wmoLabel = (code) => {
        if (code === 0) return ["☀️","Soleggiato"];
        if (code <= 2) return ["⛅","Poco nuvoloso"];
        if (code <= 3) return ["☁️","Coperto"];
        if (code <= 49) return ["🌫️","Nebbia"];
        if (code <= 59) return ["🌦️","Pioviggine"];
        if (code <= 69) return ["🌧️","Pioggia"];
        if (code <= 79) return ["🌨️","Neve"];
        if (code <= 84) return ["🌦️","Rovesci"];
        return ["⛈️","Temporale"];
      };

      const [icoNow, labelNow] = wmoLabel(d.current.weathercode);
      const current = {
        temp: Math.round(d.current.temperature_2m),
        feels: Math.round(d.current.apparent_temperature),
        ico: icoNow, label: labelNow,
        wind: Math.round(d.current.windspeed_10m),
        hum: d.current.relativehumidity_2m,
      };

      const days = ["Oggi","Domani","Dopodomani"];
      const forecast = d.daily.time.slice(0,3).map((date,i)=>{
        const [ico,label] = wmoLabel(d.daily.weathercode[i]);
        return { day:days[i], ico, label,
          max: Math.round(d.daily.temperature_2m_max[i]),
          min: Math.round(d.daily.temperature_2m_min[i]),
          rain: d.daily.precipitation_sum[i] };
      });
      setMeteo({current, forecast});
    } catch(e) { setMeteo(null); }
    setMeteoLoad(false);
  };

  useEffect(()=>{ fetchMeteo(); }, []);

  const t = tab !== null ? tabs[tab] : tabs[0];

  return <div style={s.app}>
    <PageHead title="Da scoprire" back={()=>go("home")} icon={<Ic.compass/>}/>
    <div style={s.content}>

      <div style={{background:`linear-gradient(160deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"16px 18px", marginBottom:16, overflow:"hidden", position:"relative"}}>
        <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,background:"radial-gradient(circle,#CEAD8540,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:12}}>📍 Uta · Meteo in tempo reale</div>
        {meteoLoad && <div style={{color:"rgba(245,240,232,0.5)",fontSize:13,textAlign:"center",padding:"16px 0"}}>⏳ Caricamento meteo…</div>}
        {!meteoLoad && meteo && (
          <>
            <div style={{display:"flex", alignItems:"center", gap:16, marginBottom:14, paddingBottom:14, borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
              <span style={{fontSize:44, lineHeight:1}}>{meteo.current.ico}</span>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:40, color:"white", lineHeight:1, fontWeight:600}}>{meteo.current.temp}°<span style={{fontSize:18, color:"rgba(245,240,232,0.5)", fontFamily:"'Jost',sans-serif", fontWeight:200, marginLeft:4}}>C</span></div>
                <div style={{fontSize:14, color:"white", marginTop:2, fontWeight:500}}>{meteo.current.label}</div>
                <div style={{display:"flex", gap:12, marginTop:4}}>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>💨 {meteo.current.wind} km/h</span>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>💧 {meteo.current.hum}%</span>
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>Percepiti {meteo.current.feels}°</span>
                </div>
              </div>
            </div>
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8}}>
              {meteo.forecast.map((g,i)=>(
                <div key={i} style={{textAlign:"center", background:"rgba(255,255,255,0.05)", borderRadius:12, padding:"10px 6px"}}>
                  <div style={{fontSize:9, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:4}}>{g.day}</div>
                  <div style={{fontSize:24, lineHeight:1, marginBottom:4}}>{g.ico}</div>
                  <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18, color:"white", fontWeight:600}}>{g.max}°</div>
                  <div style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>{g.min}° min</div>
                  {g.rain > 0 && <div style={{fontSize:10, color:c.hazel, marginTop:3}}>💧{g.rain}mm</div>}
                </div>
              ))}
            </div>
          </>
        )}
        {!meteoLoad && !meteo && (
          <div style={{textAlign:"center",padding:"10px 0"}}>
            <span style={{fontSize:12,color:"rgba(245,240,232,0.4)"}}>Meteo non disponibile</span>
            <button onClick={fetchMeteo} style={{display:"block",margin:"8px auto 0",background:"none",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"5px 12px",fontSize:11,color:"rgba(245,240,232,0.5)",cursor:"pointer"}}>Riprova</button>
          </div>
        )}
      </div>

      {/* Call to action contestuale — appare solo se il meteo è caricato */}
      <div style={{textAlign:"center", padding:"4px 0 20px"}}>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22,
          fontWeight:300, color:c.warm, lineHeight:1.3, marginBottom:6}}>
          {meteo
            ? meteo.current.ico === "☀️" || meteo.current.ico === "⛅"
              ? <>Con questo sole,<br/><em style={{fontStyle:"italic",color:c.hazel}}>cosa ti va di scoprire?</em></>
              : meteo.current.ico === "🌧️" || meteo.current.ico === "⛈️"
              ? <>Giornata di pioggia?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Cultura & storia ti aspettano.</em></>
              : <>Con questo clima,<br/><em style={{fontStyle:"italic",color:c.hazel}}>cosa ti va di scoprire?</em></>
            : <>Scegli la tua<br/><em style={{fontStyle:"italic",color:c.hazel}}>prossima avventura.</em></>
          }
        </div>
        <div style={{fontSize:11, color:c.mastic, letterSpacing:"0.5px"}}>
          Scegli una categoria ↓
        </div>
      </div>

      {/* Tab come card rettangolari full-width */}
      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {tabs.map(({id,label,emoji,color,accent,tagline,data},i)=>(
          <button key={id} onClick={()=>go(`esplorare_${id}`)} style={{
            background: c.white,
            border: `1px solid ${c.sand}`,
            borderRadius:18, padding:"18px 20px", cursor:"pointer",
            textAlign:"left", transition:"all .2s",
            boxShadow:"0 1px 4px rgba(61,31,16,0.06)",
            display:"flex", alignItems:"center", gap:18,
            width:"100%",
          }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor=accent;e.currentTarget.style.boxShadow=`0 4px 14px ${color}30`;}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor=c.sand;e.currentTarget.style.boxShadow="0 1px 4px rgba(61,31,16,0.06)";}}>
            {/* Emoji con sfondo colorato */}
            <div style={{width:56, height:56, borderRadius:16, flexShrink:0,
              background:`linear-gradient(135deg, ${color}, ${color}cc)`,
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:26}}>
              {emoji}
            </div>
            {/* Testo */}
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18,
                color:c.warm, fontWeight:400, lineHeight:1.2, marginBottom:3}}>{label}</div>
              <div style={{fontSize:11, color:c.mastic, lineHeight:1.4, marginBottom:6}}>{tagline}</div>
              <div style={{display:"inline-flex", alignItems:"center", gap:4,
                background:`${accent}18`, borderRadius:10, padding:"3px 10px"}}>
                <span style={{fontSize:10, color:accent, fontWeight:600}}>{data.length} esperienze</span>
              </div>
            </div>
            {/* Freccia */}
            <div style={{fontSize:18, color:c.mastic, flexShrink:0}}>›</div>
          </button>
        ))}
      </div>
    </div>
  </div>;
}

function Servizi({go}) {
  return <div style={s.app}>
    <PageHead title="Servizi utili" back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>

      <Card>
        <CT text="💊 Salute"/>
        <Row l="Farmacia Schlich — Via Stazione 5" v="~300m ›" link="https://maps.google.com/?q=Farmacia+Schlich+Uta"/>
        <Row l="Parafarmacia Bensaid — Via Roma 27 ⭐5.0" v="vicino ›" link="https://maps.google.com/?q=Parafarmacia+Bensaid+Uta"/>
        <Row l="La Parafarmacia — Via Torino 11A ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=La+Parafarmacia+Uta"/>
        <Row l="🩺 Guardia Medica — Via S. Giusta 85" v="070 609 2204 ›" link="tel:+390706092204" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>Feriali 20:00–08:00 · Festivi h24</p>
      </Card>

      <Card>
        <CT text="🧺 Lavanderie"/>
        <Row l="Lavanderia a gettoni — Via Umberto I 33, Uta" v="~5 min ›"
          link="https://maps.google.com/?q=Via+Umberto+I+33+Uta+Cagliari"/>
        <Row l="Lavanda Self Service ⭐4.5 — Via Nazionale 55, Decimomannu" v="~10 min ›"
          link="https://maps.google.com/?q=Via+Nazionale+55+Decimomannu"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>
          Aperta tutti i giorni · lun–sab 06:30 · dom 07:00 · tel. 340 268 7577 · anche ritiro a domicilio
        </p>
        <Row l="Lavanderia Sarigu Giustina — Via Nazionale 48, Decimomannu" v="~10 min ›"
          link="https://maps.google.com/?q=Via+Nazionale+48+Decimomannu" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>tel. 070 961186</p>
      </Card>

      <Card>
        <CT text="🏦 Bancomat ATM"/>
        <Row l="🏦 Banco di Sardegna — Via Santa Giusta 44" v="vicino ›"
          link="https://maps.google.com/?q=Banco+di+Sardegna+Via+Santa+Giusta+44+Uta"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>Filiale con ATM · tel. 070 969008</p>
        <Row l="📮 Postamat — Poste Italiane Uta" v="vicino ›"
          link="https://maps.google.com/?q=Poste+Italiane+Uta+Cagliari" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>Sportello ATM h24 · 7 giorni su 7</p>
      </Card>

      <Card>
        <CT text="🏛️ Altri servizi"/>
        <Row l="🚬 Tabaccheria Coccinella ⭐4.9" v="vicino ›" link="https://maps.google.com/?q=Coccinella+Tabaccheria+Uta"/>
        <Row l="🏛️ Comune di Uta" v="vicino ›" link="https://maps.google.com/?q=Comune+di+Uta" last/>
      </Card>

      <Card>
        <CT text="🚌 Trasporti"/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v="orari ›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>Prima 05:40 · Ultima ~22:00</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v="orari ›" link="https://www.trenitalia.com"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>06:27–20:53 · ~22 min per Cagliari</p>
        <Row l="✈️ Aeroporto Cagliari" v="~10 min ›" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas" last/>
      </Card>

      <div style={s.darkBox}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>
          🚨 Emergenze: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp;
          Ambulanza: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp;
          Vigili del fuoco: <strong style={{color:"white"}}>115</strong>
        </p>
      </div>
    </div>
  </div>;
}

function RCard({emoji, nome, stelle, dist, tipo, piatti, link, highlight}) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={{
      display:"block", textDecoration:"none",
      background: highlight ? `linear-gradient(135deg,${c.hazel}18,${c.hazelL}25)` : c.white,
      borderRadius:16, marginBottom:8, overflow:"hidden",
      border: highlight ? `1px solid ${c.hazel}50` : `1px solid ${c.sand}`,
      boxShadow: highlight ? `0 2px 8px ${c.hazel}20` : "none",
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow=`0 4px 12px ${c.hazel}25`;}}
      onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow=highlight?`0 2px 8px ${c.hazel}20`:"none";}}>
      <div style={{padding:"12px 14px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start"}}>
          <div style={{display:"flex", alignItems:"center", gap:10, flex:1, minWidth:0}}>
            <span style={{fontSize:22, flexShrink:0}}>{emoji}</span>
            <div style={{minWidth:0}}>
              <div style={{display:"flex", alignItems:"center", gap:6, flexWrap:"wrap"}}>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:17, fontWeight:400, color:c.warm, lineHeight:1.2}}>{nome}</span>
                {stelle && <span style={{fontSize:11, color:"#a07820", fontWeight:700, flexShrink:0}}>⭐{stelle}</span>}
                {highlight && <span style={{fontSize:9, background:c.hazel, color:c.warm, borderRadius:8, padding:"2px 7px", letterSpacing:"0.5px", flexShrink:0}}>CONSIGLIATO</span>}
              </div>
              <div style={{fontSize:10.5, color:c.mastic, marginTop:2}}>{tipo} · <span style={{color:c.hazel}}>{dist}</span></div>
            </div>
          </div>
          <span style={{fontSize:16, color:c.hazel, flexShrink:0, marginLeft:8}}>›</span>
        </div>
        {piatti && <p style={{fontSize:12.5, color:c.mastic, lineHeight:1.65, margin:"8px 0 0", paddingLeft:32, fontStyle:"italic"}}>{piatti}</p>}
      </div>
    </a>
  );
}

function RSection({title, children}) {
  return (
    <div style={{marginBottom:20}}>
      <div style={{display:"flex", alignItems:"center", gap:10, margin:"0 0 10px"}}>
        <div style={{flex:1, height:1, background:c.sand}}/>
        <span style={{fontSize:10, letterSpacing:"2.5px", textTransform:"uppercase", color:c.mastic, flexShrink:0, fontWeight:500}}>{title}</span>
        <div style={{flex:1, height:1, background:c.sand}}/>
      </div>
      {children}
    </div>
  );
}

function Ristoranti({go}) {
  return <div style={s.app}>
    <PageHead title="Dove mangiare" back={()=>go("home")} icon={<Ic.pasta/>}/>
    <div style={s.content}>

      <div style={{background:`linear-gradient(135deg,#3D1F10,#5a3020)`, borderRadius:18, padding:"16px 18px", marginBottom:20}}>
        <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(245,240,232,0.45)",marginBottom:8}}>⭐ da non perdere</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {[
            {e:"🍔",n:"Slim Pickins",s:"4.9",d:"Uta",t:"Tocca con mano"},
            {e:"⭐",n:"Lughènte Fine Dining",s:"4.9",d:"~20 min",t:"Alta cucina sarda"},
            {e:"🌿",n:"Ada Restaurant",s:"4.7",d:"~15 min",t:"Cucina creativa"},
          ].map(({e,n,s,d,t})=>(
            <div key={n} style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:18}}>{e}</span>
              <div style={{flex:1}}>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,color:"white"}}>{n}</span>
                <span style={{fontSize:10,color:"rgba(245,240,232,0.5)",marginLeft:8}}>{d}</span>
              </div>
              <span style={{fontSize:11,color:c.hazel,fontWeight:700}}>⭐{s}</span>
            </div>
          ))}
        </div>
      </div>

      <RSection title="A Uta — a piedi">
        <RCard emoji="🥡" nome="Al Malibù" dist="vicino" tipo="Gastronomia · Asporto · Tipicità sarde" highlight
          piatti="La chicca del quartiere: gastronomia con prodotti tipici sardi da asporto. Formaggi, salumi, pane carasau, arancini e piatti pronti della tradizione sarda. Perfetto per gustare le tipicità comodamente in casa o nelle belle giornate nella nostra veranda e giardino."
          link="https://maps.google.com/?q=Al+Malibù+Uta+Sardegna"/>
        <RCard emoji="🍔" nome="Slim Pickins" stelle="4.9" dist="vicino" tipo="American Fusion" highlight
          piatti="Burger gourmet, pulled pork, ali di pollo croccanti con ingredienti locali in chiave americana."
          link="https://maps.google.com/?q=Slim+Pickins+Uta"/>
        <RCard emoji="🍺" nome="U3 Birreria & Steakhouse" stelle="4.8" dist="vicino" tipo="Birra artigianale · Carne"
          piatti="Birre artigianali sarde, tagliata di manzo, hamburger di Angus. Rustico e conviviale."
          link="https://maps.google.com/?q=U3+Birreria+Uta"/>
        <RCard emoji="🥩" nome="El Miura" stelle="4.6" dist="vicino" tipo="Steakhouse · Cucina sarda"
          piatti="Grigliate, porceddu, secondi di terra. Ambiente familiare e porzioni generose."
          link="https://maps.google.com/?q=El+Miura+Uta"/>
        <RCard emoji="🍽️" nome="Da Caterina" stelle="4.4" dist="vicino" tipo="Cucina sarda tradizionale"
          piatti="Malloreddus, fregola, agnello al forno. Piatti della nonna, autentici e abbondanti."
          link="https://maps.google.com/?q=Ristorante+Da+Caterina+Uta"/>
        <RCard emoji="🍕" nome="Sa Locanda di Gaia" stelle="4.4" dist="vicino" tipo="Pizza · Cucina sarda"
          piatti="Pizze al forno a legna, pane carasau con guarnizioni, antipasti sardi."
          link="https://maps.google.com/?q=Pizzeria+Sa+Locanda+Di+Gaia+Uta"/>
      </RSection>

      <RSection title="Bar">
        <RCard emoji="☕" nome="Check Mate Bar" stelle="4.7" dist="vicino" tipo="Bar · Aperitivi"
          piatti="Colazioni sarde, aperitivi con stuzzichini. Il ritrovo dei giocatori di scacchi del paese."
          link="https://maps.google.com/?q=Checkmate+Bar+Uta"/>
        <RCard emoji="☕" nome="Caffè Roma" dist="vicino" tipo="Bar storico"
          piatti="Cornetti, paste fresche, caffè. Il ritrovo mattutino dei residenti di Uta."
          link="https://maps.google.com/search?q=Caffe+Roma+Uta"/>
        <RCard emoji="☕" nome="New Bar Mexico" stelle="4.7" dist="~15 min" tipo="Bar · Pasticceria · Assemini"
          piatti="Dolci sardi, seadas, paste di mandorle. Tappa golosa obbligata."
          link="https://maps.google.com/?q=New+Bar+Mexico+Assemini"/>
      </RSection>

      <RSection title="Circondario — 10/20 min">
        <RCard emoji="🍕" nome="Le Pizzi'ine di Niky" stelle="4.9" dist="~10 min" tipo="Pizzeria napoletana · Decimomannu"
          piatti="Pizza napoletana a lunga lievitazione. Tra le migliori nell'area."
          link="https://maps.google.com/?q=Le+Pizziine+di+Niky+Decimomannu"/>
        <RCard emoji="🐟" nome="Ci Pensa Marco" stelle="4.8" dist="~10 min" tipo="Pesce · Cucina sarda · Decimomannu"
          piatti="Fregola con arselle, spaghetti all'astice, fritto di paranza. Freschissimo ogni giorno."
          link="https://maps.google.com/?q=Ci+Pensa+Marco+Decimomannu"/>
        <RCard emoji="🍽️" nome="Thalìa" dist="~10 min" tipo="Cucina mediterranea · Elmas"
          piatti="Cucina di territorio con influenze mediterranee, carni e pesce. Ambiente curato."
          link="https://maps.google.com/?q=Ristorante+Thalia+Elmas"/>
        <RCard emoji="🌿" nome="Ada Restaurant" stelle="4.7" dist="~15 min" tipo="Cucina sarda creativa · San Sperate" highlight
          piatti="Malloreddus al mirto, agnello con erbe aromatiche, dolci rivisitati. Accanto ai murales di Sciola."
          link="https://maps.google.com/?q=Ada+Restaurant+San+Sperate"/>
        <RCard emoji="🍺" nome="Gasthaus" stelle="4.6" dist="~15 min" tipo="Birreria tedesca · Assemini"
          piatti="Würstel, crauti, stinco, birre tedesche alla spina. Un'anomalia felice."
          link="https://maps.google.com/?q=Gasthaus+Assemini"/>
        <RCard emoji="🍱" nome="Makito Poke & Sushi" stelle="4.7" dist="~15 min" tipo="Fusion · Assemini"
          piatti="Poke bowl, sushi rolls, tartare di tonno. Leggero e fresco."
          link="https://maps.google.com/?q=Makito+Assemini"/>
        <RCard emoji="⭐" nome="Lughènte Fine Dining" stelle="4.9" dist="~20 min" tipo="Alta cucina sarda · Capoterra" highlight
          piatti="Menù degustazione con bottarga, agnello, pecorino DOP. Prenotazione obbligatoria."
          link="https://maps.google.com/?q=Lughente+Capoterra"/>
        <RCard emoji="🌊" nome="Arcadia Restaurant" stelle="4.5" dist="~20 min" tipo="Pesce · Capoterra"
          piatti="Linguine all'aragosta, antipasti di mare, vista sul litorale."
          link="https://maps.google.com/?q=Arcadia+Restaurant+Capoterra"/>
      </RSection>

      <RSection title="Cagliari — pesce fresco ~20 min">
        <RCard emoji="🐠" nome="Stella Marina di Montecristo" stelle="4.6" dist="~20 min" tipo="Ristorante di pesce"
          piatti="Crudi di mare, zuppa di pesce, spaghetti con bottarga di muggine."
          link="https://maps.google.com/?q=Stella+Marina+di+Montecristo+Cagliari"/>
        <RCard emoji="🦐" nome="Mari Mannu" stelle="4.6" dist="~20 min" tipo="Cucina di mare"
          piatti="Antipasto di mare ricchissimo, fregola con frutti di mare, vista porto."
          link="https://maps.google.com/?q=Mari+Mannu+Cagliari"/>
        <RCard emoji="🐟" nome="Mondo & Luca" stelle="4.6" dist="~20 min" tipo="Trattoria di pesce"
          piatti="Ambiente informale, qualità altissima. Crudi, pasta al sugo di scorfano."
          link="https://maps.google.com/?q=Mondo+e+Luca+Cagliari"/>
      </RSection>

      <div style={{background:`linear-gradient(160deg, #3D1F10, #5a3020)`, borderRadius:18, overflow:"hidden", marginTop:4}}>
        <div style={{background:"linear-gradient(135deg,#1a2e1a,#2d4a2d)", padding:"20px 18px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.cream, fontWeight:300, marginBottom:4}}>
            La cucina sarda
          </div>
          <div style={{fontSize:10, color:"#6db86d", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12}}>Blu Zone · Patrimonio UNESCO · Genuinità</div>
          <p style={{fontSize:13, color:"rgba(245,240,232,0.8)", lineHeight:1.75, margin:"0 0 14px"}}>
            La Sardegna è una delle cinque <strong style={{color:c.sand}}>Blu Zone</strong> del mondo — luoghi dove si vive più a lungo. Il segreto? Una dieta millenaria: legumi, pane di semola, formaggi pecorino, olio extravergine e vino Cannonau, ricco di antiossidanti.
          </p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14}}>
            {[
              ["🍝","Malloreddus","Gnocchetti sardi al ragù di salsiccia"],
              ["🐚","Fregola","Pasta sferica con arselle o frutti di mare"],
              ["🐏","Porceddu","Maialino da latte arrosto allo spiedo"],
              ["🧀","Pecorino","Formaggio DOP stagionato, base della dieta"],
              ["🫙","Bottarga","Uova di muggine essiccate — il «caviale sardo»"],
              ["🍩","Seadas","Dolce fritto con formaggio e miele amaro"],
            ].map(([em,nome,desc])=>(
              <div key={nome} style={{background:"rgba(255,255,255,0.12)", borderRadius:12, padding:"10px 10px"}}>
                <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:4}}>
                  <span style={{fontSize:18}}>{em}</span>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:14, color:c.sand, fontWeight:400}}>{nome}</span>
                </div>
                <div style={{fontSize:10.5, color:"rgba(245,240,232,0.5)", lineHeight:1.4}}>{desc}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:11, color:"rgba(245,240,232,0.4)", lineHeight:1.6, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:12}}>
            💡 Nel weekend <strong style={{color:"rgba(245,240,232,0.7)"}}>prenotate sempre</strong>. Chiedete sempre il <strong style={{color:"rgba(245,240,232,0.7)"}}>vino della casa</strong> — spesso è Cannonau o Vermentino locale.
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Eventi({go}) {
  const oggi = new Date();
  const meseCorrente = oggi.getMonth() + 1;

  const tuttiEvs = [
    {mese:1, m:"Gennaio", evs:[
      {d:"12 gennaio",t:"🕯️ Festa di Santa Greca (Decimomannu)"},
      {d:"16-17 gennaio",t:"🔥 Fuochi di Sant'Antonio Abate — falò tradizionali in molti paesi del circondario"},
    ]},
    {mese:2, m:"Febbraio / Carnevale", evs:[
      {d:"Domenica e martedì di Carnevale",t:"🐴 Sa Sartiglia (Oristano) — la spettacolare giostra equestre, tra le più antiche del Mediterraneo",link:"https://www.sartiglia.info"},
      {d:"Settimana di Carnevale",t:"🎭 Carnevale di Cagliari — sfilate e la tradizionale Ratantira"},
    ]},
    {mese:3, m:"Marzo / Aprile — Pasqua", evs:[
      {d:"Settimana Santa",t:"⛪ Riti della Settimana Santa (Cagliari e Iglesias) — processioni di origine spagnola tra le più suggestive d'Italia"},
    ]},
    {mese:5, m:"Maggio", evs:[
      {d:"1–4 maggio",t:"🎖️ Festa di Sant'Efisio (Cagliari) — processione ininterrotta dal 1657",link:"https://www.festadisantefisio.com"},
      {d:"Un weekend di maggio",t:"🏛️ Monumenti Aperti (Cagliari) — centinaia di siti normalmente chiusi, visitabili gratis",link:"https://monumentiaperti.com"},
      {d:"14 maggio",t:"🌸 Santa Giusta, patrona di Uta"},
      {d:"Primo sabato dopo il 14",t:"🌾 Sant'Isidoro (Uta) — festa agricola con trattori e gruppi folk"},
    ]},
    {mese:6, m:"Giugno", evs:[
      {d:"Inizio giugno",t:"🐟 Girotonno (Carloforte) — rassegna gastronomica internazionale del tonno rosso",link:"https://www.girotonno.it"},
    ]},
    {mese:7, m:"Estate (luglio/agosto)", evs:[
      {d:"Tutta l'estate",t:"🎶 Rassegne e concerti all'aperto a Cagliari — Anfiteatro Romano, Parco della Musica, Forte Village Arena"},
      {d:"Luglio / Agosto",t:"🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Coppa del Mondo di tuffi tra mare e miniere.",link:"https://maps.google.com/?q=Porto+Flavia+Nebida+Sardegna"},
    ]},
    {mese:8, m:"Agosto", evs:[
      {d:"13 agosto",t:"⚔️ Corteo Storico Medievale (Iglesias) — 700 figuranti"},
      {d:"15 agosto",t:"🕯️ Assunzione B.V. Maria + processione solenne (Uta)"},
    ]},
    {mese:9, m:"Settembre", evs:[
      {d:"5–9 settembre",t:"🌟 Festa di Santa Maria (Uta) — la più attesa! Concerti, fuochi d'artificio"},
      {d:"Fine settembre",t:"🎊 Festa di Santa Greca (Decimomannu)"},
      {d:"Da settembre a dicembre",t:"🍂 Autunno in Barbagia — i paesi del centro Sardegna aprono le cortes: artigianato e sapori (gita di un giorno)",link:"https://www.aspenuoro.it"},
    ]},
    {mese:11, m:"Novembre", evs:[
      {d:"Terza domenica",t:"🏃 Maratonina Città di Uta — 21 km, 10,5 km, family run 4 km · ore 10:00 da Via Stazione",link:"https://maratoninadiuta.it"},
    ]},
    {mese:12, m:"Dicembre", evs:[
      {d:"Tutto il mese",t:"🎄 Mercatini di Natale a Cagliari — Piazza Yenne, Piazza Garibaldi e Corso Vittorio Emanuele"},
      {d:"13 dicembre",t:"🕯️ Santa Lucia (Uta)"},
    ]},
  ];

  const evs = [
    ...tuttiEvs.filter(e => e.mese >= meseCorrente).sort((a,b) => a.mese - b.mese),
    ...tuttiEvs.filter(e => e.mese < meseCorrente).sort((a,b) => a.mese - b.mese),
  ];

  const eventiFissi = [
    {mese:1,giorno:12,titolo:"Festa di Santa Greca",luogo:"Decimomannu",emoji:"🕯️"},
    {mese:5,giorno:1,titolo:"Festa di Sant'Efisio",luogo:"Cagliari",emoji:"🎖️"},
    {mese:5,giorno:14,titolo:"Santa Giusta — patrona di Uta",luogo:"Uta",emoji:"🌸"},
    {mese:8,giorno:13,titolo:"Corteo Medievale",luogo:"Iglesias",emoji:"⚔️"},
    {mese:8,giorno:15,titolo:"Assunzione B.V. Maria",luogo:"Uta",emoji:"🕯️"},
    {mese:9,giorno:5,titolo:"Festa di Santa Maria (inizio)",luogo:"Uta",emoji:"🌟"},
    {mese:9,giorno:9,titolo:"Festa di Santa Maria (fine)",luogo:"Uta",emoji:"🎆"},
    {mese:11,giorno:21,titolo:"Maratonina di Uta",luogo:"Uta",emoji:"🏃"},
    {mese:12,giorno:13,titolo:"Santa Lucia",luogo:"Uta",emoji:"🕯️"},
  ];
  const imminenti = eventiFissi.filter(e => {
    const dataEv = new Date(oggi.getFullYear(), e.mese - 1, e.giorno);
    if (dataEv < oggi) dataEv.setFullYear(oggi.getFullYear() + 1);
    const diff = (dataEv - oggi) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 7;
  });

  return <div style={s.app}>
    <PageHead title="Feste ed eventi" back={()=>go("home")} icon={<Ic.cal/>}/>
    <div style={s.content}>

      {imminenti.length > 0 && (
        <div style={{background:`linear-gradient(135deg,${c.hazel},${c.hazelL})`,borderRadius:18,padding:"18px 18px 14px",marginBottom:14}}>
          <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(61,31,16,0.6)",marginBottom:10}}>🔔 Questa settimana</div>
          {imminenti.map((e,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:i<imminenti.length-1?`1px solid rgba(61,31,16,0.15)`:"none"}}>
              <span style={{fontSize:22}}>{e.emoji}</span>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,color:c.warm,fontWeight:400}}>{e.titolo}</div>
                <div style={{fontSize:11,color:"rgba(61,31,16,0.6)",marginTop:2}}>{e.luogo}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Card>
        <CT text="🔍 Cosa c'è questa settimana?"/>
        <p style={{fontSize:12.5,color:c.mastic,lineHeight:1.6,marginBottom:6}}>Per concerti, sagre e spettacoli aggiornati in tempo reale:</p>
        <Row l="🌐 Sardegna Turismo — eventi" v="apri ›" link="https://www.sardegnaturismo.it/it/eventi"/>
        <Row l="🏙️ Cagliari Turismo" v="apri ›" link="https://www.cagliariturismo.it"/>
        <Row l="🏛️ Comune di Uta — news" v="apri ›" link="https://www.comune.uta.ca.it" last/>
      </Card>

      <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.mastic,margin:"4px 0 14px",textAlign:"center"}}>Calendario tradizioni locali</div>
      {evs.map(({m,evs:ee},idx)=>(
        <Card key={m} style={idx===0 ? {border:`1px solid ${c.hazel}50`} : {}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
            <div style={s.cardTitle}>{m}</div>
            {idx===0 && <span style={{fontSize:10,background:c.hazel,color:c.warm,borderRadius:10,padding:"2px 8px"}}>In corso</span>}
          </div>
          {ee.map((e,i)=>(
            <div key={i} style={i===ee.length-1?s.ruleLast:s.rule}><div style={s.dot}/>
              <span><strong>{e.d}</strong> — {e.link?<a href={e.link} target="_blank" rel="noreferrer" style={{color:c.hazel}}>{e.t}</a>:e.t}</span>
            </div>
          ))}
        </Card>
      ))}

      <div style={{...s.darkBox,textAlign:"center",marginTop:12}}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 Se il soggiorno coincide con la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sett.) o con <strong style={{color:c.sand}}>Sant'Efisio</strong> siete fortunatissimi!</p>
      </div>
    </div>
  </div>;
}

function Recensioni({go}) {
  return <div style={s.app}>
    <PageHead title="Le vostre recensioni" back={()=>go("home")} icon={<Ic.star/>}/>
    <div style={s.content}>
      <div style={s.hlBox}><div style={s.hlTitle}>La vostra opinione conta</div><p style={{fontSize:14,lineHeight:1.7,opacity:0.85,margin:0,color:c.warm}}>Speriamo che il soggiorno sia stato di vostro gradimento. Una recensione su Google ci aiuta a far conoscere Corte Pintadera!</p></div>
      <Card style={{textAlign:"center",padding:"28px 18px"}}>
        <div style={{fontSize:40,marginBottom:10}}>⭐⭐⭐⭐⭐</div>
        <p style={{fontFamily:"Georgia,serif",fontSize:20,marginBottom:8,color:c.warm}}>Lascia una recensione su Google</p>
        <p style={{fontSize:13,color:c.mastic,marginBottom:20,lineHeight:1.6}}>Bastano 2 minuti e ci aiuti enormemente.<br/>Grazie di cuore! 🙏</p>
        <a href="https://search.google.com/local/writereview?placeid=GOOGLE_PLACE_ID" target="_blank" rel="noreferrer" style={s.mapBtn}><span>⭐</span> Scrivi una recensione</a>
      </Card>
      <Card><CT text="Cosa ci ha colpito di più?"/>
        <Rule t="La pulizia e la cura degli spazi"/>
        <Rule t="Gli affreschi originali degli anni '50"/>
        <Rule t="La posizione e i servizi vicini"/>
        <Rule t="La veranda e il giardinetto privato"/>
        <Rule t="La disponibilità dei proprietari" last/>
      </Card>
    </div>
  </div>;
}

function Spesa({go}) {
  return <div style={s.app}>
    <PageHead title="Fare la spesa" back={()=>go("home")} icon={<Ic.bag/>}/>
    <div style={s.content}>
      <Card><CT text="🏠 A Uta — a piedi"/>
        <Row l="🛒 Conad — il più vicino" v="vicino ›" link="https://maps.google.com/?q=Conad+Uta+Cagliari"/>
        <Row l="🛒 COOP — Via Sa Mura 23 ⭐4.6" v="vicino ›" link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>Lun–Sab 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30</p>
        <Row l="🛒 ARD Discount — Vico I Decimo 21 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=ARD+Discount+Uta"/>
        <Row l="🛒 MD — Via P. Mascagni 1 ⭐4.5" v="vicino ›" link="https://maps.google.com/?q=MD+Supermercato+Uta" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>Lun–Dom 8:30–20:00 orario continuato</p>
      </Card>
      <Card><CT text="🚗 Circondario — ~15 min"/>
        <Row l="🛒 Iperpan — Decimomannu" v="~15 min ›" link="https://maps.google.com/?q=Iperpan+Decimomannu"/>
        <Row l="🛒 Superpan — Assemini ⭐4.1" v="~15 min ›" link="https://maps.google.com/?q=Superpan+Assemini" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>Lun–Sab 8:30–21:30 · Dom 8:30–14:00/16:30–21:00</p>
      </Card>
      <div style={s.darkBox}><p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>💡 La <strong style={{color:c.sand}}>COOP</strong> è la più completa. Il <strong style={{color:c.sand}}>MD</strong> è ideale per rifornimenti con l'orario continuato.</p></div>
    </div>
  </div>;
}

function FAQ({go}) {
  const rifiuti = [
    {n:"🟢 Umido",            g:"Giovedì · Venerdì · Sabato",   s:"sacchetto marrone"},
    {n:"🟡 Plastica",         g:"Giovedì · Sabato",             s:"sacchetto giallo"},
    {n:"⚫ Secco",             g:"Venerdì",                      s:"sacchetto nero"},
    {n:"🔵 Carta e Cartone",  g:"Martedì",                      s:"sacchetto blu"},
    {n:"♻️ Vetro e Alluminio",g:"Mercoledì — senza busta",      s:"mastello"},
  ];
  return <div style={s.app}>
    <PageHead title="Domande frequenti" back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.trash/>} text="Raccolta differenziata"/>
        <div style={{...s.darkBox,marginTop:4}}>
          {rifiuti.map(({n,g,s:sc},i)=>(
            <div key={n} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:i<rifiuti.length-1?`1px solid rgba(255,255,255,0.1)`:"none"}}>
              <div><div style={{fontSize:13,color:c.cream,fontWeight:400}}>{n}</div><div style={{fontSize:11,color:"rgba(245,240,232,0.55)",marginTop:2}}>{g}</div></div>
              <span style={{fontSize:11,color:c.hazel,background:"rgba(206,173,133,0.2)",borderRadius:8,padding:"3px 8px"}}>{sc}</span>
            </div>
          ))}
        </div>
        <div style={{...s.darkBox,display:"flex",gap:10,marginTop:10,marginBottom:0}}><span>⚠️</span><p style={{fontSize:12,color:"rgba(245,240,232,0.8)",lineHeight:1.6,margin:0}}><strong style={{color:c.sand}}>Esposizione:</strong> entro le 6:00 del mattino o la sera precedente dopo le 20:00. Buste nere vietate.<br/>Sito ufficiale: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></p></div>
        <a href="https://uta.cosir.org/wp-content/uploads/2026/03/20260320-Calendario-Uta-Domestiche.pdf" target="_blank" rel="noreferrer" style={s.pdfBtn}><Ic.docW/> Calendario COSIR (PDF ufficiale)</a>
      </Card>
      <Card><CT text="❄️ Climatizzatori"/><p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>Controllabili via app Wi-Fi o telecomando. In camera il telecomando è nel cassetto del comodino.</p></Card>
      <Card><CT text="🚨 Emergenze"/>
        <Row l="🚨 Emergenze generali" v="112"/>
        <Row l="🚑 Ambulanza" v="118"/>
        <Row l="🔥 Vigili del fuoco" v="115"/>
        <Row l="🩺 Guardia Medica Uta" v="070 609 2204" link="tel:+390706092204"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>Via Santa Giusta 85 · Feriali 20:00–08:00 · Festivi h24</p>
        <Row l="📞 COSIR rifiuti" v="070 68 44 15" last/>
      </Card>
      <Card><CT text="Serve altro aiuto?"/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,marginBottom:8}}>Siamo sempre disponibili!</p>
        <a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.warm}}>📱 Alessandro</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.hazel}}>328 469 9520</span></a>
        <a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.warm}}>📱 Roberta</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.hazel}}>347 320 8852</span></a>
      </Card>
    </div>
  </div>;
}

// ── PAGINE CATEGORIA DA SCOPRIRE ─────────────────
const TABS_DATA = [
  {
    id:"vicino", label:"A due passi", emoji:"🌿",
    color:"#2d4a2d", accent:"#6db86d",
    tagline:"Tutto raggiungibile a piedi o in 15 minuti",
    data:[
      { title:"Chiesa romanica di Santa Maria", dist:"5 min", emoji:"⛪", mood:"Patrimonio del XII sec.", desc:"Pietra calcarea, volte basse e luce filtrata. Una delle chiese medievali più integre del Campidano — vale dieci minuti di sosta.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Santa_Maria_xtazex.jpg", link:"https://maps.google.com/?q=Chiesa+Santa+Maria+Uta"},
      { title:"Parco S'Ollivariu", dist:"5 min", emoji:"🌳", mood:"Mattinata tranquilla", desc:"Lecci, sentieri ombreggiati e silenzio. Il posto giusto per iniziare la giornata prima che il paese si svegli.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/parcom_uta_xnujth.jpg", link:"https://maps.google.com/?q=Parco+S+Ollivariu+Uta"},
      { title:"Cinema Vittoria", dist:"a piedi", emoji:"🎬", mood:"Sala storica anni '50", desc:"Una piccola sala cinematografica storica nel cuore di Uta. Programmazione mista, atmosfera d'altri tempi. Un'esperienza autentica e rara.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/cinema_vittoria_mgdibo.jpg", link:"https://maps.google.com/?q=Cinema+Vittoria+Uta+Sardegna"},
      { title:"Laguna di Santa Gilla — uccelli migratori", dist:"10 min", emoji:"🦩", mood:"Spettacolo naturale gratuito", desc:"Laguna costiera dove svernano fenicotteri rosa, aironi, cormorani e migliaia di uccelli migratori. Non serve una riserva — basta affacciarsi dalla strada panoramica.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/santa_gilla_hnx9nk.jpg", link:"https://maps.google.com/?q=Laguna+Santa+Gilla+Cagliari"},
      { title:"Saline di Conti Vecchi", dist:"10 min", emoji:"🧂", mood:"Foto imperdibili", desc:"Ex saline industriali con vasche che cambiano colore dal bianco candido al rosa acceso. Un paesaggio surreale e fotogenico a due passi.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744896/conti_vecchi_xdy4by.jpg", link:"https://maps.google.com/?q=Saline+Conti+Vecchi+Assemini"},
      { title:"Oasi del Cervo e della Luna — Monte Arcosu", dist:"20 min", emoji:"🦌", mood:"Foresta primordiale · WWF", desc:"La più grande foresta mediterranea privata d'Europa, gestita dal WWF. Sede del rarissimo Cervo sardo. All'interno si trova La Locanda dei Buoni e Cattivi: cucina sarda autentica nel bosco.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747199/wwf_xq90yh.webp", link:"https://maps.google.com/?q=Oasi+WWF+Monte+Arcosu+Uta+Sardegna"},
      { title:"Parco Naturale di Gutturu Mannu", dist:"25 min", emoji:"🏞️", mood:"Wilderness del Sulcis", desc:"Uno dei parchi più estesi e meno frequentati della Sardegna. Boschi di lecci, torrenti, fauna selvatica. Quasi sconosciuto ai turisti.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/gutturu_mannu_bomtbd.jpg", link:"https://maps.google.com/?q=Gutturu+Mannu+Sardegna"},
    ]
  },
  {
    id:"cagliari", label:"Cagliari", emoji:"🏙️",
    color:"#1e2d40", accent:"#6aaee0",
    tagline:"Il capoluogo in 20 minuti — mare, storia, vita",
    data:[
      { title:"Poetto — 11 km di sabbia fine", dist:"15 min", emoji:"🏖️", mood:"Mare & relax", desc:"La spiaggia urbana più lunga della Sardegna. D'estate chioschi e movida, in primavera solo vento e orizzonte. Entrambi validi.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/poetto_hefkna.jpg", link:"https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"},
      { title:"Sella del Diavolo", dist:"20 min", emoji:"🥾", mood:"Tramonto da ricordare", desc:"Il promontorio tra Poetto e Calamosca. Il sentiero sale tra mirto e lentisco: in cima, il Golfo di Cagliari si apre tutto insieme.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/sella_del_diavolo_xmwacr.jpg", link:"https://maps.google.com/?q=Sella+del+Diavolo+Cagliari"},
      { title:"Molentargius — fenicotteri & bici fino al Poetto", dist:"15 min", emoji:"🦩", mood:"Esperienza unica da non perdere", desc:"Colonie di fenicotteri rosa che nidificano tutto l'anno. Il percorso in bici attraverso le saline fino al Poetto è indimenticabile. Noleggio bici all'ingresso del parco.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/Molentargius_tl1ctr.jpg", link:"https://maps.google.com/?q=Parco+Molentargius+Cagliari"},
      { title:"Parco di Monte Claro", dist:"20 min", emoji:"🌳", mood:"Verde nel cuore di Cagliari", desc:"Il grande parco storico di Cagliari con villa ottocentesca, laghetto e alberi centenari. Perfetto per una mattinata rilassante.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/monte_claro_syefhj.jpg", link:"https://maps.google.com/?q=Parco+Monte+Claro+Cagliari"},
      { title:"Marina, Castello & Su Siccu", dist:"20 min", emoji:"🏙️", mood:"Aperitivo & storia", desc:"Il quartiere Marina per i tapas sardi; Castello per i panorami sul golfo; Su Siccu per una serata sul lungomare.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744881/cagliari_vqtn9u.jpg", link:"https://maps.google.com/?q=Cagliari+centro+storico"},
      { title:"Mercato di San Benedetto", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/San_benedetto_gwtodd.jpg", dist:"20 min", emoji:"🐟", mood:"Esperienza autentica", desc:"Uno dei mercati coperti più grandi d'Europa. ⚠️ La sede storica è al momento chiusa per ristrutturazione: i banchi sono trasferiti nella struttura temporanea in Piazza Nazzari, a pochi passi. Il piano del pesce resta uno spettacolo — andate la mattina.", link:"https://maps.google.com/?q=Mercato+San+Benedetto+Cagliari"},
    ]
  },
  {
    id:"cultura", label:"Cultura & Storia", emoji:"🏛️",
    color:"#3a2510", accent:"#d4845f",
    tagline:"Romani, aragonesi, artigiani e minatori",
    data:[
      { title:"San Sperate — Pinuccio Sciola", dist:"15 min", emoji:"🎨", mood:"Da non perdere", desc:"Il paese museo: ogni vicolo è una galleria. Le sculture sonore di Sciola — pietre che suonano al vento — sono un'esperienza unica al mondo.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/Pinuccio_sciola_lj3opa.jpg", link:"https://maps.google.com/?q=Murales+San+Sperate+Sardegna"},
      { title:"Scavi di Nora", dist:"25 min", emoji:"🏛️", mood:"2.800 anni di storia", desc:"Teatro romano, terme puniche, mosaici affacciati sul mare. Una delle città antiche più scenografiche d'Italia.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/nora_ertuqj.jpg", link:"https://maps.google.com/?q=Nora+sito+romano+Pula"},
      { title:"Su Nuraxi di Barumini — UNESCO", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/su_nuraxi_xaetjk.webp", dist:"50 min", emoji:"🗿", mood:"Patrimonio dell'umanità", desc:"L'unico sito UNESCO della Sardegna: il villaggio nuragico più importante dell'isola, con la torre centrale del 1500 a.C. Visite guidate ogni 30 minuti. Imperdibile.", link:"https://maps.google.com/?q=Su+Nuraxi+Barumini"},
      { title:"Grotte Is Zuddas", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Grotte_is_zuddas_mdgf28.jpg", dist:"50 min", emoji:"💎", mood:"Meraviglia sotterranea", desc:"A Santadi, grotte con rarissime aragoniti eccentriche che sfidano la gravità. Visita guidata di ~1 ora a 16° costanti — perfetta anche nelle giornate più calde.", link:"https://maps.google.com/?q=Grotte+Is+Zuddas+Santadi"},
      { title:"Villa d'Orri", dist:"25 min", emoji:"🏰", mood:"Eleganza ottocentesca", desc:"Dimora nobiliare immersa in un parco di lecci centenari. Architettura neoclassica e atmosfera sospesa nel tempo.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Villa_d_orri_taitht.avif", link:"https://maps.google.com/?q=Villa+d+Orri+Sarroch"},
      { title:"Miniere & Geoparco di Iglesias", dist:"50 min", emoji:"⛏️", mood:"Patrimonio UNESCO", desc:"Gallerie, laverie e paesaggi industriali trasformati in musei. Il Museo del Carbone di Serbariu è il punto di partenza ideale.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/geoparco_etvg6s.jpg", link:"https://maps.google.com/?q=Miniere+Iglesias+Sardegna"},
    ]
  },
  {
    id:"natura", label:"Natura & Sapori", emoji:"🌊",
    color:"#0e2a35", accent:"#4ab8c8",
    tagline:"Spiagge, cammini, vini e isole",
    data:[
      { title:"Cantine Argiolas, Mesa, Audarya", dist:"20–40 min", emoji:"🍷", mood:"Degustazione", desc:"Vermentino, Cannonau, Carignano. Le cantine del Campidano aprono le porte per visite e degustazioni in paesaggi da cartolina.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/cantine_n27jpi.jpg", link:"https://maps.google.com/?q=Cantine+Argiolas+Serdiana"},
      { title:"Cammini — Sant'Efisio, 100 Torri, Santa Barbara", dist:"vari", emoji:"🚶", mood:"Pellegrinaggio & trekking", desc:"Antichi percorsi a piedi. Il Cammino dei 100 Torri costiero è tra i più scenografici; Sant'Efisio il più spirituale.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/cammino_santa_barbara_jmtavj.jpg", link:"https://maps.google.com/?q=Cammino+Sant+Efisio+Sardegna"},
      { title:"Chia — dune e torri", dist:"45 min", emoji:"🏖️", mood:"Spiaggia da sogno", desc:"Acqua caraibica, dune di sabbia bianca e torre aragonese. Tra le spiagge più belle d'Europa. Arrivate presto.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/chia_a9gzlt.jpg", link:"https://maps.google.com/?q=Spiaggia+Chia+Sardegna"},
      { title:"Spiaggia di Tuerredda", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Tuerredda_ealwbe.webp", dist:"55 min", emoji:"🏝️", mood:"Caraibi sardi", desc:"Sabbia bianchissima e acqua turchese poco profonda, con l'isolotto raggiungibile a nuoto. Tra le spiagge più belle d'Italia. In alta stagione arrivate entro le 9:30.", link:"https://maps.google.com/?q=Spiaggia+Tuerredda"},
      { title:"Belvedere Nebida & Pan di Zucchero", dist:"1h 10min", emoji:"🗼", mood:"Panorama mozzafiato", desc:"Lo scoglio più alto del Mediterraneo. Al tramonto la luce arancione sulla roccia bianca è inarrivabile.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/belvedere-di-nebida_phr0o8.webp", link:"https://maps.google.com/?q=Belvedere+Nebida+Sardegna"},
      { title:"Spiaggia di Scivu & Torre dei Corsari", dist:"1h 10min", emoji:"🏖️", mood:"Selvaggia e incontaminata", desc:"Due spiagge rimaste intatte, senza strade asfaltate. Sabbia finissima e mare verde smeraldo tra le dune del Sulcis.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747342/scivu_iqjmjj.jpg", link:"https://maps.google.com/?q=Spiaggia+Scivu+Sardegna"},
      { title:"Dune di Piscinas", dist:"1h 20min", emoji:"🏜️", mood:"Il deserto d'Europa", desc:"Le dune più alte d'Europa affacciate su un mare spettacolare. Un paesaggio da Sahara nel cuore della Sardegna.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/piscinas_srxqdj.webp", link:"https://maps.google.com/?q=Dune+di+Piscinas+Sardegna"},
      { title:"Golfo di Orosei & Cala Goloritzé", dist:"~3h", emoji:"🌊", mood:"Top 10 spiagge al mondo", desc:"Cala Goloritzé, Cala Luna, Cala Mariolu — le calette compaiono ogni anno tra le spiagge più belle del mondo.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/goloritze_gkcup9.jpg", link:"https://maps.google.com/?q=Golfo+di+Orosei+Sardegna"},
      { title:"Arcipelago della Maddalena", dist:"~3h", emoji:"⛵", mood:"Parco Nazionale marino", desc:"Sette isole, acque trasparenti e graniti rosa. Traghetto da Palau. Una delle aree marine protette più belle del Mediterraneo.", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/maddalena_mgxpth.jpg", link:"https://maps.google.com/?q=Arcipelago+della+Maddalena+Sardegna"},
    ]
  },
];

function EsploraCategoria({tabId, go}) {
  const t = TABS_DATA.find(t=>t.id===tabId);
  if (!t) return null;
  return (
    <div style={s.app}>
      {/* Header con colore della categoria */}
      <div style={{background:`linear-gradient(160deg, ${t.color}, ${t.color}dd)`,
        padding:"50px 24px 28px", borderRadius:"0 0 24px 24px"}}>
        <button style={s.back} onClick={()=>go("esplorare")}>
          <Ic.back/> Da scoprire
        </button>
        <div style={{fontSize:36, marginBottom:8}}>{t.emoji}</div>
        <h2 style={{...s.pageTitle, color:"white"}}>{t.label}</h2>
        <div style={{fontSize:12, color:t.accent, marginTop:6, letterSpacing:"0.5px"}}>{t.tagline}</div>
        <div style={{fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:4}}>
          {t.data.length} esperienze · tocca per aprire in Maps
        </div>
      </div>

      <div style={s.content}>
        {t.data.map((p,i)=>(
          <a key={i} href={p.link} target="_blank" rel="noreferrer" style={{
            display:"block", textDecoration:"none",
            background:c.white, borderRadius:18, marginBottom:12,
            border:`1px solid ${c.hazel}20`, overflow:"hidden",
            boxShadow:"0 2px 8px rgba(61,31,16,0.07)",
            transition:"transform .15s, box-shadow .15s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow=`0 6px 16px rgba(61,31,16,0.14)`;}}
            onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="0 2px 8px rgba(61,31,16,0.07)";}}>
            {p.photo && (
              <div style={{height:160, overflow:"hidden", background:`linear-gradient(135deg,${t.color},${t.accent}40)`}}>
                <img src={p.photo} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block",opacity:0,transition:"opacity .3s"}}
                  onLoad={e=>e.target.style.opacity="1"}
                  onError={e=>e.target.style.display="none"}/>
              </div>
            )}
            <div style={{height:3, background:`linear-gradient(90deg,${t.color},${t.accent})`}}/>
            <div style={{padding:"12px 14px"}}>
              <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:6}}>
                <div style={{display:"flex",alignItems:"center",gap:9,flex:1,minWidth:0}}>
                  <span style={{fontSize:22,flexShrink:0}}>{p.emoji}</span>
                  <div style={{minWidth:0}}>
                    <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,fontWeight:400,color:c.warm,lineHeight:1.25}}>{p.title}</div>
                    <div style={{fontSize:9,color:t.accent,marginTop:3,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase"}}>{p.mood}</div>
                  </div>
                </div>
                <span style={{fontSize:10,color:c.hazel,background:`${c.hazel}15`,borderRadius:20,padding:"3px 9px",flexShrink:0,marginLeft:8,whiteSpace:"nowrap"}}>{p.dist}</span>
              </div>
              <p style={{fontSize:12.5,color:c.mastic,lineHeight:1.7,margin:0,paddingLeft:31}}>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────
export default function CortePintadera() {
  const getHash = () => (window.location.hash || "#home").slice(1);
  const [screen, setScreen] = useState(getHash());
  const go = (id) => { window.location.hash = id; };
  useEffect(() => {
    const onHash = () => { setScreen(getHash()); window.scrollTo && window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const screens = {
    home: <PH go={go}/>, benvenuto:<Benvenuto go={go}/>, checkin:<Checkin go={go}/>,
    wifi:<Wifi go={go}/>, appartamento:<Appartamento go={go}/>, regole:<Regole go={go}/>,
    posizione:<Posizione go={go}/>, esplorare:<Esplorare go={go}/>, ristoranti:<Ristoranti go={go}/>,
    eventi:<Eventi go={go}/>, recensioni:<Recensioni go={go}/>, spesa:<Spesa go={go}/>,
    servizi:<Servizi go={go}/>, faq:<FAQ go={go}/>,
    esplorare_vicino:   <EsploraCategoria tabId="vicino"   go={go}/>,
    esplorare_cagliari: <EsploraCategoria tabId="cagliari" go={go}/>,
    esplorare_cultura:  <EsploraCategoria tabId="cultura"  go={go}/>,
    esplorare_natura:   <EsploraCategoria tabId="natura"   go={go}/>,
  };
  return screens[screen] || <PH go={go}/>;
}
