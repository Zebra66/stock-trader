export function getModeButtonsFunctionSource(): string {
  return String.raw`function setModeButtons(modes,currentMode){
    const el=document.getElementById('mode-switcher');
    if(!modes||modes.length===0){el.innerHTML='<em style="color:#ff4757">No Alpaca account is configured.</em>';return;}
    let html='';
    for(const mode of modes){
      const active=mode.mode===currentMode;
      const disabled=!mode.available;
      const bg=active?'rgba(0,212,255,0.12)':'#1e293b';
      const border=active?'rgba(0,212,255,0.5)':'#334155';
      const color=disabled?'#475569':(active?'#00d4ff':'#94a3b8');
      html+='<button '+(disabled?'disabled ':'')+'onclick="selectMode(\''+mode.mode+'\')" style="padding:.35rem .8rem;background:'+bg+';color:'+color+';border:1px solid '+border+';border-radius:999px;cursor:'+(disabled?'not-allowed':'pointer')+';font-size:.78rem;font-family:var(--font);opacity:'+(disabled?'0.55':'1')+'">'+mode.label+'</button>';
    }
    el.innerHTML=html;
  }`;
}
