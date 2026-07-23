const DUAS_DATA=[
  {cat:"أدعية الأنبياء",icon:"fas fa-user-tie",color:"#0A3D2E",items:[
    {text:"رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي",source:"إبراهيم عليه السلام - القرآن"},
    {text:"رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",source:"موسى عليه السلام - القرآن"},
    {text:"لَا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",source:"يونس عليه السلام - القرآن"}
  ]},
  {cat:"أدعية من القرآن",icon:"fas fa-quran",color:"#C8A84E",items:[
    {text:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",source:"البقرة 201"},
    {text:"رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",source:"آل عمران 8"},
    {text:"رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",source:"الأعراف 23"}
  ]},
  {cat:"أدعية الصباح",icon:"fas fa-sun",color:"#F59E0B",items:[
    {text:"أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ",source:"أحمد"},
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى",source:"مسلم"}
  ]},
  {cat:"أدعية المساء",icon:"fas fa-moon",color:"#6366F1",items:[
    {text:"اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ",source:"أبو داود"},
    {text:"اللَّهُمَّ عَافِنِي فِي بَدَنِي",source:"أبو داود"}
  ]},
  {cat:"أدعية النوم",icon:"fas fa-bed",color:"#8B5CF6",items:[
    {text:"اللَّهُمَّ بِاسْمِكَ أَمُوتُ وَأَحْيَا",source:"البخاري"},
    {text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",source:"أبو داود"}
  ]},
  {cat:"أدعية الاستيقاظ",icon:"fas fa-cloud-sun",color:"#F59E0B",items:[
    {text:"الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",source:"البخاري"}
  ]},
  {cat:"أدعية بعد الصلاة",icon:"fas fa-mosque",color:"#10B981",items:[
    {text:"اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",source:"أبو داود"},
    {text:"اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",source:"مسلم")
  ]},
  {cat:"أدعية الحج والعمرة",icon:"fas fa-kaaba",color:"#0A3D2E",items:[
    {text:"لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ",source:"متفق عليه"}
  ]},
  {cat:"أدعية السفر",icon:"fas fa-plane",color:"#3B82F6",items:[
    {text:"اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا الْبِرَّ وَالتَّقْوَى",source:"مسلم")
  ]},
  {cat:"أدعية دخول المنزل",icon:"fas fa-home",color:"#EC4899",items:[
    {text:"بِسْمِ اللَّهِ وَلَجْنَا",source:"أبو داود")
  ]},
  {cat:"أدعية الخروج من المنزل",icon:"fas fa-door-open",color:"#EC4899",items:[
    {text:"بِسْمِ اللَّهِ، تَوَكَّلْتُ عَلَى اللَّهِ",source:"أبو داود")
  ]},
  {cat:"أدعية الطعام والشراب",icon:"fas fa-utensils",color:"#F97316",items:[
    {text:"اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا",source:"أبو داود")
  ]},
  {cat:"أدعية الرزق",icon:"fas fa-hand-holding-dollar",color:"#10B981",items:[
    {text:"اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ",source:"ترمذي")
  ]},
  {cat:"أدعية الزواج",icon:"fas fa-heart",color:"#EF4444",items:[
    {text:"اللَّهُمَّ ارْزُقْنِي زَوْجًا صَالِحًا",source:"دعاء مستحب")
  ]},
  {cat:"أدعية للوالدين",icon:"fas fa-person-cane",color:"#6B7280",items:[
    {text:"رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ",source:"القرآن")
  ]},
  {cat:"أدعية للأبناء",icon:"fas fa-child",color:"#F59E0B",items:[
    {text:"رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً",source:"القرآن")
  ]},
  {cat:"أدعية طلب العلم",icon:"fas fa-book",color:"#3B82F6",items:[
    {text:"اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي",source:"دعاء مستحب")
  ]},
  {cat:"أدعية الشفاء",icon:"fas fa-heart-pulse",color:"#EF4444",items:[
    {text:"اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ الْبَأْسَ",source:"البخاري")
  ]},
  {cat:"أدعية المطر",icon:"fas fa-cloud-rain",color:"#6366F1",items:[
    {text:"اللَّهُمَّ صَيِّبًا نَافِعًا",source:"البخاري")
  ]},
  {cat:"أدعية الاستخارة",icon:"fas fa-hands-praying",color:"#C8A84E",items:[
    {text:"اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ",source:"البخاري")
  ]},
  {cat:"أدعية التوبة والاستغفار",icon:"fas fa-hand-holding-heart",color:"#0A3D2E",items:[
    {text:"اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا",source:"البخاري")
  ]},
  {cat:"أدعية الكرب والهم والحزن",icon:"fas fa-face-sad-tear",color:"#6B7280",items:[
    {text:"لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",source:"الترمذي"),
    {text:"اللَّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ",source:"أحمد")
  ]},
  {cat:"أدعية الحفظ من العين والحسد",icon:"fas fa-eye",color:"#8B5CF6",items:[
    {text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ",source:"أبو داود")
  ]},
  {cat:"أدعية عامة",icon:"fas fa-hands",color:"#EF4444",items:[
    {text:"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً",source:"القرآن")
  ]},
  {cat:"أدعية للميت",icon:"fas fa-monument",color:"#0A3D2E",items:[
    {text:"اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ",source:"مسلم - قبل الدفن"),
    {text:"بِسْمِ اللَّهِ، وَعَلَى مِلَّةِ رَسُولِ اللَّهِ",source:"أبو داود - أثناء الدفن"),
    {text:"اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ، وَلَا تَفْتِنَّا بَعْدَهُ",source:"البخاري - بعد الدفن"),
    {text:"السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ",source:"مسلم - زيارة القبور"),
    {text:"اللَّهُمَّ اغْفِرْ لِأَبِي وَأُمِّي",source:"دعاء للوالدين المتوفين"),
    {text:"اللَّهُمَّ ارْحَمْ أَجْدَادِي وَأَجْدَادَاتِي",source:"دعاء للأجداد"),
    {text:"اللَّهُمَّ اغْفِرْ لِأَخِي وَارْفَعْ دَرَجَتَهُ",source:"دعاء للأصدقاء المتوفين"),
    {text:"اللَّهُمَّ اجْعَلْهُ فَرَطًا وَذُخْرًا لِوَالِدَيْهِ",source:"دعاء للأطفال المتوفين"),
    {text:"اللَّهُمَّ اغْفِرْ لِمَوْتَانَا وَمَوْتَى الْمُسْلِمِينَ",source:"دعاء لجميع موتى المسلمين"),
    {text:"اللَّهُمَّ أَدْخِلْهُ رَحْمَتَكَ وَجَنَّتَكَ",source:"أدعية الرحمة"),
    {text:"اللَّهُمَّ تَجَاوَزْ عَنْ سَيِّئَاتِهِ",source:"أدعية المغفرة"),
    {text:"اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ",source:"أدعية التثبيت"),
    {text:"اللَّهُمَّ ارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ",source:"أدعية رفع الدرجات"),
    {text:"اللَّهُمَّ اجْعَلْ قَبْرَهُ رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ",source:"أدعية نور القبر"),
    {text:"اللَّهُمَّ نَجِّهِ مِنْ عَذَابِ الْقَبْرِ",source:"أدعية النجاة"),
    {text:"اللَّهُمَّ بَدِّلْهُ دَارًا خَيْرًا مِنْ دَارِهِ",source:"مسلم - مستحبة للميت")
  ]}
];

function buildDuaCategories(){
  const c=document.getElementById('dua-categories-view');
  c.innerHTML='';
  DUAS_DATA.forEach((cat,i)=>{
    const div=document.createElement('div');
    div.className='azkar-cat'; // Reusing azkar-cat style for consistency
    div.innerHTML=`<i class="${cat.icon}" style="color:${cat.color}"></i><h4>${cat.cat}</h4>`;
    div.onclick=()=>{state.duaSubView=i;buildDuaList();};
    c.appendChild(div);
  });
}

function buildDuaList(){
  const catView=document.getElementById('dua-categories-view');
  const listView=document.getElementById('dua-list-view');
  catView.style.display='none';
  listView.style.display='block';
  const cat=DUAS_DATA[state.duaSubView];
  let html=`<button class="back-btn" onclick="backToDuaCats()"><i class="fas fa-arrow-right"></i> الأقسام</button><h3 style="margin:16px 0;color:var(--primary)"><i class="${cat.icon}"></i> ${cat.cat}</h3>`;
  cat.items.forEach((item,i)=>{
    const id = `dua_${state.duaSubView}_${i}`;
    const isFav = state.duaFavorites.includes(id);
    html+=`<div class="dua-item">
      <div class="dua-text">${item.text}</div>
      <span class="dua-source">المصدر: ${item.source}</span>
      <div class="dua-actions">
        <button onclick="copyContent('${item.text.replace(/'/g, "\\'")}')"><i class="fas fa-copy"></i> نسخ</button>
        <button onclick="shareContent('${item.text.replace(/'/g, "\\'")}')"><i class="fas fa-share-nodes"></i> مشاركة</button>
        <button class="fav-btn ${isFav?'active':''}" onclick="toggleFav(this, '${id}', 'hidaya_dua_fav')"><i class="fas fa-heart"></i></button>
      </div>
    </div>`;
  });
  listView.innerHTML=html;
}

function backToDuaCats(){
  document.getElementById('dua-categories-view').style.display='';
  document.getElementById('dua-list-view').style.display='none';
}