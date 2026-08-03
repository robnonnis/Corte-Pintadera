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
  storia:   ()=><img src="https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_80/v1781182383/corte_pintadera_logo_clean_mqshm5.png" style={{width:28,height:28,objectFit:"contain"}} alt="Corte Pintadera"/>,
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

// ══════════════════════════════════════════════
// ── SISTEMA MULTILINGUE ───────────────────────
// ══════════════════════════════════════════════
const LANGS = [
  { code:"it", flag:"🇮🇹", name:"Italiano" },
  { code:"en", flag:"🇬🇧", name:"English" },
  { code:"es", flag:"🇪🇸", name:"Español" },
  { code:"fr", flag:"🇫🇷", name:"Français" },
  { code:"de", flag:"🇩🇪", name:"Deutsch" },
  { code:"pt", flag:"🇵🇹", name:"Português" },
];

// Costruttore compatto per campi multilingue nei dati condivisi
const M = (it,en,es,fr,de,pt) => ({it,en,es,fr,de,pt});

// Lingua attiva (impostata dal componente principale prima del render)
let LANG = "it";
// Dizionario UI attivo (punta a T[lang], impostato dal main prima del render)
let L;
// Traduce un campo M(); le stringhe semplici passano invariate
const tx = (v) => (v && typeof v === "object" && v.it !== undefined) ? (v[LANG] ?? v.it) : v;

