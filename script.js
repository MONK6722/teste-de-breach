// ── DATA ──
const SUBCATS={Música:['Rock','Sertanejo','Eletrônica','MPB','Jazz','Forró','Gospel','Clássica','Pop'],Teatro:['Comédia','Drama','Musical','Infantil','Experimental'],Cultura:['Artes Visuais','Dança','Literatura','Gastronomia','Folclore'],Oficina:['Artesanato','Culinária','Tecnologia','Arte','Jardinagem'],Palestra:['Educação','Saúde','Tecnologia','Motivacional','Meio Ambiente'],Negócio:['Empreendedorismo','Marketing','Finanças','Agro','Networking']};
const CATS=[{id:'Música',em:'🎵',sub:'Rock · Sertanejo · Forró',tag:'tag-p'},{id:'Teatro',em:'🎭',sub:'Comédia · Drama · Musical',tag:'tag-t'},{id:'Cultura',em:'🎨',sub:'Artes · Dança · Gastro',tag:'tag-k'},{id:'Oficina',em:'🛠',sub:'Arte · Culinária · Tech',tag:'tag-a'},{id:'Palestra',em:'🎤',sub:'Educação · Saúde · Tech',tag:'tag-b'},{id:'Negócio',em:'💼',sub:'Empreend. · Finanças',tag:'tag-g'}];
const EVENTS=[
  {id:0,name:'Festival Rock no Vale',cat:'Música',sub:'Rock',tag:'tag-p',em:'🎸',bg:'linear-gradient(135deg,#3B0764,#7C3AED)',date:'28 Abr · 20:00',local:'Arena Rio do Sul',city:'Rio do Sul',addr:'Rua XV de Novembro, 200 — Centro',desc:'Uma noite épica de rock ao vivo com as melhores bandas do Alto Vale. Palco profissional, iluminação cênica, food trucks e área VIP. Maior de 18 anos, documento obrigatório.',pv:45,rating:4.3,rc:127,vagas:'🟢 Vagas disponíveis (320/500)',verified:true,past:false,feat:true,photos:['🎸','🎤','🥁','🎶','🔊'],tickets:[{n:'Pista',desc:'Acesso geral',p:45},{n:'VIP',desc:'Área premium + open bar',p:90}]},
  {id:1,name:'Noite de Teatro Clássico',cat:'Teatro',sub:'Drama',tag:'tag-t',em:'🎭',bg:'linear-gradient(135deg,#064E3B,#059669)',date:'02 Mai · 19:30',local:'Teatro Municipal',city:'Ituporanga',addr:'Praça Central, s/n — Centro',desc:'O grupo cultural de Ituporanga apresenta duas peças clássicas com cenografia profissional e figurinos elaborados. Evento para toda a família.',pv:30,rating:4.7,rc:89,vagas:'🟡 Poucas vagas (48/80)',verified:true,past:false,feat:true,photos:['🎭','🎪','🎨','✨','🌟'],tickets:[{n:'Inteira',desc:'Acesso geral',p:30},{n:'Meia',desc:'Estudante/idoso (doc. obrigatório)',p:15}]},
  {id:2,name:'Summit Empreendedor SC',cat:'Negócio',sub:'Empreendedorismo',tag:'tag-g',em:'💼',bg:'linear-gradient(135deg,#78350F,#D97706)',date:'10 Mai · 08:00',local:'Centro de Eventos',city:'Ibirama',addr:'Av. Brasil, 1500 — Bairro Industrial',desc:'O maior encontro de empreendedores do Alto Vale com palestras, painéis, pitch de startups, feira de negócios e networking. Café da manhã e almoço incluídos.',pv:80,rating:4.5,rc:203,vagas:'🟢 Vagas disponíveis (180/300)',verified:true,past:false,feat:true,photos:['💼','🎤','📊','🤝','🏆'],tickets:[{n:'Individual',desc:'1 dia completo',p:80},{n:'Dois dias',desc:'Acesso total + material',p:140}]},
  {id:3,name:'Oficina de Aquarela',cat:'Oficina',sub:'Arte',tag:'tag-a',em:'🎨',bg:'linear-gradient(135deg,#831843,#EC4899)',date:'15 Mai · 14:00',local:'Espaço Cultural',city:'Taió',addr:'Rua da Cultura, 45 — Vila Nova',desc:'Aprenda técnicas de aquarela com artistas locais. Material completo incluso. Adequado para todas as idades e níveis. Vagas super limitadas!',pv:0,rating:4.9,rc:54,vagas:'🟡 Poucas vagas (22/30)',verified:true,past:false,feat:false,photos:['🎨','🖌️','🖼️','✏️','🌈'],tickets:[{n:'Gratuito',desc:'Reservar minha vaga',p:0}]},
  {id:4,name:'Palestra: IA no Agronegócio',cat:'Palestra',sub:'Tecnologia',tag:'tag-b',em:'🤖',bg:'linear-gradient(135deg,#1E3A5F,#2563EB)',date:'20 Mai · 18:30',local:'SENAI',city:'Agrolândia',addr:'Rod. SC-350, km 12 — Zona Industrial',desc:'Como a IA está revolucionando a agricultura no Alto Vale. Cases reais de produtores locais. Coffee break incluso. Reserva obrigatória mesmo sendo gratuito.',pv:0,rating:4.4,rc:31,vagas:'🟢 Vagas disponíveis (95/150)',verified:true,past:false,feat:false,photos:['🤖','🌱','📊','💡','🚜'],tickets:[{n:'Gratuito',desc:'Reservar minha vaga',p:0}]},
  {id:5,name:'Forró das Estrelas',cat:'Música',sub:'Forró',tag:'tag-p',em:'🎻',bg:'linear-gradient(135deg,#4C1D95,#8B5CF6)',date:'25 Mai · 21:00',local:'Clube Recreativo',city:'Lontras',addr:'Rua das Palmeiras, 78 — Jardim',desc:'A maior festa de forró do Alto Vale com banda ao vivo, aulas de dança e área gastronômica especial.',pv:25,rating:4.6,rc:0,vagas:'🟢 Vagas disponíveis (200/400)',verified:false,past:false,feat:false,photos:['🎻','🎺','💃','🕺','🌟'],tickets:[{n:'Pista',desc:'Acesso geral',p:25},{n:'Camarote',desc:'Mesa reservada + garçom',p:60}]},
  {id:6,name:'Festival de Jazz — Abr',cat:'Música',sub:'Jazz',tag:'tag-p',em:'🎷',bg:'linear-gradient(135deg,#1E1B4B,#4338CA)',date:'12 Abr · 20:00',local:'Parque Municipal',city:'Rio do Sul',addr:'Av. do Parque, s/n — Centro',desc:'Evento encerrado com sucesso. Mais de 800 pessoas presentes!',pv:0,rating:4.2,rc:88,vagas:'✅ Encerrado',verified:true,past:true,feat:false,photos:['🎷','🎹','🎸','🎺','🎵'],tickets:[]},
  {id:7,name:'Seminário de Saúde Mental',cat:'Palestra',sub:'Saúde',tag:'tag-b',em:'🧠',bg:'linear-gradient(135deg,#0C4A6E,#0891B2)',date:'05 Abr · 14:00',local:'UBS Central',city:'Rio do Sul',addr:'Rua da Saúde, 321 — Centro',desc:'Evento encerrado.',pv:0,rating:4.8,rc:112,vagas:'✅ Encerrado',verified:true,past:true,feat:false,photos:['🧠','❤️','🩺','💊','🌿'],tickets:[]}
];
const ADMIN_ITEMS=[
  {id:'a1',name:'Show Sertanejo — Pouso Redondo',cat:'Música',sub:'Sertanejo',org:'João Batista Eventos',date:'01 Jun · 20:00',city:'Pouso Redondo',status:'pendente',desc:'Show com dupla sertaneja regional. Capacidade: 600 pessoas.'},
  {id:'a2',name:'Feira Gastronômica do Vale',cat:'Cultura',sub:'Gastronomia',org:'Associação Comercial',date:'08 Jun · 10:00',city:'Rio do Sul',status:'pendente',desc:'Feira com pratos típicos da região. Entrada gratuita.'},
  {id:'a3',name:'Workshop de Marketing Digital',cat:'Negócio',sub:'Marketing',org:'SEBRAE Alto Vale',date:'15 Jun · 08:00',city:'Ibirama',status:'aprovado',desc:'Capacitação para empreendedores digitais.'},
  {id:'a4',name:'Peça Infantil: O Pequeno Príncipe',cat:'Teatro',sub:'Infantil',org:'Grupo Teatral Ibirama',date:'22 Jun · 15:00',city:'Ibirama',status:'reprovado',desc:'Informações incompletas. Aguardando reenvio.'}
];

