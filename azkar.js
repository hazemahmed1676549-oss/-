const AZKAR_DATA=[
  {cat:"أذكار الصباح",icon:"fas fa-sun",color:"#F59E0B",items:[
    {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ",count:1,source:"مسلم"},
    {text:"اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا",count:1,source:"ترمذي"},
    {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",count:100,source:"البخاري"},
    {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ",count:3,source:"أبو داود"}
  ]},
  {cat:"أذكار المساء",icon:"fas fa-moon",color:"#6366F1",items:[
    {text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ",count:1,source:"مسلم"},
    {text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",count:3,source:"مسلم"},
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",count:1,source:"ترمذي"}
  ]},
  {cat:"أذكار النوم",icon:"fas fa-bed",color:"#8B5CF6",items:[
    {text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",count:1,source:"البخاري"},
    {text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",count:3,source:"أبو داود"}
  ]},
  {cat:"أذكار الاستيقاظ",icon:"fas fa-cloud-sun",color:"#F59E0B",items:[
    {text:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",count:1,source:"البخاري"}
  ]},
  {cat:"أذكار بعد الصلاة",icon:"fas fa-mosque",color:"#10B981",items:[
    {text:"أَسْتَغْفِرُ اللَّهَ",count:3,source:"مسلم"},
    {text:"اللَّهُمَّ أَنْتَ السَّلَامُ",count:1,source:"مسلم"},
    {text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",count:1,source:"مسلم"}
  ]},
  {cat:"أذكار الوضوء",icon:"fas fa-water",color:"#3B82F6",items:[
    {text:"بِسْمِ اللَّهِ",count:1,source:"أبو داود"},
    {text:"أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",count:1,source:"مسلم"}
  ]},
  {cat:"أذكار دخول المسجد",icon:"fas fa-door-open",color:"#10B981",items:[
    {text:"اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ",count:1,source:"مسلم"}
  ]},
  {cat:"أذكار الخروج من المسجد",icon:"fas fa-door-closed",color:"#10B981",items:[
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ",count:1,source:"مسلم"}
  ]},
  {cat:"أذكار دخول المنزل",icon:"fas fa-home",color:"#EC4899",items:[
    {text:"بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى رَبِّنَا تَوَكَّلْنَا",count:1,source:"أبو داود"}
  ]},
  {cat:"أذكار الخروج من المنزل",icon:"fas fa-door-open",color:"#EC4899",items:[
    {text:"بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",count:1,source:"أبو داود"}
  ]},
  {cat:"أذكار الطعام",icon:"fas fa-utensils",color:"#F97316",items:[
    {text:"بِسْمِ اللَّهِ",count:1,source:"أبو داود"},
    {text:"الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا",count:1,source:"أبو داود"}
  ]},
  {cat:"أذكار السفر",icon:"fas fa-plane",color:"#3B82F6",items:[
    {text:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",count:1,source:"زخرف"}
  ]},
  {cat:"أذكار المطر",icon:"fas fa-cloud-rain",color:"#6366F1",items:[
    {text:"اللَّهُمَّ صَيِّبًا نَافِعًا",count:1,source:"البخاري"}
  ]},
  {cat:"أذكار الرياح",icon:"fas fa-wind",color:"#6366F1",items:[
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَأَعُوذُ بِكَ مِنْ شَرِّهَا",count:1,source:"أبو داود"}
  ]},
  {cat:"أذكار الرعد",icon:"fas fa-bolt",color:"#F59E0B",items:[
    {text:"سُبْحَانَ الَّذِي يُسَبِّحُ الرَّعْدُ بِحَمْدِهِ وَالْمَلَائِكَةُ مِنْ خِيفَتِهِ",count:1,source:"البخاري"}
  ]},
  {cat:"أذكار المقابر",icon:"fas fa-monument",color:"#6B7280",items:[
    {text:"السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ",count:1,source:"مسلم"}
  ]},
  {cat:"أذكار الاستغفار",icon:"fas fa-hand-holding-heart",color:"#0A3D2E",items:[
    {text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",count:100,source:"البخاري"},
    {text:"رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ",count:100,source:"مسلم"}
  ]},
  {cat:"أذكار عامة",icon:"fas fa-heart",color:"#EF4444",items:[
    {text:"لَا إِلَهَ إِلَّا اللَّهُ",count:100,source:"البخاري"},
    {text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",count:100,source:"البخاري"}
  ]}
];

function buildAzkarCategories(){
  const c=document.getElementById('azkar-categories-view');
  c.innerHTML='';
  AZKAR_DATA.forEach((cat,i)=>{
    const div=document.createElement('div');
    div.className='azkar-cat';
    div.innerHTML=`<i class="${cat.icon}" style="color:${cat.color}"></i><h4>${cat.cat}</h4>`;
    div.onclick=()=>{state.azkarSubView=i;buildAzkarList();};
    c.appendChild(div);
  });
}

function buildAzkarList(){
  const catView=document.getElementById('azkar-categories-view');
  const listView=document.getElementById('azkar-list-view');
  catView.style.display='none';
  listView.style.display='block';
  const cat=AZKAR_DATA[state.azkarSubView];
  let html=`<button class="back-btn" onclick="backToAzkarCats()"><i class="fas fa-arrow-right"></i> الأقسام</button><h3 style="margin:16px 0;color:var(--primary)"><i class="${cat.icon}"></i> ${cat.cat}</h3>`;
  cat.items.forEach((item,i)=>{
    const key=`azkar_${state.azkarSubView}_${i}`;
    const saved=state.azkarProgress[key]||0;
    const done=saved>=item.count;
    html+=`<div class="azkar-item">
      <div class="azkar-text">${item.text}</div>
      <div style="font-size:12px;color:var(--muted);margin-bottom:8px">المصدر: ${item.source} | التكرار: ${item.count}</div>
      <div class="azkar-count-area">
        <span class="count-display" id="cd_${key}">${done?'✅':item.count-saved}</span>
        <button class="count-btn ${done?'count-done':''}" id="cb_${key}" onclick="countAzkar('${key}',${item.count})" ${done?'disabled':''}><i class="fas ${done?'fa-check':'fa-plus'}"></i></button>
      </div>
    </div>`;
  });
  listView.innerHTML=html;
}

function backToAzkarCats(){
  document.getElementById('azkar-categories-view').style.display='';
  document.getElementById('azkar-list-view').style.display='none';
}

function countAzkar(key,max){
  const curr=(state.azkarProgress[key]||0)+1;
  state.azkarProgress[key]=curr;
  localStorage.setItem('hidaya_azkar',JSON.stringify(state.azkarProgress));
  if(curr>=max){
    document.getElementById('cb_'+key).classList.add('count-done');
    document.getElementById('cb_'+key).innerHTML='<i class="fas fa-check"></i>';
    document.getElementById('cb_'+key).disabled=true;
    document.getElementById('cd_'+key).textContent='✅';
    showToast('تم إكمال الذكر ✅');
  }else{
    document.getElementById('cd_'+key).textContent=max-curr;
  }
}