function LangSelector({lang, setLang}) {
  return (
    <div style={{display:"flex", justifyContent:"center", gap:6, marginTop:14, flexWrap:"wrap"}}>
      {LANGS.map(({code,flag,name})=>(
        <button key={code} onClick={()=>setLang(code)} aria-label={name} title={name} style={{
          background: lang===code ? "rgba(206,173,133,0.28)" : "rgba(255,255,255,0.06)",
          border: lang===code ? "1px solid rgba(206,173,133,0.7)" : "1px solid rgba(255,255,255,0.14)",
          borderRadius:10, padding:"5px 9px", fontSize:17, lineHeight:1, cursor:"pointer",
          opacity: lang===code ? 1 : 0.65, transition:"all .15s",
        }}>{flag}</button>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════
// ── DIZIONARIO TRADUZIONI ─────────────────────
// ══════════════════════════════════════════════
const T = {
// ─────────────────────────── ITALIANO ─────────
it: {
  home:{ arrivo:"All'arrivo", guida:"La guida completa",
    benv:"Benvenuto", benvSub:"Informazioni & contatti",
    checkin:"Check-in / out", checkinSub:"Orari & istruzioni",
    app:"L'appartamento", wifi:"Wi-Fi", regole:"Regole casa", esplora:"Da scoprire",
    risto:"Ristoranti", eventi:"Eventi", spesa:"Spesa", servizi:"Servizi utili",
    storia:"La nostra storia", faq:"FAQ", rec:"Recensioni & Social" },
  back:{ home:"Home", esplora:"Da scoprire" },
  benv:{ title:"Benvenuti a Corte Pintadera", felici:"Siamo felici di ospitarvi",
    intro:<>Questa guida vi aiuterà a vivere al meglio il soggiorno.<br/>Per qualsiasi necessità non esitate a contattarci.</>,
    dove:"Dove siamo", maps:"Apri in Google Maps", come:"Come arrivare",
    volo:"In volo o in nave", aeroporto:"Aeroporto di Cagliari-Elmas", porto:"Porto di Cagliari",
    citta:"Da altre città", pubblico:"Trasporto pubblico",
    treno:"Treno · Trenitalia", trenoSub:"Stazione Uta-Villaspeciosa ~5 min · 06:27–20:53",
    bus:"Bus · ARST", busSub:"Linea 125 Uta–Cagliari · Prima 05:40 · Ultima ~22:00",
    ctm:"Bus urbano · CTM", ctmSub:"Rete metropolitana di Cagliari",
    qui:"Siamo qui per voi", propr:"Proprietario · disponibile sempre", email:"Email", social:"Seguici sui social" },
  checkin:{ title:"Check-in / out", arrivo:"Arrivo", dalle:"dalle ore", partenza:"Partenza", entro:"entro le ore",
    arrT:"🧳 All'arrivo",
    arr:["Vi accoglieremo personalmente — o vi lasciamo le istruzioni per il self check-in",
      "Parcheggio libero in strada davanti all'ingresso",
      "Trovate lenzuola, asciugamani e kit di benvenuto già pronti"],
    parT:"👋 Alla partenza",
    par:["Lasciate le chiavi sul tavolo in cucina",
      "Buttate i rifiuti seguendo la raccolta differenziata (vedi FAQ)",
      "Se avete bisogno di conservare i bagagli qualche ora, chiedeteci!"],
    pkT:"🚗 Parcheggio & accesso",
    pk:["Parcheggio libero e gratuito in Via Cimitero",
      "Il cancello si apre con il telecomando che trovate all'interno",
      "Citofono disponibile se necessario"] },
  wifi:{ title:"Wi-Fi", fibra:"Fibra ottica — disponibile ovunque",
    cop:"Copertura in tutto l'appartamento e in veranda.", rete:"Nome rete", pass:"Password",
    prob:"Problemi di connessione?",
    probTxt:"Spegnete e riaccendete il router (in cucina). Se il problema persiste, contattateci." },
  app:{ title:"L'Appartamento", sub:"50 m² interno · 40 m² veranda",
    interno:"Interno", veranda:"Veranda", clima:"Clima Wi-Fi",
    cucinaT:"🍳 Cucina",
    cucina:["Piano cottura a induzione","Forno elettrico","Lavastoviglie","Frigorifero","Climatizzatore Wi-Fi","Tavolo allungabile + 4 sedie","Divano letto 3 posti","Vetrata su veranda"],
    affC:<><strong>Affresco anni '50</strong> — motivi floreali rosa dipinti a mano da artigiani sardi</>,
    cameraT:"🛏️ Camera da letto",
    camera:["Letto matrimoniale con contenitore","Armadio ~4 metri","Settimino","Comodini con applique su entrambi i lati","Condizionatore Wi-Fi"],
    affK:<><strong>Affresco anni '50</strong> — geometrie dorate, unico nel suo genere</>,
    bagnoT:"🚿 Bagno",
    bagno:["Box doccia scorrevole 80×100 cm","Colonna doccia con getti massaggio","Mobile lavandino con cassettoni","Specchio con illuminazione LED","Ventilazione automatica"],
    verT:"🌿 Veranda e giardino",
    verTxt:"Veranda coperta ~40 m² con accesso diretto dalla vetrata della cucina. Giardinetto privato — ideale per colazioni all'aperto e aperitivi al tramonto.",
    tags:["Wi-Fi fibra","2 Climatizzatori","Parcheggio libero","Giardino privato","Lavastoviglie","Forno"],
    ladiriT:<>Costruita in <em>ladiri</em></>,
    ladiriTxt:<>La casa è edificata con i tradizionali mattoni di argilla cruda essiccata al sole, tipici dell'architettura rurale del Campidano sardo. I <strong>ladiri</strong> garantiscono un'eccellente coibentazione naturale: fresco d'estate, caldo d'inverno. Un patrimonio costruttivo millenario, autentico e raro.</> },
  regole:{ title:"Regole casa", genT:"📋 Generali",
    gen:[<span>Check-in dalle <strong>17:00</strong> — Check-out entro <strong>09:00</strong></span>,
      "Non sono ammessi animali domestici","Vietato fumare all'interno",
      <span>Silenzio dalle <strong>23:00</strong> alle <strong>08:00</strong></span>,
      "Numero massimo ospiti come da prenotazione"],
    pulT:"🧹 Pulizia e cura",
    pul:["Lasciare la casa in ordine alla partenza","Differenziare i rifiuti (istruzioni in FAQ)","Segnalare eventuali danni prima del check-out",
      "Svuotare tutti i cestini di cucina e bagno e portare i sacchetti nei cestini della differenziata nel sottoscala esterno",
      <span>Usare sempre il cestino del bagno per carta igienica, cotton fioc, assorbenti ecc. — <strong>non buttare nulla nel WC</strong></span>],
    sicT:"🔒 Sicurezza",
    sic:["Chiudere sempre a chiave uscendo","Non lasciare rubinetti aperti o fornelli accesi",
      <span>Emergenze: <strong>112</strong></span>] },
  pos:{ title:"Come arrivare", ind:"Indirizzo", maps:"Apri in Google Maps",
    mezziT:"🚌 Mezzi pubblici", arst:"ARST Linea 125 (Uta–Cagliari)", arstSub:"Prima 05:40 · Ultima ~22:00 · tutti i giorni",
    treno:"🚆 Treno Uta-Villaspeciosa", trenoSub:"06:27–20:53 · ~22 min per Cagliari",
    autoT:"🚗 In auto — distanze", aeroporto:"✈️ Aeroporto Cagliari", poetto:"🏖️ Poetto (mare)",
    cagliariC:"🏙️ Cagliari centro", macch:"🏭 Zona ind. Macchiareddu", oasi:"🦜 Oasi WWF Santa Gilla", porto:"⛴️ Porto di Cagliari" },
  esplora:{ title:"Da scoprire", meteoLbl:"📍 Uta · Meteo in tempo reale", load:"⏳ Caricamento meteo…",
    perc:"Percepiti", noMeteo:"Meteo non disponibile", retry:"Riprova",
    ctaSun:<>Con questo sole,<br/><em style={{fontStyle:"italic",color:c.hazel}}>cosa ti va di scoprire?</em></>,
    ctaRain:<>Giornata di pioggia?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Cultura & storia ti aspettano.</em></>,
    ctaOther:<>Con questo clima,<br/><em style={{fontStyle:"italic",color:c.hazel}}>cosa ti va di scoprire?</em></>,
    ctaNone:<>Scegli la tua<br/><em style={{fontStyle:"italic",color:c.hazel}}>prossima avventura.</em></>,
    scegli:"Scegli una categoria ↓", esp:"esperienze", tocca:"tocca per aprire in Maps",
    days:["Oggi","Domani","Dopodomani"],
    wmo:["Soleggiato","Poco nuvoloso","Coperto","Nebbia","Pioviggine","Pioggia","Neve","Rovesci","Temporale"] },
  servizi:{ title:"Servizi utili", saluteT:"💊 Salute",
    guardia:"🩺 Guardia Medica — Via S. Giusta 85", guardiaSub:"Feriali 20:00–08:00 · Festivi h24",
    vicino:"vicino", lavT:"🧺 Lavanderie", lavGettoni:"Lavanderia a gettoni — Via Umberto I 33, Uta",
    lavSub:"Aperta tutti i giorni · lun–sab 06:30 · dom 07:00 · tel. 340 268 7577 · anche ritiro a domicilio",
    atmT:"🏦 Bancomat ATM", atmSub:"Filiale con ATM · tel. 070 969008", postamatSub:"Sportello ATM h24 · 7 giorni su 7",
    altriT:"🏛️ Altri servizi", tabacch:"🚬 Tabaccheria Coccinella ⭐4.9", comune:"🏛️ Comune di Uta",
    traspT:"🚌 Trasporti", orariV:"orari",
    emg:<>🚨 Emergenze: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Ambulanza: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Vigili del fuoco: <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Dove mangiare", top:"⭐ da non perdere",
    sec1:"A Uta — a piedi", sec2:"Bar", sec3:"Circondario — 10/20 min", sec4:"Cagliari — pesce fresco ~20 min",
    sec5:"Cagliari — i grandi classici", sec6:"Cucina sarda tipica",
    consigliato:"CONSIGLIATO", vicino:"vicino",
    sardaT:"La cucina sarda", sardaSub:"Blu Zone · Patrimonio UNESCO · Genuinità",
    sardaTxt:<>La Sardegna è una delle cinque <strong style={{color:c.sand}}>Blu Zone</strong> del mondo — luoghi dove si vive più a lungo. Il segreto? Una dieta millenaria: legumi, pane di semola, formaggi pecorino, olio extravergine e vino Cannonau, ricco di antiossidanti.</>,
    weekend:<>💡 Nel weekend <strong style={{color:"rgba(245,240,232,0.7)"}}>prenotate sempre</strong>. Chiedete sempre il <strong style={{color:"rgba(245,240,232,0.7)"}}>vino della casa</strong> — spesso è Cannonau o Vermentino locale.</> },
  eventi:{ title:"Feste ed eventi", sett:"🔔 Questa settimana", cosaT:"🔍 Cosa c'è questa settimana?",
    perConc:"Per concerti, sagre e spettacoli aggiornati in tempo reale:", apriV:"apri",
    r1:"🌐 Sardegna Turismo — eventi", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Comune di Uta — news",
    cal:"Calendario tradizioni locali", inCorso:"In corso",
    tip:<>💡 Se il soggiorno coincide con la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sett.) o con <strong style={{color:c.sand}}>Sant'Efisio</strong> siete fortunatissimi!</> },
  rec:{ title:"Recensioni & Social",
    grazie:<>Grazie per aver scelto<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em></>,
    txt:"Una recensione o un tag sui social ci aiuta enormemente a far conoscere questo posto. Bastano due minuti — e per noi vale tantissimo.",
    lascia:"Lascia una recensione", googleSub:"Scrivi una recensione su Google Maps",
    presto:"Presto", prestoSub:"Pagina in arrivo — presto disponibile", social:"Seguici sui social",
    bkEccez:"Eccezionale", bkSub:"1 recensione · Punteggio ospiti", bkLeggi:"Leggi le recensioni su Booking.com",
    bkCatT:"Punteggi per categoria", bkCat:["Host","Servizi","Pulizia","Comfort","Qualità-prezzo","Posizione"],
    foto:<>Hai scattato una foto?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>Taggaci e la condividiamo!</em></>,
    colpitoT:"Cosa ci ha colpito di più?",
    colpito:["La pulizia e la cura degli spazi","Gli affreschi originali degli anni '50","La posizione e i servizi vicini","La veranda e il giardinetto privato","La disponibilità dei proprietari"] },
  spesa:{ title:"Fare la spesa", utaT:"🏠 A Uta — a piedi", conad:"🛒 Conad — il più vicino",
    coopSub:"Lun–Sab 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30",
    mdSub:"Lun–Dom 8:30–20:00 orario continuato",
    circT:"🚗 Circondario — ~15 min", circSub:"Lun–Sab 8:30–21:30 · Dom 8:30–14:00/16:30–21:00", vicinoV:"vicino",
    tip:<>💡 La <strong style={{color:c.sand}}>COOP</strong> è la più completa. Il <strong style={{color:c.sand}}>MD</strong> è ideale per rifornimenti con l'orario continuato.</> },
  faq:{ title:"Domande frequenti", raccT:"Raccolta differenziata",
    raccTxt:"I giorni di raccolta per ogni tipo di rifiuto sono indicati nel calendario ufficiale COSIR, sempre aggiornato. Trovate i sacchetti in casa; il calendario è affisso anche in cucina.",
    esp:<><strong style={{color:c.sand}}>Esposizione:</strong> entro le 6:00 del mattino o la sera precedente dopo le 20:00. Buste nere vietate.<br/>Sito ufficiale: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Apri il calendario ufficiale COSIR", climT:"❄️ Climatizzatori",
    climTxt:"Controllabili via app Wi-Fi o telecomando. In camera il telecomando è nel cassetto del comodino.",
    emgT:"🚨 Emergenze", emgGen:"🚨 Emergenze generali", amb:"🚑 Ambulanza", vf:"🔥 Vigili del fuoco",
    guardia:"🩺 Guardia Medica Uta", guardiaSub:"Via Santa Giusta 85 · Feriali 20:00–08:00 · Festivi h24",
    cosir:"📞 COSIR rifiuti", aiutoT:"Serve altro aiuto?", disp:"Siamo sempre disponibili!" },
  storia:{ title:"La nostra storia",
    heroT:<>Una casa costruita<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>per durare nel tempo</em></>,
    origini:"Le origini",
    casaT:<>La casa di <em style={{fontStyle:"italic",color:c.hazel}}>Antonio e Maddalena</em></>,
    p1:<>Al centro di Uta, nel cuore del Campidano, si trovava una delle case più grandi del paese. Due piani, oltre 260 metri quadri, costruita in <strong>ladiri</strong> — i mattoni di argilla cruda e paglia impastata, la tecnica edilizia tradizionale che dà ai muri uno spessore e un calore che il cemento non ha mai saputo imitare. Attorno, un giardino a forma di U di quasi mille metri quadri.</>,
    p2:<>Era la casa di <strong>Antonio Lecca</strong> e <strong>Maddalena Carboni</strong>, che qui hanno cresciuto i loro due figli e visto nascere quattro nipoti. Tra questi, <strong>Alessandro</strong> è quello che l'ha vissuta di più: l'infanzia trascorsa in quel cortile, i pranzi in famiglia, i profumi della cucina con il soffitto affrescato a fiori.</>,
    p3:<>Al centro di tutto c'era <strong>Maddalena</strong>, conosciuta in tutto il paese come una cuoca straordinaria. Aveva un <strong>forno a legna</strong> tutto suo, dove ogni giorno sfornava pane e dolci che le sue mani sapevano rendere unici.</>,
    p4:<>In un angolo del giardino, ancora oggi, c'è la sua <strong>pianta di limoni</strong>. Ha più di quarant'anni. Non avevamo il cuore di toccarla.</>,
    quote:"\u201CI soffitti li hanno dipinti a mano negli anni '50 — fiori in cucina, geometrie dorate in camera. La pianta di limoni è ancora quella di allora. Non avevamo il cuore di toccare nulla.\u201D",
    pills:[{l:"Costruzione",v:"Muri in ladiri"},{l:"Superficie",v:"260 mq + giardino ~1.000 mq"},{l:"Famiglia",v:"2 figli, 4 nipoti"},{l:"Acquisto",v:"Alessandro e Roberta, 2022"}],
    restLbl:"Il restauro",
    restT:<>Rinnovare senza <em style={{fontStyle:"italic",color:c.hazel}}>cancellare nulla</em></>,
    r1:<>Nel 2022 Alessandro e Roberta acquistano la proprietà con un'idea precisa: preservare tutto ciò che la rende unica e ricavarne un luogo capace di accogliere. Il primo appartamento — circa 50 metri quadri con veranda coperta e giardinetto privato — viene ristrutturato senza toccare l'anima dell'edificio.</>,
    r2:<>I muri in ladiri sono rimasti. Gli affreschi anni '50 anche — i fiori rosa della cucina e le geometrie dorate della camera, dipinti da artigiani locali. Quello che è cambiato è il comfort: nuovi impianti, cucina attrezzata, bagno con colonna massaggio, fibra ottica, due climatizzatori Wi-Fi. Nei prossimi anni nasceranno altri due appartamenti e una sala eventi affacciata sul grande giardino.</>,
    simLbl:"Il simbolo",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>il marchio del popolo nuragico</em></>,
    s1:<><strong>Sa pintadera</strong> è un disco di terracotta o pietra con motivi geometrici incisi e un piccolo manico sul retro. Veniva usata come timbro: imprimeva il proprio segno sul pane rituale, sulla pelle, sull'argilla fresca. Ogni pintadera era diversa: era il marchio di una famiglia, il sigillo di un'identità.</>,
    s2:<>I ritrovamenti coprono tutta l'isola — da Su Nuraxi di Barumini al santuario di Santa Cristina, dalle tombe dei giganti ai pozzi sacri del Nuorese. Un alfabeto visivo che nessuno ha ancora saputo decifrare completamente.</>,
    arroda:"\u201CSa arroda de tempu\u201D — la ruota del tempo. Alcuni studiosi propongono che le geometrie incise codifichino un calendario astronomico: ciclo solare, lunare e venusiano in un unico strumento circolare.",
    appr:"Approfondisci: timbro per il pane o calendario astronomico?", apprSub:"Un articolo che esplora entrambe le ipotesi",
    cicli:[{e:"☀️",t:"Ciclo solare",d:"Solstizi ed equinozi — i quattro momenti cardinali dell'anno"},{e:"🌙",t:"Ciclo lunare",d:"Le tacche coincidono con i giorni del mese lunare"},{e:"⭐",t:"Ciclo di Venere",d:"I cerchi sincronizzano il ciclo venusiano di 8 anni"},{e:"🌾",t:"Calendario agropastorale",d:"Le feste legate alle stagioni e al raccolto"}],
    nomeLbl:"Il nome",
    nomeT:<>Perché abbiamo scelto <em style={{fontStyle:"italic",color:c.hazel}}>questo simbolo</em></>,
    n1:<>Una casa costruita in ladiri, con affreschi dipinti a mano, in un paese del Campidano dove quattro generazioni hanno lasciato il loro segno — meritava un nome che portasse lo stesso peso.</>,
    n2:<><strong>Corte Pintadera</strong> è il nome di questo posto. La corte è lo spazio condiviso attorno a cui tutto si organizza. La pintadera è il segno che lo distingue: antico, sardo, irripetibile.</>,
    closT:<>Una casa con <em style={{fontStyle:"italic",color:"#CEAD85"}}>il suo segno nel mondo</em></>,
    closSub:<>Muri in ladiri, soffitti dipinti a mano, un giardino che aspettava.<br/>Corte Pintadera porta tutto questo — e c'è ancora spazio per la tua storia.</> },
},
// ─────────────────────────── ENGLISH ──────────
en: {
  home:{ arrivo:"On arrival", guida:"The complete guide",
    benv:"Welcome", benvSub:"Info & contacts",
    checkin:"Check-in / out", checkinSub:"Times & instructions",
    app:"The apartment", wifi:"Wi-Fi", regole:"House rules", esplora:"Explore",
    risto:"Restaurants", eventi:"Events", spesa:"Groceries", servizi:"Useful services",
    storia:"Our story", faq:"FAQ", rec:"Reviews & Social" },
  back:{ home:"Home", esplora:"Explore" },
  benv:{ title:"Welcome to Corte Pintadera", felici:"We are delighted to host you",
    intro:<>This guide will help you make the most of your stay.<br/>For anything you need, don't hesitate to contact us.</>,
    dove:"Where we are", maps:"Open in Google Maps", come:"How to get here",
    volo:"By plane or ferry", aeroporto:"Cagliari-Elmas Airport", porto:"Port of Cagliari",
    citta:"From other cities", pubblico:"Public transport",
    treno:"Train · Trenitalia", trenoSub:"Uta-Villaspeciosa station ~5 min · 06:27–20:53",
    bus:"Bus · ARST", busSub:"Line 125 Uta–Cagliari · First 05:40 · Last ~22:00",
    ctm:"City bus · CTM", ctmSub:"Cagliari metropolitan network",
    qui:"We're here for you", propr:"Owner · always available", email:"Email", social:"Follow us on social media" },
  checkin:{ title:"Check-in / out", arrivo:"Arrival", dalle:"from", partenza:"Departure", entro:"by",
    arrT:"🧳 On arrival",
    arr:["We'll welcome you in person — or leave you instructions for self check-in",
      "Free street parking right outside the entrance",
      "Sheets, towels and a welcome kit will be ready for you"],
    parT:"👋 On departure",
    par:["Leave the keys on the kitchen table",
      "Dispose of rubbish following the recycling schedule (see FAQ)",
      "Need to store your luggage for a few hours? Just ask!"],
    pkT:"🚗 Parking & access",
    pk:["Free parking on Via Cimitero",
      "The gate opens with the remote control you'll find inside",
      "Intercom available if needed"] },
  wifi:{ title:"Wi-Fi", fibra:"Fibre optic — available everywhere",
    cop:"Coverage throughout the apartment and on the veranda.", rete:"Network name", pass:"Password",
    prob:"Connection problems?",
    probTxt:"Turn the router off and on again (in the kitchen). If the problem persists, contact us." },
  app:{ title:"The Apartment", sub:"50 m² indoors · 40 m² veranda",
    interno:"Indoors", veranda:"Veranda", clima:"Wi-Fi A/C",
    cucinaT:"🍳 Kitchen",
    cucina:["Induction hob","Electric oven","Dishwasher","Fridge","Wi-Fi air conditioner","Extendable table + 4 chairs","3-seater sofa bed","Glass door onto the veranda"],
    affC:<><strong>1950s fresco</strong> — pink floral motifs hand-painted by Sardinian artisans</>,
    cameraT:"🛏️ Bedroom",
    camera:["Double bed with storage","~4-metre wardrobe","Chest of drawers","Bedside tables with wall lights on both sides","Wi-Fi air conditioner"],
    affK:<><strong>1950s fresco</strong> — golden geometric patterns, one of a kind</>,
    bagnoT:"🚿 Bathroom",
    bagno:["Sliding shower enclosure 80×100 cm","Shower column with massage jets","Vanity unit with drawers","Mirror with LED lighting","Automatic ventilation"],
    verT:"🌿 Veranda and garden",
    verTxt:"Covered veranda of ~40 m² with direct access from the kitchen's glass door. Private garden — perfect for outdoor breakfasts and sunset aperitifs.",
    tags:["Fibre Wi-Fi","2 Air conditioners","Free parking","Private garden","Dishwasher","Oven"],
    ladiriT:<>Built in <em>ladiri</em></>,
    ladiriTxt:<>The house is built with traditional sun-dried raw clay bricks, typical of the rural architecture of Sardinia's Campidano. <strong>Ladiri</strong> provide excellent natural insulation: cool in summer, warm in winter. A millennia-old building heritage, authentic and rare.</> },
  regole:{ title:"House rules", genT:"📋 General",
    gen:[<span>Check-in from <strong>5:00 pm</strong> — Check-out by <strong>9:00 am</strong></span>,
      "Pets are not allowed","No smoking indoors",
      <span>Quiet hours from <strong>11:00 pm</strong> to <strong>8:00 am</strong></span>,
      "Maximum number of guests as per booking"],
    pulT:"🧹 Cleaning and care",
    pul:["Leave the house tidy on departure","Sort your rubbish for recycling (instructions in FAQ)","Report any damage before check-out",
      "Empty all kitchen and bathroom bins and take the bags to the recycling bins under the outside stairwell",
      <span>Always use the bathroom bin for toilet paper, cotton buds, sanitary items, etc. — <strong>do not flush anything down the toilet</strong></span>],
    sicT:"🔒 Safety",
    sic:["Always lock the door when going out","Don't leave taps running or the hob on",
      <span>Emergencies: <strong>112</strong></span>] },
  pos:{ title:"How to get here", ind:"Address", maps:"Open in Google Maps",
    mezziT:"🚌 Public transport", arst:"ARST Line 125 (Uta–Cagliari)", arstSub:"First 05:40 · Last ~22:00 · every day",
    treno:"🚆 Uta-Villaspeciosa train", trenoSub:"06:27–20:53 · ~22 min to Cagliari",
    autoT:"🚗 By car — distances", aeroporto:"✈️ Cagliari Airport", poetto:"🏖️ Poetto (beach)",
    cagliariC:"🏙️ Cagliari centre", macch:"🏭 Macchiareddu industrial area", oasi:"🦜 WWF Santa Gilla Oasis", porto:"⛴️ Port of Cagliari" },
  esplora:{ title:"Explore", meteoLbl:"📍 Uta · Live weather", load:"⏳ Loading weather…",
    perc:"Feels like", noMeteo:"Weather unavailable", retry:"Retry",
    ctaSun:<>With sunshine like this,<br/><em style={{fontStyle:"italic",color:c.hazel}}>what would you like to discover?</em></>,
    ctaRain:<>A rainy day?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Culture & history await you.</em></>,
    ctaOther:<>With this weather,<br/><em style={{fontStyle:"italic",color:c.hazel}}>what would you like to discover?</em></>,
    ctaNone:<>Choose your<br/><em style={{fontStyle:"italic",color:c.hazel}}>next adventure.</em></>,
    scegli:"Choose a category ↓", esp:"experiences", tocca:"tap to open in Maps",
    days:["Today","Tomorrow","Day after"],
    wmo:["Sunny","Partly cloudy","Overcast","Fog","Drizzle","Rain","Snow","Showers","Thunderstorm"] },
  servizi:{ title:"Useful services", saluteT:"💊 Health",
    guardia:"🩺 Out-of-hours doctor — Via S. Giusta 85", guardiaSub:"Weekdays 8:00 pm–8:00 am · Holidays 24h",
    vicino:"nearby", lavT:"🧺 Laundrettes", lavGettoni:"Coin laundry — Via Umberto I 33, Uta",
    lavSub:"Open every day · Mon–Sat 06:30 · Sun 07:00 · tel. 340 268 7577 · home pick-up available",
    atmT:"🏦 ATMs", atmSub:"Branch with ATM · tel. 070 969008", postamatSub:"ATM 24h · 7 days a week",
    altriT:"🏛️ Other services", tabacch:"🚬 Tobacco shop Coccinella ⭐4.9", comune:"🏛️ Uta Town Hall",
    traspT:"🚌 Transport", orariV:"times",
    emg:<>🚨 Emergencies: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Ambulance: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Fire brigade: <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Where to eat", top:"⭐ not to be missed",
    sec1:"In Uta — on foot", sec2:"Cafés & bars", sec3:"Nearby — 10/20 min", sec4:"Cagliari — fresh fish ~20 min",
    sec5:"Cagliari — the great classics", sec6:"Traditional Sardinian cuisine",
    consigliato:"RECOMMENDED", vicino:"nearby",
    sardaT:"Sardinian cuisine", sardaSub:"Blue Zone · UNESCO heritage · Authenticity",
    sardaTxt:<>Sardinia is one of the world's five <strong style={{color:c.sand}}>Blue Zones</strong> — places where people live longest. The secret? A millennia-old diet: legumes, semolina bread, pecorino cheeses, extra-virgin olive oil and Cannonau wine, rich in antioxidants.</>,
    weekend:<>💡 At weekends, <strong style={{color:"rgba(245,240,232,0.7)"}}>always book ahead</strong>. And always ask for the <strong style={{color:"rgba(245,240,232,0.7)"}}>house wine</strong> — it's often a local Cannonau or Vermentino.</> },
  eventi:{ title:"Festivals & events", sett:"🔔 This week", cosaT:"🔍 What's on this week?",
    perConc:"For up-to-date concerts, food festivals and shows:", apriV:"open",
    r1:"🌐 Sardegna Turismo — events", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Uta Town Hall — news",
    cal:"Local traditions calendar", inCorso:"Now",
    tip:<>💡 If your stay coincides with the <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 Sept) or <strong style={{color:c.sand}}>Sant'Efisio</strong>, you're incredibly lucky!</> },
  rec:{ title:"Reviews & Social",
    grazie:<>Thank you for choosing<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em></>,
    txt:"A review or a tag on social media helps us enormously to spread the word about this place. It takes two minutes — and it means the world to us.",
    lascia:"Leave a review", googleSub:"Write a review on Google Maps",
    presto:"Soon", prestoSub:"Page coming soon", social:"Follow us on social media",
    bkEccez:"Exceptional", bkSub:"1 review · Guest score", bkLeggi:"Read the reviews on Booking.com",
    bkCatT:"Category scores", bkCat:["Staff","Facilities","Cleanliness","Comfort","Value for money","Location"],
    foto:<>Took a photo?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>Tag us and we'll share it!</em></>,
    colpitoT:"What impressed you most?",
    colpito:["The cleanliness and care of the spaces","The original 1950s frescoes","The location and nearby services","The veranda and private garden","The hosts' helpfulness"] },
  spesa:{ title:"Grocery shopping", utaT:"🏠 In Uta — on foot", conad:"🛒 Conad — the closest",
    coopSub:"Mon–Sat 8:00–13:00 / 17:00–20:00 · Sun 8:30–12:30",
    mdSub:"Mon–Sun 8:30–20:00 non-stop",
    circT:"🚗 Nearby — ~15 min", circSub:"Mon–Sat 8:30–21:30 · Sun 8:30–14:00/16:30–21:00", vicinoV:"nearby",
    tip:<>💡 <strong style={{color:c.sand}}>COOP</strong> is the most complete. <strong style={{color:c.sand}}>MD</strong> is ideal for stocking up, open non-stop.</> },
  faq:{ title:"Frequently asked questions", raccT:"Waste sorting & recycling",
    raccTxt:"The collection days for each type of waste are listed in the official COSIR calendar, which is always up to date. You'll find the bags in the apartment; the calendar is also posted in the kitchen.",
    esp:<><strong style={{color:c.sand}}>Put bins out:</strong> by 6:00 am, or the evening before after 8:00 pm. Black bags are not allowed.<br/>Official site: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Open the official COSIR calendar", climT:"❄️ Air conditioners",
    climTxt:"Controlled via Wi-Fi app or remote control. In the bedroom, the remote is in the bedside table drawer.",
    emgT:"🚨 Emergencies", emgGen:"🚨 General emergencies", amb:"🚑 Ambulance", vf:"🔥 Fire brigade",
    guardia:"🩺 Out-of-hours doctor Uta", guardiaSub:"Via Santa Giusta 85 · Weekdays 8:00 pm–8:00 am · Holidays 24h",
    cosir:"📞 COSIR waste", aiutoT:"Need more help?", disp:"We're always available!" },
  storia:{ title:"Our story",
    heroT:<>A house built<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>to last through time</em></>,
    origini:"The origins",
    casaT:<>The house of <em style={{fontStyle:"italic",color:c.hazel}}>Antonio and Maddalena</em></>,
    p1:<>In the centre of Uta, in the heart of the Campidano plain, stood one of the largest houses in the village. Two floors, over 260 square metres, built in <strong>ladiri</strong> — bricks of raw clay mixed with straw, the traditional building technique that gives walls a thickness and warmth concrete has never managed to imitate. Around it, a U-shaped garden of almost a thousand square metres.</>,
    p2:<>It was the home of <strong>Antonio Lecca</strong> and <strong>Maddalena Carboni</strong>, who raised their two children here and saw four grandchildren born. Among them, <strong>Alessandro</strong> is the one who lived it most: a childhood spent in that courtyard, family lunches, the scents of the kitchen under its flower-frescoed ceiling.</>,
    p3:<>At the centre of it all was <strong>Maddalena</strong>, known throughout the village as an extraordinary cook. She had her own <strong>wood-fired oven</strong>, where every day she baked bread and sweets that her hands knew how to make unique.</>,
    p4:<>In a corner of the garden, still today, stands her <strong>lemon tree</strong>. It's over forty years old. We didn't have the heart to touch it.</>,
    quote:"\u201CThe ceilings were hand-painted in the 1950s — flowers in the kitchen, golden geometries in the bedroom. The lemon tree is still the same one. We didn't have the heart to touch anything.\u201D",
    pills:[{l:"Construction",v:"Ladiri walls"},{l:"Surface",v:"260 m² + garden ~1,000 m²"},{l:"Family",v:"2 children, 4 grandchildren"},{l:"Purchase",v:"Alessandro and Roberta, 2022"}],
    restLbl:"The restoration",
    restT:<>Renewing without <em style={{fontStyle:"italic",color:c.hazel}}>erasing anything</em></>,
    r1:<>In 2022 Alessandro and Roberta bought the property with a precise idea: to preserve everything that makes it unique and turn it into a place made for welcoming. The first apartment — about 50 square metres with a covered veranda and private garden — was renovated without touching the soul of the building.</>,
    r2:<>The ladiri walls remain. So do the 1950s frescoes — the pink flowers in the kitchen and the golden geometries in the bedroom, painted by local artisans. What changed is the comfort: new systems, a fully equipped kitchen, a bathroom with a massage shower column, fibre optic internet, two Wi-Fi air conditioners. In the coming years, two more apartments and an events hall overlooking the large garden will be created.</>,
    simLbl:"The symbol",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>the mark of the Nuragic people</em></>,
    s1:<><strong>Sa pintadera</strong> is a disc of terracotta or stone with engraved geometric motifs and a small handle on the back. It was used as a stamp: it pressed its owner's mark onto ritual bread, onto skin, onto fresh clay. Each pintadera was different: it was a family's mark, the seal of an identity.</>,
    s2:<>Finds cover the whole island — from Su Nuraxi in Barumini to the sanctuary of Santa Cristina, from the giants' tombs to the sacred wells of the Nuoro area. A visual alphabet that no one has yet fully deciphered.</>,
    arroda:"\u201CSa arroda de tempu\u201D — the wheel of time. Some scholars propose that the engraved geometries encode an astronomical calendar: solar, lunar and Venusian cycles in a single circular instrument.",
    appr:"Read more: bread stamp or astronomical calendar?", apprSub:"An article exploring both hypotheses",
    cicli:[{e:"☀️",t:"Solar cycle",d:"Solstices and equinoxes — the four cardinal moments of the year"},{e:"🌙",t:"Lunar cycle",d:"The notches match the days of the lunar month"},{e:"⭐",t:"Venus cycle",d:"The circles synchronise the 8-year Venusian cycle"},{e:"🌾",t:"Agro-pastoral calendar",d:"Festivals tied to the seasons and the harvest"}],
    nomeLbl:"The name",
    nomeT:<>Why we chose <em style={{fontStyle:"italic",color:c.hazel}}>this symbol</em></>,
    n1:<>A house built in ladiri, with hand-painted frescoes, in a Campidano village where four generations have left their mark — it deserved a name that carried the same weight.</>,
    n2:<><strong>Corte Pintadera</strong> is the name of this place. The corte is the shared space around which everything is organised. The pintadera is the sign that sets it apart: ancient, Sardinian, unrepeatable.</>,
    closT:<>A house with <em style={{fontStyle:"italic",color:"#CEAD85"}}>its own mark on the world</em></>,
    closSub:<>Ladiri walls, hand-painted ceilings, a garden that was waiting.<br/>Corte Pintadera carries all of this — and there's still room for your story.</> },
},
// ─────────────────────────── ESPAÑOL ──────────
es: {
  home:{ arrivo:"A la llegada", guida:"La guía completa",
    benv:"Bienvenida", benvSub:"Información y contactos",
    checkin:"Check-in / out", checkinSub:"Horarios e instrucciones",
    app:"El apartamento", wifi:"Wi-Fi", regole:"Normas de la casa", esplora:"Por descubrir",
    risto:"Restaurantes", eventi:"Eventos", spesa:"Compras", servizi:"Servicios útiles",
    storia:"Nuestra historia", faq:"FAQ", rec:"Reseñas y redes" },
  back:{ home:"Inicio", esplora:"Por descubrir" },
  benv:{ title:"Bienvenidos a Corte Pintadera", felici:"Estamos encantados de recibiros",
    intro:<>Esta guía os ayudará a disfrutar al máximo de la estancia.<br/>Para cualquier necesidad, no dudéis en contactarnos.</>,
    dove:"Dónde estamos", maps:"Abrir en Google Maps", come:"Cómo llegar",
    volo:"En avión o en barco", aeroporto:"Aeropuerto de Cagliari-Elmas", porto:"Puerto de Cagliari",
    citta:"Desde otras ciudades", pubblico:"Transporte público",
    treno:"Tren · Trenitalia", trenoSub:"Estación Uta-Villaspeciosa ~5 min · 06:27–20:53",
    bus:"Bus · ARST", busSub:"Línea 125 Uta–Cagliari · Primero 05:40 · Último ~22:00",
    ctm:"Bus urbano · CTM", ctmSub:"Red metropolitana de Cagliari",
    qui:"Estamos aquí para vosotros", propr:"Propietario · siempre disponible", email:"Email", social:"Síguenos en redes" },
  checkin:{ title:"Check-in / out", arrivo:"Llegada", dalle:"a partir de las", partenza:"Salida", entro:"antes de las",
    arrT:"🧳 A la llegada",
    arr:["Os recibiremos personalmente — o dejaremos las instrucciones para el self check-in",
      "Aparcamiento libre en la calle frente a la entrada",
      "Encontraréis sábanas, toallas y kit de bienvenida ya preparados"],
    parT:"👋 A la salida",
    par:["Dejad las llaves sobre la mesa de la cocina",
      "Tirad la basura siguiendo la recogida selectiva (ver FAQ)",
      "¿Necesitáis guardar el equipaje unas horas? ¡Pedídnoslo!"],
    pkT:"🚗 Aparcamiento y acceso",
    pk:["Aparcamiento libre y gratuito en Via Cimitero",
      "La verja se abre con el mando a distancia que encontraréis dentro",
      "Portero automático disponible si es necesario"] },
  wifi:{ title:"Wi-Fi", fibra:"Fibra óptica — disponible en todas partes",
    cop:"Cobertura en todo el apartamento y en la veranda.", rete:"Nombre de la red", pass:"Contraseña",
    prob:"¿Problemas de conexión?",
    probTxt:"Apagad y volved a encender el router (en la cocina). Si el problema persiste, contactadnos." },
  app:{ title:"El Apartamento", sub:"50 m² interior · 40 m² veranda",
    interno:"Interior", veranda:"Veranda", clima:"A/C Wi-Fi",
    cucinaT:"🍳 Cocina",
    cucina:["Placa de inducción","Horno eléctrico","Lavavajillas","Frigorífico","Aire acondicionado Wi-Fi","Mesa extensible + 4 sillas","Sofá cama de 3 plazas","Cristalera hacia la veranda"],
    affC:<><strong>Fresco de los años 50</strong> — motivos florales rosas pintados a mano por artesanos sardos</>,
    cameraT:"🛏️ Dormitorio",
    camera:["Cama de matrimonio con canapé","Armario de ~4 metros","Sinfonier","Mesitas de noche con apliques a ambos lados","Aire acondicionado Wi-Fi"],
    affK:<><strong>Fresco de los años 50</strong> — geometrías doradas, único en su género</>,
    bagnoT:"🚿 Baño",
    bagno:["Mampara de ducha corredera 80×100 cm","Columna de ducha con chorros de masaje","Mueble de lavabo con cajones","Espejo con iluminación LED","Ventilación automática"],
    verT:"🌿 Veranda y jardín",
    verTxt:"Veranda cubierta de ~40 m² con acceso directo desde la cristalera de la cocina. Pequeño jardín privado — ideal para desayunos al aire libre y aperitivos al atardecer.",
    tags:["Wi-Fi fibra","2 Aires acondicionados","Aparcamiento libre","Jardín privado","Lavavajillas","Horno"],
    ladiriT:<>Construida en <em>ladiri</em></>,
    ladiriTxt:<>La casa está construida con los tradicionales ladrillos de adobe secados al sol, típicos de la arquitectura rural del Campidano sardo. Los <strong>ladiri</strong> garantizan un excelente aislamiento natural: fresca en verano, cálida en invierno. Un patrimonio constructivo milenario, auténtico y raro.</> },
  regole:{ title:"Normas de la casa", genT:"📋 Generales",
    gen:[<span>Check-in a partir de las <strong>17:00</strong> — Check-out antes de las <strong>09:00</strong></span>,
      "No se admiten animales domésticos","Prohibido fumar en el interior",
      <span>Silencio de <strong>23:00</strong> a <strong>08:00</strong></span>,
      "Número máximo de huéspedes según la reserva"],
    pulT:"🧹 Limpieza y cuidado",
    pul:["Dejar la casa ordenada a la salida","Separar la basura (instrucciones en FAQ)","Comunicar cualquier daño antes del check-out",
      "Vaciar todas las papeleras de cocina y baño y llevar las bolsas a los contenedores de reciclaje bajo la escalera exterior",
      <span>Usar siempre la papelera del baño para papel higiénico, bastoncillos, compresas, etc. — <strong>no tirar nada al inodoro</strong></span>],
    sicT:"🔒 Seguridad",
    sic:["Cerrar siempre con llave al salir","No dejar grifos abiertos ni fogones encendidos",
      <span>Emergencias: <strong>112</strong></span>] },
  pos:{ title:"Cómo llegar", ind:"Dirección", maps:"Abrir en Google Maps",
    mezziT:"🚌 Transporte público", arst:"ARST Línea 125 (Uta–Cagliari)", arstSub:"Primero 05:40 · Último ~22:00 · todos los días",
    treno:"🚆 Tren Uta-Villaspeciosa", trenoSub:"06:27–20:53 · ~22 min a Cagliari",
    autoT:"🚗 En coche — distancias", aeroporto:"✈️ Aeropuerto de Cagliari", poetto:"🏖️ Poetto (playa)",
    cagliariC:"🏙️ Centro de Cagliari", macch:"🏭 Zona ind. Macchiareddu", oasi:"🦜 Oasis WWF Santa Gilla", porto:"⛴️ Puerto de Cagliari" },
  esplora:{ title:"Por descubrir", meteoLbl:"📍 Uta · Tiempo en directo", load:"⏳ Cargando el tiempo…",
    perc:"Sensación", noMeteo:"Tiempo no disponible", retry:"Reintentar",
    ctaSun:<>Con este sol,<br/><em style={{fontStyle:"italic",color:c.hazel}}>¿qué te apetece descubrir?</em></>,
    ctaRain:<>¿Día de lluvia?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Cultura e historia te esperan.</em></>,
    ctaOther:<>Con este clima,<br/><em style={{fontStyle:"italic",color:c.hazel}}>¿qué te apetece descubrir?</em></>,
    ctaNone:<>Elige tu<br/><em style={{fontStyle:"italic",color:c.hazel}}>próxima aventura.</em></>,
    scegli:"Elige una categoría ↓", esp:"experiencias", tocca:"toca para abrir en Maps",
    days:["Hoy","Mañana","Pasado"],
    wmo:["Soleado","Poco nuboso","Cubierto","Niebla","Llovizna","Lluvia","Nieve","Chubascos","Tormenta"] },
  servizi:{ title:"Servicios útiles", saluteT:"💊 Salud",
    guardia:"🩺 Médico de guardia — Via S. Giusta 85", guardiaSub:"Laborables 20:00–08:00 · Festivos 24h",
    vicino:"cerca", lavT:"🧺 Lavanderías", lavGettoni:"Lavandería autoservicio — Via Umberto I 33, Uta",
    lavSub:"Abierta todos los días · lun–sáb 06:30 · dom 07:00 · tel. 340 268 7577 · también recogida a domicilio",
    atmT:"🏦 Cajeros ATM", atmSub:"Sucursal con cajero · tel. 070 969008", postamatSub:"Cajero 24h · 7 días a la semana",
    altriT:"🏛️ Otros servicios", tabacch:"🚬 Estanco Coccinella ⭐4.9", comune:"🏛️ Ayuntamiento de Uta",
    traspT:"🚌 Transportes", orariV:"horarios",
    emg:<>🚨 Emergencias: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Ambulancia: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Bomberos: <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Dónde comer", top:"⭐ imprescindibles",
    sec1:"En Uta — a pie", sec2:"Bares", sec3:"Alrededores — 10/20 min", sec4:"Cagliari — pescado fresco ~20 min",
    sec5:"Cagliari — los grandes clásicos", sec6:"Cocina sarda típica",
    consigliato:"RECOMENDADO", vicino:"cerca",
    sardaT:"La cocina sarda", sardaSub:"Blue Zone · Patrimonio UNESCO · Autenticidad",
    sardaTxt:<>Cerdeña es una de las cinco <strong style={{color:c.sand}}>Blue Zones</strong> del mundo — lugares donde se vive más tiempo. ¿El secreto? Una dieta milenaria: legumbres, pan de sémola, quesos pecorino, aceite de oliva virgen extra y vino Cannonau, rico en antioxidantes.</>,
    weekend:<>💡 Los fines de semana <strong style={{color:"rgba(245,240,232,0.7)"}}>reservad siempre</strong>. Pedid siempre el <strong style={{color:"rgba(245,240,232,0.7)"}}>vino de la casa</strong> — suele ser Cannonau o Vermentino local.</> },
  eventi:{ title:"Fiestas y eventos", sett:"🔔 Esta semana", cosaT:"🔍 ¿Qué hay esta semana?",
    perConc:"Para conciertos, ferias y espectáculos actualizados en tiempo real:", apriV:"abrir",
    r1:"🌐 Sardegna Turismo — eventos", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Ayuntamiento de Uta — noticias",
    cal:"Calendario de tradiciones locales", inCorso:"En curso",
    tip:<>💡 Si vuestra estancia coincide con la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sept) o con <strong style={{color:c.sand}}>Sant'Efisio</strong>, ¡tenéis muchísima suerte!</> },
  rec:{ title:"Reseñas y redes",
    grazie:<>Gracias por elegir<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em></>,
    txt:"Una reseña o una mención en redes nos ayuda muchísimo a dar a conocer este lugar. Solo lleva dos minutos — y para nosotros vale muchísimo.",
    lascia:"Deja una reseña", googleSub:"Escribe una reseña en Google Maps",
    presto:"Pronto", prestoSub:"Página en camino — pronto disponible", social:"Síguenos en redes",
    bkEccez:"Excepcional", bkSub:"1 reseña · Puntuación de huéspedes", bkLeggi:"Lee las reseñas en Booking.com",
    bkCatT:"Puntuaciones por categoría", bkCat:["Personal","Servicios","Limpieza","Confort","Calidad-precio","Ubicación"],
    foto:<>¿Has hecho una foto?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>¡Etiquétanos y la compartimos!</em></>,
    colpitoT:"¿Qué es lo que más os ha gustado?",
    colpito:["La limpieza y el cuidado de los espacios","Los frescos originales de los años 50","La ubicación y los servicios cercanos","La veranda y el jardín privado","La disponibilidad de los propietarios"] },
  spesa:{ title:"Hacer la compra", utaT:"🏠 En Uta — a pie", conad:"🛒 Conad — el más cercano",
    coopSub:"Lun–Sáb 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30",
    mdSub:"Lun–Dom 8:30–20:00 horario continuado",
    circT:"🚗 Alrededores — ~15 min", circSub:"Lun–Sáb 8:30–21:30 · Dom 8:30–14:00/16:30–21:00", vicinoV:"cerca",
    tip:<>💡 El <strong style={{color:c.sand}}>COOP</strong> es el más completo. El <strong style={{color:c.sand}}>MD</strong> es ideal para abastecerse, con horario continuado.</> },
  faq:{ title:"Preguntas frecuentes", raccT:"Recogida selectiva",
    raccTxt:"Los días de recogida de cada tipo de residuo están indicados en el calendario oficial de COSIR, siempre actualizado. Encontraréis las bolsas en la casa; el calendario también está colgado en la cocina.",
    esp:<><strong style={{color:c.sand}}>Sacar la basura:</strong> antes de las 6:00 de la mañana o la noche anterior después de las 20:00. Bolsas negras prohibidas.<br/>Web oficial: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Abre el calendario oficial de COSIR", climT:"❄️ Aire acondicionado",
    climTxt:"Se controla vía app Wi-Fi o mando a distancia. En el dormitorio, el mando está en el cajón de la mesita.",
    emgT:"🚨 Emergencias", emgGen:"🚨 Emergencias generales", amb:"🚑 Ambulancia", vf:"🔥 Bomberos",
    guardia:"🩺 Médico de guardia Uta", guardiaSub:"Via Santa Giusta 85 · Laborables 20:00–08:00 · Festivos 24h",
    cosir:"📞 COSIR basuras", aiutoT:"¿Necesitáis más ayuda?", disp:"¡Estamos siempre disponibles!" },
  storia:{ title:"Nuestra historia",
    heroT:<>Una casa construida<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>para durar en el tiempo</em></>,
    origini:"Los orígenes",
    casaT:<>La casa de <em style={{fontStyle:"italic",color:c.hazel}}>Antonio y Maddalena</em></>,
    p1:<>En el centro de Uta, en el corazón del Campidano, se encontraba una de las casas más grandes del pueblo. Dos plantas, más de 260 metros cuadrados, construida en <strong>ladiri</strong> — ladrillos de adobe y paja amasada, la técnica constructiva tradicional que da a los muros un grosor y una calidez que el hormigón nunca ha sabido imitar. Alrededor, un jardín en forma de U de casi mil metros cuadrados.</>,
    p2:<>Era la casa de <strong>Antonio Lecca</strong> y <strong>Maddalena Carboni</strong>, que aquí criaron a sus dos hijos y vieron nacer a cuatro nietos. Entre ellos, <strong>Alessandro</strong> es quien más la vivió: la infancia en aquel patio, las comidas en familia, los aromas de la cocina con el techo pintado de flores.</>,
    p3:<>En el centro de todo estaba <strong>Maddalena</strong>, conocida en todo el pueblo como una cocinera extraordinaria. Tenía un <strong>horno de leña</strong> propio, donde cada día horneaba pan y dulces que sus manos sabían hacer únicos.</>,
    p4:<>En un rincón del jardín, todavía hoy, está su <strong>limonero</strong>. Tiene más de cuarenta años. No tuvimos corazón para tocarlo.</>,
    quote:"\u201CLos techos los pintaron a mano en los años 50 — flores en la cocina, geometrías doradas en el dormitorio. El limonero sigue siendo el de entonces. No tuvimos corazón para tocar nada.\u201D",
    pills:[{l:"Construcción",v:"Muros de ladiri"},{l:"Superficie",v:"260 m² + jardín ~1.000 m²"},{l:"Familia",v:"2 hijos, 4 nietos"},{l:"Compra",v:"Alessandro y Roberta, 2022"}],
    restLbl:"La restauración",
    restT:<>Renovar sin <em style={{fontStyle:"italic",color:c.hazel}}>borrar nada</em></>,
    r1:<>En 2022 Alessandro y Roberta compran la propiedad con una idea precisa: preservar todo lo que la hace única y convertirla en un lugar capaz de acoger. El primer apartamento — unos 50 metros cuadrados con veranda cubierta y jardín privado — se reforma sin tocar el alma del edificio.</>,
    r2:<>Los muros de ladiri siguen ahí. Los frescos de los años 50 también — las flores rosas de la cocina y las geometrías doradas del dormitorio, pintados por artesanos locales. Lo que ha cambiado es el confort: nuevas instalaciones, cocina equipada, baño con columna de masaje, fibra óptica, dos aires acondicionados Wi-Fi. En los próximos años nacerán otros dos apartamentos y una sala de eventos con vistas al gran jardín.</>,
    simLbl:"El símbolo",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>la marca del pueblo nurágico</em></>,
    s1:<><strong>Sa pintadera</strong> es un disco de terracota o piedra con motivos geométricos grabados y un pequeño mango en la parte trasera. Se usaba como sello: imprimía la propia marca en el pan ritual, en la piel, en la arcilla fresca. Cada pintadera era diferente: era la marca de una familia, el sello de una identidad.</>,
    s2:<>Los hallazgos cubren toda la isla — desde Su Nuraxi de Barumini hasta el santuario de Santa Cristina, desde las tumbas de gigantes hasta los pozos sagrados del Nuorese. Un alfabeto visual que nadie ha sabido descifrar del todo.</>,
    arroda:"\u201CSa arroda de tempu\u201D — la rueda del tiempo. Algunos estudiosos proponen que las geometrías grabadas codifican un calendario astronómico: ciclo solar, lunar y venusiano en un único instrumento circular.",
    appr:"Profundiza: ¿sello para el pan o calendario astronómico?", apprSub:"Un artículo que explora ambas hipótesis",
    cicli:[{e:"☀️",t:"Ciclo solar",d:"Solsticios y equinoccios — los cuatro momentos cardinales del año"},{e:"🌙",t:"Ciclo lunar",d:"Las muescas coinciden con los días del mes lunar"},{e:"⭐",t:"Ciclo de Venus",d:"Los círculos sincronizan el ciclo venusiano de 8 años"},{e:"🌾",t:"Calendario agropastoral",d:"Las fiestas ligadas a las estaciones y a la cosecha"}],
    nomeLbl:"El nombre",
    nomeT:<>Por qué elegimos <em style={{fontStyle:"italic",color:c.hazel}}>este símbolo</em></>,
    n1:<>Una casa construida en ladiri, con frescos pintados a mano, en un pueblo del Campidano donde cuatro generaciones han dejado su huella — merecía un nombre que llevara el mismo peso.</>,
    n2:<><strong>Corte Pintadera</strong> es el nombre de este lugar. La corte es el espacio compartido en torno al cual todo se organiza. La pintadera es el signo que lo distingue: antiguo, sardo, irrepetible.</>,
    closT:<>Una casa con <em style={{fontStyle:"italic",color:"#CEAD85"}}>su propia huella en el mundo</em></>,
    closSub:<>Muros de ladiri, techos pintados a mano, un jardín que esperaba.<br/>Corte Pintadera lleva todo esto — y aún queda espacio para tu historia.</> },
},
// ─────────────────────────── FRANÇAIS ─────────
fr: {
  home:{ arrivo:"À l'arrivée", guida:"Le guide complet",
    benv:"Bienvenue", benvSub:"Infos & contacts",
    checkin:"Check-in / out", checkinSub:"Horaires & instructions",
    app:"L'appartement", wifi:"Wi-Fi", regole:"Règles de la maison", esplora:"À découvrir",
    risto:"Restaurants", eventi:"Événements", spesa:"Courses", servizi:"Services utiles",
    storia:"Notre histoire", faq:"FAQ", rec:"Avis & réseaux" },
  back:{ home:"Accueil", esplora:"À découvrir" },
  benv:{ title:"Bienvenue à Corte Pintadera", felici:"Nous sommes heureux de vous accueillir",
    intro:<>Ce guide vous aidera à profiter au mieux de votre séjour.<br/>Pour tout besoin, n'hésitez pas à nous contacter.</>,
    dove:"Où nous sommes", maps:"Ouvrir dans Google Maps", come:"Comment venir",
    volo:"En avion ou en bateau", aeroporto:"Aéroport de Cagliari-Elmas", porto:"Port de Cagliari",
    citta:"Depuis d'autres villes", pubblico:"Transports publics",
    treno:"Train · Trenitalia", trenoSub:"Gare Uta-Villaspeciosa ~5 min · 06:27–20:53",
    bus:"Bus · ARST", busSub:"Ligne 125 Uta–Cagliari · Premier 05:40 · Dernier ~22:00",
    ctm:"Bus urbain · CTM", ctmSub:"Réseau métropolitain de Cagliari",
    qui:"Nous sommes là pour vous", propr:"Propriétaire · toujours disponible", email:"Email", social:"Suivez-nous sur les réseaux" },
  checkin:{ title:"Check-in / out", arrivo:"Arrivée", dalle:"à partir de", partenza:"Départ", entro:"avant",
    arrT:"🧳 À l'arrivée",
    arr:["Nous vous accueillerons en personne — ou nous vous laisserons les instructions pour le self check-in",
      "Stationnement libre dans la rue devant l'entrée",
      "Draps, serviettes et kit de bienvenue vous attendent, déjà prêts"],
    parT:"👋 Au départ",
    par:["Laissez les clés sur la table de la cuisine",
      "Jetez les déchets en suivant le tri sélectif (voir FAQ)",
      "Besoin de laisser vos bagages quelques heures ? Demandez-nous !"],
    pkT:"🚗 Stationnement & accès",
    pk:["Stationnement libre et gratuit Via Cimitero",
      "Le portail s'ouvre avec la télécommande que vous trouverez à l'intérieur",
      "Interphone disponible si nécessaire"] },
  wifi:{ title:"Wi-Fi", fibra:"Fibre optique — disponible partout",
    cop:"Couverture dans tout l'appartement et sur la véranda.", rete:"Nom du réseau", pass:"Mot de passe",
    prob:"Problèmes de connexion ?",
    probTxt:"Éteignez puis rallumez le routeur (dans la cuisine). Si le problème persiste, contactez-nous." },
  app:{ title:"L'Appartement", sub:"50 m² intérieur · 40 m² véranda",
    interno:"Intérieur", veranda:"Véranda", clima:"Clim Wi-Fi",
    cucinaT:"🍳 Cuisine",
    cucina:["Plaque à induction","Four électrique","Lave-vaisselle","Réfrigérateur","Climatiseur Wi-Fi","Table extensible + 4 chaises","Canapé-lit 3 places","Baie vitrée sur la véranda"],
    affC:<><strong>Fresque des années 50</strong> — motifs floraux roses peints à la main par des artisans sardes</>,
    cameraT:"🛏️ Chambre",
    camera:["Lit double avec coffre de rangement","Armoire de ~4 mètres","Chiffonnier","Tables de chevet avec appliques des deux côtés","Climatiseur Wi-Fi"],
    affK:<><strong>Fresque des années 50</strong> — géométries dorées, unique en son genre</>,
    bagnoT:"🚿 Salle de bain",
    bagno:["Cabine de douche coulissante 80×100 cm","Colonne de douche avec jets massants","Meuble vasque avec tiroirs","Miroir avec éclairage LED","Ventilation automatique"],
    verT:"🌿 Véranda et jardin",
    verTxt:"Véranda couverte de ~40 m² avec accès direct depuis la baie vitrée de la cuisine. Petit jardin privé — idéal pour les petits-déjeuners en plein air et les apéritifs au coucher du soleil.",
    tags:["Wi-Fi fibre","2 Climatiseurs","Parking gratuit","Jardin privé","Lave-vaisselle","Four"],
    ladiriT:<>Construite en <em>ladiri</em></>,
    ladiriTxt:<>La maison est bâtie avec les traditionnelles briques d'argile crue séchées au soleil, typiques de l'architecture rurale du Campidano sarde. Les <strong>ladiri</strong> garantissent une excellente isolation naturelle : fraîche en été, chaude en hiver. Un patrimoine constructif millénaire, authentique et rare.</> },
  regole:{ title:"Règles de la maison", genT:"📋 Générales",
    gen:[<span>Check-in à partir de <strong>17h00</strong> — Check-out avant <strong>09h00</strong></span>,
      "Les animaux ne sont pas admis","Interdiction de fumer à l'intérieur",
      <span>Silence de <strong>23h00</strong> à <strong>08h00</strong></span>,
      "Nombre maximum d'hôtes selon la réservation"],
    pulT:"🧹 Propreté et soin",
    pul:["Laisser la maison en ordre au départ","Trier les déchets (instructions dans la FAQ)","Signaler tout dommage avant le check-out",
      "Vider toutes les poubelles de la cuisine et de la salle de bain et porter les sacs aux poubelles de tri sous l'escalier extérieur",
      <span>Toujours utiliser la poubelle de la salle de bain pour le papier toilette, cotons-tiges, protections, etc. — <strong>ne rien jeter dans les toilettes</strong></span>],
    sicT:"🔒 Sécurité",
    sic:["Toujours fermer à clé en sortant","Ne pas laisser les robinets ouverts ni les plaques allumées",
      <span>Urgences : <strong>112</strong></span>] },
  pos:{ title:"Comment venir", ind:"Adresse", maps:"Ouvrir dans Google Maps",
    mezziT:"🚌 Transports publics", arst:"ARST Ligne 125 (Uta–Cagliari)", arstSub:"Premier 05:40 · Dernier ~22:00 · tous les jours",
    treno:"🚆 Train Uta-Villaspeciosa", trenoSub:"06:27–20:53 · ~22 min pour Cagliari",
    autoT:"🚗 En voiture — distances", aeroporto:"✈️ Aéroport de Cagliari", poetto:"🏖️ Poetto (plage)",
    cagliariC:"🏙️ Centre de Cagliari", macch:"🏭 Zone ind. Macchiareddu", oasi:"🦜 Oasis WWF Santa Gilla", porto:"⛴️ Port de Cagliari" },
  esplora:{ title:"À découvrir", meteoLbl:"📍 Uta · Météo en direct", load:"⏳ Chargement de la météo…",
    perc:"Ressenti", noMeteo:"Météo indisponible", retry:"Réessayer",
    ctaSun:<>Avec ce soleil,<br/><em style={{fontStyle:"italic",color:c.hazel}}>qu'avez-vous envie de découvrir ?</em></>,
    ctaRain:<>Journée de pluie ?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Culture & histoire vous attendent.</em></>,
    ctaOther:<>Avec ce temps,<br/><em style={{fontStyle:"italic",color:c.hazel}}>qu'avez-vous envie de découvrir ?</em></>,
    ctaNone:<>Choisissez votre<br/><em style={{fontStyle:"italic",color:c.hazel}}>prochaine aventure.</em></>,
    scegli:"Choisissez une catégorie ↓", esp:"expériences", tocca:"touchez pour ouvrir dans Maps",
    days:["Aujourd'hui","Demain","Après-demain"],
    wmo:["Ensoleillé","Peu nuageux","Couvert","Brouillard","Bruine","Pluie","Neige","Averses","Orage"] },
  servizi:{ title:"Services utiles", saluteT:"💊 Santé",
    guardia:"🩺 Médecin de garde — Via S. Giusta 85", guardiaSub:"Semaine 20h00–08h00 · Fériés 24h/24",
    vicino:"proche", lavT:"🧺 Laveries", lavGettoni:"Laverie automatique — Via Umberto I 33, Uta",
    lavSub:"Ouverte tous les jours · lun–sam 06h30 · dim 07h00 · tél. 340 268 7577 · retrait à domicile possible",
    atmT:"🏦 Distributeurs ATM", atmSub:"Agence avec distributeur · tél. 070 969008", postamatSub:"Distributeur 24h/24 · 7j/7",
    altriT:"🏛️ Autres services", tabacch:"🚬 Bureau de tabac Coccinella ⭐4.9", comune:"🏛️ Mairie d'Uta",
    traspT:"🚌 Transports", orariV:"horaires",
    emg:<>🚨 Urgences : <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Ambulance : <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Pompiers : <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Où manger", top:"⭐ à ne pas manquer",
    sec1:"À Uta — à pied", sec2:"Cafés & bars", sec3:"Alentours — 10/20 min", sec4:"Cagliari — poisson frais ~20 min",
    sec5:"Cagliari — les grands classiques", sec6:"Cuisine sarde typique",
    consigliato:"CONSEILLÉ", vicino:"proche",
    sardaT:"La cuisine sarde", sardaSub:"Blue Zone · Patrimoine UNESCO · Authenticité",
    sardaTxt:<>La Sardaigne est l'une des cinq <strong style={{color:c.sand}}>Blue Zones</strong> du monde — des lieux où l'on vit plus longtemps. Le secret ? Un régime millénaire : légumineuses, pain de semoule, fromages pecorino, huile d'olive extra vierge et vin Cannonau, riche en antioxydants.</>,
    weekend:<>💡 Le week-end, <strong style={{color:"rgba(245,240,232,0.7)"}}>réservez toujours</strong>. Demandez toujours le <strong style={{color:"rgba(245,240,232,0.7)"}}>vin de la maison</strong> — souvent un Cannonau ou un Vermentino local.</> },
  eventi:{ title:"Fêtes et événements", sett:"🔔 Cette semaine", cosaT:"🔍 Quoi de neuf cette semaine ?",
    perConc:"Pour les concerts, fêtes gastronomiques et spectacles mis à jour en temps réel :", apriV:"ouvrir",
    r1:"🌐 Sardegna Turismo — événements", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Mairie d'Uta — actualités",
    cal:"Calendrier des traditions locales", inCorso:"En cours",
    tip:<>💡 Si votre séjour coïncide avec la <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 sept) ou avec <strong style={{color:c.sand}}>Sant'Efisio</strong>, vous avez énormément de chance !</> },
  rec:{ title:"Avis & réseaux",
    grazie:<>Merci d'avoir choisi<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em></>,
    txt:"Un avis ou un tag sur les réseaux nous aide énormément à faire connaître ce lieu. Deux minutes suffisent — et pour nous, cela compte beaucoup.",
    lascia:"Laissez un avis", googleSub:"Écrire un avis sur Google Maps",
    presto:"Bientôt", prestoSub:"Page à venir — bientôt disponible", social:"Suivez-nous sur les réseaux",
    bkEccez:"Exceptionnel", bkSub:"1 avis · Note des voyageurs", bkLeggi:"Lire les avis sur Booking.com",
    bkCatT:"Notes par catégorie", bkCat:["Personnel","Équipements","Propreté","Confort","Rapport qualité-prix","Emplacement"],
    foto:<>Vous avez pris une photo ?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>Taguez-nous et nous la partagerons !</em></>,
    colpitoT:"Qu'est-ce qui vous a le plus marqué ?",
    colpito:["La propreté et le soin des espaces","Les fresques originales des années 50","L'emplacement et les services à proximité","La véranda et le petit jardin privé","La disponibilité des propriétaires"] },
  spesa:{ title:"Faire les courses", utaT:"🏠 À Uta — à pied", conad:"🛒 Conad — le plus proche",
    coopSub:"Lun–Sam 8h00–13h00 / 17h00–20h00 · Dim 8h30–12h30",
    mdSub:"Lun–Dim 8h30–20h00 sans interruption",
    circT:"🚗 Alentours — ~15 min", circSub:"Lun–Sam 8h30–21h30 · Dim 8h30–14h00/16h30–21h00", vicinoV:"proche",
    tip:<>💡 Le <strong style={{color:c.sand}}>COOP</strong> est le plus complet. Le <strong style={{color:c.sand}}>MD</strong> est idéal pour les provisions, ouvert sans interruption.</> },
  faq:{ title:"Questions fréquentes", raccT:"Tri sélectif",
    raccTxt:"Les jours de collecte pour chaque type de déchet sont indiqués dans le calendrier officiel COSIR, toujours à jour. Vous trouverez les sacs dans le logement ; le calendrier est aussi affiché dans la cuisine.",
    esp:<><strong style={{color:c.sand}}>Sortie des déchets :</strong> avant 6h00 du matin ou la veille au soir après 20h00. Sacs noirs interdits.<br/>Site officiel : <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Ouvrir le calendrier officiel COSIR", climT:"❄️ Climatiseurs",
    climTxt:"Contrôlables via app Wi-Fi ou télécommande. Dans la chambre, la télécommande est dans le tiroir de la table de chevet.",
    emgT:"🚨 Urgences", emgGen:"🚨 Urgences générales", amb:"🚑 Ambulance", vf:"🔥 Pompiers",
    guardia:"🩺 Médecin de garde Uta", guardiaSub:"Via Santa Giusta 85 · Semaine 20h00–08h00 · Fériés 24h/24",
    cosir:"📞 COSIR déchets", aiutoT:"Besoin d'autre chose ?", disp:"Nous sommes toujours disponibles !" },
  storia:{ title:"Notre histoire",
    heroT:<>Une maison construite<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>pour durer dans le temps</em></>,
    origini:"Les origines",
    casaT:<>La maison d'<em style={{fontStyle:"italic",color:c.hazel}}>Antonio et Maddalena</em></>,
    p1:<>Au centre d'Uta, au cœur du Campidano, se trouvait l'une des plus grandes maisons du village. Deux étages, plus de 260 mètres carrés, construite en <strong>ladiri</strong> — des briques d'argile crue et de paille malaxée, la technique de construction traditionnelle qui donne aux murs une épaisseur et une chaleur que le béton n'a jamais su imiter. Autour, un jardin en forme de U de près de mille mètres carrés.</>,
    p2:<>C'était la maison d'<strong>Antonio Lecca</strong> et de <strong>Maddalena Carboni</strong>, qui y ont élevé leurs deux enfants et vu naître quatre petits-enfants. Parmi eux, <strong>Alessandro</strong> est celui qui l'a le plus vécue : l'enfance passée dans cette cour, les repas en famille, les parfums de la cuisine au plafond peint de fleurs.</>,
    p3:<>Au centre de tout, il y avait <strong>Maddalena</strong>, connue dans tout le village comme une cuisinière extraordinaire. Elle avait son propre <strong>four à bois</strong>, où chaque jour elle cuisait du pain et des douceurs que ses mains savaient rendre uniques.</>,
    p4:<>Dans un coin du jardin, encore aujourd'hui, il y a son <strong>citronnier</strong>. Il a plus de quarante ans. Nous n'avons pas eu le cœur d'y toucher.</>,
    quote:"\u201CLes plafonds ont été peints à la main dans les années 50 — des fleurs dans la cuisine, des géométries dorées dans la chambre. Le citronnier est toujours celui d'alors. Nous n'avons pas eu le cœur de toucher à quoi que ce soit.\u201D",
    pills:[{l:"Construction",v:"Murs en ladiri"},{l:"Surface",v:"260 m² + jardin ~1 000 m²"},{l:"Famille",v:"2 enfants, 4 petits-enfants"},{l:"Achat",v:"Alessandro et Roberta, 2022"}],
    restLbl:"La restauration",
    restT:<>Rénover sans <em style={{fontStyle:"italic",color:c.hazel}}>rien effacer</em></>,
    r1:<>En 2022, Alessandro et Roberta achètent la propriété avec une idée précise : préserver tout ce qui la rend unique et en faire un lieu capable d'accueillir. Le premier appartement — environ 50 mètres carrés avec véranda couverte et petit jardin privé — est rénové sans toucher à l'âme du bâtiment.</>,
    r2:<>Les murs en ladiri sont restés. Les fresques des années 50 aussi — les fleurs roses de la cuisine et les géométries dorées de la chambre, peintes par des artisans locaux. Ce qui a changé, c'est le confort : nouvelles installations, cuisine équipée, salle de bain avec colonne de massage, fibre optique, deux climatiseurs Wi-Fi. Dans les prochaines années naîtront deux autres appartements et une salle d'événements donnant sur le grand jardin.</>,
    simLbl:"Le symbole",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>la marque du peuple nuragique</em></>,
    s1:<><strong>Sa pintadera</strong> est un disque de terre cuite ou de pierre aux motifs géométriques gravés, avec une petite poignée au dos. On l'utilisait comme tampon : elle imprimait sa marque sur le pain rituel, sur la peau, sur l'argile fraîche. Chaque pintadera était différente : c'était la marque d'une famille, le sceau d'une identité.</>,
    s2:<>Les découvertes couvrent toute l'île — de Su Nuraxi de Barumini au sanctuaire de Santa Cristina, des tombes des géants aux puits sacrés du Nuorese. Un alphabet visuel que personne n'a encore su déchiffrer complètement.</>,
    arroda:"\u201CSa arroda de tempu\u201D — la roue du temps. Certains chercheurs proposent que les géométries gravées codifient un calendrier astronomique : cycles solaire, lunaire et vénusien en un seul instrument circulaire.",
    appr:"Pour approfondir : tampon à pain ou calendrier astronomique ?", apprSub:"Un article qui explore les deux hypothèses",
    cicli:[{e:"☀️",t:"Cycle solaire",d:"Solstices et équinoxes — les quatre moments cardinaux de l'année"},{e:"🌙",t:"Cycle lunaire",d:"Les encoches coïncident avec les jours du mois lunaire"},{e:"⭐",t:"Cycle de Vénus",d:"Les cercles synchronisent le cycle vénusien de 8 ans"},{e:"🌾",t:"Calendrier agropastoral",d:"Les fêtes liées aux saisons et aux récoltes"}],
    nomeLbl:"Le nom",
    nomeT:<>Pourquoi nous avons choisi <em style={{fontStyle:"italic",color:c.hazel}}>ce symbole</em></>,
    n1:<>Une maison construite en ladiri, avec des fresques peintes à la main, dans un village du Campidano où quatre générations ont laissé leur empreinte — méritait un nom qui porte le même poids.</>,
    n2:<><strong>Corte Pintadera</strong> est le nom de ce lieu. La corte est l'espace partagé autour duquel tout s'organise. La pintadera est le signe qui le distingue : ancien, sarde, unique.</>,
    closT:<>Une maison avec <em style={{fontStyle:"italic",color:"#CEAD85"}}>sa propre empreinte dans le monde</em></>,
    closSub:<>Des murs en ladiri, des plafonds peints à la main, un jardin qui attendait.<br/>Corte Pintadera porte tout cela — et il reste encore de la place pour votre histoire.</> },
},
// ─────────────────────────── DEUTSCH ──────────
de: {
  home:{ arrivo:"Bei der Ankunft", guida:"Der komplette Guide",
    benv:"Willkommen", benvSub:"Infos & Kontakte",
    checkin:"Check-in / out", checkinSub:"Zeiten & Anleitung",
    app:"Die Wohnung", wifi:"WLAN", regole:"Hausregeln", esplora:"Entdecken",
    risto:"Restaurants", eventi:"Veranstaltungen", spesa:"Einkaufen", servizi:"Nützliche Dienste",
    storia:"Unsere Geschichte", faq:"FAQ", rec:"Bewertungen & Social" },
  back:{ home:"Start", esplora:"Entdecken" },
  benv:{ title:"Willkommen in der Corte Pintadera", felici:"Wir freuen uns, Sie zu beherbergen",
    intro:<>Dieser Guide hilft Ihnen, Ihren Aufenthalt bestmöglich zu genießen.<br/>Bei Fragen oder Wünschen können Sie uns jederzeit kontaktieren.</>,
    dove:"Wo wir sind", maps:"In Google Maps öffnen", come:"Anreise",
    volo:"Mit Flugzeug oder Fähre", aeroporto:"Flughafen Cagliari-Elmas", porto:"Hafen von Cagliari",
    citta:"Aus anderen Städten", pubblico:"Öffentliche Verkehrsmittel",
    treno:"Zug · Trenitalia", trenoSub:"Bahnhof Uta-Villaspeciosa ~5 Min · 06:27–20:53",
    bus:"Bus · ARST", busSub:"Linie 125 Uta–Cagliari · Erster 05:40 · Letzter ~22:00",
    ctm:"Stadtbus · CTM", ctmSub:"Metropolnetz von Cagliari",
    qui:"Wir sind für Sie da", propr:"Gastgeber · immer erreichbar", email:"E-Mail", social:"Folgen Sie uns auf Social Media" },
  checkin:{ title:"Check-in / out", arrivo:"Ankunft", dalle:"ab", partenza:"Abreise", entro:"bis",
    arrT:"🧳 Bei der Ankunft",
    arr:["Wir empfangen Sie persönlich — oder hinterlassen Ihnen die Anleitung für den Self-Check-in",
      "Kostenlose Parkplätze auf der Straße direkt vor dem Eingang",
      "Bettwäsche, Handtücher und ein Willkommenspaket liegen bereit"],
    parT:"👋 Bei der Abreise",
    par:["Lassen Sie die Schlüssel auf dem Küchentisch",
      "Entsorgen Sie den Müll gemäß der Mülltrennung (siehe FAQ)",
      "Möchten Sie Ihr Gepäck ein paar Stunden unterstellen? Fragen Sie uns!"],
    pkT:"🚗 Parken & Zugang",
    pk:["Kostenloses Parken in der Via Cimitero",
      "Das Tor öffnet sich mit der Fernbedienung, die Sie drinnen finden",
      "Gegensprechanlage bei Bedarf vorhanden"] },
  wifi:{ title:"WLAN", fibra:"Glasfaser — überall verfügbar",
    cop:"Empfang in der gesamten Wohnung und auf der Veranda.", rete:"Netzwerkname", pass:"Passwort",
    prob:"Verbindungsprobleme?",
    probTxt:"Schalten Sie den Router aus und wieder ein (in der Küche). Falls das Problem bestehen bleibt, kontaktieren Sie uns." },
  app:{ title:"Die Wohnung", sub:"50 m² innen · 40 m² Veranda",
    interno:"Innen", veranda:"Veranda", clima:"WLAN-Klima",
    cucinaT:"🍳 Küche",
    cucina:["Induktionskochfeld","Elektrobackofen","Geschirrspüler","Kühlschrank","WLAN-Klimaanlage","Ausziehbarer Tisch + 4 Stühle","3-Sitzer-Schlafsofa","Glastür zur Veranda"],
    affC:<><strong>Fresko aus den 50er Jahren</strong> — rosa Blumenmotive, von sardischen Handwerkern von Hand gemalt</>,
    cameraT:"🛏️ Schlafzimmer",
    camera:["Doppelbett mit Bettkasten","Kleiderschrank ~4 Meter","Kommode","Nachttische mit Wandleuchten auf beiden Seiten","WLAN-Klimaanlage"],
    affK:<><strong>Fresko aus den 50er Jahren</strong> — goldene Geometrien, einzigartig</>,
    bagnoT:"🚿 Badezimmer",
    bagno:["Schiebetür-Duschkabine 80×100 cm","Duschsäule mit Massagedüsen","Waschtisch mit Schubladen","Spiegel mit LED-Beleuchtung","Automatische Lüftung"],
    verT:"🌿 Veranda und Garten",
    verTxt:"Überdachte Veranda von ~40 m² mit direktem Zugang durch die Glastür der Küche. Privater kleiner Garten — ideal für Frühstück im Freien und Aperitifs bei Sonnenuntergang.",
    tags:["Glasfaser-WLAN","2 Klimaanlagen","Gratis Parken","Privater Garten","Geschirrspüler","Backofen"],
    ladiriT:<>Gebaut aus <em>Ladiri</em></>,
    ladiriTxt:<>Das Haus ist aus traditionellen, sonnengetrockneten Lehmziegeln gebaut, typisch für die ländliche Architektur des sardischen Campidano. Die <strong>Ladiri</strong> sorgen für eine hervorragende natürliche Dämmung: kühl im Sommer, warm im Winter. Ein jahrtausendealtes, authentisches und seltenes Bauerbe.</> },
  regole:{ title:"Hausregeln", genT:"📋 Allgemein",
    gen:[<span>Check-in ab <strong>17:00</strong> — Check-out bis <strong>09:00</strong></span>,
      "Haustiere sind nicht erlaubt","Rauchen im Innenbereich verboten",
      <span>Ruhezeiten von <strong>23:00</strong> bis <strong>08:00</strong></span>,
      "Maximale Gästezahl gemäß Buchung"],
    pulT:"🧹 Sauberkeit und Pflege",
    pul:["Das Haus bei der Abreise ordentlich hinterlassen","Müll trennen (Anleitung in den FAQ)","Eventuelle Schäden vor dem Check-out melden",
      "Alle Mülleimer in Küche und Bad leeren und die Beutel zu den Wertstoffbehältern unter der Außentreppe bringen",
      <span>Immer den Mülleimer im Bad für Toilettenpapier, Wattestäbchen, Hygieneartikel usw. benutzen — <strong>nichts in die Toilette werfen</strong></span>],
    sicT:"🔒 Sicherheit",
    sic:["Beim Verlassen immer abschließen","Keine Wasserhähne offen oder Herdplatten an lassen",
      <span>Notfälle: <strong>112</strong></span>] },
  pos:{ title:"Anreise", ind:"Adresse", maps:"In Google Maps öffnen",
    mezziT:"🚌 Öffentliche Verkehrsmittel", arst:"ARST Linie 125 (Uta–Cagliari)", arstSub:"Erster 05:40 · Letzter ~22:00 · täglich",
    treno:"🚆 Zug Uta-Villaspeciosa", trenoSub:"06:27–20:53 · ~22 Min nach Cagliari",
    autoT:"🚗 Mit dem Auto — Entfernungen", aeroporto:"✈️ Flughafen Cagliari", poetto:"🏖️ Poetto (Strand)",
    cagliariC:"🏙️ Cagliari Zentrum", macch:"🏭 Industriegebiet Macchiareddu", oasi:"🦜 WWF-Oase Santa Gilla", porto:"⛴️ Hafen von Cagliari" },
  esplora:{ title:"Entdecken", meteoLbl:"📍 Uta · Wetter live", load:"⏳ Wetter wird geladen…",
    perc:"Gefühlt", noMeteo:"Wetter nicht verfügbar", retry:"Erneut versuchen",
    ctaSun:<>Bei diesem Sonnenschein,<br/><em style={{fontStyle:"italic",color:c.hazel}}>was möchten Sie entdecken?</em></>,
    ctaRain:<>Ein Regentag?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Kultur & Geschichte warten auf Sie.</em></>,
    ctaOther:<>Bei diesem Wetter,<br/><em style={{fontStyle:"italic",color:c.hazel}}>was möchten Sie entdecken?</em></>,
    ctaNone:<>Wählen Sie Ihr<br/><em style={{fontStyle:"italic",color:c.hazel}}>nächstes Abenteuer.</em></>,
    scegli:"Wählen Sie eine Kategorie ↓", esp:"Erlebnisse", tocca:"antippen, um in Maps zu öffnen",
    days:["Heute","Morgen","Übermorgen"],
    wmo:["Sonnig","Leicht bewölkt","Bedeckt","Nebel","Nieselregen","Regen","Schnee","Schauer","Gewitter"] },
  servizi:{ title:"Nützliche Dienste", saluteT:"💊 Gesundheit",
    guardia:"🩺 Ärztlicher Bereitschaftsdienst — Via S. Giusta 85", guardiaSub:"Werktags 20:00–08:00 · Feiertags 24h",
    vicino:"in der Nähe", lavT:"🧺 Waschsalons", lavGettoni:"Münz-Waschsalon — Via Umberto I 33, Uta",
    lavSub:"Täglich geöffnet · Mo–Sa 06:30 · So 07:00 · Tel. 340 268 7577 · auch Abholung nach Hause",
    atmT:"🏦 Geldautomaten", atmSub:"Filiale mit Geldautomat · Tel. 070 969008", postamatSub:"Geldautomat 24h · 7 Tage die Woche",
    altriT:"🏛️ Weitere Dienste", tabacch:"🚬 Tabakladen Coccinella ⭐4.9", comune:"🏛️ Rathaus Uta",
    traspT:"🚌 Verkehrsmittel", orariV:"Fahrplan",
    emg:<>🚨 Notfälle: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Krankenwagen: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Feuerwehr: <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Wo man isst", top:"⭐ nicht verpassen",
    sec1:"In Uta — zu Fuß", sec2:"Cafés & Bars", sec3:"Umgebung — 10/20 Min", sec4:"Cagliari — frischer Fisch ~20 Min",
    sec5:"Cagliari — die großen Klassiker", sec6:"Typische sardische Küche",
    consigliato:"EMPFOHLEN", vicino:"nah",
    sardaT:"Die sardische Küche", sardaSub:"Blue Zone · UNESCO-Erbe · Ursprünglichkeit",
    sardaTxt:<>Sardinien ist eine der fünf <strong style={{color:c.sand}}>Blue Zones</strong> der Welt — Orte, an denen die Menschen am längsten leben. Das Geheimnis? Eine jahrtausendealte Ernährung: Hülsenfrüchte, Grießbrot, Pecorino-Käse, natives Olivenöl extra und Cannonau-Wein, reich an Antioxidantien.</>,
    weekend:<>💡 Am Wochenende <strong style={{color:"rgba(245,240,232,0.7)"}}>immer reservieren</strong>. Fragen Sie immer nach dem <strong style={{color:"rgba(245,240,232,0.7)"}}>Hauswein</strong> — oft ein lokaler Cannonau oder Vermentino.</> },
  eventi:{ title:"Feste & Veranstaltungen", sett:"🔔 Diese Woche", cosaT:"🔍 Was ist diese Woche los?",
    perConc:"Für aktuelle Konzerte, Feste und Veranstaltungen in Echtzeit:", apriV:"öffnen",
    r1:"🌐 Sardegna Turismo — Events", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Rathaus Uta — News",
    cal:"Kalender lokaler Traditionen", inCorso:"Aktuell",
    tip:<>💡 Wenn Ihr Aufenthalt mit der <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5.–9. Sept.) oder mit <strong style={{color:c.sand}}>Sant'Efisio</strong> zusammenfällt, haben Sie großes Glück!</> },
  rec:{ title:"Bewertungen & Social",
    grazie:<>Danke, dass Sie sich für<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em> entschieden haben</>,
    txt:"Eine Bewertung oder ein Tag in den sozialen Medien hilft uns enorm, diesen Ort bekannt zu machen. Es dauert nur zwei Minuten — und bedeutet uns sehr viel.",
    lascia:"Bewertung hinterlassen", googleSub:"Eine Bewertung auf Google Maps schreiben",
    presto:"Bald", prestoSub:"Seite in Kürze verfügbar", social:"Folgen Sie uns auf Social Media",
    bkEccez:"Hervorragend", bkSub:"1 Bewertung · Gästebewertung", bkLeggi:"Bewertungen auf Booking.com lesen",
    bkCatT:"Bewertung nach Kategorie", bkCat:["Personal","Ausstattung","Sauberkeit","Komfort","Preis-Leistung","Lage"],
    foto:<>Ein Foto gemacht?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>Taggen Sie uns und wir teilen es!</em></>,
    colpitoT:"Was hat Ihnen am besten gefallen?",
    colpito:["Die Sauberkeit und Pflege der Räume","Die originalen Fresken aus den 50er Jahren","Die Lage und die nahen Dienste","Die Veranda und der private Garten","Die Hilfsbereitschaft der Gastgeber"] },
  spesa:{ title:"Einkaufen", utaT:"🏠 In Uta — zu Fuß", conad:"🛒 Conad — der nächste",
    coopSub:"Mo–Sa 8:00–13:00 / 17:00–20:00 · So 8:30–12:30",
    mdSub:"Mo–So 8:30–20:00 durchgehend",
    circT:"🚗 Umgebung — ~15 Min", circSub:"Mo–Sa 8:30–21:30 · So 8:30–14:00/16:30–21:00", vicinoV:"nah",
    tip:<>💡 Der <strong style={{color:c.sand}}>COOP</strong> hat die größte Auswahl. Der <strong style={{color:c.sand}}>MD</strong> ist ideal zum Auffüllen, durchgehend geöffnet.</> },
  faq:{ title:"Häufige Fragen", raccT:"Mülltrennung",
    raccTxt:"Die Abholtage für die einzelnen Abfallarten stehen im offiziellen COSIR-Kalender, der immer aktuell ist. Die Beutel finden Sie in der Wohnung; der Kalender hängt auch in der Küche aus.",
    esp:<><strong style={{color:c.sand}}>Bereitstellung:</strong> bis 6:00 Uhr morgens oder am Vorabend nach 20:00 Uhr. Schwarze Säcke verboten.<br/>Offizielle Website: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Offiziellen COSIR-Kalender öffnen", climT:"❄️ Klimaanlagen",
    climTxt:"Steuerbar per WLAN-App oder Fernbedienung. Im Schlafzimmer liegt die Fernbedienung in der Nachttischschublade.",
    emgT:"🚨 Notfälle", emgGen:"🚨 Allgemeine Notfälle", amb:"🚑 Krankenwagen", vf:"🔥 Feuerwehr",
    guardia:"🩺 Bereitschaftsdienst Uta", guardiaSub:"Via Santa Giusta 85 · Werktags 20:00–08:00 · Feiertags 24h",
    cosir:"📞 COSIR Müll", aiutoT:"Brauchen Sie weitere Hilfe?", disp:"Wir sind immer erreichbar!" },
  storia:{ title:"Unsere Geschichte",
    heroT:<>Ein Haus, gebaut,<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>um die Zeit zu überdauern</em></>,
    origini:"Die Ursprünge",
    casaT:<>Das Haus von <em style={{fontStyle:"italic",color:c.hazel}}>Antonio und Maddalena</em></>,
    p1:<>Im Zentrum von Uta, im Herzen des Campidano, stand eines der größten Häuser des Dorfes. Zwei Stockwerke, über 260 Quadratmeter, gebaut aus <strong>Ladiri</strong> — Ziegeln aus rohem Lehm und geknetetem Stroh, die traditionelle Bautechnik, die den Mauern eine Dicke und Wärme verleiht, die Beton nie nachahmen konnte. Drumherum ein U-förmiger Garten von fast tausend Quadratmetern.</>,
    p2:<>Es war das Haus von <strong>Antonio Lecca</strong> und <strong>Maddalena Carboni</strong>, die hier ihre zwei Kinder großzogen und vier Enkel geboren sahen. Unter ihnen ist <strong>Alessandro</strong> derjenige, der es am meisten erlebt hat: die Kindheit in diesem Hof, die Familienessen, die Düfte der Küche mit ihrer blumenbemalten Decke.</>,
    p3:<>Im Mittelpunkt von allem stand <strong>Maddalena</strong>, im ganzen Dorf als außergewöhnliche Köchin bekannt. Sie hatte ihren eigenen <strong>Holzofen</strong>, in dem sie jeden Tag Brot und Süßes buk, das ihre Hände einzigartig zu machen wussten.</>,
    p4:<>In einer Ecke des Gartens steht noch heute ihr <strong>Zitronenbaum</strong>. Er ist über vierzig Jahre alt. Wir brachten es nicht übers Herz, ihn anzurühren.</>,
    quote:"\u201CDie Decken wurden in den 50er Jahren von Hand bemalt — Blumen in der Küche, goldene Geometrien im Schlafzimmer. Der Zitronenbaum ist noch derselbe von damals. Wir brachten es nicht übers Herz, irgendetwas anzurühren.\u201D",
    pills:[{l:"Bauweise",v:"Mauern aus Ladiri"},{l:"Fläche",v:"260 m² + Garten ~1.000 m²"},{l:"Familie",v:"2 Kinder, 4 Enkel"},{l:"Kauf",v:"Alessandro und Roberta, 2022"}],
    restLbl:"Die Restaurierung",
    restT:<>Erneuern, ohne <em style={{fontStyle:"italic",color:c.hazel}}>etwas auszulöschen</em></>,
    r1:<>2022 kaufen Alessandro und Roberta das Anwesen mit einer klaren Idee: alles zu bewahren, was es einzigartig macht, und daraus einen Ort zu schaffen, der Gäste willkommen heißt. Die erste Wohnung — etwa 50 Quadratmeter mit überdachter Veranda und privatem Gärtchen — wird renoviert, ohne die Seele des Gebäudes anzutasten.</>,
    r2:<>Die Ladiri-Mauern sind geblieben. Die Fresken aus den 50er Jahren auch — die rosa Blumen der Küche und die goldenen Geometrien des Schlafzimmers, gemalt von lokalen Handwerkern. Verändert hat sich der Komfort: neue Anlagen, ausgestattete Küche, Bad mit Massagesäule, Glasfaser, zwei WLAN-Klimaanlagen. In den nächsten Jahren entstehen zwei weitere Wohnungen und ein Veranstaltungssaal mit Blick auf den großen Garten.</>,
    simLbl:"Das Symbol",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>das Zeichen des nuraghischen Volkes</em></>,
    s1:<><strong>Sa pintadera</strong> ist eine Scheibe aus Terrakotta oder Stein mit eingravierten geometrischen Mustern und einem kleinen Griff auf der Rückseite. Sie wurde als Stempel benutzt: Sie drückte das eigene Zeichen auf das rituelle Brot, auf die Haut, auf frischen Ton. Jede Pintadera war anders: Sie war das Zeichen einer Familie, das Siegel einer Identität.</>,
    s2:<>Funde gibt es auf der ganzen Insel — von Su Nuraxi in Barumini bis zum Heiligtum von Santa Cristina, von den Gigantengräbern bis zu den heiligen Brunnen der Gegend um Nuoro. Ein visuelles Alphabet, das noch niemand vollständig entschlüsseln konnte.</>,
    arroda:"\u201CSa arroda de tempu\u201D — das Rad der Zeit. Einige Forscher vermuten, dass die eingravierten Geometrien einen astronomischen Kalender kodieren: Sonnen-, Mond- und Venuszyklus in einem einzigen kreisförmigen Instrument.",
    appr:"Mehr erfahren: Brotstempel oder astronomischer Kalender?", apprSub:"Ein Artikel, der beide Hypothesen untersucht",
    cicli:[{e:"☀️",t:"Sonnenzyklus",d:"Sonnenwenden und Tagundnachtgleichen — die vier Kardinalmomente des Jahres"},{e:"🌙",t:"Mondzyklus",d:"Die Kerben entsprechen den Tagen des Mondmonats"},{e:"⭐",t:"Venuszyklus",d:"Die Kreise synchronisieren den 8-jährigen Venuszyklus"},{e:"🌾",t:"Agropastoraler Kalender",d:"Die Feste im Rhythmus der Jahreszeiten und der Ernte"}],
    nomeLbl:"Der Name",
    nomeT:<>Warum wir <em style={{fontStyle:"italic",color:c.hazel}}>dieses Symbol</em> gewählt haben</>,
    n1:<>Ein Haus aus Ladiri, mit handgemalten Fresken, in einem Dorf des Campidano, in dem vier Generationen ihre Spuren hinterlassen haben — verdiente einen Namen mit demselben Gewicht.</>,
    n2:<><strong>Corte Pintadera</strong> ist der Name dieses Ortes. Die Corte ist der gemeinsame Raum, um den sich alles organisiert. Die Pintadera ist das Zeichen, das ihn auszeichnet: alt, sardisch, unwiederholbar.</>,
    closT:<>Ein Haus mit <em style={{fontStyle:"italic",color:"#CEAD85"}}>seinem eigenen Zeichen in der Welt</em></>,
    closSub:<>Ladiri-Mauern, handbemalte Decken, ein Garten, der wartete.<br/>Corte Pintadera trägt all das in sich — und es ist noch Platz für Ihre Geschichte.</> },
},
// ─────────────────────────── PORTUGUÊS ────────
pt: {
  home:{ arrivo:"À chegada", guida:"O guia completo",
    benv:"Bem-vindo", benvSub:"Informações & contactos",
    checkin:"Check-in / out", checkinSub:"Horários & instruções",
    app:"O apartamento", wifi:"Wi-Fi", regole:"Regras da casa", esplora:"A descobrir",
    risto:"Restaurantes", eventi:"Eventos", spesa:"Compras", servizi:"Serviços úteis",
    storia:"A nossa história", faq:"FAQ", rec:"Avaliações & Redes" },
  back:{ home:"Início", esplora:"A descobrir" },
  benv:{ title:"Bem-vindos à Corte Pintadera", felici:"Estamos felizes por vos receber",
    intro:<>Este guia vai ajudar-vos a aproveitar ao máximo a estadia.<br/>Para qualquer necessidade, não hesitem em contactar-nos.</>,
    dove:"Onde estamos", maps:"Abrir no Google Maps", come:"Como chegar",
    volo:"De avião ou de barco", aeroporto:"Aeroporto de Cagliari-Elmas", porto:"Porto de Cagliari",
    citta:"De outras cidades", pubblico:"Transportes públicos",
    treno:"Comboio · Trenitalia", trenoSub:"Estação Uta-Villaspeciosa ~5 min · 06:27–20:53",
    bus:"Autocarro · ARST", busSub:"Linha 125 Uta–Cagliari · Primeiro 05:40 · Último ~22:00",
    ctm:"Autocarro urbano · CTM", ctmSub:"Rede metropolitana de Cagliari",
    qui:"Estamos aqui para vós", propr:"Proprietário · sempre disponível", email:"Email", social:"Sigam-nos nas redes" },
  checkin:{ title:"Check-in / out", arrivo:"Chegada", dalle:"a partir das", partenza:"Partida", entro:"até às",
    arrT:"🧳 À chegada",
    arr:["Iremos receber-vos pessoalmente — ou deixamos as instruções para o self check-in",
      "Estacionamento livre na rua em frente à entrada",
      "Encontrarão lençóis, toalhas e kit de boas-vindas já prontos"],
    parT:"👋 À partida",
    par:["Deixem as chaves na mesa da cozinha",
      "Deitem o lixo seguindo a recolha seletiva (ver FAQ)",
      "Precisam de guardar a bagagem algumas horas? É só pedir!"],
    pkT:"🚗 Estacionamento & acesso",
    pk:["Estacionamento livre e gratuito na Via Cimitero",
      "O portão abre-se com o comando que encontrarão no interior",
      "Intercomunicador disponível se necessário"] },
  wifi:{ title:"Wi-Fi", fibra:"Fibra ótica — disponível em todo o lado",
    cop:"Cobertura em todo o apartamento e na varanda.", rete:"Nome da rede", pass:"Palavra-passe",
    prob:"Problemas de ligação?",
    probTxt:"Desliguem e voltem a ligar o router (na cozinha). Se o problema persistir, contactem-nos." },
  app:{ title:"O Apartamento", sub:"50 m² interior · 40 m² varanda",
    interno:"Interior", veranda:"Varanda", clima:"A/C Wi-Fi",
    cucinaT:"🍳 Cozinha",
    cucina:["Placa de indução","Forno elétrico","Máquina de lavar loiça","Frigorífico","Ar condicionado Wi-Fi","Mesa extensível + 4 cadeiras","Sofá-cama de 3 lugares","Porta de vidro para a varanda"],
    affC:<><strong>Fresco dos anos 50</strong> — motivos florais cor-de-rosa pintados à mão por artesãos sardos</>,
    cameraT:"🛏️ Quarto",
    camera:["Cama de casal com arrumação","Roupeiro de ~4 metros","Cómoda alta","Mesas de cabeceira com candeeiros de ambos os lados","Ar condicionado Wi-Fi"],
    affK:<><strong>Fresco dos anos 50</strong> — geometrias douradas, único no género</>,
    bagnoT:"🚿 Casa de banho",
    bagno:["Cabine de duche de correr 80×100 cm","Coluna de duche com jatos de massagem","Móvel de lavatório com gavetas","Espelho com iluminação LED","Ventilação automática"],
    verT:"🌿 Varanda e jardim",
    verTxt:"Varanda coberta de ~40 m² com acesso direto pela porta de vidro da cozinha. Pequeno jardim privado — ideal para pequenos-almoços ao ar livre e aperitivos ao pôr do sol.",
    tags:["Wi-Fi fibra","2 Ar condicionados","Estacionamento livre","Jardim privado","Máquina de loiça","Forno"],
    ladiriT:<>Construída em <em>ladiri</em></>,
    ladiriTxt:<>A casa é construída com os tradicionais tijolos de argila crua secos ao sol, típicos da arquitetura rural do Campidano sardo. Os <strong>ladiri</strong> garantem um excelente isolamento natural: fresca no verão, quente no inverno. Um património construtivo milenar, autêntico e raro.</> },
  regole:{ title:"Regras da casa", genT:"📋 Gerais",
    gen:[<span>Check-in a partir das <strong>17:00</strong> — Check-out até às <strong>09:00</strong></span>,
      "Não são permitidos animais domésticos","Proibido fumar no interior",
      <span>Silêncio das <strong>23:00</strong> às <strong>08:00</strong></span>,
      "Número máximo de hóspedes conforme a reserva"],
    pulT:"🧹 Limpeza e cuidado",
    pul:["Deixar a casa arrumada à partida","Separar o lixo (instruções nas FAQ)","Comunicar quaisquer danos antes do check-out",
      "Esvaziar todos os caixotes do lixo da cozinha e da casa de banho e levar os sacos aos ecopontos por baixo da escada exterior",
      <span>Usar sempre o caixote do lixo da casa de banho para papel higiénico, cotonetes, pensos, etc. — <strong>não deitar nada na sanita</strong></span>],
    sicT:"🔒 Segurança",
    sic:["Fechar sempre à chave ao sair","Não deixar torneiras abertas nem o fogão ligado",
      <span>Emergências: <strong>112</strong></span>] },
  pos:{ title:"Como chegar", ind:"Morada", maps:"Abrir no Google Maps",
    mezziT:"🚌 Transportes públicos", arst:"ARST Linha 125 (Uta–Cagliari)", arstSub:"Primeiro 05:40 · Último ~22:00 · todos os dias",
    treno:"🚆 Comboio Uta-Villaspeciosa", trenoSub:"06:27–20:53 · ~22 min para Cagliari",
    autoT:"🚗 De carro — distâncias", aeroporto:"✈️ Aeroporto de Cagliari", poetto:"🏖️ Poetto (praia)",
    cagliariC:"🏙️ Centro de Cagliari", macch:"🏭 Zona ind. Macchiareddu", oasi:"🦜 Oásis WWF Santa Gilla", porto:"⛴️ Porto de Cagliari" },
  esplora:{ title:"A descobrir", meteoLbl:"📍 Uta · Meteorologia em direto", load:"⏳ A carregar meteorologia…",
    perc:"Sensação", noMeteo:"Meteorologia indisponível", retry:"Tentar de novo",
    ctaSun:<>Com este sol,<br/><em style={{fontStyle:"italic",color:c.hazel}}>o que te apetece descobrir?</em></>,
    ctaRain:<>Dia de chuva?<br/><em style={{fontStyle:"italic",color:c.hazel}}>Cultura & história esperam por ti.</em></>,
    ctaOther:<>Com este clima,<br/><em style={{fontStyle:"italic",color:c.hazel}}>o que te apetece descobrir?</em></>,
    ctaNone:<>Escolhe a tua<br/><em style={{fontStyle:"italic",color:c.hazel}}>próxima aventura.</em></>,
    scegli:"Escolhe uma categoria ↓", esp:"experiências", tocca:"toca para abrir no Maps",
    days:["Hoje","Amanhã","Depois de amanhã"],
    wmo:["Sol","Pouco nublado","Encoberto","Nevoeiro","Chuvisco","Chuva","Neve","Aguaceiros","Trovoada"] },
  servizi:{ title:"Serviços úteis", saluteT:"💊 Saúde",
    guardia:"🩺 Médico de urgência — Via S. Giusta 85", guardiaSub:"Dias úteis 20:00–08:00 · Feriados 24h",
    vicino:"perto", lavT:"🧺 Lavandarias", lavGettoni:"Lavandaria self-service — Via Umberto I 33, Uta",
    lavSub:"Aberta todos os dias · seg–sáb 06:30 · dom 07:00 · tel. 340 268 7577 · também recolha ao domicílio",
    atmT:"🏦 Multibanco ATM", atmSub:"Balcão com ATM · tel. 070 969008", postamatSub:"ATM 24h · 7 dias por semana",
    altriT:"🏛️ Outros serviços", tabacch:"🚬 Tabacaria Coccinella ⭐4.9", comune:"🏛️ Câmara Municipal de Uta",
    traspT:"🚌 Transportes", orariV:"horários",
    emg:<>🚨 Emergências: <strong style={{color:"white"}}>112</strong> &nbsp;·&nbsp; Ambulância: <strong style={{color:"white"}}>118</strong> &nbsp;·&nbsp; Bombeiros: <strong style={{color:"white"}}>115</strong></> },
  risto:{ title:"Onde comer", top:"⭐ a não perder",
    sec1:"Em Uta — a pé", sec2:"Cafés & bares", sec3:"Arredores — 10/20 min", sec4:"Cagliari — peixe fresco ~20 min",
    sec5:"Cagliari — os grandes clássicos", sec6:"Cozinha sarda típica",
    consigliato:"RECOMENDADO", vicino:"perto",
    sardaT:"A cozinha sarda", sardaSub:"Blue Zone · Património UNESCO · Autenticidade",
    sardaTxt:<>A Sardenha é uma das cinco <strong style={{color:c.sand}}>Blue Zones</strong> do mundo — lugares onde se vive mais tempo. O segredo? Uma dieta milenar: leguminosas, pão de sêmola, queijos pecorino, azeite virgem extra e vinho Cannonau, rico em antioxidantes.</>,
    weekend:<>💡 Ao fim de semana, <strong style={{color:"rgba(245,240,232,0.7)"}}>reservem sempre</strong>. Peçam sempre o <strong style={{color:"rgba(245,240,232,0.7)"}}>vinho da casa</strong> — muitas vezes é um Cannonau ou Vermentino local.</> },
  eventi:{ title:"Festas e eventos", sett:"🔔 Esta semana", cosaT:"🔍 O que há esta semana?",
    perConc:"Para concertos, festivais e espetáculos atualizados em tempo real:", apriV:"abrir",
    r1:"🌐 Sardegna Turismo — eventos", r2:"🏙️ Cagliari Turismo", r3:"🏛️ Câmara de Uta — notícias",
    cal:"Calendário de tradições locais", inCorso:"A decorrer",
    tip:<>💡 Se a vossa estadia coincidir com a <strong style={{color:c.sand}}>Festa di Santa Maria</strong> (5–9 set) ou com <strong style={{color:c.sand}}>Sant'Efisio</strong>, têm imensa sorte!</> },
  rec:{ title:"Avaliações & Redes",
    grazie:<>Obrigado por escolherem<br/><em style={{fontStyle:"italic",color:c.hazel}}>Corte Pintadera</em></>,
    txt:"Uma avaliação ou uma menção nas redes ajuda-nos imenso a dar a conhecer este lugar. São só dois minutos — e para nós vale muitíssimo.",
    lascia:"Deixe uma avaliação", googleSub:"Escreva uma avaliação no Google Maps",
    presto:"Em breve", prestoSub:"Página a chegar — em breve disponível", social:"Sigam-nos nas redes",
    bkEccez:"Excecional", bkSub:"1 avaliação · Pontuação dos hóspedes", bkLeggi:"Leia as avaliações no Booking.com",
    bkCatT:"Pontuações por categoria", bkCat:["Pessoal","Comodidades","Limpeza","Conforto","Custo-benefício","Localização"],
    foto:<>Tiraram uma foto?<br/><em style={{fontStyle:"italic", color:"#CEAD85"}}>Marquem-nos e nós partilhamos!</em></>,
    colpitoT:"O que mais vos impressionou?",
    colpito:["A limpeza e o cuidado dos espaços","Os frescos originais dos anos 50","A localização e os serviços próximos","A varanda e o jardim privado","A disponibilidade dos proprietários"] },
  spesa:{ title:"Fazer compras", utaT:"🏠 Em Uta — a pé", conad:"🛒 Conad — o mais próximo",
    coopSub:"Seg–Sáb 8:00–13:00 / 17:00–20:00 · Dom 8:30–12:30",
    mdSub:"Seg–Dom 8:30–20:00 horário contínuo",
    circT:"🚗 Arredores — ~15 min", circSub:"Seg–Sáb 8:30–21:30 · Dom 8:30–14:00/16:30–21:00", vicinoV:"perto",
    tip:<>💡 O <strong style={{color:c.sand}}>COOP</strong> é o mais completo. O <strong style={{color:c.sand}}>MD</strong> é ideal para abastecer, com horário contínuo.</> },
  faq:{ title:"Perguntas frequentes", raccT:"Recolha seletiva",
    raccTxt:"Os dias de recolha de cada tipo de resíduo estão indicados no calendário oficial COSIR, sempre atualizado. Encontrará os sacos na casa; o calendário está também afixado na cozinha.",
    esp:<><strong style={{color:c.sand}}>Colocar o lixo:</strong> até às 6:00 da manhã ou na véspera após as 20:00. Sacos pretos proibidos.<br/>Site oficial: <a href="https://uta.cosir.org" target="_blank" rel="noreferrer" style={{color:c.hazelL}}>uta.cosir.org</a></>,
    pdf:"Abrir o calendário oficial COSIR", climT:"❄️ Ar condicionado",
    climTxt:"Controláveis via app Wi-Fi ou comando. No quarto, o comando está na gaveta da mesa de cabeceira.",
    emgT:"🚨 Emergências", emgGen:"🚨 Emergências gerais", amb:"🚑 Ambulância", vf:"🔥 Bombeiros",
    guardia:"🩺 Médico de urgência Uta", guardiaSub:"Via Santa Giusta 85 · Dias úteis 20:00–08:00 · Feriados 24h",
    cosir:"📞 COSIR lixo", aiutoT:"Precisam de mais ajuda?", disp:"Estamos sempre disponíveis!" },
  storia:{ title:"A nossa história",
    heroT:<>Uma casa construída<br/><em style={{fontStyle:"italic",color:"#CEAD85"}}>para durar no tempo</em></>,
    origini:"As origens",
    casaT:<>A casa de <em style={{fontStyle:"italic",color:c.hazel}}>Antonio e Maddalena</em></>,
    p1:<>No centro de Uta, no coração do Campidano, encontrava-se uma das maiores casas da aldeia. Dois pisos, mais de 260 metros quadrados, construída em <strong>ladiri</strong> — tijolos de argila crua e palha amassada, a técnica de construção tradicional que dá às paredes uma espessura e um calor que o cimento nunca soube imitar. Ao redor, um jardim em forma de U com quase mil metros quadrados.</>,
    p2:<>Era a casa de <strong>Antonio Lecca</strong> e <strong>Maddalena Carboni</strong>, que aqui criaram os seus dois filhos e viram nascer quatro netos. Entre eles, <strong>Alessandro</strong> é o que mais a viveu: a infância passada naquele pátio, os almoços em família, os aromas da cozinha com o teto pintado de flores.</>,
    p3:<>No centro de tudo estava <strong>Maddalena</strong>, conhecida em toda a aldeia como uma cozinheira extraordinária. Tinha o seu próprio <strong>forno a lenha</strong>, onde todos os dias cozia pão e doces que as suas mãos sabiam tornar únicos.</>,
    p4:<>Num canto do jardim, ainda hoje, está o seu <strong>limoeiro</strong>. Tem mais de quarenta anos. Não tivemos coragem de lhe tocar.</>,
    quote:"\u201COs tetos foram pintados à mão nos anos 50 — flores na cozinha, geometrias douradas no quarto. O limoeiro ainda é o de então. Não tivemos coragem de tocar em nada.\u201D",
    pills:[{l:"Construção",v:"Paredes em ladiri"},{l:"Superfície",v:"260 m² + jardim ~1.000 m²"},{l:"Família",v:"2 filhos, 4 netos"},{l:"Compra",v:"Alessandro e Roberta, 2022"}],
    restLbl:"O restauro",
    restT:<>Renovar sem <em style={{fontStyle:"italic",color:c.hazel}}>apagar nada</em></>,
    r1:<>Em 2022 Alessandro e Roberta compram a propriedade com uma ideia precisa: preservar tudo o que a torna única e transformá-la num lugar capaz de acolher. O primeiro apartamento — cerca de 50 metros quadrados com varanda coberta e jardim privado — é renovado sem tocar na alma do edifício.</>,
    r2:<>As paredes em ladiri permaneceram. Os frescos dos anos 50 também — as flores cor-de-rosa da cozinha e as geometrias douradas do quarto, pintados por artesãos locais. O que mudou foi o conforto: novas instalações, cozinha equipada, casa de banho com coluna de massagem, fibra ótica, dois ar condicionados Wi-Fi. Nos próximos anos nascerão mais dois apartamentos e uma sala de eventos virada para o grande jardim.</>,
    simLbl:"O símbolo",
    simT:<>Sa Pintadera — <em style={{fontStyle:"italic",color:c.hazel}}>a marca do povo nurágico</em></>,
    s1:<><strong>Sa pintadera</strong> é um disco de terracota ou pedra com motivos geométricos gravados e uma pequena pega no verso. Era usada como carimbo: imprimia a sua marca no pão ritual, na pele, na argila fresca. Cada pintadera era diferente: era a marca de uma família, o selo de uma identidade.</>,
    s2:<>Os achados cobrem toda a ilha — de Su Nuraxi de Barumini ao santuário de Santa Cristina, das tumbas dos gigantes aos poços sagrados da região de Nuoro. Um alfabeto visual que ninguém ainda soube decifrar completamente.</>,
    arroda:"\u201CSa arroda de tempu\u201D — a roda do tempo. Alguns estudiosos propõem que as geometrias gravadas codificam um calendário astronómico: ciclo solar, lunar e venusiano num único instrumento circular.",
    appr:"Saber mais: carimbo para o pão ou calendário astronómico?", apprSub:"Um artigo que explora ambas as hipóteses",
    cicli:[{e:"☀️",t:"Ciclo solar",d:"Solstícios e equinócios — os quatro momentos cardeais do ano"},{e:"🌙",t:"Ciclo lunar",d:"As marcas coincidem com os dias do mês lunar"},{e:"⭐",t:"Ciclo de Vénus",d:"Os círculos sincronizam o ciclo venusiano de 8 anos"},{e:"🌾",t:"Calendário agropastoril",d:"As festas ligadas às estações e à colheita"}],
    nomeLbl:"O nome",
    nomeT:<>Porque escolhemos <em style={{fontStyle:"italic",color:c.hazel}}>este símbolo</em></>,
    n1:<>Uma casa construída em ladiri, com frescos pintados à mão, numa aldeia do Campidano onde quatro gerações deixaram a sua marca — merecia um nome que tivesse o mesmo peso.</>,
    n2:<><strong>Corte Pintadera</strong> é o nome deste lugar. A corte é o espaço partilhado em torno do qual tudo se organiza. A pintadera é o sinal que o distingue: antigo, sardo, irrepetível.</>,
    closT:<>Uma casa com <em style={{fontStyle:"italic",color:"#CEAD85"}}>a sua marca no mundo</em></>,
    closSub:<>Paredes em ladiri, tetos pintados à mão, um jardim que esperava.<br/>Corte Pintadera traz tudo isto — e ainda há espaço para a tua história.</> },
},
}; // fine dizionario T

// ══════════════════════════════════════════════
// ── DATI CONDIVISI MULTILINGUE ────────────────
// ══════════════════════════════════════════════
// Le foto/link/emoji/dist restano invariati; title, mood e desc sono tradotti con M()
const TABS_DATA = [
  {
    id:"vicino", emoji:"🌿", color:"#2d4a2d", accent:"#6db86d",
    label:M("A due passi","Nearby","A dos pasos","À deux pas","In der Nähe","A dois passos"),
    tagline:M("Tutto raggiungibile a piedi o in 15 minuti","All within walking distance or 15 minutes","Todo a pie o en 15 minutos","Tout à pied ou en 15 minutes","Alles zu Fuß oder in 15 Minuten","Tudo a pé ou em 15 minutos"),
    data:[
      { emoji:"⛪", dist:"5 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Santa_Maria_xtazex.jpg", link:"https://maps.google.com/?q=Chiesa+Santa+Maria+Uta",
        title:M("Chiesa romanica di Santa Maria","Romanesque Church of Santa Maria","Iglesia románica de Santa Maria","Église romane de Santa Maria","Romanische Kirche Santa Maria","Igreja românica de Santa Maria"),
        mood:M("Patrimonio del XII sec.","12th-century heritage","Patrimonio del s. XII","Patrimoine du XIIe s.","Erbe des 12. Jh.","Património do séc. XII"),
        desc:M("Pietra calcarea, volte basse e luce filtrata. Una delle chiese medievali più integre del Campidano — vale dieci minuti di sosta.","Limestone, low vaults and filtered light. One of the best-preserved medieval churches of the Campidano — worth a ten-minute stop.","Piedra caliza, bóvedas bajas y luz filtrada. Una de las iglesias medievales mejor conservadas del Campidano — merece una parada de diez minutos.","Pierre calcaire, voûtes basses et lumière filtrée. L'une des églises médiévales les mieux conservées du Campidano — vaut un arrêt de dix minutes.","Kalkstein, niedrige Gewölbe und gefiltertes Licht. Eine der am besten erhaltenen mittelalterlichen Kirchen des Campidano — einen Halt von zehn Minuten wert.","Pedra calcária, abóbadas baixas e luz filtrada. Uma das igrejas medievais mais bem preservadas do Campidano — vale dez minutos de paragem.") },
      { emoji:"🌳", dist:"5 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/parcom_uta_xnujth.jpg", link:"https://maps.google.com/?q=Parco+S+Ollivariu+Uta",
        title:M("Parco S'Ollivariu","S'Ollivariu Park","Parque S'Ollivariu","Parc S'Ollivariu","Park S'Ollivariu","Parque S'Ollivariu"),
        mood:M("Mattinata tranquilla","A quiet morning","Mañana tranquila","Matinée tranquille","Ruhiger Morgen","Manhã tranquila"),
        desc:M("Lecci, sentieri ombreggiati e silenzio. Il posto giusto per iniziare la giornata prima che il paese si svegli.","Holm oaks, shady paths and silence. The right place to start the day before the village wakes up.","Encinas, senderos sombreados y silencio. El lugar ideal para empezar el día antes de que el pueblo despierte.","Chênes verts, sentiers ombragés et silence. L'endroit idéal pour commencer la journée avant que le village ne s'éveille.","Steineichen, schattige Wege und Stille. Der richtige Ort, um den Tag zu beginnen, bevor das Dorf erwacht.","Azinheiras, trilhos sombreados e silêncio. O lugar certo para começar o dia antes de a aldeia acordar.") },
      { emoji:"🎬", dist:M("a piedi","on foot","a pie","à pied","zu Fuß","a pé"), photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/cinema_vittoria_mgdibo.jpg", link:"https://maps.google.com/?q=Cinema+Vittoria+Uta+Sardegna",
        title:M("Cinema Vittoria","Cinema Vittoria","Cine Vittoria","Cinéma Vittoria","Kino Vittoria","Cinema Vittoria"),
        mood:M("Sala storica anni '50","Historic 1950s cinema","Sala histórica de los 50","Salle historique des années 50","Historisches Kino der 50er","Sala histórica dos anos 50"),
        desc:M("Una piccola sala cinematografica storica nel cuore di Uta. Programmazione mista, atmosfera d'altri tempi. Un'esperienza autentica e rara.","A small historic cinema in the heart of Uta. Mixed programming, old-world atmosphere. An authentic and rare experience.","Una pequeña sala de cine histórica en el corazón de Uta. Programación variada, ambiente de otros tiempos. Una experiencia auténtica y rara.","Une petite salle de cinéma historique au cœur d'Uta. Programmation variée, atmosphère d'antan. Une expérience authentique et rare.","Ein kleines historisches Kino im Herzen von Uta. Gemischtes Programm, Atmosphäre vergangener Zeiten. Ein authentisches und seltenes Erlebnis.","Uma pequena sala de cinema histórica no coração de Uta. Programação variada, atmosfera de outros tempos. Uma experiência autêntica e rara.") },
      { emoji:"🦩", dist:"10 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747029/santa_gilla_hnx9nk.jpg", link:"https://maps.google.com/?q=Laguna+Santa+Gilla+Cagliari",
        title:M("Laguna di Santa Gilla — uccelli migratori","Santa Gilla Lagoon — migratory birds","Laguna de Santa Gilla — aves migratorias","Lagune de Santa Gilla — oiseaux migrateurs","Lagune Santa Gilla — Zugvögel","Laguna de Santa Gilla — aves migratórias"),
        mood:M("Spettacolo naturale gratuito","Free natural spectacle","Espectáculo natural gratuito","Spectacle naturel gratuit","Kostenloses Naturschauspiel","Espetáculo natural gratuito"),
        desc:M("Laguna costiera dove svernano fenicotteri rosa, aironi, cormorani e migliaia di uccelli migratori. Non serve una riserva — basta affacciarsi dalla strada panoramica per uno spettacolo unico.","Coastal lagoon where pink flamingos, herons, cormorants and thousands of migratory birds spend the winter. No reserve needed — just look out from the panoramic road for a unique spectacle.","Laguna costera donde invernan flamencos rosados, garzas, cormoranes y miles de aves migratorias. No hace falta una reserva — basta asomarse desde la carretera panorámica para un espectáculo único.","Lagune côtière où hivernent flamants roses, hérons, cormorans et des milliers d'oiseaux migrateurs. Pas besoin de réserve — il suffit de s'arrêter sur la route panoramique pour un spectacle unique.","Küstenlagune, in der rosa Flamingos, Reiher, Kormorane und Tausende Zugvögel überwintern. Kein Reservat nötig — ein Blick von der Panoramastraße genügt für ein einzigartiges Schauspiel.","Laguna costeira onde invernam flamingos cor-de-rosa, garças, corvos-marinhos e milhares de aves migratórias. Não é preciso reserva — basta olhar da estrada panorâmica para um espetáculo único.") },
      { emoji:"🧂", dist:"10 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744896/conti_vecchi_xdy4by.jpg", link:"https://maps.google.com/?q=Saline+Conti+Vecchi+Assemini",
        title:M("Saline di Conti Vecchi","Conti Vecchi Salt Flats","Salinas de Conti Vecchi","Salines de Conti Vecchi","Salinen von Conti Vecchi","Salinas de Conti Vecchi"),
        mood:M("Foto imperdibili","Unmissable photos","Fotos imperdibles","Photos incontournables","Unverzichtbare Fotos","Fotos imperdíveis"),
        desc:M("Ex saline industriali con vasche che cambiano colore dal bianco candido al rosa acceso. Un paesaggio surreale e fotogenico a due passi.","Former industrial salt flats with basins that change colour from pure white to bright pink. A surreal, photogenic landscape close by.","Antiguas salinas industriales con balsas que cambian de color del blanco puro al rosa intenso. Un paisaje surrealista y fotogénico muy cerca.","Anciennes salines industrielles aux bassins qui passent du blanc pur au rose vif. Un paysage surréaliste et photogénique tout près.","Ehemalige industrielle Salinen mit Becken, die ihre Farbe von reinem Weiß zu leuchtendem Rosa wechseln. Eine surreale, fotogene Landschaft ganz in der Nähe.","Antigas salinas industriais com tanques que mudam de cor do branco puro ao rosa intenso. Uma paisagem surreal e fotogénica ali perto.") },
      { emoji:"🦌", dist:"20 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747199/wwf_xq90yh.webp", link:"https://maps.google.com/?q=Oasi+WWF+Monte+Arcosu+Uta+Sardegna",
        title:M("Oasi del Cervo e della Luna — Monte Arcosu","Deer and Moon Oasis — Monte Arcosu","Oasis del Ciervo y de la Luna — Monte Arcosu","Oasis du Cerf et de la Lune — Monte Arcosu","Oase des Hirsches und des Mondes — Monte Arcosu","Oásis do Veado e da Lua — Monte Arcosu"),
        mood:M("Foresta primordiale · WWF","Primeval forest · WWF","Bosque primigenio · WWF","Forêt primordiale · WWF","Urwald · WWF","Floresta primordial · WWF"),
        desc:M("La più grande foresta mediterranea privata d'Europa, gestita dal WWF. Sede del rarissimo Cervo sardo. Trekking tra lecci e sughere. All'interno dell'oasi si trova La Locanda dei Buoni e Cattivi: cucina sarda autentica nel bosco — da non perdere.","Europe's largest private Mediterranean forest, run by the WWF. Home to the very rare Sardinian deer. Trekking among holm oaks and cork oaks. Inside the oasis is La Locanda dei Buoni e Cattivi: authentic Sardinian cuisine in the woods — not to be missed.","El mayor bosque mediterráneo privado de Europa, gestionado por WWF. Hogar del rarísimo ciervo sardo. Senderismo entre encinas y alcornoques. Dentro del oasis está La Locanda dei Buoni e Cattivi: cocina sarda auténtica en el bosque — imperdible.","La plus grande forêt méditerranéenne privée d'Europe, gérée par le WWF. Refuge du très rare cerf sarde. Randonnée parmi chênes verts et chênes-lièges. Au sein de l'oasis se trouve La Locanda dei Buoni e Cattivi : cuisine sarde authentique dans les bois — à ne pas manquer.","Europas größter privater Mittelmeerwald, vom WWF verwaltet. Heimat des sehr seltenen sardischen Hirsches. Wandern zwischen Stein- und Korkeichen. In der Oase liegt La Locanda dei Buoni e Cattivi: authentische sardische Küche im Wald — nicht verpassen.","A maior floresta mediterrânica privada da Europa, gerida pelo WWF. Lar do raríssimo veado sardo. Caminhadas entre azinheiras e sobreiros. Dentro do oásis fica La Locanda dei Buoni e Cattivi: cozinha sarda autêntica na floresta — a não perder.") },
      { emoji:"🏞️", dist:"25 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/gutturu_mannu_bomtbd.jpg", link:"https://maps.google.com/?q=Gutturu+Mannu+Sardegna",
        title:M("Parco Naturale di Gutturu Mannu","Gutturu Mannu Nature Park","Parque Natural de Gutturu Mannu","Parc Naturel de Gutturu Mannu","Naturpark Gutturu Mannu","Parque Natural de Gutturu Mannu"),
        mood:M("Wilderness del Sulcis","Sulcis wilderness","Naturaleza salvaje del Sulcis","Nature sauvage du Sulcis","Wildnis des Sulcis","Natureza selvagem do Sulcis"),
        desc:M("Uno dei parchi più estesi e meno frequentati della Sardegna. Boschi di lecci, torrenti, fauna selvatica. Sentieri per tutti i livelli — quasi sconosciuto ai turisti.","One of Sardinia's largest and least-visited parks. Holm oak woods, streams, wildlife. Trails for all levels — almost unknown to tourists.","Uno de los parques más extensos y menos visitados de Cerdeña. Bosques de encinas, arroyos, fauna salvaje. Senderos para todos los niveles — casi desconocido para los turistas.","L'un des parcs les plus vastes et les moins fréquentés de Sardaigne. Forêts de chênes verts, torrents, faune sauvage. Sentiers pour tous les niveaux — presque inconnu des touristes.","Einer der größten und am wenigsten besuchten Parks Sardiniens. Steineichenwälder, Bäche, Wildtiere. Wege für alle Niveaus — bei Touristen fast unbekannt.","Um dos parques mais extensos e menos visitados da Sardenha. Bosques de azinheiras, ribeiros, fauna selvagem. Trilhos para todos os níveis — quase desconhecido dos turistas.") },
    ]
  },
  {
    id:"cagliari", emoji:"🏙️", color:"#1e2d40", accent:"#6aaee0",
    label:M("Cagliari","Cagliari","Cagliari","Cagliari","Cagliari","Cagliari"),
    tagline:M("Il capoluogo in 20 minuti — mare, storia, vita","The capital in 20 minutes — sea, history, life","La capital en 20 minutos — mar, historia, vida","La capitale en 20 minutes — mer, histoire, vie","Die Hauptstadt in 20 Minuten — Meer, Geschichte, Leben","A capital em 20 minutos — mar, história, vida"),
    data:[
      { emoji:"🏖️", dist:"15 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/poetto_hefkna.jpg", link:"https://maps.google.com/?q=Spiaggia+Poetto+Cagliari",
        title:M("Poetto — 11 km di sabbia fine","Poetto — 11 km of fine sand","Poetto — 11 km de arena fina","Poetto — 11 km de sable fin","Poetto — 11 km feiner Sand","Poetto — 11 km de areia fina"),
        mood:M("Mare & relax","Sea & relax","Mar y relax","Mer & détente","Meer & Entspannung","Mar & relax"),
        desc:M("La spiaggia urbana più lunga della Sardegna. D'estate chioschi e movida, in primavera solo vento e orizzonte. Entrambi validi.","Sardinia's longest urban beach. In summer, kiosks and nightlife; in spring, just wind and horizon. Both worth it.","La playa urbana más larga de Cerdeña. En verano chiringuitos y ambiente; en primavera solo viento y horizonte. Ambas valen la pena.","La plus longue plage urbaine de Sardaigne. L'été, kiosques et animation ; au printemps, juste le vent et l'horizon. Les deux valent le détour.","Der längste Stadtstrand Sardiniens. Im Sommer Kioske und Trubel, im Frühling nur Wind und Horizont. Beides lohnt sich.","A praia urbana mais longa da Sardenha. No verão, quiosques e animação; na primavera, só vento e horizonte. Ambos valem a pena.") },
      { emoji:"🥾", dist:"20 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/sella_del_diavolo_xmwacr.jpg", link:"https://maps.google.com/?q=Sella+del+Diavolo+Cagliari",
        title:M("Sella del Diavolo","Sella del Diavolo (Devil's Saddle)","Sella del Diavolo","Sella del Diavolo","Sella del Diavolo","Sella del Diavolo"),
        mood:M("Tramonto da ricordare","A sunset to remember","Atardecer para recordar","Un coucher de soleil mémorable","Ein unvergesslicher Sonnenuntergang","Um pôr do sol para recordar"),
        desc:M("Il promontorio tra Poetto e Calamosca. Il sentiero sale tra mirto e lentisco: in cima, il Golfo di Cagliari si apre tutto insieme.","The promontory between Poetto and Calamosca. The trail climbs through myrtle and mastic: at the top, the Gulf of Cagliari opens up all at once.","El promontorio entre Poetto y Calamosca. El sendero sube entre mirto y lentisco: en la cima, el Golfo de Cagliari se abre de golpe.","Le promontoire entre Poetto et Calamosca. Le sentier monte parmi le myrte et le lentisque : au sommet, le golfe de Cagliari s'ouvre d'un coup.","Die Landzunge zwischen Poetto und Calamosca. Der Pfad steigt durch Myrte und Mastix: oben öffnet sich der Golf von Cagliari auf einmal.","O promontório entre Poetto e Calamosca. O trilho sobe entre mirto e lentisco: no topo, o Golfo de Cagliari abre-se de uma vez.") },
      { emoji:"🦩", dist:"15 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/Molentargius_tl1ctr.jpg", link:"https://maps.google.com/?q=Parco+Molentargius+Cagliari",
        title:M("Molentargius — fenicotteri & bici fino al Poetto","Molentargius — flamingos & bike to Poetto","Molentargius — flamencos y bici hasta Poetto","Molentargius — flamants & vélo jusqu'au Poetto","Molentargius — Flamingos & Rad bis zum Poetto","Molentargius — flamingos & bicicleta até ao Poetto"),
        mood:M("Esperienza unica da non perdere","A unique must-do experience","Experiencia única imperdible","Une expérience unique à ne pas manquer","Ein einzigartiges Muss","Uma experiência única imperdível"),
        desc:M("Colonie di fenicotteri rosa che nidificano tutto l'anno. Il percorso in bici attraverso le saline fino al Poetto è indimenticabile. Noleggio bici all'ingresso del parco.","Colonies of pink flamingos that nest all year round. The bike route through the salt pans to Poetto is unforgettable. Bike rental at the park entrance.","Colonias de flamencos rosas que anidan todo el año. El recorrido en bici por las salinas hasta el Poetto es inolvidable. Alquiler de bicis en la entrada del parque.","Des colonies de flamants roses qui nichent toute l'année. Le parcours à vélo à travers les salins jusqu'au Poetto est inoubliable. Location de vélos à l'entrée du parc.","Kolonien rosa Flamingos, die das ganze Jahr über nisten. Die Radtour durch die Salinen bis zum Poetto ist unvergesslich. Fahrradverleih am Parkeingang.","Colónias de flamingos cor-de-rosa que nidificam todo o ano. O percurso de bicicleta pelas salinas até ao Poetto é inesquecível. Aluguer de bicicletas à entrada do parque.") },
      { emoji:"🌳", dist:"20 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/monte_claro_syefhj.jpg", link:"https://maps.google.com/?q=Parco+Monte+Claro+Cagliari",
        title:M("Parco di Monte Claro","Monte Claro Park","Parque de Monte Claro","Parc de Monte Claro","Park Monte Claro","Parque de Monte Claro"),
        mood:M("Verde nel cuore di Cagliari","Greenery in the heart of Cagliari","Verde en el corazón de Cagliari","Verdure au cœur de Cagliari","Grün im Herzen von Cagliari","Verde no coração de Cagliari"),
        desc:M("Il grande parco storico di Cagliari con villa ottocentesca, laghetto e alberi centenari. Perfetto per una mattinata rilassante.","Cagliari's large historic park with a 19th-century villa, a small lake and century-old trees. Perfect for a relaxing morning.","El gran parque histórico de Cagliari con villa del siglo XIX, laguito y árboles centenarios. Perfecto para una mañana relajante.","Le grand parc historique de Cagliari avec villa du XIXe siècle, petit lac et arbres centenaires. Parfait pour une matinée détente.","Der große historische Park von Cagliari mit einer Villa aus dem 19. Jahrhundert, kleinem See und jahrhundertealten Bäumen. Perfekt für einen entspannten Morgen.","O grande parque histórico de Cagliari com villa do século XIX, lago e árvores centenárias. Perfeito para uma manhã relaxante.") },
      { emoji:"🏙️", dist:"20 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744881/cagliari_vqtn9u.jpg", link:"https://maps.google.com/?q=Cagliari+centro+storico",
        title:M("Marina, Castello & Su Siccu","Marina, Castello & Su Siccu","Marina, Castello y Su Siccu","Marina, Castello & Su Siccu","Marina, Castello & Su Siccu","Marina, Castello & Su Siccu"),
        mood:M("Aperitivo & storia","Aperitif & history","Aperitivo e historia","Apéritif & histoire","Aperitif & Geschichte","Aperitivo & história"),
        desc:M("Il quartiere Marina per i tapas sardi; Castello per i panorami sul golfo; Su Siccu per una serata sul lungomare.","The Marina district for Sardinian tapas; Castello for views over the gulf; Su Siccu for an evening on the seafront.","El barrio Marina para tapas sardas; Castello para las vistas al golfo; Su Siccu para una tarde en el paseo marítimo.","Le quartier Marina pour les tapas sardes ; Castello pour les vues sur le golfe ; Su Siccu pour une soirée sur le front de mer.","Das Marina-Viertel für sardische Tapas; Castello für die Ausblicke auf den Golf; Su Siccu für einen Abend an der Uferpromenade.","O bairro Marina para tapas sardos; Castello para as vistas sobre o golfo; Su Siccu para uma noite na marginal.") },
      { emoji:"🐟", dist:"20 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/San_benedetto_gwtodd.jpg", link:"https://maps.google.com/?q=Mercato+San+Benedetto+Cagliari",
        title:M("Mercato di San Benedetto","San Benedetto Market","Mercado de San Benedetto","Marché de San Benedetto","Markt San Benedetto","Mercado de San Benedetto"),
        mood:M("Esperienza autentica","Authentic experience","Experiencia auténtica","Expérience authentique","Authentisches Erlebnis","Experiência autêntica"),
        desc:M("Uno dei mercati coperti più grandi d'Europa. ⚠️ La sede storica è al momento chiusa per ristrutturazione: i banchi sono trasferiti nella struttura temporanea in Piazza Nazzari, a pochi passi. Il piano del pesce resta uno spettacolo — andate la mattina.","One of Europe's largest covered markets. ⚠️ The historic building is currently closed for renovation: the stalls have moved to a temporary structure in Piazza Nazzari, a few steps away. The fish floor is still a spectacle — go in the morning.","Uno de los mercados cubiertos más grandes de Europa. ⚠️ La sede histórica está cerrada por reforma: los puestos se han trasladado a la estructura temporal en Piazza Nazzari, a pocos pasos. La planta del pescado sigue siendo un espectáculo — id por la mañana.","L'un des plus grands marchés couverts d'Europe. ⚠️ Le bâtiment historique est actuellement fermé pour rénovation : les étals sont transférés dans la structure temporaire de Piazza Nazzari, à deux pas. L'étage du poisson reste un spectacle — allez-y le matin.","Einer der größten überdachten Märkte Europas. ⚠️ Das historische Gebäude ist derzeit wegen Renovierung geschlossen: Die Stände sind in den provisorischen Bau an der Piazza Nazzari umgezogen, nur wenige Schritte entfernt. Die Fischetage ist weiterhin ein Spektakel — gehen Sie morgens hin.","Um dos maiores mercados cobertos da Europa. ⚠️ A sede histórica está fechada para renovação: as bancas foram transferidas para a estrutura temporária na Piazza Nazzari, a poucos passos. O piso do peixe continua um espetáculo — vá de manhã.") },
    ]
  },
  {
    id:"cultura", emoji:"🏛️", color:"#3a2510", accent:"#d4845f",
    label:M("Cultura & Storia","Culture & History","Cultura e Historia","Culture & Histoire","Kultur & Geschichte","Cultura & História"),
    tagline:M("Romani, aragonesi, artigiani e minatori","Romans, Aragonese, artisans and miners","Romanos, aragoneses, artesanos y mineros","Romains, Aragonais, artisans et mineurs","Römer, Aragonesen, Handwerker und Bergleute","Romanos, aragoneses, artesãos e mineiros"),
    data:[
      { emoji:"🎨", dist:"15 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/Pinuccio_sciola_lj3opa.jpg", link:"https://maps.google.com/?q=Murales+San+Sperate+Sardegna",
        title:M("San Sperate — Pinuccio Sciola","San Sperate — Pinuccio Sciola","San Sperate — Pinuccio Sciola","San Sperate — Pinuccio Sciola","San Sperate — Pinuccio Sciola","San Sperate — Pinuccio Sciola"),
        mood:M("Da non perdere","Not to be missed","Imperdible","À ne pas manquer","Nicht verpassen","Imperdível"),
        desc:M("Il paese-museo: ogni muro è un'opera, ogni vicolo una sorpresa. Le pietre sonore di Sciola vibrano al tocco — un'esperienza che non si dimentica.","The village-museum: every wall is a work of art, every alley a surprise. Sciola's sound stones vibrate at a touch — an unforgettable experience.","El pueblo-museo: cada muro es una obra, cada callejón una sorpresa. Las piedras sonoras de Sciola vibran al tacto — una experiencia inolvidable.","Le village-musée : chaque mur est une œuvre, chaque ruelle une surprise. Les pierres sonores de Sciola vibrent au toucher — une expérience inoubliable.","Das Dorf-Museum: Jede Mauer ein Kunstwerk, jede Gasse eine Überraschung. Sciolas Klangsteine vibrieren bei Berührung — ein unvergessliches Erlebnis.","A aldeia-museu: cada muro é uma obra, cada viela uma surpresa. As pedras sonoras de Sciola vibram ao toque — uma experiência inesquecível.") },
      { emoji:"🏛️", dist:"25 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/nora_ertuqj.jpg", link:"https://maps.google.com/?q=Nora+sito+romano+Pula",
        title:M("Scavi di Nora","Nora Excavations","Excavaciones de Nora","Fouilles de Nora","Ausgrabungen von Nora","Escavações de Nora"),
        mood:M("2.800 anni di storia","2,800 years of history","2.800 años de historia","2 800 ans d'histoire","2.800 Jahre Geschichte","2.800 anos de história"),
        desc:M("Teatro romano, terme puniche, mosaici e colonne — tutto affacciato sul mare. Una delle città antiche più scenografiche d'Italia.","Roman theatre, Punic baths, mosaics and columns — all overlooking the sea. One of Italy's most scenic ancient cities.","Teatro romano, termas púnicas, mosaicos y columnas — todo frente al mar. Una de las ciudades antiguas más escenográficas de Italia.","Théâtre romain, thermes puniques, mosaïques et colonnes — le tout face à la mer. L'une des cités antiques les plus spectaculaires d'Italie.","Römisches Theater, punische Thermen, Mosaike und Säulen — alles mit Blick aufs Meer. Eine der eindrucksvollsten antiken Städte Italiens.","Teatro romano, termas púnicas, mosaicos e colunas — tudo virado para o mar. Uma das cidades antigas mais cénicas de Itália.") },
      { emoji:"🗿", dist:"50 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/su_nuraxi_xaetjk.webp", link:"https://maps.google.com/?q=Su+Nuraxi+Barumini",
        title:M("Su Nuraxi di Barumini — UNESCO","Su Nuraxi of Barumini — UNESCO","Su Nuraxi de Barumini — UNESCO","Su Nuraxi de Barumini — UNESCO","Su Nuraxi von Barumini — UNESCO","Su Nuraxi de Barumini — UNESCO"),
        mood:M("Patrimonio dell'umanità","World Heritage","Patrimonio de la humanidad","Patrimoine mondial","Weltkulturerbe","Património da humanidade"),
        desc:M("L'unico sito UNESCO della Sardegna: il villaggio nuragico più importante dell'isola, con la torre centrale del 1500 a.C. Visite guidate ogni 30 minuti. Imperdibile.","Sardinia's only UNESCO site: the island's most important Nuragic village, with its central tower from 1500 BC. Guided tours every 30 minutes. Not to be missed.","El único sitio UNESCO de Cerdeña: el poblado nurágico más importante de la isla, con la torre central del 1500 a.C. Visitas guiadas cada 30 minutos. Imperdible.","Le seul site UNESCO de Sardaigne : le village nuragique le plus important de l'île, avec sa tour centrale de 1500 av. J.-C. Visites guidées toutes les 30 minutes. Incontournable.","Sardiniens einzige UNESCO-Stätte: das bedeutendste nuraghische Dorf der Insel, mit dem zentralen Turm von 1500 v. Chr. Führungen alle 30 Minuten. Ein Muss.","O único sítio UNESCO da Sardenha: a aldeia nurágica mais importante da ilha, com a torre central de 1500 a.C. Visitas guiadas a cada 30 minutos. Imperdível.") },
      { emoji:"💎", dist:"50 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Grotte_is_zuddas_mdgf28.jpg", link:"https://maps.google.com/?q=Grotte+Is+Zuddas+Santadi",
        title:M("Grotte Is Zuddas","Is Zuddas Caves","Cuevas Is Zuddas","Grottes Is Zuddas","Höhlen Is Zuddas","Grutas Is Zuddas"),
        mood:M("Meraviglia sotterranea","Underground wonder","Maravilla subterránea","Merveille souterraine","Unterirdisches Wunder","Maravilha subterrânea"),
        desc:M("A Santadi, grotte con rarissime aragoniti eccentriche che sfidano la gravità. Visita guidata di ~1 ora a temperatura costante di 16° — perfetta anche nelle giornate più calde.","In Santadi, caves with rare eccentric aragonites that defy gravity. Guided tour of ~1 hour at a constant 16° — perfect even on the hottest days.","En Santadi, cuevas con rarísimas aragonitas excéntricas que desafían la gravedad. Visita guiada de ~1 hora a 16° constantes — perfecta incluso en los días más calurosos.","À Santadi, des grottes aux rarissimes aragonites excentriques qui défient la gravité. Visite guidée d'environ 1 heure à 16° constants — parfaite même les jours de forte chaleur.","In Santadi Höhlen mit seltenen exzentrischen Aragoniten, die der Schwerkraft trotzen. Geführte Tour von ~1 Stunde bei konstanten 16° — perfekt auch an den heißesten Tagen.","Em Santadi, grutas com raríssimas aragonites excêntricas que desafiam a gravidade. Visita guiada de ~1 hora a 16° constantes — perfeita mesmo nos dias mais quentes.") },
      { emoji:"🏰", dist:"25 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744886/Villa_d_orri_taitht.avif", link:"https://maps.google.com/?q=Villa+d+Orri+Sarroch",
        title:M("Villa d'Orri","Villa d'Orri","Villa d'Orri","Villa d'Orri","Villa d'Orri","Villa d'Orri"),
        mood:M("Eleganza ottocentesca","19th-century elegance","Elegancia del siglo XIX","Élégance du XIXe siècle","Eleganz des 19. Jahrhunderts","Elegância do século XIX"),
        desc:M("Dimora nobiliare immersa in un parco di lecci centenari. Architettura neoclassica e atmosfera sospesa nel tempo.","A noble residence set in a park of century-old holm oaks. Neoclassical architecture and an atmosphere suspended in time.","Residencia noble inmersa en un parque de encinas centenarias. Arquitectura neoclásica y atmósfera suspendida en el tiempo.","Demeure noble nichée dans un parc de chênes verts centenaires. Architecture néoclassique et atmosphère hors du temps.","Ein Herrenhaus in einem Park jahrhundertealter Steineichen. Neoklassizistische Architektur und eine Atmosphäre wie aus der Zeit gefallen.","Residência nobre imersa num parque de azinheiras centenárias. Arquitetura neoclássica e atmosfera suspensa no tempo.") },
      { emoji:"⛏️", dist:"50 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/geoparco_etvg6s.jpg", link:"https://maps.google.com/?q=Miniere+Iglesias+Sardegna",
        title:M("Miniere & Geoparco di Iglesias","Mines & Geopark of Iglesias","Minas y Geoparque de Iglesias","Mines & Géoparc d'Iglesias","Minen & Geopark von Iglesias","Minas & Geoparque de Iglesias"),
        mood:M("Patrimonio UNESCO","UNESCO heritage","Patrimonio UNESCO","Patrimoine UNESCO","UNESCO-Erbe","Património UNESCO"),
        desc:M("Gallerie, laverie e paesaggi industriali restituiti alla memoria collettiva. Il Museo del Carbone di Serbariu è il punto di partenza ideale.","Tunnels, washeries and industrial landscapes returned to collective memory. The Serbariu Coal Museum is the ideal starting point.","Galerías, lavaderos y paisajes industriales devueltos a la memoria colectiva. El Museo del Carbón de Serbariu es el punto de partida ideal.","Galeries, laveries et paysages industriels rendus à la mémoire collective. Le Musée du Charbon de Serbariu est le point de départ idéal.","Stollen, Wäschereien und Industrielandschaften, die dem kollektiven Gedächtnis zurückgegeben wurden. Das Kohlemuseum von Serbariu ist der ideale Ausgangspunkt.","Galerias, lavarias e paisagens industriais devolvidas à memória coletiva. O Museu do Carvão de Serbariu é o ponto de partida ideal.") },
    ]
  },
  {
    id:"natura", emoji:"🌊", color:"#0e2a35", accent:"#4ab8c8",
    label:M("Natura & Sapori","Nature & Flavours","Naturaleza y Sabores","Nature & Saveurs","Natur & Genuss","Natureza & Sabores"),
    tagline:M("Spiagge, cammini, vini e isole","Beaches, trails, wines and islands","Playas, caminos, vinos e islas","Plages, chemins, vins et îles","Strände, Wanderwege, Weine und Inseln","Praias, caminhos, vinhos e ilhas"),
    data:[
      { emoji:"🍷", dist:"20–40 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/cantine_n27jpi.jpg", link:"https://maps.google.com/?q=Cantine+Argiolas+Serdiana",
        title:M("Cantine Argiolas, Mesa, Audarya","Argiolas, Mesa, Audarya wineries","Bodegas Argiolas, Mesa, Audarya","Caves Argiolas, Mesa, Audarya","Weingüter Argiolas, Mesa, Audarya","Adegas Argiolas, Mesa, Audarya"),
        mood:M("Degustazione","Tasting","Degustación","Dégustation","Verkostung","Degustação"),
        desc:M("Vermentino, Cannonau, Carignano. Le cantine del Campidano aprono le porte per visite e degustazioni in paesaggi da cartolina.","Vermentino, Cannonau, Carignano. The Campidano wineries open their doors for tours and tastings in postcard-perfect landscapes.","Vermentino, Cannonau, Carignano. Las bodegas del Campidano abren sus puertas para visitas y degustaciones en paisajes de postal.","Vermentino, Cannonau, Carignano. Les caves du Campidano ouvrent leurs portes pour des visites et dégustations dans des paysages de carte postale.","Vermentino, Cannonau, Carignano. Die Weingüter des Campidano öffnen ihre Türen für Besichtigungen und Verkostungen in malerischen Landschaften.","Vermentino, Cannonau, Carignano. As adegas do Campidano abrem as portas para visitas e degustações em paisagens de postal.") },
      { emoji:"🚶", dist:"vari", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/cammino_santa_barbara_jmtavj.jpg", link:"https://maps.google.com/?q=Cammino+Sant+Efisio+Sardegna",
        title:M("Cammini — Sant'Efisio, 100 Torri, Santa Barbara","Trails — Sant'Efisio, 100 Towers, Santa Barbara","Caminos — Sant'Efisio, 100 Torres, Santa Barbara","Chemins — Sant'Efisio, 100 Tours, Santa Barbara","Wanderwege — Sant'Efisio, 100 Türme, Santa Barbara","Caminhos — Sant'Efisio, 100 Torres, Santa Barbara"),
        mood:M("Pellegrinaggio & trekking","Pilgrimage & trekking","Peregrinación y senderismo","Pèlerinage & randonnée","Pilgerweg & Trekking","Peregrinação & trekking"),
        desc:M("Antichi percorsi a piedi attraverso la Sardegna del sud. Il Cammino dei 100 Torri costiero è tra i più scenografici; Sant'Efisio il più spirituale.","Ancient walking routes across southern Sardinia. The coastal 100 Towers Way is among the most scenic; Sant'Efisio the most spiritual.","Antiguos recorridos a pie por el sur de Cerdeña. El Camino de las 100 Torres, costero, es de los más escenográficos; Sant'Efisio el más espiritual.","Anciens itinéraires à pied à travers le sud de la Sardaigne. Le Chemin des 100 Tours, côtier, est parmi les plus spectaculaires ; Sant'Efisio le plus spirituel.","Alte Wanderrouten durch den Süden Sardiniens. Der küstennahe Weg der 100 Türme gehört zu den eindrucksvollsten; Sant'Efisio ist der spirituellste.","Antigos percursos a pé pelo sul da Sardenha. O Caminho das 100 Torres, costeiro, é dos mais cénicos; Sant'Efisio o mais espiritual.") },
      { emoji:"🥾", dist:"50 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/sentiero_carignano_pwfsai.jpg", link:"https://maps.google.com/?q=Carignano+del+Sulcis+vigneti",
        title:M("Sentieri del Carignano — Sulcis","Carignano Trails — Sulcis","Senderos del Carignano — Sulcis","Sentiers du Carignano — Sulcis","Carignano-Wege — Sulcis","Trilhos do Carignano — Sulcis"),
        mood:M("Viticoltura eroica","Heroic viticulture","Viticultura heroica","Viticulture héroïque","Heroischer Weinbau","Viticultura heroica"),
        desc:M("Vigneti a piede franco tra i più antichi d'Europa, aggrappati alle scogliere a strapiombo sul mare. Un trekking fuori dal comune.","Ungrafted vines among the oldest in Europe, clinging to cliffs overhanging the sea. An extraordinary trek.","Viñedos de pie franco entre los más antiguos de Europa, aferrados a los acantilados sobre el mar. Un trekking fuera de lo común.","Des vignes franches de pied parmi les plus anciennes d'Europe, accrochées aux falaises surplombant la mer. Une randonnée hors du commun.","Wurzelechte Reben, zu den ältesten Europas zählend, an Steilklippen über dem Meer. Eine außergewöhnliche Wanderung.","Vinhas de pé franco entre as mais antigas da Europa, agarradas às falésias sobre o mar. Um trekking fora do comum.") },
      { emoji:"🏖️", dist:"45 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/chia_a9gzlt.jpg", link:"https://maps.google.com/?q=Spiaggia+Chia+Sardegna",
        title:M("Chia — dune e torri","Chia — dunes and towers","Chia — dunas y torres","Chia — dunes et tours","Chia — Dünen und Türme","Chia — dunas e torres"),
        mood:M("Spiaggia da sogno","A dream beach","Playa de ensueño","Plage de rêve","Traumstrand","Praia de sonho"),
        desc:M("Acqua caraibica, dune di sabbia bianca e una torre aragonese sul promontorio. Tra le spiagge più belle d'Europa. Arrivate presto.","Caribbean water, white sand dunes and an Aragonese tower on the promontory. Among Europe's most beautiful beaches. Arrive early.","Agua caribeña, dunas de arena blanca y una torre aragonesa en el promontorio. Entre las playas más bellas de Europa. Llegad temprano.","Eau caribéenne, dunes de sable blanc et une tour aragonaise sur le promontoire. Parmi les plus belles plages d'Europe. Arrivez tôt.","Karibisches Wasser, weiße Sanddünen und ein aragonesischer Turm auf der Landzunge. Einer der schönsten Strände Europas. Kommen Sie früh.","Água caribenha, dunas de areia branca e uma torre aragonesa no promontório. Entre as praias mais belas da Europa. Chegue cedo.") },
      { emoji:"🏝️", dist:"55 min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781124439/Tuerredda_ealwbe.webp", link:"https://maps.google.com/?q=Spiaggia+Tuerredda",
        title:M("Spiaggia di Tuerredda","Tuerredda Beach","Playa de Tuerredda","Plage de Tuerredda","Strand von Tuerredda","Praia de Tuerredda"),
        mood:M("Caraibi sardi","Sardinian Caribbean","Caribe sardo","Caraïbes sardes","Sardische Karibik","Caraíbas sardas"),
        desc:M("Sabbia bianchissima e acqua turchese poco profonda, con l'isolotto raggiungibile a nuoto. Tra le spiagge più belle d'Italia. In alta stagione arrivate entro le 9:30.","Pure white sand and shallow turquoise water, with a little island you can swim to. Among Italy's most beautiful beaches. In high season, arrive by 9:30.","Arena blanquísima y agua turquesa poco profunda, con el islote accesible a nado. Entre las playas más bellas de Italia. En temporada alta llegad antes de las 9:30.","Sable très blanc et eau turquoise peu profonde, avec l'îlot accessible à la nage. Parmi les plus belles plages d'Italie. En haute saison, arrivez avant 9h30.","Schneeweißer Sand und flaches türkisfarbenes Wasser, mit einer erschwimmbaren kleinen Insel. Einer der schönsten Strände Italiens. In der Hochsaison bis 9:30 Uhr kommen.","Areia branquíssima e água turquesa pouco profunda, com o ilhéu acessível a nado. Entre as praias mais belas de Itália. Na época alta, chegue até às 9:30.") },
      { emoji:"🗼", dist:"1h 10min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/belvedere-di-nebida_phr0o8.webp", link:"https://maps.google.com/?q=Belvedere+Nebida+Sardegna",
        title:M("Belvedere Nebida & Pan di Zucchero","Nebida Belvedere & Pan di Zucchero","Mirador de Nebida y Pan di Zucchero","Belvédère de Nebida & Pan di Zucchero","Aussichtspunkt Nebida & Pan di Zucchero","Miradouro de Nebida & Pan di Zucchero"),
        mood:M("Panorama mozzafiato","Breathtaking view","Panorama impresionante","Panorama à couper le souffle","Atemberaubende Aussicht","Panorama de cortar a respiração"),
        desc:M("Lo scoglio più alto del Mediterraneo visto dall'alto. Al tramonto la luce arancione sulla roccia bianca è inarrivabile.","The tallest sea stack in the Mediterranean seen from above. At sunset, the orange light on the white rock is unmatched.","El peñasco más alto del Mediterráneo visto desde arriba. Al atardecer, la luz anaranjada sobre la roca blanca es insuperable.","Le rocher le plus haut de la Méditerranée vu d'en haut. Au coucher du soleil, la lumière orangée sur la roche blanche est inégalable.","Der höchste Felsen des Mittelmeers von oben gesehen. Bei Sonnenuntergang ist das orangefarbene Licht auf dem weißen Fels unübertroffen.","O rochedo mais alto do Mediterrâneo visto de cima. Ao pôr do sol, a luz alaranjada sobre a rocha branca é inigualável.") },
      { emoji:"⛵", dist:"1h 20min + traghetto", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744882/carloforte_houlpq.jpg", link:"https://maps.google.com/?q=Carloforte+Isola+San+Pietro",
        title:M("Carloforte — Isola di San Pietro","Carloforte — San Pietro Island","Carloforte — Isla de San Pietro","Carloforte — Île de San Pietro","Carloforte — Insel San Pietro","Carloforte — Ilha de San Pietro"),
        mood:M("Isola nell'isola","An island within the island","Isla dentro de la isla","Une île dans l'île","Insel in der Insel","Ilha dentro da ilha"),
        desc:M("Borgo tabarkino con accento ligure, strade strette e tonno rosso del Mediterraneo. Una giornata intera non basta.","A Tabarkino town with a Ligurian accent, narrow streets and Mediterranean bluefin tuna. A whole day isn't enough.","Pueblo tabarquino con acento ligur, calles estrechas y atún rojo del Mediterráneo. Un día entero no basta.","Village tabarquin à l'accent ligure, ruelles étroites et thon rouge de Méditerranée. Une journée entière ne suffit pas.","Ein tabarkinischer Ort mit ligurischem Akzent, engen Gassen und mediterranem Rotem Thun. Ein ganzer Tag reicht nicht.","Vila tabarquina com sotaque ligure, ruas estreitas e atum-rabilho do Mediterrâneo. Um dia inteiro não chega.") },
      { emoji:"🌊", dist:"1h", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744889/villasimius_uvzqrv.jpg", link:"https://maps.google.com/?q=Villasimius+Sardegna",
        title:M("Villasimius & Costa Rei","Villasimius & Costa Rei","Villasimius y Costa Rei","Villasimius & Costa Rei","Villasimius & Costa Rei","Villasimius & Costa Rei"),
        mood:M("Fondali cristallini","Crystal-clear waters","Fondos cristalinos","Fonds cristallins","Kristallklares Wasser","Fundos cristalinos"),
        desc:M("Il sud-est della Sardegna è quasi caraibico. Acque trasparenti, barriera corallina, dune di quarzo rosa. Perfetto per snorkeling.","South-eastern Sardinia is almost Caribbean. Clear waters, a coral reef, pink quartz dunes. Perfect for snorkelling.","El sureste de Cerdeña es casi caribeño. Aguas transparentes, arrecife de coral, dunas de cuarzo rosa. Perfecto para snorkel.","Le sud-est de la Sardaigne est presque caribéen. Eaux transparentes, récif corallien, dunes de quartz rose. Parfait pour le snorkeling.","Der Südosten Sardiniens ist fast karibisch. Klares Wasser, ein Korallenriff, rosa Quarzdünen. Perfekt zum Schnorcheln.","O sudeste da Sardenha é quase caribenho. Águas transparentes, recife de coral, dunas de quartzo rosa. Perfeito para snorkeling.") },
      { emoji:"🏖️", dist:"1h 10min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777747342/scivu_iqjmjj.jpg", link:"https://maps.google.com/?q=Spiaggia+Scivu+Sardegna",
        title:M("Spiaggia di Scivu & Torre dei Corsari","Scivu Beach & Torre dei Corsari","Playa de Scivu y Torre dei Corsari","Plage de Scivu & Torre dei Corsari","Strand Scivu & Torre dei Corsari","Praia de Scivu & Torre dei Corsari"),
        mood:M("Selvaggia e incontaminata","Wild and unspoilt","Salvaje y virgen","Sauvage et préservée","Wild und unberührt","Selvagem e intocada"),
        desc:M("Due spiagge rimaste intatte, senza strade asfaltate. Sabbia finissima e mare verde smeraldo tra le dune del Sulcis.","Two beaches that have remained untouched, with no paved roads. Very fine sand and emerald-green sea among the Sulcis dunes.","Dos playas que siguen intactas, sin carreteras asfaltadas. Arena finísima y mar verde esmeralda entre las dunas del Sulcis.","Deux plages restées intactes, sans routes goudronnées. Sable très fin et mer vert émeraude parmi les dunes du Sulcis.","Zwei unberührt gebliebene Strände, ohne asphaltierte Straßen. Feinster Sand und smaragdgrünes Meer zwischen den Sulcis-Dünen.","Duas praias que permaneceram intactas, sem estradas asfaltadas. Areia finíssima e mar verde-esmeralda entre as dunas do Sulcis.") },
      { emoji:"🏜️", dist:"1h 20min", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744885/piscinas_srqqdj.webp", link:"https://maps.google.com/?q=Dune+di+Piscinas+Sardegna",
        title:M("Dune di Piscinas","Piscinas Dunes","Dunas de Piscinas","Dunes de Piscinas","Dünen von Piscinas","Dunas de Piscinas"),
        mood:M("Il deserto d'Europa","Europe's desert","El desierto de Europa","Le désert d'Europe","Die Wüste Europas","O deserto da Europa"),
        desc:M("Le dune più alte d'Europa — fino a 60 metri — si affacciano su un mare spettacolare. Un paesaggio da Sahara nel cuore della Sardegna.","Europe's tallest dunes — up to 60 metres — overlook a spectacular sea. A Sahara-like landscape in the heart of Sardinia.","Las dunas más altas de Europa — hasta 60 metros — se asoman a un mar espectacular. Un paisaje de Sáhara en el corazón de Cerdeña.","Les dunes les plus hautes d'Europe — jusqu'à 60 mètres — dominent une mer spectaculaire. Un paysage saharien au cœur de la Sardaigne.","Die höchsten Dünen Europas — bis zu 60 Meter — überblicken ein spektakuläres Meer. Eine Sahara-Landschaft im Herzen Sardiniens.","As dunas mais altas da Europa — até 60 metros — debruçam-se sobre um mar espetacular. Uma paisagem do Saara no coração da Sardenha.") },
      { emoji:"🌊", dist:"~3h", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744883/goloritze_gkcup9.jpg", link:"https://maps.google.com/?q=Golfo+di+Orosei+Sardegna",
        title:M("Golfo di Orosei & Cala Goloritzé","Gulf of Orosei & Cala Goloritzé","Golfo de Orosei y Cala Goloritzé","Golfe d'Orosei & Cala Goloritzé","Golf von Orosei & Cala Goloritzé","Golfo de Orosei & Cala Goloritzé"),
        mood:M("Top 10 spiagge al mondo","World top 10 beaches","Top 10 playas del mundo","Top 10 des plages au monde","Top 10 Strände weltweit","Top 10 praias do mundo"),
        desc:M("Cala Goloritzé, Cala Luna, Cala Mariolu — le calette del golfo compaiono ogni anno tra le spiagge più belle del mondo. Vale il viaggio.","Cala Goloritzé, Cala Luna, Cala Mariolu — the gulf's coves appear every year among the world's most beautiful beaches. Worth the trip.","Cala Goloritzé, Cala Luna, Cala Mariolu — las calas del golfo aparecen cada año entre las playas más bellas del mundo. Vale el viaje.","Cala Goloritzé, Cala Luna, Cala Mariolu — les criques du golfe figurent chaque année parmi les plus belles plages du monde. Le voyage en vaut la peine.","Cala Goloritzé, Cala Luna, Cala Mariolu — die Buchten des Golfs erscheinen jedes Jahr unter den schönsten Stränden der Welt. Die Reise lohnt sich.","Cala Goloritzé, Cala Luna, Cala Mariolu — as enseadas do golfo aparecem todos os anos entre as praias mais belas do mundo. Vale a viagem.") },
      { emoji:"⛵", dist:"~3h", photo:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1777744884/maddalena_mgxpth.jpg", link:"https://maps.google.com/?q=Arcipelago+della+Maddalena+Sardegna",
        title:M("Arcipelago della Maddalena","La Maddalena Archipelago","Archipiélago de la Maddalena","Archipel de la Maddalena","Maddalena-Archipel","Arquipélago da Maddalena"),
        mood:M("Parco Nazionale marino","Marine National Park","Parque Nacional marino","Parc National marin","Meeresnationalpark","Parque Nacional marinho"),
        desc:M("Sette isole, acque trasparenti e graniti rosa. Traghetto da Palau. Una delle aree marine protette più belle del Mediterraneo.","Seven islands, clear waters and pink granite. Ferry from Palau. One of the most beautiful marine protected areas in the Mediterranean.","Siete islas, aguas transparentes y granito rosa. Ferry desde Palau. Una de las áreas marinas protegidas más bellas del Mediterráneo.","Sept îles, eaux transparentes et granit rose. Ferry depuis Palau. L'une des plus belles aires marines protégées de Méditerranée.","Sieben Inseln, klares Wasser und rosa Granit. Fähre ab Palau. Eines der schönsten Meeresschutzgebiete des Mittelmeers.","Sete ilhas, águas transparentes e granito rosa. Ferry a partir de Palau. Uma das mais belas áreas marinhas protegidas do Mediterrâneo.") },
    ]
  },
];

// ── DATI RISTORANTI ──────────────────────────────
const RISTO_TOP = [
  {e:"🍔",n:"Slim Pickins",s:"4.9",d:M("Uta","Uta","Uta","Uta","Uta","Uta"),t:M("Tocca con mano","Hands-on","Para tocar","À vivre","Zum Anfassen","Para experimentar")},
  {e:"⭐",n:"Lughènte Fine Dining",s:"4.9",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),t:M("Alta cucina sarda","Sardinian fine dining","Alta cocina sarda","Haute cuisine sarde","Sardische Spitzenküche","Alta cozinha sarda")},
  {e:"🌿",n:"Ada Restaurant",s:"4.7",d:M("~15 min","~15 min","~15 min","~15 min","~15 Min","~15 min"),t:M("Cucina creativa","Creative cuisine","Cocina creativa","Cuisine créative","Kreative Küche","Cozinha criativa")},
];
const RISTO_SEZ = [
  { key:"sec1", ristoranti:[
    {e:"🥡",n:"Al Malibù",d:"vicino",hl:true,link:"https://maps.google.com/?q=Al+Malibù+Uta+Sardegna",
      tipo:M("Gastronomia · Asporto · Tipicità sarde","Deli · Takeaway · Sardinian specialities","Gastronomía · Para llevar · Típicos sardos","Épicerie fine · À emporter · Spécialités sardes","Feinkost · Take-away · Sardische Spezialitäten","Gastronomia · Take-away · Típicos sardos"),
      piatti:M("La chicca del quartiere: gastronomia con prodotti tipici sardi da asporto. Formaggi, salumi, pane carasau, arancini e piatti pronti della tradizione sarda. Perfetto per gustare le tipicità comodamente in casa o nelle belle giornate nella nostra veranda e giardino.","The neighbourhood gem: a deli with Sardinian specialities to take away. Cheeses, cured meats, carasau bread, arancini and ready-made traditional Sardinian dishes. Perfect to enjoy comfortably at home or, on fine days, on our veranda and garden.","La joya del barrio: gastronomía con productos típicos sardos para llevar. Quesos, embutidos, pan carasau, arancini y platos preparados de la tradición sarda. Perfecto para disfrutar cómodamente en casa o, en los días buenos, en nuestra veranda y jardín.","La perle du quartier : épicerie fine avec spécialités sardes à emporter. Fromages, charcuterie, pain carasau, arancini et plats préparés de la tradition sarde. Parfait à déguster tranquillement à la maison ou, les beaux jours, sur notre véranda et jardin.","Das Juwel des Viertels: Feinkost mit sardischen Spezialitäten zum Mitnehmen. Käse, Wurstwaren, Carasau-Brot, Arancini und fertige traditionelle sardische Gerichte. Perfekt, um es bequem zu Hause oder an schönen Tagen auf unserer Veranda und im Garten zu genießen.","A joia do bairro: gastronomia com produtos típicos sardos para levar. Queijos, enchidos, pão carasau, arancini e pratos prontos da tradição sarda. Perfeito para saborear comodamente em casa ou, nos dias bonitos, na nossa varanda e jardim.")},
    {e:"🍔",n:"Slim Pickins",s:"4.9",d:"vicino",hl:true,link:"https://maps.google.com/?q=Slim+Pickins+Uta",
      tipo:M("American Fusion","American Fusion","American Fusion","American Fusion","American Fusion","American Fusion"),
      piatti:M("Burger gourmet, pulled pork, ali di pollo croccanti con ingredienti locali in chiave americana.","Gourmet burgers, pulled pork, crispy chicken wings with local ingredients in an American style.","Hamburguesas gourmet, pulled pork, alitas de pollo crujientes con ingredientes locales en clave americana.","Burgers gourmets, pulled pork, ailes de poulet croustillantes avec des ingrédients locaux façon américaine.","Gourmet-Burger, Pulled Pork, knusprige Chicken Wings mit lokalen Zutaten auf amerikanische Art.","Hambúrgueres gourmet, pulled pork, asas de frango crocantes com ingredientes locais à moda americana.")},
    {e:"🍺",n:"U3 Birreria & Steakhouse",s:"4.8",d:"vicino",link:"https://maps.google.com/?q=U3+Birreria+Uta",
      tipo:M("Birra artigianale · Carne","Craft beer · Meat","Cerveza artesanal · Carne","Bière artisanale · Viande","Craft-Bier · Fleisch","Cerveja artesanal · Carne"),
      piatti:M("Birre artigianali sarde, tagliata di manzo, hamburger di Angus. Rustico e conviviale.","Sardinian craft beers, sliced beef, Angus burgers. Rustic and convivial.","Cervezas artesanales sardas, tagliata de ternera, hamburguesa de Angus. Rústico y acogedor.","Bières artisanales sardes, tagliata de bœuf, burger d'Angus. Rustique et convivial.","Sardische Craft-Biere, Rinder-Tagliata, Angus-Burger. Rustikal und gesellig.","Cervejas artesanais sardas, tagliata de vaca, hambúrguer de Angus. Rústico e convival.")},
    {e:"🥩",n:"El Miura",s:"4.6",d:"vicino",link:"https://maps.google.com/?q=El+Miura+Uta",
      tipo:M("Steakhouse · Cucina sarda","Steakhouse · Sardinian cuisine","Steakhouse · Cocina sarda","Steakhouse · Cuisine sarde","Steakhouse · Sardische Küche","Steakhouse · Cozinha sarda"),
      piatti:M("Grigliate, porceddu, secondi di terra. Ambiente familiare e porzioni generose.","Grilled meats, porceddu, hearty mains. Family atmosphere and generous portions.","Parrilladas, porceddu, segundos de carne. Ambiente familiar y raciones generosas.","Grillades, porceddu, plats de viande. Ambiance familiale et portions généreuses.","Grillgerichte, Porceddu, herzhafte Hauptgerichte. Familiäre Atmosphäre und großzügige Portionen.","Grelhados, porceddu, pratos de carne. Ambiente familiar e porções generosas.")},
    {e:"🍕",n:"Sa Locanda di Gaia",s:"4.4",d:"vicino",link:"https://maps.google.com/?q=Pizzeria+Sa+Locanda+Di+Gaia+Uta",
      tipo:M("Pizza · Cucina sarda","Pizza · Sardinian cuisine","Pizza · Cocina sarda","Pizza · Cuisine sarde","Pizza · Sardische Küche","Pizza · Cozinha sarda"),
      piatti:M("Pizze al forno a legna, pane carasau con guarnizioni, antipasti sardi.","Wood-fired pizzas, topped carasau bread, Sardinian starters.","Pizzas al horno de leña, pan carasau con guarniciones, entrantes sardos.","Pizzas au feu de bois, pain carasau garni, antipasti sardes.","Pizzen aus dem Holzofen, belegtes Carasau-Brot, sardische Vorspeisen.","Pizzas em forno a lenha, pão carasau com coberturas, entradas sardas.")},
  ]},
  { key:"sec2", ristoranti:[
    {e:"☕",n:"Check Mate Bar",s:"4.7",d:"vicino",link:"https://maps.google.com/?q=Checkmate+Bar+Uta",
      tipo:M("Bar · Aperitivi","Bar · Aperitifs","Bar · Aperitivos","Bar · Apéritifs","Bar · Aperitifs","Bar · Aperitivos"),
      piatti:M("Colazioni sarde, aperitivi con stuzzichini.","Sardinian breakfasts, aperitifs with nibbles.","Desayunos sardos, aperitivos con picoteo.","Petits-déjeuners sardes, apéritifs avec amuse-bouches.","Sardische Frühstücke, Aperitifs mit Snacks.","Pequenos-almoços sardos, aperitivos com petiscos.")},
    {e:"☕",n:"Caffè Roma",d:"vicino",link:"https://maps.google.com/search?q=Caffe+Roma+Uta",
      tipo:M("Bar storico","Historic café","Bar histórico","Café historique","Historisches Café","Café histórico"),
      piatti:M("Cornetti, paste fresche, caffè. Il ritrovo mattutino dei residenti di Uta.","Croissants, fresh pastries, coffee. The morning meeting spot for Uta's residents.","Cruasanes, bollería fresca, café. El punto de encuentro matutino de los vecinos de Uta.","Croissants, pâtisseries fraîches, café. Le rendez-vous matinal des habitants d'Uta.","Cornetti, frische Backwaren, Kaffee. Der morgendliche Treffpunkt der Einwohner von Uta.","Croissants, pastelaria fresca, café. O ponto de encontro matinal dos residentes de Uta.")},
    {e:"☕",n:"New Bar Mexico",s:"4.7",d:M("~15 min","~15 min","~15 min","~15 min","~15 Min","~15 min"),link:"https://maps.google.com/?q=New+Bar+Mexico+Assemini",
      tipo:M("Bar · Pasticceria · Assemini","Bar · Pastry · Assemini","Bar · Pastelería · Assemini","Bar · Pâtisserie · Assemini","Bar · Konditorei · Assemini","Bar · Pastelaria · Assemini"),
      piatti:M("Dolci sardi, seadas, paste di mandorle. Tappa golosa obbligata.","Sardinian sweets, seadas, almond pastries. A must for those with a sweet tooth.","Dulces sardos, seadas, pastas de almendra. Parada golosa obligada.","Douceurs sardes, seadas, pâtisseries aux amandes. Une étape gourmande incontournable.","Sardische Süßigkeiten, Seadas, Mandelgebäck. Ein Muss für Naschkatzen.","Doces sardos, seadas, doces de amêndoa. Paragem gulosa obrigatória.")},
  ]},
  { key:"sec3", ristoranti:[
    {e:"🍕",n:"Le Pizzi'ine di Niky",s:"4.9",d:M("~10 min","~10 min","~10 min","~10 min","~10 Min","~10 min"),link:"https://maps.google.com/?q=Le+Pizziine+di+Niky+Decimomannu",
      tipo:M("Pizzeria napoletana · Decimomannu","Neapolitan pizzeria · Decimomannu","Pizzería napolitana · Decimomannu","Pizzeria napolitaine · Decimomannu","Neapolitanische Pizzeria · Decimomannu","Pizzaria napolitana · Decimomannu"),
      piatti:M("Pizza napoletana a lunga lievitazione. Tra le migliori nell'area.","Long-fermented Neapolitan pizza. Among the best in the area.","Pizza napolitana de larga fermentación. De las mejores de la zona.","Pizza napolitaine à longue fermentation. Parmi les meilleures du secteur.","Neapolitanische Pizza mit langer Teigführung. Eine der besten der Gegend.","Pizza napolitana de longa fermentação. Das melhores da zona.")},
    {e:"🐟",n:"Ci Pensa Marco",s:"4.8",d:M("~10 min","~10 min","~10 min","~10 min","~10 Min","~10 min"),link:"https://maps.google.com/?q=Ci+Pensa+Marco+Decimomannu",
      tipo:M("Pesce · Cucina sarda · Decimomannu","Fish · Sardinian cuisine · Decimomannu","Pescado · Cocina sarda · Decimomannu","Poisson · Cuisine sarde · Decimomannu","Fisch · Sardische Küche · Decimomannu","Peixe · Cozinha sarda · Decimomannu"),
      piatti:M("Fregola con arselle, spaghetti all'astice, fritto di paranza. Freschissimo ogni giorno.","Fregola with clams, lobster spaghetti, mixed fried fish. Very fresh every day.","Fregola con almejas, espaguetis con bogavante, fritura de pescado. Fresquísimo cada día.","Fregola aux palourdes, spaghettis au homard, friture de poisson. Très frais chaque jour.","Fregola mit Venusmuscheln, Hummer-Spaghetti, Fischfritüre. Jeden Tag sehr frisch.","Fregola com amêijoas, esparguete com lagosta, fritada de peixe. Fresquíssimo todos os dias.")},
    {e:"🍽️",n:"Thalìa",d:M("~10 min","~10 min","~10 min","~10 min","~10 Min","~10 min"),link:"https://maps.google.com/?q=Ristorante+Thalia+Elmas",
      tipo:M("Cucina mediterranea · Elmas","Mediterranean cuisine · Elmas","Cocina mediterránea · Elmas","Cuisine méditerranéenne · Elmas","Mediterrane Küche · Elmas","Cozinha mediterrânica · Elmas"),
      piatti:M("Cucina di territorio con influenze mediterranee, carni e pesce. Ambiente curato.","Regional cuisine with Mediterranean influences, meat and fish. Elegant setting.","Cocina de territorio con influencias mediterráneas, carnes y pescado. Ambiente cuidado.","Cuisine du terroir aux influences méditerranéennes, viandes et poisson. Cadre soigné.","Regionale Küche mit mediterranen Einflüssen, Fleisch und Fisch. Gepflegtes Ambiente.","Cozinha de território com influências mediterrânicas, carnes e peixe. Ambiente cuidado.")},
    {e:"🌿",n:"Ada Restaurant",s:"4.7",d:M("~15 min","~15 min","~15 min","~15 min","~15 Min","~15 min"),hl:true,link:"https://maps.google.com/?q=Ada+Restaurant+San+Sperate",
      tipo:M("Cucina sarda creativa · San Sperate","Creative Sardinian cuisine · San Sperate","Cocina sarda creativa · San Sperate","Cuisine sarde créative · San Sperate","Kreative sardische Küche · San Sperate","Cozinha sarda criativa · San Sperate"),
      piatti:M("Malloreddus al mirto, agnello con erbe aromatiche, dolci rivisitati. Accanto ai murales di Sciola.","Malloreddus with myrtle, lamb with aromatic herbs, reinvented desserts. Next to Sciola's murals.","Malloreddus al mirto, cordero con hierbas aromáticas, postres reinventados. Junto a los murales de Sciola.","Malloreddus au myrte, agneau aux herbes aromatiques, desserts revisités. À côté des fresques de Sciola.","Malloreddus mit Myrte, Lamm mit Kräutern, neu interpretierte Desserts. Neben Sciolas Wandbildern.","Malloreddus com mirto, borrego com ervas aromáticas, doces reinventados. Junto aos murais de Sciola.")},
    {e:"🍺",n:"Gasthaus",s:"4.6",d:M("~15 min","~15 min","~15 min","~15 min","~15 Min","~15 min"),link:"https://maps.google.com/?q=Gasthaus+Assemini",
      tipo:M("Birreria tedesca · Assemini","German beer house · Assemini","Cervecería alemana · Assemini","Brasserie allemande · Assemini","Deutsches Bierhaus · Assemini","Cervejaria alemã · Assemini"),
      piatti:M("Würstel, crauti, stinco, birre tedesche alla spina. Un'anomalia felice.","Sausages, sauerkraut, pork knuckle, German draught beers. A happy anomaly.","Salchichas, chucrut, codillo, cervezas alemanas de barril. Una feliz anomalía.","Saucisses, choucroute, jarret, bières allemandes pression. Une heureuse anomalie.","Würstel, Sauerkraut, Haxe, deutsches Bier vom Fass. Eine erfreuliche Anomalie.","Salsichas, chucrute, joelho de porco, cervejas alemãs de pressão. Uma feliz anomalia.")},
    {e:"🍱",n:"Makito Poke & Sushi",s:"4.7",d:M("~15 min","~15 min","~15 min","~15 min","~15 Min","~15 min"),link:"https://maps.google.com/?q=Makito+Assemini",
      tipo:M("Fusion · Assemini","Fusion · Assemini","Fusión · Assemini","Fusion · Assemini","Fusion · Assemini","Fusão · Assemini"),
      piatti:M("Poke bowl, sushi rolls, tartare di tonno. Leggero e fresco.","Poke bowls, sushi rolls, tuna tartare. Light and fresh.","Poke bowls, rolls de sushi, tartar de atún. Ligero y fresco.","Poke bowls, sushi rolls, tartare de thon. Léger et frais.","Poke Bowls, Sushi Rolls, Thunfisch-Tatar. Leicht und frisch.","Poke bowls, sushi rolls, tártaro de atum. Leve e fresco.")},
    {e:"⭐",n:"Lughènte Fine Dining",s:"4.9",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),hl:true,link:"https://maps.google.com/?q=Lughente+Capoterra",
      tipo:M("Alta cucina sarda · Capoterra","Sardinian fine dining · Capoterra","Alta cocina sarda · Capoterra","Haute cuisine sarde · Capoterra","Sardische Spitzenküche · Capoterra","Alta cozinha sarda · Capoterra"),
      piatti:M("Menù degustazione con bottarga, agnello, pecorino DOP. Prenotazione obbligatoria.","Tasting menu with bottarga, lamb, PDO pecorino. Booking required.","Menú degustación con botarga, cordero, pecorino DOP. Reserva obligatoria.","Menu dégustation avec poutargue, agneau, pecorino AOP. Réservation obligatoire.","Degustationsmenü mit Bottarga, Lamm, Pecorino g.U. Reservierung erforderlich.","Menu de degustação com bottarga, borrego, pecorino DOP. Reserva obrigatória.")},
    {e:"🌊",n:"Arcadia Restaurant",s:"4.5",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Arcadia+Restaurant+Capoterra",
      tipo:M("Pesce · Capoterra","Fish · Capoterra","Pescado · Capoterra","Poisson · Capoterra","Fisch · Capoterra","Peixe · Capoterra"),
      piatti:M("Linguine all'aragosta, antipasti di mare, vista sul litorale.","Lobster linguine, seafood starters, coastline view.","Linguine con langosta, entrantes de mar, vistas al litoral.","Linguine au homard, antipasti de la mer, vue sur le littoral.","Hummer-Linguine, Meeresfrüchte-Vorspeisen, Blick auf die Küste.","Linguine com lagosta, entradas de mar, vista para o litoral.")},
  ]},
  { key:"sec4", ristoranti:[
    {e:"🐠",n:"Stella Marina di Montecristo",s:"4.6",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Stella+Marina+di+Montecristo+Cagliari",
      tipo:M("Ristorante di pesce","Fish restaurant","Restaurante de pescado","Restaurant de poisson","Fischrestaurant","Restaurante de peixe"),
      piatti:M("Crudi di mare, zuppa di pesce, spaghetti con bottarga di muggine.","Raw seafood, fish soup, spaghetti with grey mullet bottarga.","Crudos de mar, sopa de pescado, espaguetis con botarga de mújol.","Fruits de mer crus, soupe de poisson, spaghettis à la poutargue de mulet.","Rohe Meeresfrüchte, Fischsuppe, Spaghetti mit Meeräschen-Bottarga.","Crus de mar, sopa de peixe, esparguete com bottarga de tainha.")},
    {e:"🦐",n:"Mari Mannu",s:"4.6",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Mari+Mannu+Cagliari",
      tipo:M("Cucina di mare","Seafood cuisine","Cocina de mar","Cuisine de la mer","Meeresküche","Cozinha de mar"),
      piatti:M("Antipasto di mare ricchissimo, fregola con frutti di mare, vista porto.","Rich seafood starter, fregola with seafood, harbour view.","Riquísimo entrante de mar, fregola con mariscos, vistas al puerto.","Antipasti de la mer copieux, fregola aux fruits de mer, vue sur le port.","Üppige Meeresfrüchte-Vorspeise, Fregola mit Meeresfrüchten, Hafenblick.","Entrada de mar riquíssima, fregola com marisco, vista para o porto.")},
    {e:"🐟",n:"Mondo & Luca",s:"4.6",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Mondo+e+Luca+Cagliari",
      tipo:M("Trattoria di pesce","Fish trattoria","Trattoria de pescado","Trattoria de poisson","Fisch-Trattoria","Tratoria de peixe"),
      piatti:M("Ambiente informale, qualità altissima. Crudi, pasta al sugo di scorfano.","Informal setting, top quality. Raw seafood, pasta with scorpionfish sauce.","Ambiente informal, altísima calidad. Crudos, pasta con salsa de cabracho.","Ambiance décontractée, qualité très élevée. Crudités de mer, pâtes à la rascasse.","Zwangloses Ambiente, höchste Qualität. Rohe Meeresfrüchte, Pasta mit Drachenkopf-Sauce.","Ambiente informal, qualidade altíssima. Crus, massa com molho de peixe-escorpião.")},
  ]},
  { key:"sec5", ristoranti:[
    {e:"🐟",n:"Sa Cardiga e Su Schironi",s:"4.6",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),hl:true,link:"https://maps.google.com/?q=Sa+Cardiga+e+Su+Schironi+Capoterra",
      tipo:M("Pesce · Capoterra","Fish · Capoterra","Pescado · Capoterra","Poisson · Capoterra","Fisch · Capoterra","Peixe · Capoterra"),
      piatti:M("Istituzione della cucina di mare cagliaritana, sul lungomare di Capoterra. Cassola di pesce, trofie con ricci di mare e bottarga. Prenotazione consigliata.","An institution of Cagliari's seafood cuisine, on the Capoterra seafront. Fish cassola, trofie with sea urchin and bottarga. Booking recommended.","Institución de la cocina marinera de Cagliari, en el paseo marítimo de Capoterra. Cassola de pescado, trofie con erizos de mar y botarga. Se recomienda reservar.","Institution de la cuisine de la mer cagliaritaine, sur le front de mer de Capoterra. Cassola de poisson, trofie aux oursins et poutargue. Réservation conseillée.","Eine Institution der Cagliaritaner Meeresküche, an der Uferpromenade von Capoterra. Fisch-Cassola, Trofie mit Seeigeln und Bottarga. Reservierung empfohlen.","Instituição da cozinha marinha de Cagliari, na marginal de Capoterra. Cassola de peixe, trofie com ouriços-do-mar e bottarga. Reserva recomendada.")},
    {e:"🌊",n:"Lo Scoglio",s:"3.8",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Lo+Scoglio+Cagliari",
      tipo:M("Pesce · Sant'Elia, Cagliari","Fish · Sant'Elia, Cagliari","Pescado · Sant'Elia, Cagliari","Poisson · Sant'Elia, Cagliari","Fisch · Sant'Elia, Cagliari","Peixe · Sant'Elia, Cagliari"),
      piatti:M("Uno dei ristoranti di pesce più storici di Cagliari, affacciato sul golfo nel borgo di Sant'Elia. Orata, grigliata mista, linguine all'astice. Servizio talvolta lento nei weekend affollati.","One of Cagliari's most historic fish restaurants, overlooking the gulf in the Sant'Elia district. Sea bream, mixed grill, lobster linguine. Service can be slow on busy weekends.","Uno de los restaurantes de pescado más históricos de Cagliari, frente al golfo en el barrio de Sant'Elia. Dorada, parrillada mixta, linguine con bogavante. El servicio puede ser lento los fines de semana concurridos.","L'un des restaurants de poisson les plus historiques de Cagliari, face au golfe dans le quartier de Sant'Elia. Daurade, grillades mixtes, linguine au homard. Service parfois lent le week-end quand c'est plein.","Eines der traditionsreichsten Fischrestaurants Cagliaris, mit Blick auf den Golf im Stadtteil Sant'Elia. Goldbrasse, gemischter Grillteller, Hummer-Linguine. An belebten Wochenenden kann der Service langsam sein.","Um dos restaurantes de peixe mais históricos de Cagliari, de frente para o golfo no bairro de Sant'Elia. Dourada, grelhados mistos, linguine com lagosta. O serviço pode ser lento em fins de semana concorridos.")},
    {e:"🏛️",n:"Antica Cagliari",s:"4.5",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Antica+Cagliari+Marina",
      tipo:M("Cucina sarda tradizionale · Marina, Cagliari","Traditional Sardinian cuisine · Marina, Cagliari","Cocina sarda tradicional · Marina, Cagliari","Cuisine sarde traditionnelle · Marina, Cagliari","Traditionelle sardische Küche · Marina, Cagliari","Cozinha sarda tradicional · Marina, Cagliari"),
      piatti:M("Nel cuore del quartiere storico della Marina. Insalata di polpo e patate, spaghetti a vongole e bottarga, spigola al vermentino. Sapori sardi autentici, senza fronzoli.","In the heart of the historic Marina district. Octopus and potato salad, clam and bottarga spaghetti, sea bass in vermentino. Authentic Sardinian flavours, no frills.","En el corazón del histórico barrio de la Marina. Ensalada de pulpo y patatas, espaguetis con almejas y botarga, lubina al vermentino. Sabores sardos auténticos, sin adornos.","Au cœur du quartier historique de la Marina. Salade de poulpe et pommes de terre, spaghettis aux palourdes et poutargue, loup au vermentino. Saveurs sardes authentiques, sans chichis.","Im Herzen des historischen Viertels Marina. Oktopus-Kartoffelsalat, Spaghetti mit Venusmuscheln und Bottarga, Wolfsbarsch in Vermentino. Authentische sardische Aromen, ohne Schnickschnack.","No coração do histórico bairro da Marina. Salada de polvo e batatas, esparguete com amêijoas e bottarga, robalo ao vermentino. Sabores sardos autênticos, sem firulas.")},
  ]},
  { key:"sec6", ristoranti:[
    {e:"🍝",n:"Sa Mesa",s:"4.5",d:M("~10 min","~10 min","~10 min","~10 min","~10 Min","~10 min"),hl:true,link:"https://maps.google.com/?q=Sa+Mesa+Decimomannu",
      tipo:M("Cucina sarda · Decimomannu","Sardinian cuisine · Decimomannu","Cocina sarda · Decimomannu","Cuisine sarde · Decimomannu","Sardische Küche · Decimomannu","Cozinha sarda · Decimomannu"),
      piatti:M("Cucina sarda genuina e abbondante, ingredienti freschi di produttori locali. Ottimo rapporto qualità-prezzo, molto amato dai residenti.","Genuine, generous Sardinian cooking with fresh ingredients from local producers. Great value for money, much loved by locals.","Cocina sarda genuina y abundante, con ingredientes frescos de productores locales. Excelente relación calidad-precio, muy querida por los vecinos.","Cuisine sarde authentique et généreuse, avec des ingrédients frais de producteurs locaux. Excellent rapport qualité-prix, très appréciée des habitants.","Echte, großzügige sardische Küche mit frischen Zutaten von lokalen Erzeugern. Hervorragendes Preis-Leistungs-Verhältnis, bei Einheimischen sehr beliebt.","Cozinha sarda genuína e generosa, com ingredientes frescos de produtores locais. Ótima relação qualidade-preço, muito apreciada pelos moradores.")},
    {e:"🍖",n:"La Biada",d:M("~30 min","~30 min","~30 min","~30 min","~30 Min","~30 min"),link:"https://maps.google.com/?q=Agriturismo+La+Biada+Pula",
      tipo:M("Agriturismo · Carni arrosto · Pula","Farmhouse · Roasted meats · Pula","Agroturismo · Carnes asadas · Pula","Ferme-auberge · Viandes rôties · Pula","Agriturismo · Bratenfleisch · Pula","Agroturismo · Carnes assadas · Pula"),
      piatti:M("Agriturismo immerso nel verde, a due passi dalle spiagge di Pula. Maialetto e agnello arrosto, culurgiones fritti, verdure in agrodolce. Menù fisso, atmosfera conviviale.","A farmhouse restaurant surrounded by greenery, close to Pula's beaches. Roast suckling pig and lamb, fried culurgiones, sweet-and-sour vegetables. Fixed menu, convivial atmosphere.","Agroturismo rodeado de verde, cerca de las playas de Pula. Cochinillo y cordero asado, culurgiones fritos, verduras agridulces. Menú fijo, ambiente acogedor.","Ferme-auberge nichée dans la verdure, à deux pas des plages de Pula. Cochon de lait et agneau rôtis, culurgiones frits, légumes aigres-doux. Menu fixe, ambiance conviviale.","Agriturismo inmitten von Grün, nur wenige Schritte von den Stränden von Pula entfernt. Gebratenes Spanferkel und Lamm, frittierte Culurgiones, süß-saures Gemüse. Festes Menü, gesellige Atmosphäre.","Agroturismo em plena natureza, perto das praias de Pula. Leitão e borrego assados, culurgiones fritos, legumes agridoces. Menu fixo, ambiente convivial.")},
    {e:"🏺",n:"Su Cumbidu",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Su+Cumbidu+Cagliari",
      tipo:M("Cucina sarda tradizionale · Marina, Cagliari","Traditional Sardinian cuisine · Marina, Cagliari","Cocina sarda tradicional · Marina, Cagliari","Cuisine sarde traditionnelle · Marina, Cagliari","Traditionelle sardische Küche · Marina, Cagliari","Cozinha sarda tradicional · Marina, Cagliari"),
      piatti:M("In un edificio storico del '700 nel quartiere Marina. Pane frattau, fregola, culurgiones, maialetto arrosto. Ricette della tradizione in un ambiente suggestivo.","Housed in an 18th-century building in the Marina district. Pane frattau, fregola, culurgiones, roast suckling pig. Traditional recipes in an evocative setting.","En un edificio histórico del siglo XVIII en el barrio de la Marina. Pane frattau, fregola, culurgiones, cochinillo asado. Recetas de la tradición en un ambiente sugerente.","Dans un bâtiment historique du XVIIIe siècle, dans le quartier de la Marina. Pane frattau, fregola, culurgiones, cochon de lait rôti. Recettes traditionnelles dans un cadre évocateur.","In einem historischen Gebäude aus dem 18. Jahrhundert im Viertel Marina. Pane frattau, Fregola, Culurgiones, gebratenes Spanferkel. Traditionelle Rezepte in stimmungsvollem Ambiente.","Num edifício histórico do século XVIII no bairro da Marina. Pane frattau, fregola, culurgiones, leitão assado. Receitas tradicionais num ambiente evocativo.")},
    {e:"🍽️",n:"Sa Domu Sarda",d:M("~20 min","~20 min","~20 min","~20 min","~20 Min","~20 min"),link:"https://maps.google.com/?q=Sa+Domu+Sarda+Cagliari",
      tipo:M("Cucina sarda di terra · Cagliari","Sardinian land cuisine · Cagliari","Cocina sarda de tierra · Cagliari","Cuisine sarde de la terre · Cagliari","Sardische Küche vom Land · Cagliari","Cozinha sarda de terra · Cagliari"),
      piatti:M("Cucina di terra della tradizione sarda: lumache in umido, polpette, malloreddus e culurgiones fatti in casa. Genuina e senza fronzoli.","Traditional Sardinian land cuisine: stewed snails, meatballs, homemade malloreddus and culurgiones. Genuine and unpretentious.","Cocina de tierra de la tradición sarda: caracoles guisados, albóndigas, malloreddus y culurgiones caseros. Genuina y sin pretensiones.","Cuisine sarde traditionnelle de la terre : escargots mijotés, boulettes, malloreddus et culurgiones faits maison. Authentique et sans chichis.","Traditionelle sardische Küche vom Land: geschmorte Schnecken, Fleischbällchen, hausgemachte Malloreddus und Culurgiones. Ehrlich und schnörkellos.","Cozinha sarda de terra tradicional: caracóis estufados, almôndegas, malloreddus e culurgiones caseiros. Genuína e sem frescuras.")},
  ]},
];
const PIATTI_SARDI = [
  {em:"🍝",nome:"Malloreddus",desc:M("Gnocchetti sardi al ragù di salsiccia","Sardinian gnocchetti with sausage ragù","Ñoquis sardos con ragú de salchicha","Gnocchetti sardes au ragù de saucisse","Sardische Gnocchetti mit Wurst-Ragù","Gnocchetti sardos com ragu de salsicha")},
  {em:"🐚",nome:"Fregola",desc:M("Pasta sferica con arselle o frutti di mare","Spherical pasta with clams or seafood","Pasta esférica con almejas o mariscos","Pâtes sphériques aux palourdes ou fruits de mer","Kugelige Pasta mit Venusmuscheln oder Meeresfrüchten","Massa esférica com amêijoas ou marisco")},
  {em:"🐏",nome:"Porceddu",desc:M("Maialino da latte arrosto allo spiedo","Spit-roasted suckling pig","Cochinillo asado al espetón","Cochon de lait rôti à la broche","Spanferkel vom Spieß","Leitão assado no espeto")},
  {em:"🧀",nome:"Pecorino",desc:M("Formaggio DOP stagionato, base della dieta","Aged PDO cheese, a diet staple","Queso DOP curado, base de la dieta","Fromage AOP affiné, base du régime","Gereifter Käse g.U., Grundnahrungsmittel","Queijo DOP curado, base da dieta")},
  {em:"🫙",nome:"Bottarga",desc:M("Uova di muggine essiccate — il «caviale sardo»","Dried grey mullet roe — 'Sardinian caviar'","Huevas de mújol secas — el «caviar sardo»","Œufs de mulet séchés — le « caviar sarde »","Getrockneter Meeräschenrogen — der „sardische Kaviar“","Ovas de tainha secas — o «caviar sardo»")},
  {em:"🍩",nome:"Seadas",desc:M("Dolce fritto con formaggio e miele amaro","Fried pastry with cheese and bitter honey","Dulce frito con queso y miel amarga","Beignet au fromage et miel amer","Frittiertes Gebäck mit Käse und bitterem Honig","Doce frito com queijo e mel amargo")},
];

// ── DATI EVENTI ──────────────────────────────────
const EVENTI_MESI = [
  {mese:1, m:M("Gennaio","January","Enero","Janvier","Januar","Janeiro"), evs:[
    {d:M("12 gennaio","12 January","12 de enero","12 janvier","12. Januar","12 de janeiro"),t:M("🕯️ Festa di Santa Greca (Decimomannu)","🕯️ Feast of Santa Greca (Decimomannu)","🕯️ Fiesta de Santa Greca (Decimomannu)","🕯️ Fête de Santa Greca (Decimomannu)","🕯️ Fest der Santa Greca (Decimomannu)","🕯️ Festa de Santa Greca (Decimomannu)")},
    {d:M("16-17 gennaio","16-17 January","16-17 de enero","16-17 janvier","16.-17. Januar","16-17 de janeiro"),t:M("🔥 Fuochi di Sant'Antonio Abate — falò tradizionali in molti paesi del circondario","🔥 Bonfires of St Anthony the Abbot — traditional fires in many nearby villages","🔥 Hogueras de San Antonio Abad — fogatas tradicionales en muchos pueblos de los alrededores","🔥 Feux de Saint-Antoine l'Abbé — feux traditionnels dans de nombreux villages alentour","🔥 Feuer des Hl. Antonius — traditionelle Freudenfeuer in vielen umliegenden Dörfern","🔥 Fogueiras de Santo Antão — fogueiras tradicionais em muitas aldeias vizinhas")},
  ]},
  {mese:2, m:M("Febbraio / Carnevale","February / Carnival","Febrero / Carnaval","Février / Carnaval","Februar / Karneval","Fevereiro / Carnaval"), evs:[
    {d:M("Domenica e martedì di Carnevale","Carnival Sunday and Tuesday","Domingo y martes de Carnaval","Dimanche et mardi de Carnaval","Karnevalssonntag und -dienstag","Domingo e terça de Carnaval"),t:M("🐴 Sa Sartiglia (Oristano) — la spettacolare giostra equestre, tra le più antiche del Mediterraneo","🐴 Sa Sartiglia (Oristano) — the spectacular equestrian tournament, among the oldest in the Mediterranean","🐴 Sa Sartiglia (Oristano) — el espectacular torneo ecuestre, de los más antiguos del Mediterráneo","🐴 Sa Sartiglia (Oristano) — le spectaculaire tournoi équestre, parmi les plus anciens de Méditerranée","🐴 Sa Sartiglia (Oristano) — das spektakuläre Reiterturnier, eines der ältesten des Mittelmeers","🐴 Sa Sartiglia (Oristano) — o espetacular torneio equestre, dos mais antigos do Mediterrâneo"),link:"https://www.sartiglia.info"},
    {d:M("Settimana di Carnevale","Carnival week","Semana de Carnaval","Semaine de Carnaval","Karnevalswoche","Semana de Carnaval"),t:M("🎭 Carnevale di Cagliari — sfilate e la tradizionale Ratantira","🎭 Cagliari Carnival — parades and the traditional Ratantira","🎭 Carnaval de Cagliari — desfiles y la tradicional Ratantira","🎭 Carnaval de Cagliari — défilés et la traditionnelle Ratantira","🎭 Karneval von Cagliari — Umzüge und die traditionelle Ratantira","🎭 Carnaval de Cagliari — desfiles e a tradicional Ratantira")},
  ]},
  {mese:3, m:M("Marzo / Aprile — Pasqua","March / April — Easter","Marzo / Abril — Pascua","Mars / Avril — Pâques","März / April — Ostern","Março / Abril — Páscoa"), evs:[
    {d:M("Settimana Santa","Holy Week","Semana Santa","Semaine Sainte","Karwoche","Semana Santa"),t:M("⛪ Riti della Settimana Santa (Cagliari e Iglesias) — processioni di origine spagnola tra le più suggestive d'Italia","⛪ Holy Week rites (Cagliari and Iglesias) — Spanish-origin processions among the most striking in Italy","⛪ Ritos de Semana Santa (Cagliari e Iglesias) — procesiones de origen español de las más impresionantes de Italia","⛪ Rites de la Semaine Sainte (Cagliari et Iglesias) — processions d'origine espagnole parmi les plus saisissantes d'Italie","⛪ Riten der Karwoche (Cagliari und Iglesias) — Prozessionen spanischen Ursprungs, zu den eindrucksvollsten Italiens","⛪ Ritos da Semana Santa (Cagliari e Iglesias) — procissões de origem espanhola das mais impressionantes de Itália")},
  ]},
  {mese:5, m:M("Maggio","May","Mayo","Mai","Mai","Maio"), evs:[
    {d:M("1–4 maggio","1–4 May","1–4 de mayo","1–4 mai","1.–4. Mai","1–4 de maio"),t:M("🎖️ Festa di Sant'Efisio (Cagliari) — processione ininterrotta dal 1657","🎖️ Feast of Sant'Efisio (Cagliari) — an unbroken procession since 1657","🎖️ Fiesta de Sant'Efisio (Cagliari) — procesión ininterrumpida desde 1657","🎖️ Fête de Sant'Efisio (Cagliari) — procession ininterrompue depuis 1657","🎖️ Fest des Sant'Efisio (Cagliari) — ununterbrochene Prozession seit 1657","🎖️ Festa de Sant'Efisio (Cagliari) — procissão ininterrupta desde 1657"),link:"https://www.festadisantefisio.com"},
    {d:M("Un weekend di maggio","A weekend in May","Un fin de semana de mayo","Un week-end de mai","Ein Wochenende im Mai","Um fim de semana de maio"),t:M("🏛️ Monumenti Aperti (Cagliari) — centinaia di siti normalmente chiusi, visitabili gratis","🏛️ Monumenti Aperti (Cagliari) — hundreds of normally closed sites, open free of charge","🏛️ Monumenti Aperti (Cagliari) — cientos de sitios normalmente cerrados, visitables gratis","🏛️ Monumenti Aperti (Cagliari) — des centaines de sites normalement fermés, visitables gratuitement","🏛️ Monumenti Aperti (Cagliari) — Hunderte normalerweise geschlossene Stätten, kostenlos zugänglich","🏛️ Monumenti Aperti (Cagliari) — centenas de locais normalmente fechados, visitáveis gratuitamente"),link:"https://monumentiaperti.com"},
    {d:M("14 maggio","14 May","14 de mayo","14 mai","14. Mai","14 de maio"),t:M("🌸 Santa Giusta, patrona di Uta","🌸 Santa Giusta, patron saint of Uta","🌸 Santa Giusta, patrona de Uta","🌸 Santa Giusta, patronne d'Uta","🌸 Santa Giusta, Schutzpatronin von Uta","🌸 Santa Giusta, padroeira de Uta")},
    {d:M("Primo sabato dopo il 14","First Saturday after the 14th","Primer sábado después del 14","Premier samedi après le 14","Erster Samstag nach dem 14.","Primeiro sábado após o dia 14"),t:M("🌾 Sant'Isidoro (Uta) — festa agricola con trattori e gruppi folk","🌾 Sant'Isidoro (Uta) — a farming festival with tractors and folk groups","🌾 Sant'Isidoro (Uta) — fiesta agrícola con tractores y grupos folclóricos","🌾 Sant'Isidoro (Uta) — fête agricole avec tracteurs et groupes folkloriques","🌾 Sant'Isidoro (Uta) — Bauernfest mit Traktoren und Folkloregruppen","🌾 Sant'Isidoro (Uta) — festa agrícola com tratores e grupos folclóricos")},
  ]},
  {mese:6, m:M("Giugno","June","Junio","Juin","Juni","Junho"), evs:[
    {d:M("Inizio giugno","Early June","Principios de junio","Début juin","Anfang Juni","Início de junho"),t:M("🐟 Girotonno (Carloforte) — rassegna gastronomica internazionale del tonno rosso","🐟 Girotonno (Carloforte) — international bluefin tuna food festival","🐟 Girotonno (Carloforte) — muestra gastronómica internacional del atún rojo","🐟 Girotonno (Carloforte) — festival gastronomique international du thon rouge","🐟 Girotonno (Carloforte) — internationales Gastronomiefestival rund um den Roten Thun","🐟 Girotonno (Carloforte) — mostra gastronómica internacional do atum-rabilho"),link:"https://www.girotonno.it"},
  ]},
  {mese:7, m:M("Estate (luglio/agosto)","Summer (July/August)","Verano (julio/agosto)","Été (juillet/août)","Sommer (Juli/August)","Verão (julho/agosto)"), evs:[
    {d:M("Tutta l'estate","All summer","Todo el verano","Tout l'été","Den ganzen Sommer","Todo o verão"),t:M("🎶 Rassegne e concerti all'aperto a Cagliari — Anfiteatro Romano, Parco della Musica, Forte Village Arena","🎶 Open-air festivals and concerts in Cagliari — Roman Amphitheatre, Parco della Musica, Forte Village Arena","🎶 Festivales y conciertos al aire libre en Cagliari — Anfiteatro Romano, Parco della Musica, Forte Village Arena","🎶 Festivals et concerts en plein air à Cagliari — Amphithéâtre romain, Parco della Musica, Forte Village Arena","🎶 Open-Air-Festivals und Konzerte in Cagliari — Römisches Amphitheater, Parco della Musica, Forte Village Arena","🎶 Festivais e concertos ao ar livre em Cagliari — Anfiteatro Romano, Parco della Musica, Forte Village Arena")},
    {d:M("Luglio / Agosto","July / August","Julio / Agosto","Juillet / Août","Juli / August","Julho / Agosto"),t:M("🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Coppa del Mondo di tuffi tra mare e miniere.","🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). High-diving World Cup between sea and mines.","🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Copa del Mundo de saltos entre mar y minas.","🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Coupe du monde de plongeon entre mer et mines.","🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Klippenspringen-Weltcup zwischen Meer und Minen.","🏊 World Aquatics High Diving World Cup — Porto Flavia (Nebida). Taça do Mundo de saltos entre mar e minas."),link:"https://maps.google.com/?q=Porto+Flavia+Nebida+Sardegna"},
  ]},
  {mese:8, m:M("Agosto","August","Agosto","Août","August","Agosto"), evs:[
    {d:M("13 agosto","13 August","13 de agosto","13 août","13. August","13 de agosto"),t:M("⚔️ Corteo Storico Medievale (Iglesias) — 700 figuranti","⚔️ Medieval Historical Parade (Iglesias) — 700 costumed participants","⚔️ Desfile histórico medieval (Iglesias) — 700 figurantes","⚔️ Cortège historique médiéval (Iglesias) — 700 figurants","⚔️ Historischer Mittelalterumzug (Iglesias) — 700 Mitwirkende","⚔️ Cortejo histórico medieval (Iglesias) — 700 figurantes")},
    {d:M("15 agosto","15 August","15 de agosto","15 août","15. August","15 de agosto"),t:M("🕯️ Assunzione B.V. Maria + processione solenne (Uta)","🕯️ Assumption of the Virgin Mary + solemn procession (Uta)","🕯️ Asunción de la Virgen María + procesión solemne (Uta)","🕯️ Assomption de la Vierge Marie + procession solennelle (Uta)","🕯️ Mariä Himmelfahrt + feierliche Prozession (Uta)","🕯️ Assunção de Nossa Senhora + procissão solene (Uta)")},
  ]},
  {mese:9, m:M("Settembre","September","Septiembre","Septembre","September","Setembro"), evs:[
    {d:M("5–9 settembre","5–9 September","5–9 de septiembre","5–9 septembre","5.–9. September","5–9 de setembro"),t:M("🌟 Festa di Santa Maria (Uta) — la più attesa! Concerti, fuochi d'artificio","🌟 Feast of Santa Maria (Uta) — the most awaited! Concerts, fireworks","🌟 Fiesta de Santa Maria (Uta) — ¡la más esperada! Conciertos, fuegos artificiales","🌟 Fête de Santa Maria (Uta) — la plus attendue ! Concerts, feux d'artifice","🌟 Fest der Santa Maria (Uta) — das ersehnteste! Konzerte, Feuerwerk","🌟 Festa de Santa Maria (Uta) — a mais esperada! Concertos, fogo de artifício")},
    {d:M("Fine settembre","Late September","Finales de septiembre","Fin septembre","Ende September","Fim de setembro"),t:M("🎊 Festa di Santa Greca (Decimomannu)","🎊 Feast of Santa Greca (Decimomannu)","🎊 Fiesta de Santa Greca (Decimomannu)","🎊 Fête de Santa Greca (Decimomannu)","🎊 Fest der Santa Greca (Decimomannu)","🎊 Festa de Santa Greca (Decimomannu)")},
    {d:M("Da settembre a dicembre","From September to December","De septiembre a diciembre","De septembre à décembre","Von September bis Dezember","De setembro a dezembro"),t:M("🍂 Autunno in Barbagia — i paesi del centro Sardegna aprono le cortes: artigianato e sapori (gita di un giorno)","🍂 Autunno in Barbagia — the villages of central Sardinia open their cortes: crafts and flavours (a day trip)","🍂 Autunno in Barbagia — los pueblos del centro de Cerdeña abren sus cortes: artesanía y sabores (excursión de un día)","🍂 Autunno in Barbagia — les villages du centre de la Sardaigne ouvrent leurs cortes : artisanat et saveurs (excursion d'une journée)","🍂 Autunno in Barbagia — die Dörfer Zentralsardiniens öffnen ihre Cortes: Handwerk und Gaumenfreuden (Tagesausflug)","🍂 Autunno in Barbagia — as aldeias do centro da Sardenha abrem as suas cortes: artesanato e sabores (passeio de um dia)"),link:"https://www.aspenuoro.it"},
  ]},
  {mese:11, m:M("Novembre","November","Noviembre","Novembre","November","Novembro"), evs:[
    {d:M("Terza domenica","Third Sunday","Tercer domingo","Troisième dimanche","Dritter Sonntag","Terceiro domingo"),t:M("🏃 Maratonina Città di Uta — 21 km, 10,5 km, family run 4 km · ore 10:00 da Via Stazione","🏃 Città di Uta Half-Marathon — 21 km, 10.5 km, 4 km family run · 10:00 from Via Stazione","🏃 Media Maratón Città di Uta — 21 km, 10,5 km, family run 4 km · 10:00 desde Via Stazione","🏃 Semi-marathon Città di Uta — 21 km, 10,5 km, family run 4 km · 10h00 depuis Via Stazione","🏃 Halbmarathon Città di Uta — 21 km, 10,5 km, Family Run 4 km · 10:00 Uhr ab Via Stazione","🏃 Meia Maratona Città di Uta — 21 km, 10,5 km, family run 4 km · 10:00 a partir da Via Stazione"),link:"https://maratoninadiuta.it"},
  ]},
  {mese:12, m:M("Dicembre","December","Diciembre","Décembre","Dezember","Dezembro"), evs:[
    {d:M("Tutto il mese","All month","Todo el mes","Tout le mois","Den ganzen Monat","Todo o mês"),t:M("🎄 Mercatini di Natale a Cagliari — Piazza Yenne, Piazza Garibaldi e Corso Vittorio Emanuele","🎄 Christmas markets in Cagliari — Piazza Yenne, Piazza Garibaldi and Corso Vittorio Emanuele","🎄 Mercadillos de Navidad en Cagliari — Piazza Yenne, Piazza Garibaldi y Corso Vittorio Emanuele","🎄 Marchés de Noël à Cagliari — Piazza Yenne, Piazza Garibaldi et Corso Vittorio Emanuele","🎄 Weihnachtsmärkte in Cagliari — Piazza Yenne, Piazza Garibaldi und Corso Vittorio Emanuele","🎄 Mercados de Natal em Cagliari — Piazza Yenne, Piazza Garibaldi e Corso Vittorio Emanuele")},
    {d:M("13 dicembre","13 December","13 de diciembre","13 décembre","13. Dezember","13 de dezembro"),t:M("🕯️ Santa Lucia (Uta)","🕯️ Santa Lucia (Uta)","🕯️ Santa Lucía (Uta)","🕯️ Sainte-Lucie (Uta)","🕯️ Santa Lucia (Uta)","🕯️ Santa Luzia (Uta)")},
  ]},
];
const EVENTI_FISSI = [
  {mese:1,giorno:12,titolo:M("Festa di Santa Greca","Feast of Santa Greca","Fiesta de Santa Greca","Fête de Santa Greca","Fest der Santa Greca","Festa de Santa Greca"),luogo:"Decimomannu",emoji:"🕯️"},
  {mese:5,giorno:1,titolo:M("Festa di Sant'Efisio","Feast of Sant'Efisio","Fiesta de Sant'Efisio","Fête de Sant'Efisio","Fest des Sant'Efisio","Festa de Sant'Efisio"),luogo:"Cagliari",emoji:"🎖️"},
  {mese:5,giorno:14,titolo:M("Santa Giusta — patrona di Uta","Santa Giusta — patron of Uta","Santa Giusta — patrona de Uta","Santa Giusta — patronne d'Uta","Santa Giusta — Patronin von Uta","Santa Giusta — padroeira de Uta"),luogo:"Uta",emoji:"🌸"},
  {mese:8,giorno:13,titolo:M("Corteo Medievale","Medieval Parade","Desfile medieval","Cortège médiéval","Mittelalterumzug","Cortejo medieval"),luogo:"Iglesias",emoji:"⚔️"},
  {mese:8,giorno:15,titolo:M("Assunzione B.V. Maria","Assumption of the Virgin Mary","Asunción de la Virgen","Assomption de la Vierge","Mariä Himmelfahrt","Assunção de Nossa Senhora"),luogo:"Uta",emoji:"🕯️"},
  {mese:9,giorno:5,titolo:M("Festa di Santa Maria (inizio)","Feast of Santa Maria (start)","Fiesta de Santa Maria (inicio)","Fête de Santa Maria (début)","Fest der Santa Maria (Beginn)","Festa de Santa Maria (início)"),luogo:"Uta",emoji:"🌟"},
  {mese:9,giorno:9,titolo:M("Festa di Santa Maria (fine)","Feast of Santa Maria (end)","Fiesta de Santa Maria (fin)","Fête de Santa Maria (fin)","Fest der Santa Maria (Ende)","Festa de Santa Maria (fim)"),luogo:"Uta",emoji:"🎆"},
  {mese:11,giorno:21,titolo:M("Maratonina di Uta","Uta Half-Marathon","Media Maratón de Uta","Semi-marathon d'Uta","Halbmarathon von Uta","Meia Maratona de Uta"),luogo:"Uta",emoji:"🏃"},
  {mese:12,giorno:13,titolo:M("Santa Lucia","Santa Lucia","Santa Lucía","Sainte-Lucie","Santa Lucia","Santa Luzia"),luogo:"Uta",emoji:"🕯️"},
];

// ══════════════════════════════════════════════
// ── COMPONENTI SCHERMATE ──────────────────────
// ══════════════════════════════════════════════

// ── AURA Beach Advisor (consiglio spiagge in base al vento) ──
const AURA = {
  title: M("AURA · quale spiaggia oggi?","AURA · which beach today?","AURA · ¿qué playa hoy?","AURA · quelle plage aujourd'hui ?","AURA · welcher Strand heute?","AURA · que praia hoje?"),
  desc: M(
    "In Sardegna la spiaggia giusta dipende dal vento. AURA analizza ogni giorno oltre 300 spiagge combinando vento, onde e meteo, e assegna a ciascuna un punteggio da 0 a 10: così scegli al volo dove il mare sarà più bello e riparato.",
    "In Sardinia the right beach depends on the wind. Every day AURA analyses over 300 beaches, combining wind, waves and weather, and gives each one a score from 0 to 10 — so you can instantly pick where the sea will be calmest and most sheltered.",
    "En Cerdeña la playa ideal depende del viento. Cada día AURA analiza más de 300 playas combinando viento, olas y meteorología, y asigna a cada una una puntuación de 0 a 10: así eliges al instante dónde el mar estará más bonito y resguardado.",
    "En Sardaigne, la bonne plage dépend du vent. Chaque jour, AURA analyse plus de 300 plages en combinant vent, vagues et météo, et attribue à chacune une note de 0 à 10 : vous choisissez ainsi en un instant où la mer sera la plus belle et abritée.",
    "Auf Sardinien hängt der richtige Strand vom Wind ab. AURA analysiert täglich über 300 Strände und kombiniert Wind, Wellen und Wetter zu einer Bewertung von 0 bis 10 — so wählen Sie sofort, wo das Meer am schönsten und geschütztesten ist.",
    "Na Sardenha, a praia certa depende do vento. Todos os dias a AURA analisa mais de 300 praias combinando vento, ondas e meteorologia, e atribui a cada uma uma pontuação de 0 a 10: assim escolhe num instante onde o mar estará mais bonito e abrigado."
  ),
  web: M("Apri sul web","Open on the web","Abrir en la web","Ouvrir sur le web","Im Web öffnen","Abrir na web"),
  app: M("Scarica l'app","Get the app","Descarga la app","Télécharger l'app","App laden","Baixar a app"),
  tip: M("Consigliata per organizzare le giornate al mare","Recommended for planning your beach days","Recomendada para organizar tus días de playa","Recommandée pour organiser vos journées à la plage","Empfohlen für die Planung Ihrer Strandtage","Recomendada para organizar os seus dias de praia"),
};

function AuraBox() {
  const A = AURA;
  const APP_STORE = "https://apps.apple.com/it/app/aura-beach-advisor/id6768235580";
  const PLAY_STORE = "https://play.google.com/store/apps/details?id=app.aurabeach.app";
  const WEB = "https://aurabeach.app/";
  // Rileva il sistema operativo per mandare l'utente allo store giusto
  const [appLink] = useState(() => {
    try {
      const ua = (navigator.userAgent || navigator.vendor || "").toLowerCase();
      if (/iphone|ipad|ipod/.test(ua) || (/mac/.test(ua) && "ontouchend" in document)) return APP_STORE;
      if (/android/.test(ua)) return PLAY_STORE;
    } catch(e) {}
    return WEB; // desktop o rilevamento fallito → sito (smista da sé allo store)
  });
  return (
    <div style={{
      background:"linear-gradient(160deg, #0e3a4a, #12556a)", borderRadius:18,
      padding:"18px 18px 16px", marginBottom:16, position:"relative", overflow:"hidden"
    }}>
      <div style={{position:"absolute",top:-30,right:-30,width:130,height:130,
        background:"radial-gradient(circle, rgba(74,184,200,0.35), transparent 70%)",pointerEvents:"none"}}/>
      <div style={{display:"flex", alignItems:"center", gap:12, marginBottom:12}}>
        <div style={{width:44, height:44, borderRadius:12, flexShrink:0,
          background:"rgba(255,255,255,0.14)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24}}>🏖️</div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:19, fontWeight:400, color:"white", lineHeight:1.2}}>{tx(A.title)}</div>
          <div style={{fontSize:10, color:"#7fd4e2", letterSpacing:"1px", marginTop:2}}>{tx(A.tip)}</div>
        </div>
      </div>
      <p style={{fontSize:12.5, color:"rgba(245,250,252,0.82)", lineHeight:1.7, margin:"0 0 14px"}}>{tx(A.desc)}</p>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8}}>
        <a href={WEB} target="_blank" rel="noopener noreferrer" style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:7,
          background:"rgba(255,255,255,0.12)", border:"1px solid rgba(255,255,255,0.2)",
          borderRadius:12, padding:"11px 10px", textDecoration:"none"
        }}>
          <span style={{fontSize:15}}>🌐</span>
          <span style={{fontSize:12.5, color:"white", fontWeight:500}}>{tx(A.web)}</span>
        </a>
        <a href={appLink} target="_blank" rel="noopener noreferrer" style={{
          display:"flex", alignItems:"center", justifyContent:"center", gap:7,
          background:"white", borderRadius:12, padding:"11px 10px", textDecoration:"none"
        }}>
          <span style={{fontSize:15}}>📲</span>
          <span style={{fontSize:12.5, color:"#0e3a4a", fontWeight:600}}>{tx(A.app)}</span>
        </a>
      </div>
    </div>
  );
}

function PH({go, lang, setLang}) {
  const H = L.home;
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
        <img src="https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_480/v1781182383/corte_pintadera_logo_clean_mqshm5.png" alt="Corte Pintadera"
          style={{width:200,maxWidth:"72%",display:"block",margin:"0 auto 8px",
          filter:"brightness(0) invert(1)",opacity:0.95}}/>
        <div style={{fontSize:11, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.8)", marginTop:4, fontFamily:"'Jost', sans-serif", fontWeight:300}}>Via Cimitero 38/A</div>
        <div style={{fontSize:10, letterSpacing:"4px", textTransform:"uppercase", color:"rgba(206,173,133,0.75)", marginTop:5, fontFamily:"'Jost', sans-serif", fontWeight:300}}>Uta · Cagliari · Sardegna</div>
        <LangSelector lang={lang} setLang={setLang}/>
      </div>

      <div style={{fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic,
        margin:"22px 0 10px", textAlign:"center"}}>{H.arrivo}</div>
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, padding:"0 20px", maxWidth:400, margin:"0 auto 4px"}}>
        {[
          ["benvenuto", <Ic.home/>, H.benv, H.benvSub],
          ["checkin",   <Ic.lock/>, H.checkin, H.checkinSub],
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
        margin:"20px 0 12px", textAlign:"center"}}>{H.guida}</div>
      <div style={s.grid}>
        {[
          ["appartamento", <Ic.building/>, H.app],
          ["wifi",         <Ic.wifi/>,     H.wifi],
          ["regole",       <Ic.check/>,    H.regole],
          ["esplorare",    <Ic.compass/>,  H.esplora],
          ["ristoranti",   <Ic.pasta/>,    H.risto],
          ["eventi",       <Ic.cal/>,      H.eventi],
          ["spesa",        <Ic.bag/>,      H.spesa],
          ["servizi",      <Ic.faq/>,      H.servizi],
          ["storia",       <Ic.storia/>,   H.storia],
          ["faq",          <Ic.help/>,     H.faq],
          ["recensioni",   <Ic.star/>,     H.rec],
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
        <button style={s.back} onClick={back}><Ic.back/> {L.back.home}</button>
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

function Benvenuto({go}) {
  const B = L.benv;
  return <div style={s.app}>
    <PageHead title={B.title} back={()=>go("home")} icon={<Ic.home/>}/>
    <div style={s.content}>

      <div style={{...s.hlBox, textAlign:"center", padding:"28px 20px"}}>
        <div style={{fontFamily:"'Dancing Script', 'Caveat', cursive", fontSize:32, fontWeight:700,
          color:c.warm, lineHeight:1.2, marginBottom:10}}>
          {B.felici}
        </div>
        <p style={{fontSize:13.5, lineHeight:1.75, opacity:0.85, margin:0, color:c.warm}}>
          {B.intro}
        </p>
      </div>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&display=swap" rel="stylesheet"/>

      <Card>
        <CT icon={<Ic.pin/>} text={B.dove}/>
        <p style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:20,margin:"4px 0 12px",color:c.warm}}>
          Via Cimitero 38/A<br/>Uta (CA) — Sardegna
        </p>
        <div style={{borderRadius:14, overflow:"hidden", marginBottom:12, position:"relative", height:180}}>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=8.9571%2C39.2879%2C8.9671%2C39.2979&layer=mapnik&marker=39.2929%2C8.9621"
            style={{width:"100%", height:"100%", border:"none", display:"block"}}
            title="Mappa Corte Pintadera"
            loading="lazy"
          />
          <div style={{
            position:"absolute", bottom:0, left:0, right:0,
            background:"linear-gradient(to top, rgba(61,31,16,0.55) 0%, transparent 100%)",
            padding:"10px 14px", pointerEvents:"none"
          }}>
            <div style={{fontSize:12, color:"white", fontWeight:500, letterSpacing:"0.3px"}}>📍 Via Cimitero 38/A, Uta</div>
          </div>
        </div>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}>
          <Ic.mapW/> {B.maps}
        </a>
      </Card>

      <Card>
        <CT icon={<Ic.pin/>} text={B.come}/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"0 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>✈️ &nbsp;{B.volo}</div>
        <Row l={B.aeroporto} v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l={B.porto} v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari"/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"12px 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>🚗 &nbsp;{B.citta}</div>
        <Row l="Cagliari" v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l="Oristano" v="~1h" link="https://maps.google.com/?q=Oristano+Sardegna"/>
        <Row l="Nuoro" v="~2h" link="https://maps.google.com/?q=Nuoro+Sardegna"/>
        <Row l="Sassari" v="~2h 30min" link="https://maps.google.com/?q=Sassari+Sardegna"/>

        <div style={{fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:c.mastic,
          padding:"12px 0 8px",marginBottom:4,borderBottom:`1px solid ${c.sand}`}}>🚌 &nbsp;{B.pubblico}</div>
        <div style={{display:"flex", flexDirection:"column", gap:8, paddingTop:4}}>
          {[
            {label:B.treno,sub:B.trenoSub,link:"https://www.trenitalia.com",bg:"#1a3a6a",emoji:"🚆"},
            {label:B.bus,sub:B.busSub,link:"https://www.arst.sardegna.it",bg:"#2a5a2a",emoji:"🚌"},
            {label:B.ctm,sub:B.ctmSub,link:"https://www.ctmcagliari.it",bg:"#6a2a1a",emoji:"🚎"},
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
          color:c.warm, marginBottom:14}}>{B.qui}</div>
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
              <div style={{fontSize:12, color:c.mastic, marginTop:2}}>{B.propr}</div>
            </div>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",
              fontSize:17, color:c.hazel, fontWeight:400}}>{num}</div>
          </a>
        ))}
      </div>
      <a href="mailto:cortepintadera@gmail.com" style={{
        display:"flex", alignItems:"center", gap:14,
        padding:"14px 18px", marginTop:12,
        background:c.white, borderRadius:14,
        border:`1px solid ${c.hazel}30`, textDecoration:"none"
      }}>
        <div style={{width:42,height:42,borderRadius:"50%",
          background:`linear-gradient(135deg, ${c.hazel}, ${c.hazelL})`,
          display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>✉️</div>
        <div style={{flex:1}}>
          <div style={{fontSize:14,color:c.warm,fontWeight:500}}>{B.email}</div>
          <div style={{fontSize:12,color:c.mastic,marginTop:2}}>cortepintadera@gmail.com</div>
        </div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,color:c.hazel}}>›</div>
      </a>
      <div style={{marginTop:10}}>
        <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.mastic,marginBottom:8,textAlign:"center"}}>{B.social}</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10}}>
          <a href="https://www.instagram.com/cortepintadera" target="_blank" rel="noopener noreferrer" style={{
            display:"flex", flexDirection:"column", alignItems:"center", gap:8, padding:"16px 10px",
            background:c.white, borderRadius:14, border:`1px solid ${c.hazel}25`, textDecoration:"none"
          }}>
            <div style={{width:44,height:44,borderRadius:12,
              background:`linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)`,
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 2.43.27 3.33 1.17.9.9 1.12 2.16 1.17 3.33.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.27 2.43-1.17 3.33-.9.9-2.16 1.12-3.33 1.17-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-2.43-.27-3.33-1.17-.9-.9-1.12-2.16-1.17-3.33C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.27-2.43 1.17-3.33.9-.9 2.16-1.12 3.33-1.17C7.8 2.2 8.2 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.74.07-.98.04-1.84.2-2.5.86-.66.66-.82 1.52-.86 2.5C3.83 8.5 3.83 8.86 3.83 12s0 3.5.07 4.74c.04.98.2 1.84.86 2.5.66.66 1.52.82 2.5.86 1.24.06 1.6.07 4.74.07s3.5 0 4.74-.07c.98-.04 1.84-.2 2.5-.86.66-.66.82-1.52.86-2.5.06-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.04-.98-.2-1.84-.86-2.5-.66-.66-1.52-.82-2.5-.86C15.5 4 15.14 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm5.85-3.6a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/>
              </svg>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:13,color:c.warm,fontWeight:500}}>Instagram</div>
              <div style={{fontSize:11,color:c.mastic,marginTop:1}}>@cortepintadera</div>
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61591129855110" target="_blank" rel="noopener noreferrer" style={{
            display:"flex", flexDirection:"column", alignItems:"center", gap:8, padding:"16px 10px",
            background:c.white, borderRadius:14, border:`1px solid ${c.hazel}25`, textDecoration:"none"
          }}>
            <div style={{width:44,height:44,borderRadius:12,
              background:"#1877F2",
              display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
              </svg>
            </div>
            <div style={{textAlign:"center"}}>
              <div style={{fontSize:13,color:c.warm,fontWeight:500}}>Facebook</div>
              <div style={{fontSize:11,color:c.mastic,marginTop:1}}>Corte Pintadera</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>;
}

function Checkin({go}) {
  const K = L.checkin;
  return <div style={s.app}>
    <PageHead title={K.title} back={()=>go("home")} icon={<Ic.lock/>}/>
    <div style={s.content}>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:12}}>
        <div style={{background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>{K.arrivo}</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>17:00</div>
          <div style={{fontSize:11, color:c.hazel, marginTop:6}}>{K.dalle}</div>
        </div>
        <div style={{background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"20px 16px", textAlign:"center"}}>
          <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:8}}>{K.partenza}</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, color:c.cream, lineHeight:1}}>09:00</div>
          <div style={{fontSize:11, color:c.hazel, marginTop:6}}>{K.entro}</div>
        </div>
      </div>

      <Card>
        <CT text={K.arrT}/>
        {K.arr.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>

      <Card>
        <CT text={K.parT}/>
        {K.par.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>

      <Card>
        <CT text={K.pkT}/>
        {K.pk.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>
    </div>
  </div>;
}

function Wifi({go}) {
  const W = L.wifi;
  return <div style={s.app}>
    <PageHead title={W.title} back={()=>go("home")} icon={<Ic.wifi/>}/>
    <div style={s.content}>
      <Card>
        <CT icon={<Ic.wifi/>} text={W.fibra}/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,marginBottom:8}}>{W.cop}</p>
        <div style={s.wifiBox}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.mastic,marginBottom:6}}>{W.rete}</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>FASTWEB-E3XZSC</div></div>
        <div style={{...s.wifiBox,marginTop:10}}><div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:c.mastic,marginBottom:6}}>{W.pass}</div><div style={{fontFamily:"Georgia,serif",fontSize:26,color:c.cream,letterSpacing:2}}>C7RAEXHAUG</div></div>
      </Card>
      <Card><CT text={W.prob}/><p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>{W.probTxt}</p></Card>
    </div>
  </div>;
}