// ── STATE ──
let NAV=[],CUR_EV=null,CUR_EV_EDIT=null,CUR_QTY=1,CUR_PV=0,CUR_TIPO='',CUR_RAT=0,EV_CAT='Todos',EV_CITY='Todas',ADMIN_F='todos';
let USER={logged:false,name:'',role:'',isAdmin:false};
let MY_TICKETS=[],MY_FAVS=new Set(),MY_REVIEWS=[];
let REG_DATA={};
let INTERESTS=new Set();

// ── AUTH ──
// Banco de contas cadastradas (começa com admin padrão)
let REGISTERED_USERS=[
  {email:'liquitas',username:'Liquitas',pass:'123321',name:'Liquitas',role:'Administrador',isAdmin:true},
];

function doLogin(){
  const u=document.getElementById('l-user').value.trim().toLowerCase();
  const p=document.getElementById('l-pass').value;
  const err=document.getElementById('login-err');
  err.style.display='none';
  if(!u||!p){err.textContent='Preencha usuário e senha';err.style.display='block';setTimeout(()=>err.style.display='none',2500);return;}
  // busca por email, username
  const found=REGISTERED_USERS.find(acc=>
    acc.email.toLowerCase()===u||acc.username.toLowerCase()===u
  );
  if(!found){err.textContent='Conta não encontrada. Cadastre-se primeiro!';err.style.display='block';setTimeout(()=>err.style.display='none',3000);return;}
  if(found.pass!==p){err.textContent='Senha incorreta';err.style.display='block';setTimeout(()=>err.style.display='none',2500);return;}
  loginAs(found.name,found.role,found.isAdmin);
}
function doGuestLogin(){loginAs('Visitante','Participante',false);}
function loginAs(name,role,isAdmin){
  USER={logged:true,name,role,isAdmin};
  document.getElementById('main-bnav').style.display='flex';
  document.getElementById('nav-admin-btn').style.display=isAdmin?'block':'none';
  document.getElementById('admin-menu-item').style.display=isAdmin?'block':'none';
  initHome();go('s-home');
}
function doLogout(){
  USER={logged:false,name:'',role:'',isAdmin:false};
  document.getElementById('main-bnav').style.display='none';
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('s-login').classList.add('active');
  document.getElementById('l-user').value='';document.getElementById('l-pass').value='';
  NAV=[];
}
function switchAuthTab(t){
  document.getElementById('tab-login').classList.toggle('on',t==='login');
  document.getElementById('tab-reg').classList.toggle('on',t==='reg');
}
document.getElementById('l-pass').addEventListener('keydown',e=>{if(e.key==='Enter')doLogin();});