const FOTO = {
  cucina:        "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557410/Cucina_v0odbk.png",
  cucinaPiano:   "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557408/Cucina_piano_induzione_jxikov.png",
  soffittoCucina:"https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1782328743/Soffito_cucina_h6svt0.png",
  camera:        "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557433/Camera_da_letto_vkpsq3.png",
  cameraDettaglio: "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557435/dettaglio_letto_vehitg.png",
  soffittoCamera: "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557434/Soffito_camera_da_letto_rrmzmo.png",
  bagno1:        "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557436/Bagno1_mrjywb.png",
  bagno2:        "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557433/Bagno_wyhyzs.png",
  esterno1:      "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557407/ChatGPT_Image_15_giu_2026_22_51_33_kltcdq.png",
  esterno2:      "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557407/Esterno_pnxypa.png",
  pilastro:      "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557437/dettaglio_pilastro_veranda_zng9rp.png",
  ingressoEst:   "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557407/ingresso_esterno_zskcio.png",
  ingressoInt:   "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781557405/Ingresso_interno_xrbmh7.png",
};

function FotoSlide({imgs, aspect="portrait"}) {
  const [idx, setIdx] = useState(0);
  if (!imgs || imgs.length === 0) return null;
  const aspectRatio = aspect === "portrait" ? "3/4" : aspect === "square" ? "1/1" : "4/3";
  return (
    <div style={{position:"relative", marginBottom:14}}>
      <div style={{
        width:"100%", aspectRatio, borderRadius:14, overflow:"hidden",
        background:`linear-gradient(135deg, ${c.sand}80, ${c.hazel}20)`
      }}>
        <img src={imgs[idx]} alt="" style={{
          width:"100%", height:"100%",
          objectFit:"cover", objectPosition:"center",
          display:"block"
        }}/>
      </div>
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
  const A = L.app;
  return <div style={s.app}>
    <PageHead title={A.title} sub={A.sub} back={()=>go("home")} icon={<Ic.building/>}/>
    <div style={s.content}>

      <FotoSlide imgs={[FOTO.esterno1, FOTO.esterno2, FOTO.ingressoEst, FOTO.pilastro]} aspect="portrait"/>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:8, marginBottom:14}}>
        {[["~50 m²",A.interno],["~40 m²",A.veranda],["2×",A.clima]].map(([val,label])=>(
          <div key={label} style={{background:c.white, borderRadius:14, padding:"14px 8px", textAlign:"center", border:`1px solid ${c.hazel}20`}}>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.hazel, lineHeight:1}}>{val}</div>
            <div style={{fontSize:10, color:c.mastic, marginTop:4, letterSpacing:"0.5px"}}>{label}</div>
          </div>
        ))}
      </div>

      <Card>
        <CT text={A.cucinaT}/>
        <FotoSlide imgs={[FOTO.cucina, FOTO.cucinaPiano, FOTO.soffittoCucina]}/>
        {A.cucina.map((t,i,a)=>(<Rule key={i} t={t} last={i===a.length-1}/>))}
        <div style={{marginTop:10, background:`linear-gradient(135deg,${c.hazel}15,${c.hazelL}20)`,
          borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:10}}>
          <span style={{fontSize:20}}>🌸</span>
          <span style={{fontSize:12, color:c.warm, lineHeight:1.5}}>{A.affC}</span>
        </div>
      </Card>

      <Card>
        <CT text={A.cameraT}/>
        <FotoSlide imgs={[FOTO.camera, FOTO.cameraDettaglio, FOTO.soffittoCamera]}/>
        {A.camera.map((t,i,a)=>(<Rule key={i} t={t} last={i===a.length-1}/>))}
        <div style={{marginTop:10, background:`linear-gradient(135deg,${c.hazel}15,${c.hazelL}20)`,
          borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:10}}>
          <span style={{fontSize:20}}>✦</span>
          <span style={{fontSize:12, color:c.warm, lineHeight:1.5}}>{A.affK}</span>
        </div>
      </Card>

      <Card>
        <CT text={A.bagnoT}/>
        <FotoSlide imgs={[FOTO.bagno1, FOTO.bagno2]}/>
        {A.bagno.map((t,i,a)=>(<Rule key={i} t={t} last={i===a.length-1}/>))}
      </Card>

      <Card>
        <CT text={A.verT}/>
        <FotoSlide imgs={[FOTO.esterno1, FOTO.esterno2, FOTO.ingressoInt]}/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>{A.verTxt}</p>
      </Card>

      <div style={{display:"flex",flexWrap:"wrap",gap:8, marginTop:4}}>
        {A.tags.map((t,i)=>(
          <span key={i} style={i===0?s.tagA:s.tag}>{t}</span>
        ))}
      </div>

      <div style={{background:`linear-gradient(135deg,${c.hazel}18,${c.hazelL}28)`,
        borderRadius:16, padding:"16px 18px", marginTop:14,
        border:`1px solid ${c.hazel}35`, display:"flex", gap:14, alignItems:"flex-start"}}>
        <span style={{fontSize:28, flexShrink:0}}>🧱</span>
        <div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18,
            fontWeight:400, color:c.warm, marginBottom:6}}>{A.ladiriT}</div>
          <p style={{fontSize:13, color:c.mastic, lineHeight:1.7, margin:0}}>{A.ladiriTxt}</p>
        </div>
      </div>
    </div>
  </div>;
}

function Regole({go}) {
  const R = L.regole;
  return <div style={s.app}>
    <PageHead title={R.title} back={()=>go("home")} icon={<Ic.check/>}/>
    <div style={s.content}>
      <Card><CT text={R.genT}/>
        {R.gen.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>
      <Card><CT text={R.pulT}/>
        {R.pul.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>
      <Card><CT text={R.sicT}/>
        {R.sic.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>
    </div>
  </div>;
}

function Posizione({go}) {
  const P = L.pos;
  return <div style={s.app}>
    <PageHead title={P.title} back={()=>go("home")} icon={<Ic.pin/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.pin/>} text={P.ind}/>
        <p style={{fontFamily:"Georgia,serif",fontSize:19,marginBottom:12,color:c.warm}}>Via Cimitero 38/A<br/>Uta (CA) — Sardegna</p>
        <a href="https://maps.google.com/?q=Via+Cimitero+38+Uta+Cagliari" target="_blank" rel="noreferrer" style={s.mapBtn}><Ic.mapW/> {P.maps}</a>
      </Card>
      <Card><CT text={P.mezziT}/>
        <Row l={P.arst} v="›" link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 10px"}}>{P.arstSub}</p>
        <Row l={P.treno} v="›" link="https://www.trenitalia.com" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>{P.trenoSub}</p>
      </Card>
      <Card><CT text={P.autoT}/>
        <Row l={P.aeroporto} v="~10 min" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas"/>
        <Row l={P.poetto} v="~15 min" link="https://maps.google.com/?q=Spiaggia+Poetto+Cagliari"/>
        <Row l={P.cagliariC} v="~20 min" link="https://maps.google.com/?q=Cagliari+centro+storico"/>
        <Row l={P.macch} v="~5 min" link="https://maps.google.com/?q=Macchiareddu+Uta"/>
        <Row l={P.oasi} v="~10 min" link="https://maps.google.com/?q=Oasi+WWF+Santa+Gilla"/>
        <Row l={P.porto} v="~20 min" link="https://maps.google.com/?q=Porto+di+Cagliari" last/>
      </Card>
    </div>
  </div>;
}

function Esplorare({go}) {
  const E = L.esplora;
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

      // wmoLabel restituisce [icona, indice] — l'etichetta testuale viene da E.wmo[indice]
      const wmoLabel = (code) => {
        if (code === 0) return ["☀️",0];
        if (code <= 2) return ["⛅",1];
        if (code <= 3) return ["☁️",2];
        if (code <= 49) return ["🌫️",3];
        if (code <= 59) return ["🌦️",4];
        if (code <= 69) return ["🌧️",5];
        if (code <= 79) return ["🌨️",6];
        if (code <= 84) return ["🌦️",7];
        return ["⛈️",8];
      };

      const [icoNow, wi] = wmoLabel(d.current.weathercode);
      const current = {
        temp: Math.round(d.current.temperature_2m),
        feels: Math.round(d.current.apparent_temperature),
        ico: icoNow, label: E.wmo[wi],
        wind: Math.round(d.current.windspeed_10m),
        hum: d.current.relativehumidity_2m,
      };

      const forecast = d.daily.time.slice(0,3).map((date,i)=>{
        const [ico,wj] = wmoLabel(d.daily.weathercode[i]);
        return { day:E.days[i], ico, label:E.wmo[wj],
          max: Math.round(d.daily.temperature_2m_max[i]),
          min: Math.round(d.daily.temperature_2m_min[i]),
          rain: d.daily.precipitation_sum[i] };
      });
      setMeteo({current, forecast});
    } catch(e) { setMeteo(null); }
    setMeteoLoad(false);
  };

  useEffect(()=>{ fetchMeteo(); }, []);

  return <div style={s.app}>
    <PageHead title={E.title} back={()=>go("home")} icon={<Ic.compass/>}/>
    <div style={s.content}>

      <div style={{background:`linear-gradient(160deg, #3D1F10, #5a3020)`, borderRadius:18, padding:"16px 18px", marginBottom:16, overflow:"hidden", position:"relative"}}>
        <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,background:"radial-gradient(circle,#CEAD8540,transparent 70%)",pointerEvents:"none"}}/>
        <div style={{fontSize:9, letterSpacing:"3px", textTransform:"uppercase", color:"rgba(245,240,232,0.4)", marginBottom:12}}>{E.meteoLbl}</div>
        {meteoLoad && <div style={{color:"rgba(245,240,232,0.5)",fontSize:13,textAlign:"center",padding:"16px 0"}}>{E.load}</div>}
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
                  <span style={{fontSize:10, color:"rgba(245,240,232,0.4)"}}>{E.perc} {meteo.current.feels}°</span>
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
            <span style={{fontSize:12,color:"rgba(245,240,232,0.4)"}}>{E.noMeteo}</span>
            <button onClick={fetchMeteo} style={{display:"block",margin:"8px auto 0",background:"none",border:"1px solid rgba(255,255,255,0.2)",borderRadius:8,padding:"5px 12px",fontSize:11,color:"rgba(245,240,232,0.5)",cursor:"pointer"}}>{E.retry}</button>
          </div>
        )}
      </div>

      <div style={{textAlign:"center", padding:"4px 0 20px"}}>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22,
          fontWeight:300, color:c.warm, lineHeight:1.3, marginBottom:6}}>
          {meteo
            ? meteo.current.ico === "☀️" || meteo.current.ico === "⛅"
              ? E.ctaSun
              : meteo.current.ico === "🌧️" || meteo.current.ico === "⛈️"
              ? E.ctaRain
              : E.ctaOther
            : E.ctaNone
          }
        </div>
        <div style={{fontSize:11, color:c.mastic, letterSpacing:"0.5px"}}>
          {E.scegli}
        </div>
      </div>

      <AuraBox/>

      <div style={{display:"flex", flexDirection:"column", gap:12}}>
        {TABS_DATA.map(({id,label,emoji,color,accent,tagline,data})=>(
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
            <div style={{width:56, height:56, borderRadius:16, flexShrink:0,
              background:`linear-gradient(135deg, ${color}, ${color}cc)`,
              display:"flex", alignItems:"center", justifyContent:"center", fontSize:26}}>
              {emoji}
            </div>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:18,
                color:c.warm, fontWeight:400, lineHeight:1.2, marginBottom:3}}>{tx(label)}</div>
              <div style={{fontSize:11, color:c.mastic, lineHeight:1.4, marginBottom:6}}>{tx(tagline)}</div>
              <div style={{display:"inline-flex", alignItems:"center", gap:4,
                background:`${accent}18`, borderRadius:10, padding:"3px 10px"}}>
                <span style={{fontSize:10, color:accent, fontWeight:600}}>{data.length} {E.esp}</span>
              </div>
            </div>
            <div style={{fontSize:18, color:c.mastic, flexShrink:0}}>›</div>
          </button>
        ))}
      </div>
    </div>
  </div>;
}