// ── REGISTER ──
let REG_STEP=1;
function setRegStep(n){
  REG_STEP=n;
  [1,2,3].forEach(i=>{
    const el=document.getElementById('reg-step'+i);
    if(el) el.style.display=i===n?'block':'none';
  });
  // dots
  const dots=[document.getElementById('sdot1'),document.getElementById('sdot2'),document.getElementById('sdot3')];
  const lines=[document.getElementById('sline1'),document.getElementById('sline2')];
  dots.forEach((d,i)=>{
    d.classList.remove('active','done');
    if(i+1<n) d.classList.add('done');
    else if(i+1===n) d.classList.add('active');
  });
  lines.forEach((l,i)=>{l.classList.toggle('done',i+1<n);});
}
function regStep1(){
  const nome=document.getElementById('r-nome').value.trim();
  const sobrenome=document.getElementById('r-sobrenome').value.trim();
  const email=document.getElementById('r-email').value.trim();
  const city=document.getElementById('r-city').value;
  if(!nome||!sobrenome){toast('⚠️ Informe nome e sobrenome');return;}
  if(!email||!email.includes('@')){toast('⚠️ E-mail inválido');return;}
  if(!city){toast('⚠️ Selecione sua cidade');return;}
  REG_DATA={nome,sobrenome,email,phone:document.getElementById('r-phone').value,city};
  setRegStep(2);
}
function regBackStep(){setRegStep(1);}
function regStep2(){
  const user=document.getElementById('r-user').value.trim();
  const pass=document.getElementById('r-pass').value;
  const pass2=document.getElementById('r-pass2').value;
  const terms=document.getElementById('r-terms').checked;
  if(!user||user.length<4||/\s/.test(user)){toast('⚠️ Usuário inválido (mín. 4 chars, sem espaços)');return;}
  if(!pass||pass.length<6){toast('⚠️ Senha deve ter mínimo 6 caracteres');return;}
  if(pass!==pass2){toast('⚠️ As senhas não coincidem');return;}
  if(!terms){toast('⚠️ Aceite os termos para continuar');return;}
  // verifica se username já existe
  if(REGISTERED_USERS.find(a=>a.username.toLowerCase()===user.toLowerCase())){toast('⚠️ Nome de usuário já em uso');return;}
  if(REGISTERED_USERS.find(a=>a.email.toLowerCase()===REG_DATA.email.toLowerCase())){toast('⚠️ E-mail já cadastrado');return;}
  REG_DATA={...REG_DATA,user,pass};
  // salva conta na lista
  REGISTERED_USERS.push({
    email:REG_DATA.email.toLowerCase(),
    username:REG_DATA.user,
    pass:REG_DATA.pass,
    name:REG_DATA.nome+' '+REG_DATA.sobrenome,
    role:'Participante',
    isAdmin:false
  });
  setRegStep(3);
  document.getElementById('reg-success-name').textContent='Bem-vindo, '+REG_DATA.nome+'! 🎉';
}
function loginFromReg(){
  loginAs(REG_DATA.nome+' '+REG_DATA.sobrenome,'Participante',false);
}
function toggleInterest(el,cat){
  if(INTERESTS.has(cat)){INTERESTS.delete(cat);el.classList.remove('on');}
  else{INTERESTS.add(cat);el.classList.add('on');}
}
function togglePwd(id,btn){
  const inp=document.getElementById(id);
  if(inp.type==='password'){inp.type='text';btn.textContent='🙈';}
  else{inp.type='password';btn.textContent='👁';}
}
function checkPwdStrength(inp){
  const v=inp.value,fill=document.getElementById('strength-fill'),txt=document.getElementById('strength-txt');
  let s=0,label='',color='';
  if(v.length>=6)s++;if(v.length>=10)s++;if(/[A-Z]/.test(v))s++;if(/[0-9]/.test(v))s++;if(/[^a-zA-Z0-9]/.test(v))s++;
  const levels=[['0%','',''],['20%','#EF4444','Muito fraca'],['40%','#F59E0B','Fraca'],['60%','#EAB308','Regular'],['80%','#22C55E','Forte'],['100%','#10B981','Muito forte']];
  const l=levels[s]||levels[0];
  fill.style.width=l[0];fill.style.background=l[1];txt.textContent=l[2];
}
function checkUsername(inp){
  const hint=document.getElementById('user-hint');
  if(inp.value.length<4){hint.textContent='Mín. 4 caracteres';hint.style.color='#F87171';}
  else if(/\s/.test(inp.value)){hint.textContent='Sem espaços';hint.style.color='#F87171';}
  else{hint.textContent='✓ Nome de usuário disponível';hint.style.color='var(--grn)';}
}
function maskPhone(inp){
  let v=inp.value.replace(/\D/g,'');
  if(v.length>11)v=v.slice(0,11);
  if(v.length>0)v=`(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  inp.value=v;
}

// ── NAV ──
function go(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  NAV.push(id);updBnav(id);
  // scroll to top
  setTimeout(()=>{const el=document.getElementById(id);if(el){const scroll=el.querySelector('[style*="overflow-y"]')||el;scroll.scrollTop=0;}},50);
  const handlers={
    's-events':()=>{renderEvList();renderEvChips();},
    's-search':()=>renderList(EVENTS,document.getElementById('sr-list')),
    's-profile':()=>renderProfile(),
    's-tickets':()=>renderTickets(),
    's-favorites':()=>renderFavorites(),
    's-myreviews':()=>renderMyReviews(),
    's-admin':()=>{if(!USER.isAdmin){toast('⛔ Acesso restrito ao administrador');back();return;}renderAdmin(ADMIN_F);},
    's-register':()=>setRegStep(1),
  };
  if(handlers[id]) handlers[id]();
}
function back(){NAV.pop();const p=NAV.length?NAV[NAV.length-1]:'s-home';NAV.pop();go(p);}
function updBnav(id){
  const map={'s-home':0,'s-events':1,'s-search':2,'s-suggest':3,'s-profile':4};
  for(let i=0;i<5;i++) document.getElementById('bi'+i).classList.toggle('on',i===map[id]);
}

// ── TOAST ──
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}

// ── STARS ──
function makeStars(r,sz){let s='';for(let i=1;i<=5;i++)s+=`<span style="font-size:${sz||12}px;color:${i<=Math.round(r)?'#FCD34D':'rgba(255,255,255,.16)'}">★</span>`;return s;}

// ── EVENT CARD (compact) ──
function makeEvCard(e,past){
  const d=document.createElement('div');
  d.className='ec';if(past)d.style.opacity='.6';
  d.onclick=()=>openEv(e.id);
  const priceLabel=past?'<span style="font-size:9px;color:var(--mut)">✅ Encerrado</span>':(e.pv===0?'<span style="color:var(--grn);font-size:11px;font-weight:700">GRÁTIS</span>':'<span class="price-tag">R$ '+e.pv+'</span>');
  const bot=past?`<div style="display:flex;gap:1px">${makeStars(e.rating,10)}</div>`:priceLabel+'<button class="jbtn">Ver +</button>';
  d.innerHTML=`<div class="ec-img" style="background:${e.bg}">${e.em}</div>
  <div class="ec-body">
    <span class="pill ${e.tag}" style="font-size:9px;margin-bottom:2px">${e.cat} · ${e.sub}</span>
    <div class="ec-name">${e.name}</div>
    <div class="ec-meta">📅 ${e.date} · 📍 ${e.city}</div>
    <div class="ec-bot">${bot}</div>
  </div>`;
  return d;
}
function renderList(list,container,past){container.innerHTML='';list.forEach(e=>container.appendChild(makeEvCard(e,past||e.past)));}

// ── OPEN EVENT ──
function openEv(id){
  CUR_EV=EVENTS[id];const e=CUR_EV;
  document.getElementById('d-hero').style.background=e.bg;
  document.getElementById('d-emoji').textContent=e.em;
  document.getElementById('d-title').textContent=e.name;
  document.getElementById('d-cat-badge').textContent=e.cat+' · '+e.sub;
  document.getElementById('d-cat-badge').className='pill '+e.tag;
  document.getElementById('d-verified').style.display=e.verified?'inline-flex':'none';
  document.getElementById('d-date').textContent=e.date;
  document.getElementById('d-local').textContent=e.local;
  document.getElementById('d-city').textContent=e.city+', SC';
  document.getElementById('d-addr').textContent=e.addr;
  document.getElementById('d-vagas').textContent=e.vagas;
  document.getElementById('d-desc').textContent=e.desc;
  document.getElementById('d-rating-val').textContent=e.rating;
  document.getElementById('d-rcount').textContent='('+e.rc+' avaliações)';
  document.getElementById('d-stars-disp').innerHTML=makeStars(e.rating,13);
  document.getElementById('map-local').textContent=e.local;
  document.getElementById('map-city').textContent=e.city+', SC — Alto Vale do Itajaí';
  document.getElementById('fav-btn').textContent=MY_FAVS.has(id)?'❤️':'🤍';
  document.getElementById('rv-ename').textContent=e.name;
  document.getElementById('co-ename').textContent=e.name;
  document.getElementById('co-einfo').textContent=e.date+' · '+e.local;
  // photos
  const ph=document.getElementById('d-photos');ph.innerHTML='';
  const phbg=['rgba(232,71,42,.2)','rgba(249,115,22,.2)','rgba(20,184,166,.2)','rgba(245,158,11,.2)','rgba(37,99,235,.2)'];
  e.photos.forEach((p,i)=>{const d=document.createElement('div');d.className='ph-thumb';d.style.background=phbg[i%5];d.textContent=p;ph.appendChild(d);});
  // reviews
  const rv=document.getElementById('d-reviews');rv.innerHTML='';
  const evRvs=MY_REVIEWS.filter(r=>r.evId===id);
  const baseRvs=[{name:'Ana S.',av:'🧑',rating:5,date:'20 Abr',text:'Evento incrível! Organização impecável!'},{name:'Carlos M.',av:'👨',rating:4,date:'18 Abr',text:'Muito bom! Som poderia ser melhor no fundo, mas valeu cada centavo.'}];
  [...evRvs,...(e.rc>0?baseRvs:[])].forEach(r=>{
    const d=document.createElement('div');d.className='rv-card';
    d.innerHTML=`<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px"><div style="width:26px;height:26px;border-radius:50%;background:var(--surf2);display:flex;align-items:center;justify-content:center;font-size:12px">${r.av||'👤'}</div><div><div style="font-size:12px;font-weight:600">${r.name}</div><div style="font-size:9px;color:var(--mut)">${r.date||'Agora'}</div></div><div style="margin-left:auto;display:flex;gap:1px">${makeStars(r.rating,10)}</div></div><div style="font-size:11px;color:var(--mut);line-height:1.6">${r.text}</div>`;
    rv.appendChild(d);
  });
  if(!evRvs.length&&e.rc===0){rv.innerHTML='<div style="text-align:center;padding:14px;color:var(--mut);font-size:12px">Seja o primeiro a avaliar!</div>';}
  // tickets
  const to=document.getElementById('ticket-opts');to.innerHTML='';
  CUR_PV=e.tickets.length?e.tickets[0].p:0;CUR_TIPO=e.tickets.length?e.tickets[0].n:'';CUR_QTY=1;
  e.tickets.forEach((t,i)=>{
    const d=document.createElement('div');d.className='topt'+(i===0?' on':'');
    d.innerHTML=`<div><div style="font-size:12px;font-weight:600">${t.n}</div><div style="font-size:10px;color:var(--mut)">${t.desc}</div></div><span style="font-size:14px;font-weight:800;color:${t.p===0?'var(--grn)':'var(--acc)'}">${t.p===0?'GRÁTIS':'R$ '+t.p}</span>`;
    d.onclick=()=>{document.querySelectorAll('.topt').forEach(x=>x.classList.remove('on'));d.classList.add('on');CUR_PV=t.p;CUR_TIPO=t.n;updateTotal();};
    to.appendChild(d);
  });
  document.getElementById('qty-v').textContent='1';
  document.getElementById('fee-txt').textContent=CUR_PV>0?'+ R$ 3,00 por ingresso (taxa do site)':'Sem taxa para eventos gratuitos';
  updateTotal();go('s-detail');
}
function updateTotal(){
  const sub=CUR_PV*CUR_QTY,taxa=CUR_PV>0?3*CUR_QTY:0;
  const fmt=v=>v===0?'GRÁTIS':'R$ '+v.toFixed(2).replace('.',',');
  document.getElementById('co-sub').textContent=fmt(sub);
  document.getElementById('co-tot').textContent=fmt(sub+taxa);
  document.getElementById('coo-tipo').textContent=(CUR_TIPO||'Ingresso')+' × '+CUR_QTY;
  document.getElementById('coo-sub').textContent=fmt(sub);
  document.getElementById('coo-taxa').textContent=taxa===0?'—':'R$ '+taxa.toFixed(2).replace('.',',');
  document.getElementById('coo-total').textContent=fmt(sub+taxa);
}
function chgQty(d){CUR_QTY=Math.max(1,Math.min(10,CUR_QTY+d));document.getElementById('qty-v').textContent=CUR_QTY;updateTotal();}