function Servizi({go}) {
  const S = L.servizi;
  return <div style={s.app}>
    <PageHead title={S.title} back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>

      <Card>
        <CT text={S.saluteT}/>
        <Row l="Farmacia Schlich — Via Stazione 5" v={`~300m ›`} link="https://maps.google.com/?q=Farmacia+Schlich+Uta"/>
        <Row l="Parafarmacia Bensaid — Via Roma 27 ⭐5.0" v={`${S.vicino} ›`} link="https://maps.google.com/?q=Parafarmacia+Bensaid+Uta"/>
        <Row l="La Parafarmacia — Via Torino 11A ⭐4.6" v={`${S.vicino} ›`} link="https://maps.google.com/?q=La+Parafarmacia+Uta"/>
        <Row l={S.guardia} v="070 609 2204 ›" link="tel:+390706092204" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>{S.guardiaSub}</p>
      </Card>

      <Card>
        <CT text={S.lavT}/>
        <Row l={S.lavGettoni} v="~5 min ›"
          link="https://maps.google.com/?q=Via+Umberto+I+33+Uta+Cagliari"/>
        <Row l="Lavanda Self Service ⭐4.5 — Via Nazionale 55, Decimomannu" v="~10 min ›"
          link="https://maps.google.com/?q=Via+Nazionale+55+Decimomannu"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{S.lavSub}</p>
        <Row l="Lavanderia Sarigu Giustina — Via Nazionale 48, Decimomannu" v="~10 min ›"
          link="https://maps.google.com/?q=Via+Nazionale+48+Decimomannu" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>tel. 070 961186</p>
      </Card>

      <Card>
        <CT text={S.atmT}/>
        <Row l="🏦 Banco di Sardegna — Via Santa Giusta 44" v={`${S.vicino} ›`}
          link="https://maps.google.com/?q=Banco+di+Sardegna+Via+Santa+Giusta+44+Uta"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{S.atmSub}</p>
        <Row l="📮 Postamat — Poste Italiane Uta" v={`${S.vicino} ›`}
          link="https://maps.google.com/?q=Poste+Italiane+Uta+Cagliari" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>{S.postamatSub}</p>
      </Card>

      <Card>
        <CT text={S.altriT}/>
        <Row l={S.tabacch} v={`${S.vicino} ›`} link="https://maps.google.com/?q=Coccinella+Tabaccheria+Uta"/>
        <Row l={S.comune} v={`${S.vicino} ›`} link="https://maps.google.com/?q=Comune+di+Uta" last/>
      </Card>

      <Card>
        <CT text={S.traspT}/>
        <Row l="ARST Linea 125 (Uta–Cagliari)" v={`${S.orariV} ›`} link="https://www.arst.sardegna.it/servizi-orari/"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{L.pos.arstSub}</p>
        <Row l="🚆 Treno Uta-Villaspeciosa" v={`${S.orariV} ›`} link="https://www.trenitalia.com"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{L.pos.trenoSub}</p>
        <Row l="✈️ Aeroporto Cagliari" v="~10 min ›" link="https://maps.google.com/?q=Aeroporto+Cagliari+Elmas" last/>
      </Card>

      <div style={s.darkBox}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>{S.emg}</p>
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
                {highlight && <span style={{fontSize:9, background:c.hazel, color:c.warm, borderRadius:8, padding:"2px 7px", letterSpacing:"0.5px", flexShrink:0}}>{L.risto.consigliato}</span>}
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
  const R = L.risto;
  return <div style={s.app}>
    <PageHead title={R.title} back={()=>go("home")} icon={<Ic.pasta/>}/>
    <div style={s.content}>

      <div style={{background:`linear-gradient(135deg,#3D1F10,#5a3020)`, borderRadius:18, padding:"16px 18px", marginBottom:20}}>
        <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(245,240,232,0.45)",marginBottom:8}}>{R.top}</div>
        <div style={{display:"flex",flexDirection:"column",gap:6}}>
          {RISTO_TOP.map((r)=>(
            <div key={r.n} style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:18}}>{r.e}</span>
              <div style={{flex:1}}>
                <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,color:"white"}}>{r.n}</span>
                <span style={{fontSize:10,color:"rgba(245,240,232,0.5)",marginLeft:8}}>{tx(r.d)}</span>
              </div>
              <span style={{fontSize:11,color:c.hazel,fontWeight:700}}>⭐{r.s}</span>
            </div>
          ))}
        </div>
      </div>

      {RISTO_SEZ.map((sez)=>(
        <RSection key={sez.key} title={R[sez.key]}>
          {sez.ristoranti.map((r)=>(
            <RCard key={r.n} emoji={r.e} nome={r.n} stelle={r.s}
              dist={r.d === "vicino" ? R.vicino : tx(r.d)}
              tipo={tx(r.tipo)} piatti={tx(r.piatti)} link={r.link} highlight={r.hl}/>
          ))}
        </RSection>
      ))}

      <div style={{background:`linear-gradient(160deg, #3D1F10, #5a3020)`, borderRadius:18, overflow:"hidden", marginTop:4}}>
        <div style={{background:"linear-gradient(135deg,#1a2e1a,#2d4a2d)", padding:"20px 18px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, color:c.cream, fontWeight:300, marginBottom:4}}>
            {R.sardaT}
          </div>
          <div style={{fontSize:10, color:"#6db86d", letterSpacing:"2px", textTransform:"uppercase", marginBottom:12}}>{R.sardaSub}</div>
          <p style={{fontSize:13, color:"rgba(245,240,232,0.8)", lineHeight:1.75, margin:"0 0 14px"}}>{R.sardaTxt}</p>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:14}}>
            {PIATTI_SARDI.map((p)=>(
              <div key={p.nome} style={{background:"rgba(255,255,255,0.12)", borderRadius:12, padding:"10px 10px"}}>
                <div style={{display:"flex", alignItems:"center", gap:6, marginBottom:4}}>
                  <span style={{fontSize:18}}>{p.em}</span>
                  <span style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:14, color:c.sand, fontWeight:400}}>{p.nome}</span>
                </div>
                <div style={{fontSize:10.5, color:"rgba(245,240,232,0.5)", lineHeight:1.4}}>{tx(p.desc)}</div>
              </div>
            ))}
          </div>
          <div style={{fontSize:11, color:"rgba(245,240,232,0.4)", lineHeight:1.6, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:12}}>
            {R.weekend}
          </div>
        </div>
      </div>
    </div>
  </div>;
}

function Eventi({go}) {
  const EV = L.eventi;
  const oggi = new Date();
  const meseCorrente = oggi.getMonth() + 1;

  const evs = [
    ...EVENTI_MESI.filter(e => e.mese >= meseCorrente).sort((a,b) => a.mese - b.mese),
    ...EVENTI_MESI.filter(e => e.mese < meseCorrente).sort((a,b) => a.mese - b.mese),
  ];

  const imminenti = EVENTI_FISSI.filter(e => {
    const dataEv = new Date(oggi.getFullYear(), e.mese - 1, e.giorno);
    if (dataEv < oggi) dataEv.setFullYear(oggi.getFullYear() + 1);
    const diff = (dataEv - oggi) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 7;
  });

  return <div style={s.app}>
    <PageHead title={EV.title} back={()=>go("home")} icon={<Ic.cal/>}/>
    <div style={s.content}>

      {imminenti.length > 0 && (
        <div style={{background:`linear-gradient(135deg,${c.hazel},${c.hazelL})`,borderRadius:18,padding:"18px 18px 14px",marginBottom:14}}>
          <div style={{fontSize:9,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(61,31,16,0.6)",marginBottom:10}}>{EV.sett}</div>
          {imminenti.map((e,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:12,padding:"8px 0",borderBottom:i<imminenti.length-1?`1px solid rgba(61,31,16,0.15)`:"none"}}>
              <span style={{fontSize:22}}>{e.emoji}</span>
              <div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,color:c.warm,fontWeight:400}}>{tx(e.titolo)}</div>
                <div style={{fontSize:11,color:"rgba(61,31,16,0.6)",marginTop:2}}>{e.luogo}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Card>
        <CT text={EV.cosaT}/>
        <p style={{fontSize:12.5,color:c.mastic,lineHeight:1.6,marginBottom:6}}>{EV.perConc}</p>
        <Row l={EV.r1} v={`${EV.apriV} ›`} link="https://www.sardegnaturismo.it/it/eventi"/>
        <Row l={EV.r2} v={`${EV.apriV} ›`} link="https://www.cagliariturismo.it"/>
        <Row l={EV.r3} v={`${EV.apriV} ›`} link="https://www.comune.uta.ca.it" last/>
      </Card>

      <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.mastic,margin:"4px 0 14px",textAlign:"center"}}>{EV.cal}</div>
      {evs.map(({m,evs:ee},idx)=>(
        <Card key={idx} style={idx===0 ? {border:`1px solid ${c.hazel}50`} : {}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
            <div style={s.cardTitle}>{tx(m)}</div>
            {idx===0 && <span style={{fontSize:10,background:c.hazel,color:c.warm,borderRadius:10,padding:"2px 8px"}}>{EV.inCorso}</span>}
          </div>
          {ee.map((e,i)=>(
            <div key={i} style={i===ee.length-1?s.ruleLast:s.rule}><div style={s.dot}/>
              <span><strong>{tx(e.d)}</strong> — {e.link?<a href={e.link} target="_blank" rel="noreferrer" style={{color:c.hazel}}>{tx(e.t)}</a>:tx(e.t)}</span>
            </div>
          ))}
        </Card>
      ))}

      <div style={{...s.darkBox,textAlign:"center",marginTop:12}}>
        <p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>{EV.tip}</p>
      </div>
    </div>
  </div>;
}

function Recensioni({go}) {
  const RC = L.rec;
  return <div style={s.app}>
    <PageHead title={RC.title} back={()=>go("home")} icon={<Ic.star/>}/>
    <div style={s.content}>

      <div style={{...s.hlBox, textAlign:"center", padding:"24px 20px"}}>
        <div style={{fontSize:32, marginBottom:10}}>🙏</div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, fontWeight:300, color:c.warm, marginBottom:8, lineHeight:1.3}}>
          {RC.grazie}
        </div>
        <p style={{fontSize:13.5, lineHeight:1.75, color:c.warm, opacity:0.85, margin:0}}>{RC.txt}</p>
      </div>

      <div style={{fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic, margin:"20px 0 12px", textAlign:"center"}}>{RC.lascia}</div>

      <a href="https://www.google.com/search?q=Corte+Pintadera+Uta+Cagliari&hl=it#lrd=,1,,,," target="_blank" rel="noreferrer" style={{
        display:"flex", alignItems:"center", gap:14, padding:"16px 18px", marginBottom:10,
        background:c.white, borderRadius:16, border:`1px solid ${c.hazel}25`, textDecoration:"none",
        boxShadow:"0 2px 8px rgba(61,31,16,0.06)"
      }}>
        <div style={{width:46, height:46, borderRadius:12, flexShrink:0, overflow:"hidden",
          background:"white", display:"flex", alignItems:"center", justifyContent:"center",
          border:"1px solid rgba(0,0,0,0.08)"}}>
          <svg viewBox="0 0 48 48" width="30" height="30">
            <path fill="#4285F4" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.4 29.3 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.4 7.1 28.9 5 24 5 13 5 4 14 4 25s9 20 20 20 20-9 20-20c0-1.5-.2-3-.4-4.5z"/>
            <path fill="#34A853" d="M6.3 15.7l6.6 4.8C14.7 17 19.1 14 24 14c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.4 7.1 28.9 5 24 5c-7.6 0-14.2 4.2-17.7 10.7z"/>
            <path fill="#FBBC05" d="M24 45c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 36.5 26.8 37.5 24 37.5c-5.2 0-9.6-3.5-11.2-8.2l-6.5 5C9.6 40.6 16.3 45 24 45z"/>
            <path fill="#EA4335" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.2 5.2C41.5 36.2 44 31 44 25c0-1.5-.2-3-.4-4.5z"/>
          </svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14, fontWeight:500, color:c.warm}}>Google</div>
          <div style={{fontSize:12, color:c.mastic, marginTop:2}}>{RC.googleSub}</div>
        </div>
        <div style={{display:"flex", gap:1}}>{"⭐⭐⭐⭐⭐".split("").map((st,i)=><span key={i} style={{fontSize:13}}>{st}</span>)}</div>
      </a>

      <a href="https://www.booking.com/hotel/it/corte-pintadera.it.html#tab-reviews" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", gap:14, padding:"16px 18px", marginBottom:10,
        background:c.white, borderRadius:16, border:`1px solid ${c.hazel}25`, textDecoration:"none",
        boxShadow:"0 2px 8px rgba(61,31,16,0.06)"
      }}>
        <div style={{width:46, height:46, borderRadius:12, flexShrink:0,
          background:"#003580", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <span style={{fontSize:20, color:"white", fontWeight:800, fontFamily:"sans-serif"}}>B.</span>
        </div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:"flex", alignItems:"center", gap:8, flexWrap:"wrap"}}>
            <span style={{fontSize:14, fontWeight:500, color:c.warm}}>Booking.com</span>
            <span style={{fontSize:10, background:"#003580", color:"white", borderRadius:8, padding:"2px 8px", fontWeight:600, letterSpacing:"0.3px"}}>{RC.bkEccez}</span>
          </div>
          <div style={{fontSize:12, color:c.mastic, marginTop:3}}>{RC.bkLeggi}</div>
        </div>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0}}>
          <div style={{width:38, height:38, borderRadius:"10px 10px 10px 0", background:"#003580",
            display:"flex", alignItems:"center", justifyContent:"center",
            fontFamily:"'Jost',sans-serif", fontSize:17, fontWeight:700, color:"white"}}>10</div>
        </div>
      </a>

      <div style={{background:c.white, borderRadius:16, border:`1px solid ${c.hazel}20`,
        padding:"14px 16px", marginBottom:10}}>
        <div style={{fontSize:9, letterSpacing:"2px", textTransform:"uppercase", color:c.mastic, marginBottom:10}}>{RC.bkCatT}</div>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px 16px"}}>
          {RC.bkCat.map((cat,i)=>(
            <div key={i} style={{display:"flex", alignItems:"center", gap:8}}>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:11.5, color:c.warm, marginBottom:3}}>{cat}</div>
                <div style={{height:4, background:c.sand, borderRadius:2, overflow:"hidden"}}>
                  <div style={{width:"100%", height:"100%", background:"#003580", borderRadius:2}}/>
                </div>
              </div>
              <span style={{fontSize:12, fontWeight:600, color:"#003580", flexShrink:0}}>10</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display:"flex", alignItems:"center", gap:14, padding:"16px 18px", marginBottom:20,
        background:c.white, borderRadius:16, border:`1px solid ${c.hazel}15`, opacity:0.6
      }}>
        <div style={{width:46, height:46, borderRadius:12, flexShrink:0,
          background:"#FF5A5F", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <svg viewBox="0 0 32 32" width="24" height="24" fill="white">
            <path d="M16 1C7.8 1 1 7.8 1 16s6.8 15 15 15 15-6.8 15-15S24.2 1 16 1zm0 5.5c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm6.5 14.5c-.3.8-1.5 2.5-4 3.8-.5.3-1 .4-1.5.4-.4 0-.9-.1-1.3-.3-1.3-.6-2.4-1.7-3.1-2.9-.4-.7-.6-1.4-.5-2.1.1-1.3.9-2.4 2-3 .6-.3 1.2-.5 1.9-.5.6 0 1.2.2 1.8.5.6-.3 1.2-.5 1.8-.5.7 0 1.3.2 1.9.5 1.1.6 1.9 1.7 2 3 .1.7-.1 1.4-.5 2.1h-.5z"/>
          </svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14, fontWeight:500, color:c.warm}}>Airbnb</div>
          <div style={{fontSize:12, color:c.mastic, marginTop:2}}>{RC.prestoSub}</div>
        </div>
        <span style={{fontSize:11, background:c.sand, color:c.mastic, borderRadius:8, padding:"3px 9px"}}>{RC.presto}</span>
      </div>

      <div style={{fontSize:9, letterSpacing:"4px", textTransform:"uppercase", color:c.mastic, margin:"4px 0 12px", textAlign:"center"}}>{RC.social}</div>

      <div style={{background:`linear-gradient(135deg, #3D1F10, #5a3020)`, borderRadius:16, padding:"18px 18px", marginBottom:12, textAlign:"center"}}>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:20, fontWeight:300, color:"#faf7f2", lineHeight:1.3, marginBottom:8}}>
          {RC.foto}
        </div>
        <div style={{display:"inline-block", background:"rgba(206,173,133,0.15)", borderRadius:20, padding:"7px 18px",
          fontSize:14, color:"#CEAD85", fontWeight:500, letterSpacing:"0.5px"}}>
          #cortepintadera
        </div>
      </div>

      <a href="https://www.instagram.com/cortepintadera" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", gap:14, padding:"16px 18px", marginBottom:10,
        background:c.white, borderRadius:16, border:`1px solid ${c.hazel}25`, textDecoration:"none",
        boxShadow:"0 2px 8px rgba(61,31,16,0.06)"
      }}>
        <div style={{width:46, height:46, borderRadius:12, flexShrink:0,
          background:"linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
          display:"flex", alignItems:"center", justifyContent:"center"}}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 2.43.27 3.33 1.17.9.9 1.12 2.16 1.17 3.33.07 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.27 2.43-1.17 3.33-.9.9-2.16 1.12-3.33 1.17-1.25.07-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-2.43-.27-3.33-1.17-.9-.9-1.12-2.16-1.17-3.33C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.27-2.43 1.17-3.33.9-.9 2.16-1.12 3.33-1.17C7.8 2.2 8.2 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.74.07-.98.04-1.84.2-2.5.86-.66.66-.82 1.52-.86 2.5C3.83 8.5 3.83 8.86 3.83 12s0 3.5.07 4.74c.04.98.2 1.84.86 2.5.66.66 1.52.82 2.5.86 1.24.06 1.6.07 4.74.07s3.5 0 4.74-.07c.98-.04 1.84-.2 2.5-.86.66-.66.82-1.52.86-2.5.06-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.04-.98-.2-1.84-.86-2.5-.66-.66-1.52-.82-2.5-.86C15.5 4 15.14 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm5.85-3.6a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/>
          </svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14, fontWeight:500, color:c.warm}}>Instagram</div>
          <div style={{fontSize:12, color:c.mastic, marginTop:2}}>@cortepintadera</div>
        </div>
        <span style={{fontSize:16, color:c.hazel}}>↗</span>
      </a>

      <a href="https://www.facebook.com/profile.php?id=61591129855110" target="_blank" rel="noopener noreferrer" style={{
        display:"flex", alignItems:"center", gap:14, padding:"16px 18px", marginBottom:20,
        background:c.white, borderRadius:16, border:`1px solid ${c.hazel}25`, textDecoration:"none",
        boxShadow:"0 2px 8px rgba(61,31,16,0.06)"
      }}>
        <div style={{width:46, height:46, borderRadius:12, flexShrink:0,
          background:"#1877F2", display:"flex", alignItems:"center", justifyContent:"center"}}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
            <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/>
          </svg>
        </div>
        <div style={{flex:1}}>
          <div style={{fontSize:14, fontWeight:500, color:c.warm}}>Facebook</div>
          <div style={{fontSize:12, color:c.mastic, marginTop:2}}>Corte Pintadera</div>
        </div>
        <span style={{fontSize:16, color:c.hazel}}>↗</span>
      </a>

      <Card><CT text={RC.colpitoT}/>
        {RC.colpito.map((t,i,a)=><Rule key={i} t={t} last={i===a.length-1}/>)}
      </Card>

    </div>
  </div>;
}