// ── BUY ──
function confirmBuy(){
  if(!CUR_EV)return;
  const nome=document.getElementById('co-nome').value.trim();
  const email=document.getElementById('co-email').value.trim();
  if(!nome||!email){toast('⚠️ Preencha nome e e-mail');return;}
  if(!email.includes('@')){toast('⚠️ E-mail inválido');return;}
  const taxa=CUR_PV>0?3*CUR_QTY:0;
  const tkt={evId:CUR_EV.id,evName:CUR_EV.name,tipo:CUR_TIPO,qty:CUR_QTY,total:CUR_PV*CUR_QTY+taxa,date:CUR_EV.date,local:CUR_EV.local,city:CUR_EV.city,em:CUR_EV.em,bg:CUR_EV.bg,pv:CUR_PV,boughtAt:new Date().toLocaleDateString('pt-BR'),nome:nome,email:email};
  MY_TICKETS.push(tkt);
  updateBadges();
  toast('✅ Ingresso confirmado! Chegará por '+email+' 🎉');
  setTimeout(()=>go('s-tickets'),1200);
}

// ── FAV ──
function doFav(){
  if(!CUR_EV)return;const id=CUR_EV.id;
  MY_FAVS.has(id)?MY_FAVS.delete(id):MY_FAVS.add(id);
  document.getElementById('fav-btn').textContent=MY_FAVS.has(id)?'❤️':'🤍';
  toast(MY_FAVS.has(id)?'❤️ Adicionado aos favoritos!':'Removido dos favoritos');
  updateBadges();
}