function Spesa({go}) {
  const SP = L.spesa;
  return <div style={s.app}>
    <PageHead title={SP.title} back={()=>go("home")} icon={<Ic.bag/>}/>
    <div style={s.content}>
      <Card><CT text={SP.utaT}/>
        <Row l={SP.conad} v={`${SP.vicinoV} ›`} link="https://maps.google.com/?q=Conad+Uta+Cagliari"/>
        <Row l="🛒 COOP — Via Sa Mura 23 ⭐4.6" v={`${SP.vicinoV} ›`} link="https://maps.google.com/?q=COOP+Via+Sa+Mura+Uta"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{SP.coopSub}</p>
        <Row l="🛒 ARD Discount — Vico I Decimo 21 ⭐4.5" v={`${SP.vicinoV} ›`} link="https://maps.google.com/?q=ARD+Discount+Uta"/>
        <Row l="🛒 MD — Via P. Mascagni 1 ⭐4.5" v={`${SP.vicinoV} ›`} link="https://maps.google.com/?q=MD+Supermercato+Uta" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>{SP.mdSub}</p>
      </Card>
      <Card><CT text={SP.circT}/>
        <Row l="🛒 Iperpan — Decimomannu" v="~15 min ›" link="https://maps.google.com/?q=Iperpan+Decimomannu"/>
        <Row l="🛒 Superpan — Assemini ⭐4.1" v="~15 min ›" link="https://maps.google.com/?q=Superpan+Assemini" last/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 0"}}>{SP.circSub}</p>
      </Card>
      <div style={s.darkBox}><p style={{fontSize:12,color:"rgba(245,240,232,0.7)",lineHeight:1.7,margin:0}}>{SP.tip}</p></div>
    </div>
  </div>;
}