// ── SHARE ──
function doShare(){if(!CUR_EV)return;toast('📲 Link copiado! maxevento.com.br/evento/'+CUR_EV.id);}

// ── REVIEW ──
function setRating(n){CUR_RAT=n;const labels=['','Ruim','Regular','Bom','Muito bom','Excelente!'];document.querySelectorAll('.istar').forEach((s,i)=>s.classList.toggle('lit',i<n));document.getElementById('rv-label').textContent=labels[n];}
function submitReview(){
  if(!CUR_RAT){toast('Selecione uma nota ⭐');return;}
  const txt=document.getElementById('rv-text').value||'';
  MY_REVIEWS.push({evId:CUR_EV.id,evName:CUR_EV.name,rating:CUR_RAT,text:txt||'Ótimo evento!',name:USER.name,av:'👤',date:'Agora'});
  toast('⭐ Avaliação publicada! Obrigado!');updateBadges();
  CUR_RAT=0;document.querySelectorAll('.istar').forEach(s=>s.classList.remove('lit'));
  document.getElementById('rv-label').textContent='';document.getElementById('rv-text').value='';
  setTimeout(()=>back(),1200);
}

// ── PROFILE ──
function renderProfile(){
  document.getElementById('prof-name').textContent=USER.name;
  document.getElementById('prof-role').textContent=USER.role+(USER.isAdmin?' · Admin MaxEvento':'');
  document.getElementById('prof-avatar').textContent=USER.isAdmin?'⚙️':'🎉';
  updateBadges();
}
function updateBadges(){
  document.getElementById('tkt-count-badge').textContent=MY_TICKETS.length?MY_TICKETS.length+' ingresso(s)':'';
  document.getElementById('fav-count-badge').textContent=MY_FAVS.size?MY_FAVS.size+' evento(s)':'';
  document.getElementById('rv-count-badge').textContent=MY_REVIEWS.length?MY_REVIEWS.length+' avaliação(ões)':'';
}

// ── MY TICKETS ──
function renderTickets(){
  const c=document.getElementById('tickets-body');c.innerHTML='';
  if(!MY_TICKETS.length){c.innerHTML='<div class="empty-state"><div class="em">🎫</div>Você ainda não tem ingressos.<br><br><button class="btnP" style="width:auto;padding:9px 18px;font-size:12px" onclick="go(\'s-events\')">Ver Eventos</button></div>';return;}
  MY_TICKETS.forEach((t,i)=>{
    const d=document.createElement('div');d.className='tkt-card';
    d.innerHTML=`<div style="display:flex;align-items:center;gap:9px;margin-bottom:9px">
      <div style="width:40px;height:40px;border-radius:9px;background:${t.bg};display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0">${t.em}</div>
      <div><div style="font-family:var(--font-h);font-size:13px;font-weight:700">${t.evName}</div><div style="font-size:10px;color:var(--mut)">${t.tipo} · ${t.qty}x</div></div>
      <div style="margin-left:auto;text-align:right"><div style="font-size:12px;font-weight:700;color:var(--acc)">${t.pv===0?'GRÁTIS':'R$ '+t.total.toFixed(2).replace('.',',')}</div><div style="font-size:9px;color:var(--mut)">${t.boughtAt}</div></div>
    </div>
    <div style="display:flex;flex-direction:column;gap:2px;font-size:11px;color:var(--mut);background:var(--surf);border-radius:9px;padding:9px">
      <span>📅 ${t.date}</span><span>📍 ${t.local} · ${t.city}</span>
    </div>
    <div style="margin-top:9px;display:flex;gap:7px">
      <button style="flex:1;padding:7px;border-radius:9px;background:var(--surf2);border:1px solid rgba(232,71,42,.22);color:var(--txt);font-size:11px;cursor:pointer;font-family:var(--font-b)" onclick="toast('📲 Ingresso compartilhado!')">Compartilhar ↗</button>
      <button class="jbtn" style="flex:1;padding:7px;font-size:11px;border-radius:9px" onclick="openEv(${t.evId})">Ver evento</button>
    </div>`;
    c.appendChild(d);
  });
}

// ── FAVORITES ──
function renderFavorites(){
  const c=document.getElementById('fav-body');c.innerHTML='';
  if(!MY_FAVS.size){c.innerHTML='<div class="empty-state"><div class="em">🤍</div>Nenhum favorito ainda.<br><br><button class="btnP" style="width:auto;padding:9px 18px;font-size:12px" onclick="go(\'s-events\')">Explorar Eventos</button></div>';return;}
  EVENTS.filter(e=>MY_FAVS.has(e.id)).forEach(e=>c.appendChild(makeEvCard(e)));
}

// ── MY REVIEWS ──
function renderMyReviews(){
  const c=document.getElementById('myreviews-body');c.innerHTML='';
  if(!MY_REVIEWS.length){c.innerHTML='<div class="empty-state"><div class="em">⭐</div>Você ainda não avaliou nenhum evento.<br><br><button class="btnP" style="width:auto;padding:9px 18px;font-size:12px" onclick="go(\'s-events\')">Ver Eventos</button></div>';return;}
  MY_REVIEWS.forEach(r=>{
    const d=document.createElement('div');d.className='rv-card';
    d.innerHTML=`<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:5px">
      <div style="font-family:var(--font-h);font-size:12px;font-weight:700">${r.evName}</div>
      <div style="display:flex;gap:1px">${makeStars(r.rating,11)}</div>
    </div>
    <div style="font-size:11px;color:var(--mut);line-height:1.6">${r.text}</div>
    <button class="sa" style="margin-top:7px" onclick="openEv(${r.evId})">Ver evento →</button>`;
    c.appendChild(d);
  });
}