function FAQ({go}) {
  const F = L.faq;
  return <div style={s.app}>
    <PageHead title={F.title} back={()=>go("home")} icon={<Ic.faq/>}/>
    <div style={s.content}>
      <Card><CT icon={<Ic.trash/>} text={F.raccT}/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,marginBottom:10}}>{F.raccTxt}</p>
        <a href="https://uta.cosir.org/wp-content/uploads/2026/03/20260320-Calendario-Uta-Domestiche.pdf" target="_blank" rel="noreferrer" style={{
          display:"flex", alignItems:"center", gap:12, textDecoration:"none",
          background:`linear-gradient(135deg, #2a6a3a, #1e5230)`, borderRadius:14,
          padding:"14px 16px", marginBottom:10
        }}>
          <div style={{width:40, height:40, borderRadius:10, flexShrink:0, background:"rgba(255,255,255,0.15)",
            display:"flex", alignItems:"center", justifyContent:"center", fontSize:20}}>♻️</div>
          <div style={{flex:1}}>
            <div style={{fontSize:14, color:"white", fontWeight:500}}>{F.pdf}</div>
            <div style={{fontSize:11, color:"rgba(255,255,255,0.6)", marginTop:2}}>uta.cosir.org · PDF</div>
          </div>
          <span style={{fontSize:16, color:"rgba(255,255,255,0.7)"}}>↗</span>
        </a>
        <div style={{...s.darkBox,display:"flex",gap:10,marginTop:0,marginBottom:0}}><span>⚠️</span><p style={{fontSize:12,color:"rgba(245,240,232,0.8)",lineHeight:1.6,margin:0}}>{F.esp}</p></div>
      </Card>
      <Card><CT text={F.climT}/><p style={{fontSize:14,lineHeight:1.75,color:c.mastic,margin:0}}>{F.climTxt}</p></Card>
      <Card><CT text={F.emgT}/>
        <Row l={F.emgGen} v="112"/>
        <Row l={F.amb} v="118"/>
        <Row l={F.vf} v="115"/>
        <Row l={F.guardia} v="070 609 2204" link="tel:+390706092204"/>
        <p style={{fontSize:11,color:c.mastic,padding:"2px 0 8px"}}>{F.guardiaSub}</p>
        <Row l={F.cosir} v="070 68 44 15" last/>
      </Card>
      <Card><CT text={F.aiutoT}/>
        <p style={{fontSize:14,lineHeight:1.75,color:c.mastic,marginBottom:8}}>{F.disp}</p>
        <a href="tel:+393284699520" style={s.tel}><span style={{fontSize:13.5,color:c.warm}}>📱 Alessandro</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.hazel}}>328 469 9520</span></a>
        <a href="tel:+393473208852" style={s.telLast}><span style={{fontSize:13.5,color:c.warm}}>📱 Roberta</span><span style={{fontFamily:"Georgia,serif",fontSize:16,color:c.hazel}}>347 320 8852</span></a>
      </Card>
    </div>
  </div>;
}

function EsploraCategoria({tabId, go}) {
  const t = TABS_DATA.find(t=>t.id===tabId);
  if (!t) return null;
  const E = L.esplora;
  return (
    <div style={s.app}>
      <div style={{background:`linear-gradient(160deg, ${t.color}, ${t.color}dd)`,
        padding:"50px 24px 28px", borderRadius:"0 0 24px 24px"}}>
        <button style={s.back} onClick={()=>go("esplorare")}>
          <Ic.back/> {L.back.esplora}
        </button>
        <div style={{fontSize:36, marginBottom:8}}>{t.emoji}</div>
        <h2 style={{...s.pageTitle, color:"white"}}>{tx(t.label)}</h2>
        <div style={{fontSize:12, color:t.accent, marginTop:6, letterSpacing:"0.5px"}}>{tx(t.tagline)}</div>
        <div style={{fontSize:11, color:"rgba(255,255,255,0.4)", marginTop:4}}>
          {t.data.length} {E.esp} · {E.tocca}
        </div>
      </div>

      <div style={s.content}>
        {tabId === "natura" && <AuraBox/>}
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
                    <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:17,fontWeight:400,color:c.warm,lineHeight:1.25}}>{tx(p.title)}</div>
                    <div style={{fontSize:9,color:t.accent,marginTop:3,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase"}}>{tx(p.mood)}</div>
                  </div>
                </div>
                <span style={{fontSize:10,color:c.hazel,background:`${c.hazel}15`,borderRadius:20,padding:"3px 9px",flexShrink:0,marginLeft:8,whiteSpace:"nowrap"}}>{tx(p.dist)}</span>
              </div>
              <p style={{fontSize:12.5,color:c.mastic,lineHeight:1.7,margin:0,paddingLeft:31}}>{tx(p.desc)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Storia({ go }) {
  const ST = L.storia;
  return (
    <div style={s.app}>
      <PageHead title={ST.title} back={()=>go("home")} icon={<img src="https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_80/v1781182383/corte_pintadera_logo_clean_mqshm5.png" style={{width:32,height:32,objectFit:"contain"}} alt=""/>}/>
      <div style={s.content}>

        <div style={{background:`linear-gradient(160deg, #5c3018 0%, #7a4428 100%)`,borderRadius:18,padding:"24px 20px",textAlign:"center",marginBottom:20}}>
          <img src="https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_480/v1781182383/corte_pintadera_logo_clean_mqshm5.png"
            alt="Corte Pintadera" style={{width:110,display:"block",margin:"0 auto 12px",filter:"brightness(0) invert(1)",opacity:0.92}}/>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:22,fontWeight:300,color:"#faf7f2",lineHeight:1.3}}>
            {ST.heroT}
          </div>
          <div style={{fontSize:10,letterSpacing:"3px",textTransform:"uppercase",color:"rgba(206,173,133,0.75)",marginTop:8}}>Uta · Cagliari · Sardegna</div>
        </div>

        <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.hazel,marginBottom:4}}>{ST.origini}</div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:21,fontWeight:300,color:c.warm,marginBottom:12,lineHeight:1.25}}>{ST.casaT}</div>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.p1}</p>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.p2}</p>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.p3}</p>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:14}}>{ST.p4}</p>

        <div style={{borderLeft:`3px solid ${c.hazel}`,paddingLeft:16,margin:"0 0 18px"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:15,fontStyle:"italic",color:c.warm,lineHeight:1.6}}>{ST.quote}</div>
        </div>

        <div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:22}}>
          {ST.pills.map((f,i)=>(
            <div key={i} style={{background:c.white,border:`1px solid ${c.hazel}40`,borderRadius:8,padding:"7px 11px",fontSize:12}}>
              <div style={{fontSize:9,fontWeight:500,letterSpacing:"2px",textTransform:"uppercase",color:c.hazel,marginBottom:2}}>{f.l}</div>
              {f.v}
            </div>
          ))}
        </div>

        <div style={{height:1,background:c.sand,margin:"0 0 20px"}}/>

        <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.hazel,marginBottom:4}}>{ST.restLbl}</div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:21,fontWeight:300,color:c.warm,marginBottom:12,lineHeight:1.25}}>{ST.restT}</div>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.r1}</p>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:20}}>{ST.r2}</p>

        <div style={{height:1,background:c.sand,margin:"0 0 20px"}}/>

        <div style={{background:`${c.hazel}12`,borderRadius:18,padding:"18px 16px",marginBottom:20}}>
          <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.hazel,marginBottom:4}}>{ST.simLbl}</div>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:21,fontWeight:300,color:c.warm,marginBottom:12,lineHeight:1.25}}>{ST.simT}</div>
          <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.s1}</p>
          <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:14}}>{ST.s2}</p>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:14}}>
            {[
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517923/pintadera_pus3l5.jpg",
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517923/pintadera2_bdnhxm.jpg",
            ].map((url,i)=>(
              <img key={i} src={url} alt="Pintadera nuragica" loading="lazy"
                style={{width:"100%",height:110,objectFit:"cover",borderRadius:10,border:`1px solid ${c.hazel}25`}}/>
            ))}
          </div>
          <div style={{borderLeft:`3px solid ${c.hazel}`,paddingLeft:14,marginBottom:16}}>
            <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:14,fontStyle:"italic",color:c.warm,lineHeight:1.6}}>{ST.arroda}</div>
          </div>

          <a href="https://officinaprogetti.org/it/la-pintadera-nuragica-timbro-per-il-pane-o-calendario-astronomico/" target="_blank" rel="noopener noreferrer" style={{
            display:"flex", alignItems:"center", gap:12,
            background:c.white, borderRadius:12, padding:"12px 14px",
            border:`1px solid ${c.hazel}30`, textDecoration:"none", marginBottom:16
          }}>
            <div style={{width:36,height:36,borderRadius:"50%",background:`${c.hazel}25`,
              display:"flex",alignItems:"center",justifyContent:"center",fontSize:17,flexShrink:0}}>📜</div>
            <div style={{flex:1}}>
              <div style={{fontSize:13,color:c.warm,fontWeight:500}}>{ST.appr}</div>
              <div style={{fontSize:11,color:c.mastic,marginTop:2}}>{ST.apprSub}</div>
            </div>
            <div style={{fontSize:16,color:c.hazel}}>↗</div>
          </a>

          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:16}}>
            {[
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517924/equinozio_pintadera_b3puix.jpg",
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517923/pintadere_hig9xe.jpg",
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517923/pintadere1_jzaxu2.jpg",
              "https://res.cloudinary.com/dovpg47yh/image/upload/f_auto,q_auto,w_800/v1781517923/pintadera1_elcdgj.jpg",
            ].map((url,i)=>(
              <img key={i} src={url} alt="Pintadera nuragica" loading="lazy"
                style={{width:"100%",height:90,objectFit:"cover",borderRadius:10,border:`1px solid ${c.hazel}25`}}/>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {ST.cicli.map((a,i)=>(
              <div key={i} style={{background:c.white,borderRadius:12,padding:"11px 10px",border:`1px solid ${c.hazel}25`}}>
                <div style={{fontSize:18,marginBottom:4}}>{a.e}</div>
                <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:13,fontWeight:400,color:c.warm,marginBottom:3}}>{a.t}</div>
                <div style={{fontSize:11,color:c.mastic,lineHeight:1.5}}>{a.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{fontSize:9,letterSpacing:"4px",textTransform:"uppercase",color:c.hazel,marginBottom:4}}>{ST.nomeLbl}</div>
        <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:21,fontWeight:300,color:c.warm,marginBottom:12,lineHeight:1.25}}>{ST.nomeT}</div>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:10}}>{ST.n1}</p>
        <p style={{fontSize:13.5,color:"#3a2e22",lineHeight:1.75,marginBottom:20}}>{ST.n2}</p>

        <div style={{background:`linear-gradient(160deg, #5c3018 0%, #7a4428 100%)`,borderRadius:18,padding:"22px 20px",textAlign:"center"}}>
          <div style={{fontFamily:"'Cormorant Garamond',Georgia,serif",fontSize:20,fontWeight:300,color:"#faf7f2",lineHeight:1.4,marginBottom:8}}>{ST.closT}</div>
          <div style={{fontSize:12,color:"rgba(206,173,133,0.85)",lineHeight:1.7,fontFamily:"'Cormorant Garamond',Georgia,serif",fontStyle:"italic"}}>{ST.closSub}</div>
        </div>

      </div>
    </div>
  );
}

// ══════════════════════════════════════════════
// ── MAIN APP ──────────────────────────────────
// ══════════════════════════════════════════════
export default function CortePintadera() {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem("cp_lang") || "it"; } catch(e) { return "it"; }
  });
  const setLang = (code) => {
    setLangState(code);
    try { localStorage.setItem("cp_lang", code); } catch(e) {}
  };
  // Imposta la lingua attiva a livello modulo PRIMA del render dei componenti
  LANG = lang;
  L = T[lang] || T.it;

  const getHash = () => (window.location.hash || "#home").slice(1);
  const [screen, setScreen] = useState(getHash());
  const go = (id) => { window.location.hash = id; };
  useEffect(() => {
    const onHash = () => { setScreen(getHash()); window.scrollTo && window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  const screens = {
    home: <PH go={go} lang={lang} setLang={setLang}/>, benvenuto:<Benvenuto go={go}/>, checkin:<Checkin go={go}/>,
    wifi:<Wifi go={go}/>, appartamento:<Appartamento go={go}/>, regole:<Regole go={go}/>,
    posizione:<Posizione go={go}/>, esplorare:<Esplorare go={go}/>, ristoranti:<Ristoranti go={go}/>,
    eventi:<Eventi go={go}/>, recensioni:<Recensioni go={go}/>, spesa:<Spesa go={go}/>,
    servizi:<Servizi go={go}/>, storia:<Storia go={go}/>, faq:<FAQ go={go}/>,
    esplorare_vicino:   <EsploraCategoria tabId="vicino"   go={go}/>,
    esplorare_cagliari: <EsploraCategoria tabId="cagliari" go={go}/>,
    esplorare_cultura:  <EsploraCategoria tabId="cultura"  go={go}/>,
    esplorare_natura:   <EsploraCategoria tabId="natura"   go={go}/>,
  };
  return screens[screen] || <PH go={go} lang={lang} setLang={setLang}/>;
}