// ── SUGGEST ──
function updateSgSubcat(){
  const cat=document.getElementById('sg-cat').value;
  const grp=document.getElementById('sg-sub-grp'),sel=document.getElementById('sg-sub');
  if(cat&&SUBCATS[cat]){grp.style.display='block';sel.innerHTML=SUBCATS[cat].map(s=>`<option>${s}</option>`).join('');}
  else grp.style.display='none';
}
function submitSuggest(){
  const name=document.getElementById('sg-name').value.trim();
  const cat=document.getElementById('sg-cat').value;
  const org=document.getElementById('sg-org').value.trim();
  if(!name||!cat||!org){toast('Preencha os campos obrigatórios *');return;}
  const sub=document.getElementById('sg-sub')?.value||cat;
  const city=document.getElementById('sg-city').value;
  const date=document.getElementById('sg-date').value||'A definir';
  const addr=document.getElementById('sg-addr').value||'A definir';
  const desc=document.getElementById('sg-desc').value||'Sem descrição';
  const contact=document.getElementById('sg-contact').value||'—';
  ADMIN_ITEMS.unshift({id:'u'+Date.now(),name,cat,sub,org,date,city,status:'pendente',desc,contact});
  toast('✅ Sugestão enviada! Nossa equipe analisa em até 24h 🎉');
  setTimeout(()=>back(),1400);
}

// ── EVENTS LIST ──
function renderEvList(){
  const c=document.getElementById('ev-list');c.innerHTML='';
  const q=(document.getElementById('ev-search')||{}).value?.toLowerCase()||'';
  const list=EVENTS.filter(e=>{
    if(e.past) return false;
    if(EV_CAT!=='Todos'&&e.cat!==EV_CAT) return false;
    if(EV_CITY!=='Todas'&&e.city!==EV_CITY) return false;
    if(q&&!e.name.toLowerCase().includes(q)&&!e.city.toLowerCase().includes(q)&&!e.sub.toLowerCase().includes(q)) return false;
    return true;
  });
  if(!list.length){document.getElementById('ev-empty').style.display='block';return;}
  document.getElementById('ev-empty').style.display='none';
  list.forEach(e=>c.appendChild(makeEvCard(e)));
}
function filterEvList(){renderEvList();}
function renderEvChips(){
  const c=document.getElementById('ev-chips');c.innerHTML='';
  ['Todos','Música','Teatro','Cultura','Oficina','Palestra','Negócio'].forEach(cat=>{
    const b=document.createElement('button');b.className='chip'+(cat===EV_CAT?' on':'');b.textContent=cat;
    b.onclick=()=>{EV_CAT=cat;document.querySelectorAll('#ev-chips .chip').forEach(x=>x.classList.remove('on'));b.classList.add('on');renderEvList();};
    c.appendChild(b);
  });
}
function evCity(city,el){EV_CITY=city;document.querySelectorAll('#city-chips .chip').forEach(x=>x.classList.remove('on'));el.classList.add('on');renderEvList();}

// ── SEARCH ──
function doSearch(){
  const q=document.getElementById('sr-inp').value.toLowerCase();
  const list=EVENTS.filter(e=>e.name.toLowerCase().includes(q)||e.city.toLowerCase().includes(q)||e.cat.toLowerCase().includes(q)||e.sub.toLowerCase().includes(q));
  renderList(list,document.getElementById('sr-list'));
}
function srCity(city,el){
  document.querySelectorAll('#s-search .chip').forEach(x=>x.classList.remove('on'));el.classList.add('on');
  const list=city==='Todas'?EVENTS:EVENTS.filter(e=>e.city===city);
  renderList(list,document.getElementById('sr-list'));
}

// ── HOME ──
function homeCat(cat,el){
  document.querySelectorAll('#home-chips .chip').forEach(x=>x.classList.remove('on'));el.classList.add('on');
  const hl=document.getElementById('home-list');hl.innerHTML='';
  const list=cat==='Todos'?EVENTS.filter(e=>!e.past):EVENTS.filter(e=>!e.past&&e.cat===cat);
  list.slice(0,4).forEach(e=>hl.appendChild(makeEvCard(e)));
}
function initHome(){
  const f=document.getElementById('feat-scroll');f.innerHTML='';
  EVENTS.filter(e=>e.feat).forEach(e=>{
    const d=document.createElement('div');d.className='fc';d.onclick=()=>openEv(e.id);
    d.innerHTML=`<div class="fc-img" style="background:${e.bg}"><span class="pill ${e.tag}" style="position:absolute;top:8px;left:8px;font-size:8px">${e.cat}</span>${e.em}</div>
    <div class="fc-ov"><div class="fc-name">${e.name}</div><div class="fc-info">📅 ${e.date} · 📍 ${e.city}</div>
    <div style="display:flex;gap:1px;margin-top:2px">${makeStars(e.rating,9)} <span style="font-size:9px;color:rgba(255,255,255,.5);margin-left:2px">${e.rating}${e.verified?' ✅':''}</span></div></div>`;
    f.appendChild(d);
  });

  const hl=document.getElementById('home-list');hl.innerHTML='';
  EVENTS.filter(e=>!e.past).slice(0,4).forEach(e=>hl.appendChild(makeEvCard(e)));
  const pl=document.getElementById('past-list');pl.innerHTML='';
  EVENTS.filter(e=>e.past).forEach(e=>pl.appendChild(makeEvCard(e,true)));
  document.getElementById('prof-name').textContent=USER.name;
  document.getElementById('prof-role').textContent=USER.role+(USER.isAdmin?' · Admin MaxEvento':'');
  document.getElementById('prof-avatar').textContent=USER.isAdmin?'⚙️':'🎉';
}

// ── ADMIN ──
function renderAdmin(f){
  const c=document.getElementById('admin-list');c.innerHTML='';
  const list=f==='todos'?ADMIN_ITEMS:ADMIN_ITEMS.filter(a=>a.status===f);
  if(!list.length){c.innerHTML='<div class="empty-state"><div class="em">📋</div>Nenhum item aqui.</div>';return;}
  list.forEach(a=>{
    const badge=a.status==='pendente'?'s-pend':a.status==='aprovado'?'s-aprv':'s-rej';
    const label=a.status==='pendente'?'⏳ Pendente':a.status==='aprovado'?'✅ Aprovado':'❌ Reprovado';
    const d=document.createElement('div');d.className='admin-card';
    d.innerHTML=`<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:7px;margin-bottom:5px">
      <div><div style="font-weight:700;font-size:12px;margin-bottom:2px">${a.name}</div>
      <div style="font-size:10px;color:var(--mut)">${a.cat} · ${a.sub} · ${a.city}</div>
      <div style="font-size:10px;color:var(--mut)">📅 ${a.date} · Org.: ${a.org||'—'}</div>
      ${a.contact?`<div style="font-size:10px;color:var(--mut)">📞 ${a.contact}</div>`:''}
      </div><span class="status-badge ${badge}">${label}</span></div>
      <div style="font-size:11px;color:var(--mut);background:var(--surf);border-radius:9px;padding:7px;margin-bottom:${a.status==='pendente'?'9':'0'}px">${a.desc}</div>
      ${a.status==='pendente'?`<div style="display:flex;gap:7px">
        <button style="flex:1;padding:8px;border-radius:9px;background:rgba(52,211,153,.13);color:var(--grn);border:1px solid rgba(52,211,153,.22);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--font-b)" onclick="adminAction('${a.id}','aprovado')">✅ Aprovar</button>
        <button style="flex:1;padding:8px;border-radius:9px;background:rgba(239,68,68,.08);color:#F87171;border:1px solid rgba(239,68,68,.18);font-size:11px;font-weight:700;cursor:pointer;font-family:var(--font-b)" onclick="adminAction('${a.id}','reprovado')">❌ Reprovar</button>
      </div>`:''}`;
    c.appendChild(d);
  });
}
function adminFilter(f,el){ADMIN_F=f;document.querySelectorAll('#admin-chips .chip').forEach(x=>x.classList.remove('on'));el.classList.add('on');renderAdmin(f);}
function setAdminTab(tab,el){
  document.querySelectorAll('#admin-tabs .chip').forEach(x=>x.classList.remove('on'));
  el.classList.add('on');
  document.getElementById('admin-sugestoes').style.display=tab==='sugestoes'?'':'none';
  document.getElementById('admin-eventos').style.display=tab==='eventos'?'':'none';
  document.getElementById('admin-adicionar').style.display=tab==='adicionar'?'':'none';
  document.getElementById('admin-usuarios').style.display=tab==='usuarios'?'':'none';
  if(tab==='eventos')renderEventsList();
  if(tab==='usuarios')renderAdminsList();
}
function adminAction(id,status){
  const item=ADMIN_ITEMS.find(a=>a.id===id);if(!item)return;
  item.status=status;
  if(status==='aprovado'){
    // Adiciona o evento aprovado à lista de eventos
    const newId=EVENTS.length;
    const catObj=CATS.find(c=>c.id===item.cat)||{tag:'tag-p',em:'🎪'};
    const bgs={'Música':'linear-gradient(135deg,#3B0764,#7C3AED)','Teatro':'linear-gradient(135deg,#064E3B,#059669)','Negócio':'linear-gradient(135deg,#78350F,#D97706)','Oficina':'linear-gradient(135deg,#831843,#EC4899)','Palestra':'linear-gradient(135deg,#1E3A5F,#2563EB)','Cultura':'linear-gradient(135deg,#4C1D95,#8B5CF6)'};
    const ems={'Música':'🎵','Teatro':'🎭','Negócio':'💼','Oficina':'🛠','Palestra':'🎤','Cultura':'🎨'};
    EVENTS.push({
      id:newId,name:item.name,cat:item.cat,sub:item.sub,
      tag:catObj.tag||'tag-p',em:ems[item.cat]||'🎪',
      bg:bgs[item.cat]||'linear-gradient(135deg,#3B0764,#7C3AED)',
      date:item.date,local:item.addr||'A definir',city:item.city,
      addr:item.addr||'—',desc:item.desc,
      pv:0,rating:0,rc:0,vagas:'🟢 Vagas disponíveis',
      verified:true,past:false,feat:false,
      photos:['🎪','🎉','✨','🌟','🎶'],
      tickets:[{n:'Gratuito',desc:'Reservar minha vaga',p:0}]
    });
    toast('✅ Evento aprovado e publicado na listagem!');
  } else {
    toast('❌ Evento reprovado.');
  }
  renderAdmin(ADMIN_F);
}
function renderEventsList(){
  const c=document.getElementById('events-list');c.innerHTML='';
  if(!EVENTS.length){c.innerHTML='<div class="empty-state"><div class="em">📅</div>Nenhum evento criado.</div>';return;}
  EVENTS.forEach(e=>{
    const d=document.createElement('div');d.className='admin-card';
    d.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px">
      <div><div style="font-weight:700;font-size:12px;margin-bottom:2px">${e.em} ${e.name}</div>
      <div style="font-size:10px;color:var(--mut)">${e.cat} · ${e.sub} · ${e.city}</div>
      <div style="font-size:10px;color:var(--mut)">📅 ${e.date} · 📍 ${e.local}</div>
      </div>
    </div>
    <div style="font-size:11px;color:var(--mut);background:var(--surf);border-radius:9px;padding:7px;margin-bottom:9px;line-height:1.4">${e.desc}</div>
    <div style="display:flex;gap:7px">
      <button style="flex:1;padding:8px;background:rgba(59,150,233,.13);color:#3B96E9;border:1px solid rgba(59,150,233,.22);border-radius:9px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--font-b)" onclick="editEvent(${e.id})">✏️ Editar</button>
      <button style="flex:1;padding:8px;background:rgba(239,68,68,.08);color:#F87171;border:1px solid rgba(239,68,68,.18);border-radius:9px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--font-b)" onclick="deleteEvent(${e.id})">🗑️ Remover</button>
    </div>`;
    c.appendChild(d);
  });
}
function adminAddEvent(){
  const nome=document.getElementById('adm-nome').value.trim();
  const cat=document.getElementById('adm-cat').value;
  const sub=document.getElementById('adm-sub').value.trim();
  const city=document.getElementById('adm-city').value;
  const date=document.getElementById('adm-date').value;
  const local=document.getElementById('adm-local').value.trim();
  const desc=document.getElementById('adm-desc').value.trim();
  if(!nome||!cat||!sub||!city||!date||!local||!desc){toast('⚠️ Preencha todos os campos');return;}
  const bgs={'Música':'linear-gradient(135deg,#3B0764,#7C3AED)','Teatro':'linear-gradient(135deg,#064E3B,#059669)','Negócio':'linear-gradient(135deg,#78350F,#D97706)','Oficina':'linear-gradient(135deg,#831843,#EC4899)','Palestra':'linear-gradient(135deg,#1E3A5F,#2563EB)','Cultura':'linear-gradient(135deg,#4C1D95,#8B5CF6)'};
  const ems={'Música':'🎵','Teatro':'🎭','Negócio':'💼','Oficina':'🛠','Palestra':'🎤','Cultura':'🎨'};
  const newEv={id:EVENTS.length,name:nome,cat:cat,sub:sub,tag:cat.toLowerCase().includes('m')?'tag-m':'tag-p',em:ems[cat]||'🎪',bg:bgs[cat]||'linear-gradient(135deg,#3B0764,#7C3AED)',date:date,local:local,city:city,addr:local,desc:desc,pv:0,rating:0,rc:0,vagas:'🟢 Vagas disponíveis',verified:true,past:false,feat:false,photos:['🎪','🎉','✨','🌟','🎶'],tickets:[{n:'Gratuito',desc:'Reservar minha vaga',p:0}]};
  EVENTS.push(newEv);
  document.getElementById('adm-nome').value='';document.getElementById('adm-cat').value='';document.getElementById('adm-sub').value='';document.getElementById('adm-city').value='';document.getElementById('adm-date').value='';document.getElementById('adm-local').value='';document.getElementById('adm-desc').value='';
  toast('✅ Evento criado com sucesso!');
  renderEventsList();
}
function editEvent(id){
  const ev=EVENTS.find(e=>e.id===id);if(!ev)return;
  CUR_EV_EDIT=ev;
  const c=document.getElementById('events-list');c.innerHTML=`
  <div class="sec" style="padding:13px;background:var(--surf);border-radius:13px;margin:13px">
    <div style="font-weight:700;margin-bottom:13px">Editando: ${ev.name}</div>
    <div style="display:flex;flex-direction:column;gap:10px">
      <input type="text" id="edit-nome" value="${ev.name}" placeholder="Nome" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b)">
      <select id="edit-cat" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b)">
        <option value="Música" ${ev.cat==='Música'?'selected':''}>🎵 Música</option>
        <option value="Teatro" ${ev.cat==='Teatro'?'selected':''}>🎭 Teatro</option>
        <option value="Negócio" ${ev.cat==='Negócio'?'selected':''}>💼 Negócio</option>
        <option value="Oficina" ${ev.cat==='Oficina'?'selected':''}>🛠 Oficina</option>
        <option value="Palestra" ${ev.cat==='Palestra'?'selected':''}>🎤 Palestra</option>
        <option value="Cultura" ${ev.cat==='Cultura'?'selected':''}>🎨 Cultura</option>
      </select>
      <input type="text" id="edit-sub" value="${ev.sub}" placeholder="Subcategoria" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b)">
      <input type="date" id="edit-date" value="${ev.date}" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b)">
      <input type="text" id="edit-local" value="${ev.local}" placeholder="Local" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b)">
      <textarea id="edit-desc" placeholder="Descrição" style="padding:10px;border-radius:9px;border:1px solid var(--mut);font-family:var(--font-b);resize:vertical;min-height:80px">${ev.desc}</textarea>
      <div style="display:flex;gap:7px">
        <button onclick="saveEventEdit()" style="flex:1;padding:11px;background:linear-gradient(135deg,var(--prim),#FF6B35);color:white;border:none;border-radius:9px;font-weight:700;cursor:pointer;font-family:var(--font-b)">💾 Salvar</button>
        <button onclick="renderEventsList()" style="flex:1;padding:11px;background:var(--surf);color:var(--txt);border:1px solid var(--mut);border-radius:9px;font-weight:700;cursor:pointer;font-family:var(--font-b)">❌ Cancelar</button>
      </div>
    </div>
  </div>`;
}
function saveEventEdit(){
  if(!CUR_EV_EDIT)return;
  CUR_EV_EDIT.name=document.getElementById('edit-nome').value.trim();
  CUR_EV_EDIT.cat=document.getElementById('edit-cat').value;
  CUR_EV_EDIT.sub=document.getElementById('edit-sub').value.trim();
  CUR_EV_EDIT.date=document.getElementById('edit-date').value;
  CUR_EV_EDIT.local=document.getElementById('edit-local').value.trim();
  CUR_EV_EDIT.addr=CUR_EV_EDIT.local;
  CUR_EV_EDIT.desc=document.getElementById('edit-desc').value.trim();
  CUR_EV_EDIT=null;
  toast('✅ Evento atualizado!');
  renderEventsList();
}
function deleteEvent(id){
  if(!confirm('Tem certeza que deseja remover este evento?'))return;
  EVENTS=EVENTS.filter(e=>e.id!==id);
  toast('🗑️ Evento removido!');
  renderEventsList();
}
function createAdminAccount(){
  const user=document.getElementById('adm-user').value.trim();
  const email=document.getElementById('adm-email').value.trim();
  const name=document.getElementById('adm-name').value.trim();
  const pass=document.getElementById('adm-pass').value;
  if(!user||!email||!name||!pass){toast('⚠️ Preencha todos os campos');return;}
  if(REGISTERED_USERS.find(a=>a.username.toLowerCase()===user.toLowerCase())){toast('⚠️ Usuário já existe');return;}
  if(REGISTERED_USERS.find(a=>a.email.toLowerCase()===email.toLowerCase())){toast('⚠️ E-mail já cadastrado');return;}
  REGISTERED_USERS.push({email:email.toLowerCase(),username:user,pass:pass,name:name,role:'Administrador',isAdmin:true});
  document.getElementById('adm-user').value='';
  document.getElementById('adm-email').value='';
  document.getElementById('adm-name').value='';
  document.getElementById('adm-pass').value='';
  toast('✅ Conta admin criada com sucesso!');
  renderAdminsList();
}
function renderAdminsList(){
  const c=document.getElementById('admins-list');c.innerHTML='';
  const admins=REGISTERED_USERS.filter(u=>u.isAdmin);
  if(!admins.length){c.innerHTML='<div class="empty-state"><div class="em">User</div>Nenhum admin cadastrado.</div>';return;}
  admins.forEach(a=>{
    const d=document.createElement('div');d.className='admin-card';
    d.innerHTML='<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px"><div><div style="font-weight:700;font-size:12px;margin-bottom:2px">'+a.username+'</div><div style="font-size:10px;color:var(--mut)">'+a.name+'</div><div style="font-size:10px;color:var(--mut)">'+a.email+'</div></div></div><div style="display:flex;gap:7px"><button style="flex:1;padding:8px;background:rgba(239,68,68,.08);color:#F87171;border:1px solid rgba(239,68,68,.18);border-radius:9px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--font-b)" onclick="deleteAdminAccount(\\''+a.username+'\\')">Remover</button></div>';\n    c.appendChild(d);\n  });\n}\nfunction deleteAdminAccount(username){\n  if(!confirm('Tem certeza? Esta ação não pode ser desfeita!'))return;\n  if(USER.username===username){toast('Voce nao pode deletar sua propria conta');return;}\n  REGISTERED_USERS=REGISTERED_USERS.filter(u=>u.username!==username);\n  toast('Admin removido!');\n  renderAdminsList();\n}