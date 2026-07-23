<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
<title>هداية - منصة إسلامية متكاملة</title>
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Cairo:wght@300;400;600;700;900&family=Reem+Kufi:wght@400;700&family=Aref+Ruqaa:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root{--bg:#FFF9F0;--fg:#1A1A2E;--primary:#0A3D2E;--primary-l:#1B6B4A;--gold:#C8A84E;--gold-l:#E8D5A0;--accent:#D4A843;--card:#FFFFFF;--border:#E0D5C0;--muted:#7A7060;--shadow:0 4px 20px rgba(0,0,0,0.08);--radius:16px;--font-size:18px}
.dark{--bg:#0D1117;--fg:#E6E1D6;--primary:#1B6B4A;--primary-l:#2A8B5A;--gold:#D4A843;--gold-l:#A08030;--card:#161B22;--border:#2A3040;--muted:#8B949E;--shadow:0 4px 20px rgba(0,0,0,0.3)}
*{margin:0;padding:0;box-sizing:border-box;-webkit-tap-highlight-color:transparent}
body{font-family:'Cairo',sans-serif;background:var(--bg);color:var(--fg);font-size:var(--font-size);overflow-x:hidden;transition:background .4s,color .4s;padding-bottom:160px}
body[dir="ltr"]{font-family:'Poppins',sans-serif}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--gold);border-radius:3px}
.amiri{font-family:'Amiri',serif}.reem{font-family:'Reem Kufi',sans-serif}button{font-family:inherit}input,select{font-family:inherit}

#splash{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;flex-direction:column;overflow:hidden;transition:all 1.2s cubic-bezier(.4,0,.2,1)}
#splash.shrink{transform:scale(0);opacity:0;border-radius:50%}
.sky-bg{position:absolute;inset:0;background:linear-gradient(180deg,#0A0E27 0%,#1A1A3E 20%,#2D4A7A 45%,#D4783C 70%,#F0C060 90%,#FFE4A0 100%)}
.stars{position:absolute;inset:0;overflow:hidden}.star{position:absolute;background:#fff;border-radius:50%;animation:twinkle 3s infinite alternate}
@keyframes twinkle{0%{opacity:.2;transform:scale(.8)}100%{opacity:1;transform:scale(1.2)}}
.sun{position:absolute;bottom:25%;left:50%;transform:translateX(-50%);width:120px;height:120px;background:radial-gradient(circle,#FFF8DC,#FFD700 40%,#FF8C00 70%,transparent 100%);border-radius:50%;animation:sunRise 3s ease-out forwards;opacity:0}
@keyframes sunRise{0%{opacity:0;transform:translateX(-50%) translateY(80px)}100%{opacity:1;transform:translateX(-50%) translateY(0)}}
.mountain{position:absolute;bottom:0;width:100%;height:30%;background:linear-gradient(180deg,#1A3020,#0D1A10);clip-path:polygon(0 100%,0 60%,5% 55%,12% 40%,20% 50%,28% 35%,35% 45%,42% 30%,50% 40%,58% 25%,65% 38%,72% 28%,80% 42%,88% 32%,95% 48%,100% 55%,100% 100%)}
.mosque-silhouette{position:absolute;bottom:0;opacity:0;animation:fadeUp 2s ease forwards}.mosque-silhouette.left{left:5%;animation-delay:1s}.mosque-silhouette.right{right:5%;animation-delay:1.3s}
@keyframes fadeUp{0%{opacity:0;transform:translateY(30px)}100%{opacity:1;transform:translateY(0)}}
.splash-title{position:absolute;opacity:0;animation:titleReveal 2s ease 1.8s forwards;z-index:10;text-align:center}
@keyframes titleReveal{0%{opacity:0;transform:scale(.5)}50%{opacity:1;transform:scale(1.1)}100%{opacity:1;transform:scale(1)}}
.splash-title h1{font-family:'Reem Kufi';font-size:clamp(60px,12vw,120px);color:#FFD700;text-shadow:0 0 40px rgba(255,215,0,.5),0 0 80px rgba(255,215,0,.2);letter-spacing:8px}
.splash-subtitle{font-family:'Amiri';font-size:clamp(14px,3vw,22px);color:#FFE4A0;text-align:center;margin-top:10px;opacity:0;animation:fadeIn 1.5s ease 2.5s forwards}
@keyframes fadeIn{to{opacity:1}}

#dua-overlay{position:fixed;inset:0;z-index:8888;background:rgba(0,0,0,.6);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:all .5s;padding:20px}
#dua-overlay.show{opacity:1;pointer-events:auto}
.dua-card{background:linear-gradient(135deg,#0A3D2E,#1B5B4A);border:2px solid var(--gold);border-radius:20px;padding:40px 30px;max-width:500px;width:100%;text-align:center;position:relative;overflow:hidden;animation:duaIn .8s ease forwards;transform:scale(.8)}
@keyframes duaIn{to{transform:scale(1)}}
.dua-card p{font-family:'Amiri',serif;color:#FFE4A0;font-size:clamp(16px,3.5vw,22px);line-height:2.2;margin:20px 0}
.dua-close{margin-top:20px;padding:10px 40px;background:var(--gold);color:#0A3D2E;border:none;border-radius:30px;font-size:16px;font-weight:700;cursor:pointer;transition:all .3s}
.dua-close:hover{transform:scale(1.05);box-shadow:0 4px 15px rgba(200,168,78,.4)}
.ornament{display:flex;align-items:center;justify-content:center;gap:8px;color:var(--gold);opacity:.6}.ornament span{height:1px;width:40px;background:var(--gold)}

#app{display:none;min-height:100vh}#app.show{display:block;animation:appIn .8s ease forwards}@keyframes appIn{from{opacity:0}to{opacity:1}}
.app-header{position:relative;overflow:hidden;border-radius:0 0 30px 30px;background:linear-gradient(135deg,#0A3D2E,#1B5B4A);min-height:220px;display:flex;align-items:center;justify-content:center}
.header-bg{position:absolute;inset:0;background:url('https://tofatkha.com/wp-content/uploads/2021/11/Prophets-Mosque-Madinah.jpg') center/cover;opacity:.25}
.header-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,61,46,.7),rgba(10,61,46,.95))}
.header-content{position:relative;z-index:2;padding:30px 20px 25px;text-align:center;width:100%}
.header-controls{position:absolute;top:20px;right:20px;display:flex;gap:10px;z-index:10}
.lang-switcher{background:rgba(255,255,255,0.1);border:1px solid var(--gold);color:var(--gold);padding:6px 12px;border-radius:20px;cursor:pointer;font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px;backdrop-filter:blur(4px)}
.header-content h1{font-family:'Reem Kufi';font-size:42px;color:var(--gold);text-shadow:0 2px 15px rgba(200,168,78,.3)}
.header-content p{color:var(--gold-l);font-size:14px;margin-top:4px}
.header-ornament{display:flex;align-items:center;justify-content:center;gap:10px;margin:12px 0}
.header-ornament span{height:1px;width:60px;background:linear-gradient(90deg,transparent,var(--gold),transparent)}.header-ornament i{color:var(--gold);font-size:12px}

.bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:1000;background:var(--card);border-top:1px solid var(--border);display:flex;justify-content:space-around;align-items:center;padding:8px 0 12px;box-shadow:0 -4px 20px rgba(0,0,0,.08);transition:background .4s}
.nav-item{display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 10px;cursor:pointer;color:var(--muted);transition:all .3s;border:none;background:none;font-size:11px;font-weight:600}
.nav-item i{font-size:22px;transition:all .3s}.nav-item.active{color:var(--gold)}.nav-item.active i{transform:scale(1.15)}

.section{display:none;padding:20px;max-width:900px;margin:0 auto;animation:secIn .5s ease}.section.active{display:block}@keyframes secIn{from{opacity:0;transform:translateY(15px)}to{opacity:1;transform:translateY(0)}}
.card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;box-shadow:var(--shadow);transition:all .3s;cursor:pointer}.card:hover{transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,0,0,.12)}.card:active{transform:scale(.98)}
.features-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:14px;margin-top:20px}
.feature-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:24px 16px;text-align:center;cursor:pointer;transition:all .3s}.feature-card:hover{transform:translateY(-4px);box-shadow:0 8px 25px rgba(0,0,0,.1)}
.feature-card i{font-size:36px;margin-bottom:10px;display:block}.feature-card h3{font-size:15px;font-weight:700;margin-bottom:4px}.feature-card.green i{color:#1B6B4A}.feature-card.gold i{color:var(--gold)}.feature-card.blue i{color:#2D7DD2}.feature-card.purple i{color:#7B4BBE}
.section-title{font-family:'Reem Kufi';font-size:28px;color:var(--primary);margin-bottom:20px;display:flex;align-items:center;gap:12px}.section-title i{color:var(--gold)}

.surah-item{display:flex;align-items:center;gap:14px;padding:14px 16px;background:var(--card);border:1px solid var(--border);border-radius:12px;margin-bottom:10px;cursor:pointer;transition:all .3s}.surah-item:hover{background:var(--primary);color:#fff;border-color:var(--primary)}.surah-item:hover .surah-meta{color:rgba(255,255,255,.7)}.surah-item:hover .surah-num{background:var(--gold);color:var(--primary)}
.surah-num{width:42px;height:42px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--primary),var(--primary-l));color:#fff;border-radius:10px;font-weight:700;font-size:14px;flex-shrink:0;transition:.3s}
.surah-info{flex:1}.surah-info h4{font-size:16px;font-weight:700}.surah-meta{display:flex;gap:10px;font-size:12px;color:var(--muted);margin-top:2px;transition:.3s}.surah-type{padding:2px 8px;border-radius:6px;font-size:11px;font-weight:600}.surah-type.makki{background:#FEF3C7;color:#92400E}.surah-type.madani{background:#DBEAFE;color:#1E40AF}.surah-item:hover .surah-type.makki,.surah-item:hover .surah-type.madani{background:rgba(255,255,255,.2);color:#fff}

.ayah-container{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:30px 24px;margin-bottom:20px;line-height:2.4;text-align:justify;font-family:'Amiri',serif}
.ayah{display:inline;transition:background .3s;padding:2px 4px;border-radius:4px;cursor:pointer}.ayah:hover{background:rgba(200,168,78,.15)}
.ayah-num{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;background:var(--gold);color:#fff;border-radius:50%;font-size:12px;font-family:'Cairo';margin:0 4px;vertical-align:middle;font-weight:700}
.bismillah{text-align:center;font-family:'Amiri',serif;font-size:28px;color:var(--primary);margin-bottom:20px}
.tafsir-box{background:var(--bg);border-right:4px solid var(--primary-l);padding:15px;margin-top:10px;border-radius:8px;font-family:'Cairo';font-size:15px;display:none}
.tafsir-btn{background:var(--primary-l);color:#fff;border:none;padding:5px 12px;border-radius:8px;font-size:12px;cursor:pointer;margin-top:10px}

.juz-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:12px}.juz-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;text-align:center;cursor:pointer;transition:all .3s}.juz-card:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,.1)}.juz-card .juz-num{font-size:32px;font-weight:900;color:var(--primary);font-family:'Reem Kufi'}.juz-card .juz-name{font-size:13px;color:var(--muted);margin:4px 0}.juz-progress{height:4px;background:var(--border);border-radius:2px;margin-top:8px;overflow:hidden}.juz-progress-fill{height:100%;background:linear-gradient(90deg,var(--primary-l),var(--gold));border-radius:2px;transition:width .5s}

.khatma-card{background:linear-gradient(135deg,var(--primary),var(--primary-l));color:#fff;border-radius:20px;padding:24px;margin-bottom:16px;position:relative;overflow:hidden}.khatma-progress{height:8px;background:rgba(255,255,255,.2);border-radius:4px;margin:16px 0;overflow:hidden}.khatma-progress-fill{height:100%;background:var(--gold);border-radius:4px;transition:width .5s}.khatma-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.khatma-stat{text-align:center;padding:10px;background:rgba(255,255,255,.1);border-radius:10px}.khatma-stat .num{font-size:24px;font-weight:800;color:var(--gold)}.khatma-stat .label{font-size:11px;opacity:.8}

.hadith-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:14px;transition:all .3s}.hadith-text{font-family:'Amiri',serif;font-size:19px;line-height:2.2;color:var(--fg);margin-bottom:14px;border-right:3px solid var(--gold);padding-right:16px}.hadith-meta{display:flex;flex-wrap:wrap;gap:8px;font-size:13px;align-items:center}.hadith-tag{padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600}.hadith-tag.sahih{background:#D1FAE5;color:#065F46}.hadith-tag.hasan{background:#FEF3C7;color:#92400E}.hadith-source{color:var(--muted);font-size:13px;margin-top:6px;flex-grow:1}.share-btn{background:var(--primary);color:#fff;border:none;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:12px;margin-right:auto}

.azkar-categories{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-bottom:20px}.azkar-cat{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px 14px;text-align:center;cursor:pointer;transition:all .3s}.azkar-cat:hover{transform:translateY(-3px);box-shadow:0 6px 20px rgba(0,0,0,.1)}.azkar-cat i{font-size:30px;margin-bottom:8px;display:block}.azkar-cat h4{font-size:14px;font-weight:700}
.azkar-item{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:12px;transition:all .3s}.azkar-text{font-family:'Amiri',serif;font-size:18px;line-height:2;margin-bottom:12px}.azkar-count-area{display:flex;align-items:center;justify-content:space-between;gap:12px}
.count-btn{width:50px;height:50px;border-radius:50%;border:2px solid var(--gold);background:transparent;color:var(--gold);font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s;font-family:'Cairo'}.count-btn:hover{background:var(--gold);color:#fff}.count-display{font-size:28px;font-weight:800;color:var(--primary);min-width:40px;text-align:center}.count-done{background:var(--primary)!important;color:#fff!important;border-color:var(--primary)!important}

.dua-item{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:12px;transition:all .3s}
.dua-text{font-family:'Amiri',serif;font-size:19px;line-height:2.2;color:var(--fg);margin-bottom:10px;border-right:3px solid var(--gold);padding-right:16px}
.dua-source{font-size:13px;color:var(--muted);margin-bottom:10px}
.dua-meaning{background:var(--bg);padding:10px;border-radius:8px;font-size:14px;color:var(--primary);margin-bottom:15px}
.dua-actions{display:flex;gap:8px;flex-wrap:wrap}
.dua-actions button{padding:6px 14px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-size:13px;color:var(--fg);display:flex;align-items:center;gap:6px}
.dua-actions button:hover{background:var(--primary);color:#fff;border-color:var(--primary)}

.prayer-hero{background:linear-gradient(135deg,#0A3D2E,#1B5B4A);border-radius:20px;padding:24px;color:#fff;text-align:center;margin-bottom:20px;position:relative;overflow:hidden}.prayer-time-big{font-size:48px;font-weight:900;color:var(--gold);font-family:'Reem Kufi'}.prayer-next{font-size:16px;color:var(--gold-l);margin-top:4px}.prayer-countdown{font-size:32px;font-weight:700;color:#fff;margin-top:8px}.prayer-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px}.prayer-item{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center;transition:all .3s}.prayer-item.active-prayer{border-color:var(--gold);background:var(--primary);color:#fff}.prayer-item .prayer-name{font-size:14px;margin-bottom:4px}.prayer-item .prayer-time-val{font-size:20px;font-weight:700;color:var(--primary)}.prayer-item.active-prayer .prayer-time-val{color:var(--gold)}.hijri-date{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:16px;margin-bottom:16px;text-align:center}

.setting-item{display:flex;align-items:center;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}.toggle{width:52px;height:28px;background:var(--border);border-radius:14px;position:relative;cursor:pointer;transition:all .3s;flex-shrink:0}.toggle.on{background:var(--primary-l)}.toggle::after{content:'';position:absolute;top:3px;right:3px;width:22px;height:22px;background:#fff;border-radius:50%;transition:all .3s;box-shadow:0 2px 4px rgba(0,0,0,.15)}.toggle.on::after{right:27px}
.search-box{position:relative;margin-bottom:16px}.search-box input{width:100%;padding:14px 20px 14px 44px;border:2px solid var(--border);border-radius:14px;background:var(--card);color:var(--fg);font-size:15px;transition:all .3s;outline:none}.search-box input:focus{border-color:var(--gold);box-shadow:0 0 0 3px rgba(200,168,78,.15)}.search-box i{position:absolute;left:16px;top:50%;transform:translateY(-50%);color:var(--muted)}
.back-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:var(--card);border:1px solid var(--border);border-radius:10px;cursor:pointer;font-size:14px;color:var(--fg);transition:all .3s;margin-bottom:16px}.filter-pills{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}.pill{padding:8px 18px;border-radius:20px;border:1px solid var(--border);background:var(--card);font-size:13px;font-weight:600;cursor:pointer;transition:all .3s;color:var(--fg)}.pill.active{background:var(--primary);color:#fff;border-color:var(--primary)}.toolbar{display:flex;align-items:center;gap:10px;margin-bottom:16px;flex-wrap:wrap}
.toast{position:fixed;top:20px;left:50%;transform:translateX(-50%) translateY(-100px);background:var(--primary);color:#fff;padding:14px 28px;border-radius:12px;font-size:14px;z-index:9999;transition:all .5s;box-shadow:0 8px 25px rgba(0,0,0,.2)}.toast.show{transform:translateX(-50%) translateY(0)}.page-nav{display:flex;justify-content:space-between;gap:10px;margin-top:16px}.page-nav button{flex:1;padding:12px;border-radius:12px;border:1px solid var(--border);background:var(--card);font-size:14px;cursor:pointer;transition:all .3s;color:var(--fg)}.page-nav button:hover{background:var(--primary);color:#fff;border-color:var(--primary)}

.tasbih-counter{text-align:center;padding:30px;background:var(--card);border-radius:20px;box-shadow:var(--shadow);margin-bottom:20px}
.tasbih-display{font-size:80px;font-weight:900;color:var(--primary);font-family:'Reem Kufi';margin:20px 0}
.tasbih-btn{width:120px;height:120px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-l));color:#fff;border:none;font-size:24px;cursor:pointer;box-shadow:0 8px 20px rgba(10,61,46,.3);transition:all .2s}
.tasbih-btn:active{transform:scale(0.95)}
.tasbih-controls{display:flex;justify-content:center;gap:10px;margin-top:20px}
.tasbih-controls button{padding:10px 20px;border-radius:12px;border:1px solid var(--border);background:var(--card);cursor:pointer;color:var(--fg)}
.tasbih-pills{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:20px}

.story-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:16px;cursor:pointer;transition:all .3s}
.story-card h3{color:var(--primary);margin-bottom:8px;display:flex;align-items:center;gap:10px}
.story-content{display:none;margin-top:15px;border-top:1px solid var(--border);padding-top:15px}
.story-content.show{display:block}

/* Audio Library Styles */
.reciter-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;margin-top:20px}
.reciter-card{background:var(--card);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;transition:all .3s;cursor:pointer;position:relative}
.reciter-card:hover{transform:translateY(-5px);box-shadow:0 8px 25px rgba(0,0,0,.1);border-color:var(--gold)}
.reciter-img-container{position:relative;width:100%;height:220px;overflow:hidden}
.reciter-img-container img{width:100%;height:100%;object-fit:cover;transition:transform .3s}
.reciter-card:hover .reciter-img-container img{transform:scale(1.05)}
.reciter-play-overlay{position:absolute;inset:0;background:rgba(10,61,46,0.6);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s}
.reciter-card:hover .reciter-play-overlay{opacity:1}
.reciter-play-overlay i{font-size:50px;color:var(--gold)}
.reciter-info{padding:15px;text-align:center}
.reciter-info h4{font-size:16px;font-weight:700;color:var(--primary);margin-bottom:5px}

/* Sticky Audio Player */
.sticky-player{position:fixed;bottom:65px;left:0;right:0;background:var(--card);border-top:1px solid var(--border);padding:12px 20px;box-shadow:0 -4px 20px rgba(0,0,0,.1);z-index:999;transform:translateY(200%);transition:transform .4s ease;display:flex;align-items:center;gap:15px}
.sticky-player.show{transform:translateY(0)}
.sp-img{width:50px;height:50px;border-radius:8px;object-fit:cover;border:1px solid var(--gold)}
.sp-info{flex-grow:1;min-width:0}
.sp-surah-name{font-weight:700;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sp-reciter-name{font-size:12px;color:var(--muted)}
.sp-controls{display:flex;align-items:center;gap:5px}
.sp-btn{background:none;border:none;color:var(--fg);font-size:18px;cursor:pointer;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:.2s}
.sp-btn:hover{background:var(--border)}
.sp-btn.play{background:var(--gold);color:#fff;font-size:20px}
.sp-progress{height:4px;background:var(--border);border-radius:2px;overflow:hidden;cursor:pointer;flex-grow:1;margin:0 10px;position:relative}
.sp-progress-fill{height:100%;background:var(--gold);width:0%;transition:width .1s linear}
.sp-time{font-size:11px;color:var(--muted);min-width:30px}

.lang-modal{position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,.6);backdrop-filter:blur(5px);display:none;align-items:center;justify-content:center;padding:20px}
.lang-modal.show{display:flex}
.lang-modal-content{background:var(--card);border-radius:20px;padding:20px;max-width:500px;width:100%;max-height:80vh;overflow-y:auto;box-shadow:0 10px 40px rgba(0,0,0,.2)}
.lang-modal-content h3{font-family:'Reem Kufi';color:var(--primary);margin-bottom:15px;text-align:center}
.lang-item{display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;cursor:pointer;transition:.2s}
.lang-item:hover{background:var(--bg)}.lang-item.active{background:var(--primary);color:#fff}
.lang-item span.flag{font-size:24px}

.footer{border-top:1px solid var(--border);margin-top:20px;margin-right:6px;margin-bottom:10px;padding:15px 20px;text-align:center;background:linear-gradient(180deg,var(--card),var(--bg));color:var(--muted);display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:16px 16px 0 0;box-shadow:0 -4px 15px rgba(0,0,0,0.05)}
.footer p{margin:4px 0;font-size:15px}
.footer .developer{font-family:'Reem Kufi',sans-serif;font-size:26px;font-weight:700;color:var(--gold);margin-top:6px;text-shadow:0 0 12px rgba(212,168,67,0.5),0 2px 4px rgba(0,0,0,0.2);transition:transform 0.3s,color 0.3s}
.footer .developer:hover{transform:scale(1.08);color:#FFD76A}
@media (max-width:768px){.footer{padding:12px 15px;margin-right:0;margin-bottom:5px}.footer p{font-size:14px}.footer .developer{font-size:20px}.sp-time{display:none}.sp-info{display:none}}
</style>
</head>
<body>

<div id="splash">
  <div class="sky-bg"></div><div class="stars" id="stars"></div><div class="sun"></div><div class="mountain"></div>
  <div class="mosque-silhouette left"><svg width="160" height="180" viewBox="0 0 160 180" fill="#0D1A10"><rect x="60" y="60" width="40" height="120" rx="2"/><rect x="30" y="90" width="30" height="90" rx="2"/><rect x="100" y="80" width="30" height="100" rx="2"/><path d="M80 10 Q100 30 95 60 L65 60 Q60 30 80 10Z"/><path d="M45 50 Q58 65 55 90 L35 90 Q32 65 45 50Z"/><path d="M115 40 Q130 55 127 80 L103 80 Q100 55 115 40Z"/><rect x="72" y="140" width="16" height="40" rx="8 8 0 0"/><line x1="80" y1="5" x2="80" y2="0" stroke="#FFD700" stroke-width="2"/><circle cx="80" cy="3" r="3" fill="#FFD700"/></svg></div>
  <div class="mosque-silhouette right"><svg width="180" height="200" viewBox="0 0 180 200" fill="#0D1A10"><rect x="65" y="70" width="50" height="130" rx="2"/><rect x="25" y="100" width="40" height="100" rx="2"/><rect x="115" y="90" width="40" height="110" rx="2"/><path d="M90 15 Q115 40 108 70 L72 70 Q65 40 90 15Z"/><path d="M45 60 Q62 78 58 100 L32 100 Q28 78 45 60Z"/><path d="M135 50 Q155 68 150 90 L120 90 Q116 68 135 50Z"/><rect x="78" y="155" width="24" height="45" rx="12 12 0 0"/><line x1="90" y1="8" x2="90" y2="2" stroke="#FFD700" stroke-width="2"/><circle cx="90" cy="5" r="4" fill="#FFD700"/></svg></div>
  <div class="splash-title"><h1 data-i18n="site_name">هداية</h1></div><div class="splash-subtitle" data-i18n="slogan">منصة إسلامية متكاملة لنور القلب والروح</div>
</div>

<div id="dua-overlay"><div class="dua-card"><div class="ornament"><span></span><i class="fas fa-star-and-crescent"></i><span></span></div><p data-i18n="dua_text">اللهم ارحم جدي الحاج عبد الدايم، وجدتي الحجة ماجدة، وصديقي أدهم سامر، وجميع موتى المسلمين، اللهم اغفر لهم وارحمهم، وعافهم واعفُ عنهم، واجعل قبورهم روضة من رياض الجنة.</p><div class="ornament"><span></span><i class="fas fa-star-and-crescent"></i><span></span></div><button class="dua-close" onclick="closeDua()" data-i18n="amen">آمين</button></div></div>

<div id="app">
  <header class="app-header"><div class="header-bg"></div><div class="header-overlay"></div>
    <div class="header-controls">
      <button class="lang-switcher" onclick="toggleLangModal()"><i class="fas fa-globe"></i> <span id="lang-text">العربية</span></button>
    </div>
    <div class="header-content"><h1 class="reem" data-i18n="site_name">هداية</h1><div class="header-ornament"><span></span><i class="fas fa-star-and-crescent"></i><span></span></div><p data-i18n="slogan">منصة إسلامية متكاملة لنور القلب والروح</p></div></header>

  <section id="sec-home" class="section active">
    <div class="card" style="background:linear-gradient(135deg,var(--primary),var(--primary-l));color:#fff;cursor:default"><h3 style="color:var(--gold);margin-bottom:8px"><i class="fas fa-book-open"></i> <span data-i18n="daily_hadith">حديث اليوم</span></h3><p class="amiri" id="daily-hadith" style="line-height:2"></p></div>
    <div class="card" style="background:linear-gradient(135deg,#1B5B4A,#0A3D2E);color:#fff;cursor:default"><h3 style="color:var(--gold);margin-bottom:8px"><i class="fas fa-hands-praying"></i> <span data-i18n="daily_dhikr">ذكر اليوم</span></h3><p class="amiri" id="daily-dhikr" style="line-height:2"></p></div>
    <div class="features-grid">
      <div class="feature-card green" onclick="navigate('quran')"><i class="fas fa-quran"></i><h3 data-i18n="nav_quran">المصحف الشريف</h3></div>
      <div class="feature-card gold" onclick="navigate('juz')"><i class="fas fa-book"></i><h3 data-i18n="nav_juz">أجزاء القرآن</h3></div>
      <div class="feature-card blue" onclick="navigate('khatma')"><i class="fas fa-check-double"></i><h3 data-i18n="nav_khatma">نظام الختمة</h3></div>
      <div class="feature-card purple" onclick="navigate('hadith')"><i class="fas fa-book-open"></i><h3 data-i18n="nav_hadith">الأحاديث</h3></div>
      <div class="feature-card green" onclick="navigate('azkar')"><i class="fas fa-hands-praying"></i><h3 data-i18n="nav_azkar">الأذكار</h3></div>
      <div class="feature-card gold" onclick="navigate('dua')"><i class="fas fa-praying-hands"></i><h3 data-i18n="nav_dua">الأدعية</h3></div>
      <div class="feature-card blue" onclick="navigate('prayer')"><i class="fas fa-mosque"></i><h3 data-i18n="nav_prayer">مواعيد الصلاة</h3></div>
      <div class="feature-card purple" onclick="navigate('tafsir')"><i class="fas fa-feather-pointed"></i><h3 data-i18n="nav_tafsir">تفسير القرآن</h3></div>
      <div class="feature-card green" onclick="navigate('stories')"><i class="fas fa-kaaba"></i><h3 data-i18n="nav_stories">قصص الأنبياء</h3></div>
      <div class="feature-card gold" onclick="navigate('tasbih')"><i class="fas fa-praying-hands"></i><h3 data-i18n="nav_tasbih">التسبيح</h3></div>
      <div class="feature-card blue" onclick="navigate('audio')"><i class="fas fa-headphones"></i><h3 data-i18n="nav_audio">المكتبة السماعية</h3></div>
      <div class="feature-card purple" onclick="navigate('about')"><i class="fas fa-info-circle"></i><h3 data-i18n="nav_about">عن الموقع</h3></div>
      <div class="feature-card green" onclick="navigate('settings')"><i class="fas fa-gear"></i><h3 data-i18n="nav_settings">الإعدادات</h3></div>
    </div>
  </section>

  <section id="sec-quran" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-quran"></i> <span data-i18n="nav_quran">المصحف الشريف</span></h2></div><div class="search-box"><i class="fas fa-search"></i><input type="text" id="search-surah-input" oninput="searchSurah(this.value)"></div><div id="surah-list"></div></section>
  <section id="sec-surah" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('quran')"><i class="fas fa-arrow-right"></i> <span data-i18n="back_surahs">السور</span></button><span id="surah-title-bar" style="font-weight:700;font-size:16px"></span><div style="display:flex;gap:6px"><button onclick="changeFontSize(-2)" style="padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;color:var(--fg)">أ-</button><button onclick="changeFontSize(2)" style="padding:6px 10px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;color:var(--fg)">+أ</button></div></div><div id="surah-content"></div><div class="page-nav"><button id="prev-surah" onclick="prevSurah()"><i class="fas fa-arrow-right"></i> <span data-i18n="prev">السابقة</span></button><button id="next-surah" onclick="nextSurah()"><span data-i18n="next">التالية</span> <i class="fas fa-arrow-left"></i></button></div></section>
  
  <section id="sec-juz" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-book"></i> <span data-i18n="nav_juz">الأجزاء</span></h2></div><div class="juz-grid" id="juz-main-grid"></div></section>
  <section id="sec-khatma" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-check-double"></i> <span data-i18n="nav_khatma">الختمة</span></h2></div><div id="khatma-content"></div></section>
  
  <section id="sec-hadith" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-book-open"></i> <span data-i18n="nav_hadith">الأحاديث</h2></div><div class="search-box"><i class="fas fa-search"></i><input type="text" id="search-hadith-input" oninput="searchHadith(this.value)"></div><div class="filter-pills" id="hadith-filters"></div><div id="hadith-list"></div></section>
  
  <section id="sec-azkar" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-hands-praying"></i> <span data-i18n="nav_azkar">الأذكار</h2></div><div id="azkar-categories-view"></div><div id="azkar-list-view" style="display:none"></div></section>
  
  <section id="sec-dua" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-praying-hands"></i> <span data-i18n="nav_dua">الأدعية</h2></div><div id="dua-categories-view"></div><div id="dua-list-view" style="display:none"></div></section>

  <section id="sec-prayer" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-mosque"></i> <span data-i18n="nav_prayer">مواعيد الصلاة</h2></div><div id="prayer-content"></div></section>

  <section id="sec-tafsir" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-feather-pointed"></i> <span data-i18n="nav_tafsir">تفسير القرآن</h2></div><div class="search-box"><i class="fas fa-search"></i><input type="text" id="search-tafsir-input" oninput="searchTafsirSurah(this.value)"></div><div id="tafsir-list"></div></section>
  <section id="sec-tafsir-view" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('tafsir')"><i class="fas fa-arrow-right"></i> <span data-i18n="back_surahs">السور</span></button><span id="tafsir-title-bar" style="font-weight:700;font-size:16px"></span></div><div id="tafsir-content"></div></section>

  <section id="sec-stories" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-kaaba"></i> <span data-i18n="nav_stories">قصص الأنبياء</h2></div><div id="stories-content"></div></section>

  <section id="sec-tasbih" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-praying-hands"></i> <span data-i18n="nav_tasbih">التسبيح الإلكتروني</h2></div><div class="tasbih-pills" id="tasbih-pills"></div><div class="tasbih-counter"><h3 id="tasbih-current-name" style="color:var(--gold)">سبحان الله</h3><div class="tasbih-display" id="tasbih-display">0</div><button class="tasbih-btn" onclick="incrementTasbih()"><i class="fas fa-hand-pointer"></i></button><div class="tasbih-controls"><button onclick="resetTasbih()"><i class="fas fa-rotate-right"></i> <span data-i18n="reset">تصفير</span></button><button onclick="navigate('home')"><i class="fas fa-home"></i> <span data-i18n="home">الرئيسية</span></button></div></div><div class="card" style="cursor:default;margin-top:20px"><h3 style="color:var(--primary);margin-bottom:10px"><i class="fas fa-info-circle"></i> <span data-i18n="tasbih_info_title">فضل التسبيح وآدابه</span></h3><p class="amiri" style="line-height:2" data-i18n="tasbih_info_text">قال رسول الله ﷺ: "كلمتان حبيبتان إلى الرحمن، خفيفتان على اللسان، ثقيلتان في الميزان: سبحان الله وبحمده، سبحان الله العظيم". ويُسن التسبيح بالأنامل واليدي، وقد كان النبي ﷺ يعقد التسبيح بيده.</p></div></section>

  <section id="sec-audio" class="section">
    <div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-headphones"></i> <span data-i18n="nav_audio">المكتبة السماعية</h2></div>
    <div id="reciter-view">
      <div class="search-box"><i class="fas fa-search"></i><input type="text" id="search-reciter-input" oninput="searchReciter(this.value)" placeholder="ابحث عن قارئ..."></div>
      <div class="reciter-grid" id="reciter-grid"></div>
    </div>
    <div id="surah-view" style="display:none">
      <button class="back-btn" onclick="backToReciters()"><i class="fas fa-arrow-right"></i> القراء</button>
      <div class="search-box"><i class="fas fa-search"></i><input type="text" id="search-audio-surah-input" oninput="searchAudioSurah(this.value)" placeholder="ابحث عن سورة..."></div>
      <div id="audio-surah-list"></div>
    </div>
  </section>

  <section id="sec-about" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-info-circle"></i> <span data-i18n="nav_about">عن الموقع</h2></div><div class="card" style="cursor:default"><h3 style="color:var(--primary);margin-bottom:10px" data-i18n="about_idea_title">فكرة موقع هداية</h3><p style="line-height:2" data-i18n="about_idea_text">انبثقت فكرة موقع "هداية" لتكون منصة إسلامية متكاملة تجمع بين بساطة التصميم وروعة المحتوى، ليكون رفيقاً للمسلم في حله وترحاله، يضم القرآن الكريم وتفسيره، والأحاديث النبوية، والأذكار، ومواعيد الصلاة، وغيرها من الخدمات الروحانية.</p></div><div class="card" style="cursor:default"><h3 style="color:var(--primary);margin-bottom:10px" data-i18n="about_goal_title">الهدف من الموقع</h3><p style="line-height:2" data-i18n="about_goal_text">نسعى من خلال هذه المنصة إلى تذكير المسلمين بدينهم، وتسهيل الوصول إلى المصادر الإسلامية الموثوقة في مكان واحد، ونشر العلم النافع، والمساهمة في حفظ القرآن والأذكار اليومية.</p></div><div class="card" style="cursor:default"><h3 style="color:var(--primary);margin-bottom:10px" data-i18n="about_rights_title">حقوق المبرمج</h3><p style="line-height:2" data-i18n="about_rights_text_1">تم تصميم وبرمجة هذا الموقع بكل حب وإتقان بواسطة المبرمج: <strong style="color:var(--gold)">حازم أحمد</strong>.</p><p style="margin-top:10px" data-i18n="copyright">© 2026 هداية - جميع الحقوق محفوظة.</p></div></section>

  <section id="sec-settings" class="section"><div class="toolbar"><button class="back-btn" onclick="navigate('home')"><i class="fas fa-arrow-right"></i> <span data-i18n="home">الرئيسية</span></button><h2 class="section-title" style="margin:0;font-size:22px"><i class="fas fa-gear"></i> <span data-i18n="nav_settings">الإعدادات</h2></div><div class="card" style="cursor:default"><div class="setting-item"><div><i class="fas fa-moon" style="color:var(--gold);margin-left:10px"></i><span data-i18n="dark_mode">الوضع الليلي</span></div><div class="toggle" id="dark-toggle" onclick="toggleDark()"></div></div><div class="setting-item"><div><i class="fas fa-text-height" style="color:var(--gold);margin-left:10px"></i><span data-i18n="font_size">حجم الخط</span></div><div style="display:flex;align-items:center;gap:10px"><button onclick="changeFontSize(-2)" style="width:36px;height:36px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-weight:700;color:var(--fg)">-</button><span id="font-size-val" style="min-width:30px;text-align:center;font-weight:700">18</span><button onclick="changeFontSize(2)" style="width:36px;height:36px;border-radius:8px;border:1px solid var(--border);background:var(--card);cursor:pointer;font-weight:700;color:var(--fg)">+</button></div></div><div class="setting-item"><div><i class="fas fa-bell" style="color:var(--gold);margin-left:10px"></i><span data-i18n="notifications">التنبيهات</span></div><div class="toggle on" id="notif-toggle" onclick="toggleNotif(this)"></div></div><div class="setting-item" style="border:none"><div><i class="fas fa-trash-can" style="color:#E74C3C;margin-left:10px"></i><span data-i18n="clear_data">مسح البيانات</span></div><button onclick="clearData()" style="padding:8px 16px;border-radius:8px;border:1px solid #E74C3C;background:transparent;color:#E74C3C;cursor:pointer;font-weight:600" data-i18n="clear">مسح</button></div></div></section>

  <footer class="footer">
    <p data-i18n="copyright">© 2026 هداية - جميع الحقوق محفوظة.</p>
    <p data-i18n="designed_by">تم تصميم وبرمجة الموقع بواسطة:</p>
    <div class="developer">حازم أحمد</div>
  </footer>

  <nav class="bottom-nav">
    <button class="nav-item active" onclick="navigate('home')" data-sec="home"><i class="fas fa-home"></i><span data-i18n="home">الرئيسية</span></button>
    <button class="nav-item" onclick="navigate('quran')" data-sec="quran"><i class="fas fa-quran"></i><span data-i18n="quran">القرآن</span></button>
    <button class="nav-item" onclick="navigate('azkar')" data-sec="azkar"><i class="fas fa-hands-praying"></i><span data-i18n="azkar">الأذكار</span></button>
    <button class="nav-item" onclick="navigate('prayer')" data-sec="prayer"><i class="fas fa-mosque"></i><span data-i18n="prayer">الصلاة</span></button>
    <button class="nav-item" onclick="navigate('audio')" data-sec="audio"><i class="fas fa-headphones"></i><span data-i18n="audio">الصوتيات</span></button>
  </nav>

  <div class="sticky-player" id="sticky-player">
    <img id="sp-img" class="sp-img" src="">
    <div class="sp-info">
      <div class="sp-surah-name" id="sp-surah-name">سورة الفاتحة</div>
      <div class="sp-reciter-name" id="sp-reciter-name">مشاري راشد العفاسي</div>
    </div>
    <div class="sp-time" id="sp-current-time">0:00</div>
    <div class="sp-progress" onclick="seekSticky(event)"><div class="sp-progress-fill" id="sp-fill"></div></div>
    <div class="sp-time" id="sp-duration">0:00</div>
    <div class="sp-controls">
      <button class="sp-btn" onclick="prevStickySurah()"><i class="fas fa-backward"></i></button>
      <button class="sp-btn play" id="sp-play-btn" onclick="toggleStickyPlay()"><i class="fas fa-pause"></i></button>
      <button class="sp-btn" onclick="nextStickySurah()"><i class="fas fa-forward"></i></button>
      <button class="sp-btn" onclick="closeStickyPlayer()"><i class="fas fa-times"></i></button>
    </div>
  </div>
  <audio id="main-audio" onended="nextStickySurah()"></audio>

  <div class="lang-modal" id="lang-modal">
    <div class="lang-modal-content">
      <h3 data-i18n="select_language">اختر اللغة</h3>
      <div id="lang-list"></div>
    </div>
  </div>
</div>
<div class="toast" id="toast"></div>

<script>
// ===== بيانات السور =====
const SURAHS=[{id:1,name:"الفاتحة",verses:7,type:"مكية"},{id:2,name:"البقرة",verses:286,type:"مدنية"},{id:3,name:"آل عمران",verses:200,type:"مدنية"},{id:4,name:"النساء",verses:176,type:"مدنية"},{id:5,name:"المائدة",verses:120,type:"مدنية"},{id:6,name:"الأنعام",verses:165,type:"مكية"},{id:7,name:"الأعراف",verses:206,type:"مكية"},{id:8,name:"الأنفال",verses:75,type:"مدنية"},{id:9,name:"التوبة",verses:129,type:"مدنية"},{id:10,name:"يونس",verses:109,type:"مكية"},{id:11,name:"هود",verses:123,type:"مكية"},{id:12,name:"يوسف",verses:111,type:"مكية"},{id:13,name:"الرعد",verses:43,type:"مدنية"},{id:14,name:"إبراهيم",verses:52,type:"مكية"},{id:15,name:"الحجر",verses:99,type:"مكية"},{id:16,name:"النحل",verses:128,type:"مكية"},{id:17,name:"الإسراء",verses:111,type:"مكية"},{id:18,name:"الكهف",verses:110,type:"مكية"},{id:19,name:"مريم",verses:98,type:"مكية"},{id:20,name:"طه",verses:135,type:"مكية"},{id:21,name:"الأنبياء",verses:112,type:"مكية"},{id:22,name:"الحج",verses:78,type:"مدنية"},{id:23,name:"المؤمنون",verses:118,type:"مكية"},{id:24,name:"النور",verses:64,type:"مدنية"},{id:25,name:"الفرقان",verses:77,type:"مكية"},{id:26,name:"الشعراء",verses:227,type:"مكية"},{id:27,name:"النمل",verses:93,type:"مكية"},{id:28,name:"القصص",verses:88,type:"مكية"},{id:29,name:"العنكبوت",verses:69,type:"مكية"},{id:30,name:"الروم",verses:60,type:"مكية"},{id:31,name:"لقمان",verses:34,type:"مكية"},{id:32,name:"السجدة",verses:30,type:"مكية"},{id:33,name:"الأحزاب",verses:73,type:"مدنية"},{id:34,name:"سبأ",verses:54,type:"مكية"},{id:35,name:"فاطر",verses:45,type:"مكية"},{id:36,name:"يس",verses:83,type:"مكية"},{id:37,name:"الصافات",verses:182,type:"مكية"},{id:38,name:"ص",verses:88,type:"مكية"},{id:39,name:"الزمر",verses:75,type:"مكية"},{id:40,name:"غافر",verses:85,type:"مكية"},{id:41,name:"فصلت",verses:54,type:"مكية"},{id:42,name:"الشورى",verses:53,type:"مكية"},{id:43,name:"الزخرف",verses:89,type:"مكية"},{id:44,name:"الدخان",verses:59,type:"مكية"},{id:45,name:"الجاثية",verses:37,type:"مكية"},{id:46,name:"الأحقاف",verses:35,type:"مكية"},{id:47,name:"محمد",verses:38,type:"مدنية"},{id:48,name:"الفتح",verses:29,type:"مدنية"},{id:49,name:"الحجرات",verses:18,type:"مدنية"},{id:50,name:"ق",verses:45,type:"مكية"},{id:51,name:"الذاريات",verses:60,type:"مكية"},{id:52,name:"الطور",verses:49,type:"مكية"},{id:53,name:"النجم",verses:62,type:"مكية"},{id:54,name:"القمر",verses:55,type:"مكية"},{id:55,name:"الرحمن",verses:78,type:"مدنية"},{id:56,name:"الواقعة",verses:96,type:"مكية"},{id:57,name:"الحديد",verses:29,type:"مدنية"},{id:58,name:"المجادلة",verses:22,type:"مدنية"},{id:59,name:"الحشر",verses:24,type:"مدنية"},{id:60,name:"الممتحنة",verses:13,type:"مدنية"},{id:61,name:"الصف",verses:14,type:"مدنية"},{id:62,name:"الجمعة",verses:11,type:"مدنية"},{id:63,name:"المنافقون",verses:11,type:"مدنية"},{id:64,name:"التغابن",verses:18,type:"مدنية"},{id:65,name:"الطلاق",verses:12,type:"مدنية"},{id:66,name:"التحريم",verses:12,type:"مدنية"},{id:67,name:"الملك",verses:30,type:"مكية"},{id:68,name:"القلم",verses:52,type:"مكية"},{id:69,name:"الحاقة",verses:52,type:"مكية"},{id:70,name:"المعارج",verses:44,type:"مكية"},{id:71,name:"نوح",verses:28,type:"مكية"},{id:72,name:"الجن",verses:28,type:"مكية"},{id:73,name:"المزمل",verses:20,type:"مكية"},{id:74,name:"المدثر",verses:56,type:"مكية"},{id:75,name:"القيامة",verses:40,type:"مكية"},{id:76,name:"الإنسان",verses:31,type:"مدنية"},{id:77,name:"المرسلات",verses:50,type:"مكية"},{id:78,name:"النبأ",verses:40,type:"مكية"},{id:79,name:"النازعات",verses:46,type:"مكية"},{id:80,name:"عبس",verses:42,type:"مكية"},{id:81,name:"التكوير",verses:29,type:"مكية"},{id:82,name:"الانفطار",verses:19,type:"مكية"},{id:83,name:"المطففين",verses:36,type:"مكية"},{id:84,name:"الانشقاق",verses:25,type:"مكية"},{id:85,name:"البروج",verses:22,type:"مكية"},{id:86,name:"الطارق",verses:17,type:"مكية"},{id:87,name:"الأعلى",verses:19,type:"مكية"},{id:88,name:"الغاشية",verses:26,type:"مكية"},{id:89,name:"الفجر",verses:30,type:"مكية"},{id:90,name:"البلد",verses:20,type:"مكية"},{id:91,name:"الشمس",verses:15,type:"مكية"},{id:92,name:"الليل",verses:21,type:"مكية"},{id:93,name:"الضحى",verses:11,type:"مكية"},{id:94,name:"الشرح",verses:8,type:"مكية"},{id:95,name:"التين",verses:8,type:"مكية"},{id:96,name:"العلق",verses:19,type:"مكية"},{id:97,name:"القدر",verses:5,type:"مكية"},{id:98,name:"البينة",verses:8,type:"مدنية"},{id:99,name:"الزلزلة",verses:8,type:"مدنية"},{id:100,name:"العاديات",verses:11,type:"مكية"},{id:101,name:"القارعة",verses:11,type:"مكية"},{id:102,name:"التكاثر",verses:8,type:"مكية"},{id:103,name:"العصر",verses:3,type:"مكية"},{id:104,name:"الهمزة",verses:9,type:"مكية"},{id:105,name:"الفيل",verses:5,type:"مكية"},{id:106,name:"قريش",verses:4,type:"مكية"},{id:107,name:"الماعون",verses:7,type:"مكية"},{id:108,name:"الكوثر",verses:3,type:"مكية"},{id:109,name:"الكافرون",verses:6,type:"مكية"},{id:110,name:"النصر",verses:3,type:"مدنية"},{id:111,name:"المسد",verses:5,type:"مكية"},{id:112,name:"الإخلاص",verses:4,type:"مكية"},{id:113,name:"الفلق",verses:5,type:"مكية"},{id:114,name:"الناس",verses:6,type:"مدنية"}];

// ===== بيانات الأجزاء =====
const JUZ_NAMES=["فاتحة الكتاب","سأقول لكم","تلك الرسل","لن تنالوا البر","والمحصنات","لا يحب الله","وإذا سمعوا","ولو أننا","قول لا تعبدون","واعلموا","يعتذرون","وما من غائب","وما لهم","ربما","سبحان الذي","ألم أحسب","اقترب","قد أفلح","وقال الذين","أمن خلق","اتل ما أوحي","ومن يقنت","وما لي","فمن أظلم","إليه يرد","حم","قال فما خطبكم","قد سمع","عم يتساءلون","من عند الله"];

// ===== بيانات الأحاديث =====
const HADITHS=[{text:"إنما الأعمال بالنيات وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه",narrator:"عمر بن الخطاب",source:"صحيح البخاري ومسلم",grade:"صحيح",category:"الإيمان"},{text:"من كان يؤمن بالله واليوم الآخر فليقل خيراً أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه",narrator:"أبو هريرة",source:"صحيح البخاري ومسلم",grade:"صحيح",category:"الأخلاق"},{text:"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",narrator:"أنس بن مالك",source:"صحيح البخاري ومسلم",grade:"صحيح",category:"الإيمان"},{text:"المسلم من سلم المسلمون من لسانه ويده، والمهاجر من هجر ما نهى الله عنه",narrator:"عبد الله بن عمرو",source:"صحيح البخاري",grade:"صحيح",category:"الأخلاق"},{text:"من سلك طريقاً يلتمس فيه علماً سهل الله له به طريقاً إلى الجنة",narrator:"أبو هريرة",source:"صحيح مسلم",grade:"صحيح",category:"العلم"},{text:"صلّوا كما رأيتموني أُصلّي",narrator:"مالك بن الحويرث",source:"صحيح البخاري",grade:"صحيح",category:"الصلاة"},{text:"من صلى العشاء في جماعة فكأنما قام نصف الليل ومن صلى الفجر في جماعة فكأنما صلى الليل كله",narrator:"عثمان بن عفان",source:"صحيح مسلم",grade:"صحيح",category:"الصلاة"},{text:"الطهور شطر الإيمان والحمد لله تملأ الميزان وسبحان الله والحمد لله تملآن ما بين السماوات والأرض",narrator:"أبو مالك الأشعري",source:"صحيح مسلم",grade:"صحيح",category:"الذكر والدعاء"},{text:"من صام رمضان إيماناً واحتساباً غفر له ما تقدم من ذنبه",narrator:"أبو هريرة",source:"صحيح البخاري ومسلم",grade:"صحيح",category:"الصيام"},{text:"لا تتحرجوا في الدعاء فإنه لا يهلك مع الدعاء أحد",narrator:"أبو هريرة",source:"سنن ابن ماجه",grade:"حسن",category:"الذكر والدعاء"},{text:"رضا الرب في رضا الوالد وسخط الرب في سخط الوالد",narrator:"عبد الله بن عمرو",source:"الترمذي",grade:"حسن",category:"بر الوالدين"},{text:"عجباً لأمر المؤمن إن أمره كله خير، إن أصابته سراء شكر فكان خيراً له وإن أصابته ضراء صبر فكان خيراً له",narrator:"صهيب الرومي",source:"صحيح مسلم",grade:"صحيح",category:"الصبر"},{text:"الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء",narrator:"عبد الله بن عمرو",source:"أبو داود والترمذي",grade:"صحيح",category:"الرحمة"},{text:"خيركم من تعلم القرآن وعلمه",narrator:"عثمان بن عفان",source:"صحيح البخاري",grade:"صحيح",category:"العلم"},{text:"اتق الله حيثما كنت وأتبع السيئة الحسنة تمحها وخالق الناس بخلق حسن",narrator:"معاذ بن جبل",source:"سنن الترمذي",grade:"حسن",category:"الأخلاق"},{text:"إن الله لا ينظر إلى صوركم وأموالكم ولكن ينظر إلى قلوبكم وأعمالكم",narrator:"أبو هريرة",source:"صحيح مسلم",grade:"صحيح",category:"الإيمان"}];
const HADITH_CATEGORIES=["الكل","الإيمان","الصلاة","الصيام","الأخلاق","الرحمة","الصبر","بر الوالدين","العلم","الذكر والدعاء"];

// ===== بيانات الأذكار (تمت إضافة أذكار المقابر) =====
const AZKAR_DATA=[
  {cat:"أذكار الصباح",icon:"fas fa-sun",color:"#F59E0B",items:[{text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",count:1,source:"صحيح مسلم"},{text:"اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",count:1,source:"سنن الترمذي"},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",count:100,source:"صحيح مسلم"},{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",count:100,source:"صحيح البخاري ومسلم"}]},
  {cat:"أذكار المساء",icon:"fas fa-moon",color:"#6366F1",items:[{text:"أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",count:1,source:"صحيح مسلم"},{text:"أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",count:3,source:"صحيح مسلم"},{text:"بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",count:3,source:"أبو داود والترمذي"}]},
  {cat:"أذكار النوم",icon:"fas fa-bed",color:"#8B5CF6",items:[{text:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",count:1,source:"صحيح البخاري"},{text:"اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",count:1,source:"أبو داود والترمذي"},{text:"سُبْحَانَ اللَّهِ (33) الْحَمْدُ لِلَّهِ (33) اللَّهُ أَكْبَرُ (34)",count:1,source:"صحيح البخاري ومسلم"}]},
  {cat:"أذكار المقابر",icon:"fas fa-place-of-worship",color:"#52525B",items:[{text:"السَّلَامُ عَلَيْكُمْ أَهْلَ الدِّيَارِ مِنَ الْمُؤْمِنِينَ وَالْمُسْلِمِينَ، وَإِنَّا إِنْ شَاءَ اللَّهُ بِكُمْ لَاحِقُونَ، نَسْأَلُ اللَّهَ لَنَا وَلَكُمُ الْعَافِيَةَ",count:1,source:"صحيح مسلم"},{text:"يَرْحَمُ اللَّهُ الْمُسْتَقْدِمِينَ مِنَّا وَالْمُسْتَأْخِرِينَ وَالْمُسْتَشْهِرِينَ وَالْمُسْتَغْبِرِينَ وَالْمُسْتَزْوِرِينَ وَالْمُسْتَبْقِينَ وَالْمُسْتَكْثِرِينَ وَالْمُسْتَقِلِّينَ، فَكُلُّكُمْ فِي خَيْرٍ",count:1,source:"مسند أحمد"}]},
  {cat:"أذكار بعد الصلاة",icon:"fas fa-mosque",color:"#10B981",items:[{text:"أَسْتَغْفِرُ اللَّهَ (ثلاثاً)",count:3,source:"صحيح مسلم"},{text:"اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",count:1,source:"صحيح مسلم"},{text:"لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",count:1,source:"صحيح البخاري ومسلم"}]},
  {cat:"أذكار السفر والطعام",icon:"fas fa-utensils",color:"#EC4899",items:[{text:"بِسْمِ اللَّهِ وَبَرَكَةِ اللَّهِ",count:1,source:"صحيح مسلم",name:"أذكار الطعام"},{text:"اللَّهُمَّ بَارِكْ لَنَا فِيمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",count:1,source:"أبو داود",name:"دعاء الفراغ من الطعام"},{text:"سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",count:1,source:"صحيح مسلم",name:"دعاء السفر"}]},
  {cat:"الاستغفار والتسبيح",icon:"fas fa-hand-holding-heart",color:"#0A3D2E",items:[{text:"أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",count:100,source:"صحيح البخاري ومسلم",name:"الاستغفار"},{text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ",count:100,source:"صحيح البخاري",name:"التسبيح"},{text:"لَا إِلَٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",count:7,source:"صحيح البخاري",name:"دعاء الكرب"}]}
];

// ===== بيانات الأدعية =====
const DUA_DATA=[
  {cat:"أدعية الأنبياء",icon:"fas fa-user-tie",color:"#0A3D2E",items:[
    {text:"رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ",source:"دعاء سيدنا إبراهيم (قرآني)",meaning:"دعاء للأمن والرزق في البلد."},
    {text:"رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",source:"دعاء سيدنا موسى (قرآني)",meaning:"طلب التيسير والانشراح للقيام بالمهام."}
  ]},
  {cat:"أدعية الصباح والمساء",icon:"fas fa-sun",color:"#F59E0B",items:[
    {text:"اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",source:"سنن الترمذي",meaning:"تفويض الأمر لله في الصباح والمساء."},
    {text:"أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",source:"صحيح مسلم",meaning:"إقرار الملك لله وحده في الصباح."}
  ]},
  {cat:"أدعية تفريج الهم والكرب",icon:"fas fa-heart",color:"#E74C3C",items:[
    {text:"لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",source:"دعاء سيدنا يونس (قرآني)",meaning:"دعاء عظيم لتفريج الكروب والهموم."},
    {text:"اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ",source:"صحيح البخاري",meaning:"الاستعاذة من الأمراض النفسية والجسدية المعيقة."}
  ]},
  {cat:"أدعية الرزق",icon:"fas fa-hand-holding-usd",color:"#10B981",items:[
    {text:"اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ",source:"جامع الترمذي",meaning:"طلب الرزق الحلال والاستغناء عن الناس."},
    {text:"رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ",source:"دعاء سيدنا نوح (قرآني)",meaning:"دعاء شامل بالمغفرة والبركة."}
  ]}
];

// ===== بيانات القراء (تم إصلاح الروابط بالكامل) =====
const RECITERS = [
  { name: "مشاري راشد العفاسي", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Mishary_Rashid_Alafasy_2019.jpg", server: "https://server8.mp3quran.net/afs/" },
  { name: "عبد الباسط عبد الصمد", image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Abdul_Basit_%28cropped%29.jpg", server: "https://server8.mp3quran.net/basit/" },
  { name: "ماهر المعيقلي", image: "https://quran.si/wp-content/uploads/2021/09/Maher-al-Muaiqly.jpg", server: "https://server11.mp3quran.net/maher/" },
  { name: "عبد الرحمن السديس", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Abdul_Rahman_Al-Sudais.jpg", server: "https://server11.mp3quran.net/sds/" },
  { name: "ياسر الدوسري", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Yasser_Al-Dosari.jpg", server: "https://server11.mp3quran.net/yasser/" },
  { name: "علي جابر", image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Ali_Jaber.jpg", server: "https://server13.mp3quran.net/jbr/" },
  { name: "محمد صديق المنشاوي", image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Muhammad_Siddiq_Al-Minshawi.jpg", server: "https://server10.mp3quran.net/minsh/" },
  { name: "محمود خليل الحصري", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Mahmoud_Khalil_Al-Husary.jpg", server: "https://server13.mp3quran.net/husr/" }
];

let currentReciterIndex = 0;
let currentSurahId = 1;

// ===== نظام الترجمة (i18n) =====
const LANGUAGES = [
  {code:"ar",name:"العربية",flag:"🇸🇦",dir:"rtl"},{code:"en",name:"English",flag:"🇺🇸",dir:"ltr"},{code:"fr",name:"Français",flag:"🇫🇷",dir:"ltr"},{code:"de",name:"Deutsch",flag:"🇩🇪",dir:"ltr"},{code:"es",name:"Español",flag:"🇪🇸",dir:"ltr"},{code:"it",name:"Italiano",flag:"🇮🇹",dir:"ltr"},{code:"tr",name:"Türkçe",flag:"🇹🇷",dir:"ltr"},{code:"ru",name:"Русский",flag:"🇷🇺",dir:"ltr"},{code:"zh",name:"中文",flag:"🇨🇳",dir:"ltr"},{code:"ja",name:"日本語",flag:"🇯🇵",dir:"ltr"},{code:"ko",name:"한국어",flag:"🇰🇷",dir:"ltr"},{code:"pt",name:"Português",flag:"🇵🇹",dir:"ltr"},{code:"nl",name:"Nederlands",flag:"🇳🇱",dir:"ltr"},{code:"hi",name:"हिन्दी",flag:"🇮🇳",dir:"ltr"},{code:"ur",name:"اردو",flag:"🇵🇰",dir:"rtl"},{code:"fa",name:"فارسی",flag:"🇮🇷",dir:"rtl"},{code:"id",name:"Indonesia",flag:"🇮🇩",dir:"ltr"},{code:"ms",name:"Melayu",flag:"🇲🇾",dir:"ltr"},{code:"bn",name:"বাংলা",flag:"🇧🇩",dir:"ltr"},{code:"el",name:"Ελληνικά",flag:"🇬🇷",dir:"ltr"}
];

const i18n = {
  ar: { site_name: "هداية", slogan: "منصة إسلامية متكاملة لنور القلب والروح", amen: "آمين", daily_hadith: "حديث اليوم", daily_dhikr: "ذكر اليوم", home: "الرئيسية", back_surahs: "السور", nav_quran: "المصحف الشريف", nav_juz: "أجزاء القرآن", nav_khatma: "نظام الختمة", nav_hadith: "الأحاديث", nav_azkar: "الأذكار", nav_dua: "الأدعية", nav_prayer: "مواعيد الصلاة", nav_tafsir: "تفسير القرآن", nav_stories: "قصص الأنبياء", nav_tasbih: "التسبيح", nav_audio: "المكتبة السماعية", nav_about: "عن الموقع", nav_settings: "الإعدادات", quran: "القرآن", azkar: "الأذكار", dua: "الأدعية", prayer: "الصلاة", audio: "الصوتيات", prev: "السابقة", next: "التالية", reset: "تصفير", tasbih_info_title: "فضل التسبيح وآدابه", tasbih_info_text: 'قال رسول الله ﷺ: "كلمتان حبيبتان إلى الرحمن، خفيفتان على اللسان، ثقيلتان في الميزان: سبحان الله وبحمده، سبحان الله العظيم". ويُسن التسبيح بالأنامل واليدي، وقد كان النبي ﷺ يعقد التسبيح بيده.', about_idea_title: "فكرة موقع هداية", about_idea_text: "انبثقت فكرة موقع هداية لتكون منصة إسلامية متكاملة تجمع بين بساطة التصميم وروعة المحتوى، ليكون رفيقاً للمسلم في حله وترحاله، يضم القرآن الكريم وتفسيره، والأحاديث النبوية، والأذكار، ومواعيد الصلاة، وغيرها من الخدمات الروحانية.", about_goal_title: "الهدف من الموقع", about_goal_text: "نسعى من خلال هذه المنصة إلى تذكير المسلمين بدينهم، وتسهيل الوصول إلى المصادر الإسلامية الموثوقة في مكان واحد، ونشر العلم النافع، والمساهمة في حفظ القرآن والأذكار اليومية.", about_rights_title: "حقوق المبرمج", about_rights_text_1: "تم تصميم وبرمجة هذا الموقع بكل حب وإتقان بواسطة المبرمج: حازم أحمد.", copyright: "© 2026 هداية - جميع الحقوق محفوظة.", designed_by: "تم تصميم وبرمجة الموقع بواسطة:", dark_mode: "الوضع الليلي", font_size: "حجم الخط", notifications: "التنبيهات", clear_data: "مسح البيانات", clear: "مسح", search_surah: "ابحث عن سورة...", search_hadith: "ابحث في الأحاديث...", select_language: "اختر اللغة", error_audio: "ملف التلاوة غير متوفر حالياً." },
  en: { site_name: "Hidaya", slogan: "An integrated Islamic platform for the light of the heart and soul", amen: "Amen", daily_hadith: "Hadith of the Day", daily_dhikr: "Dhikr of the Day", home: "Home", back_surahs: "Surahs", nav_quran: "Holy Quran", nav_juz: "Quran Parts", nav_khatma: "Khatma System", nav_hadith: "Hadiths", nav_azkar: "Adhkar", nav_dua: "Duas", nav_prayer: "Prayer Times", nav_tafsir: "Quran Tafsir", nav_stories: "Prophets Stories", nav_tasbih: "Tasbih", nav_audio: "Audio Library", nav_about: "About", nav_settings: "Settings", quran: "Quran", azkar: "Adhkar", dua: "Duas", prayer: "Prayer", audio: "Audio", prev: "Previous", next: "Next", reset: "Reset", tasbih_info_title: "Virtues of Tasbih", tasbih_info_text: 'The Prophet ﷺ said: "Two words are beloved to the Most Merciful, light on the tongue, heavy on the Scale: Subhan Allahi wa bihamdih, Subhan Allahil Azim." It is Sunnah to count Tasbih on the fingers.', about_idea_title: "Hidaya Concept", about_idea_text: "The idea of the Hidaya website emerged to be an integrated Islamic platform combining simplicity of design and splendor of content, to be a companion for Muslims everywhere.", about_goal_title: "Website Goal", about_goal_text: "Through this platform, we seek to remind Muslims of their religion, facilitate access to reliable Islamic sources in one place, spread beneficial knowledge, and contribute to memorizing the Quran and daily Adhkar.", about_rights_title: "Developer Rights", about_rights_text_1: "This website was designed and programmed with love and mastery by the programmer: Hazem Ahmed.", copyright: "© 2026 Hidaya - All Rights Reserved.", designed_by: "Designed and developed by:", dark_mode: "Dark Mode", font_size: "Font Size", notifications: "Notifications", clear_data: "Clear Data", clear: "Clear", search_surah: "Search for a Surah...", search_hadith: "Search Hadiths...", select_language: "Select Language", error_audio: "Audio file is currently unavailable." },
  fr: { site_name: "Hidaya", slogan: "Une plateforme islamique intégrée pour la lumière du cœur et de l'âme", amen: "Amen", daily_hadith: "Hadith du Jour", daily_dhikr: "Dhikr du Jour", home: "Accueil", back_surahs: "Sourates", nav_quran: "Saint Coran", nav_juz: "Parties du Coran", nav_khatma: "Système Khatma", nav_hadith: "Hadiths", nav_azkar: "Adhkar", nav_dua: "Dou'as", nav_prayer: "Heures de Prière", nav_tafsir: "Tafsir du Coran", nav_stories: "Histoires des Prophètes", nav_tasbih: "Tasbih", nav_audio: "Bibliothèque Audio", nav_about: "À Propos", nav_settings: "Paramètres", quran: "Coran", azkar: "Adhkar", dua: "Dou'as", prayer: "Prière", audio: "Audio", prev: "Précédent", next: "Suivant", reset: "Réinitialiser", tasbih_info_title: "Vertus du Tasbih", tasbih_info_text: 'Le Prophète ﷺ a dit: "Deux mots sont bien-aimés du Miséricordieux, légers sur la langue, lourds sur la Balance: Subhan Allahi wa bihamdih, Subhan Allahil Azim."', about_idea_title: "Concept Hidaya", about_idea_text: "L'idée du site Hidaya a émergé pour être une plateforme islamique intégrée combinant simplicité du design et splendeur du contenu.", about_goal_title: "Objectif du Site", about_goal_text: "Grâce à cette plateforme, nous cherchons à rappeler aux musulmans leur religion, faciliter l'accès aux sources islamiques fiables en un seul endroit.", about_rights_title: "Droits du Développeur", about_rights_text_1: "Ce site a été conçu et programmé avec amour et maîtrise par le programmeur: Hazem Ahmed.", copyright: "© 2026 Hidaya - Tous droits réservés.", designed_by: "Conçu et développé par:", dark_mode: "Mode Sombre", font_size: "Taille de Police", notifications: "Notifications", clear_data: "Effacer les Données", clear: "Effacer", search_surah: "Rechercher une sourate...", search_hadith: "Rechercher des hadiths...", select_language: "Choisir la Langue", error_audio: "Le fichier audio est actuellement indisponible." },
  de: { site_name: "Hidaya", slogan: "Eine integrierte islamische Plattform für das Licht des Herzens und der Seele", amen: "Amen", daily_hadith: "Hadith des Tages", daily_dhikr: "Dhikr des Tages", home: "Startseite", back_surahs: "Suren", nav_quran: "Der Heilige Koran", nav_juz: "Koran Teile", nav_khatma: "Khatma System", nav_hadith: "Hadithe", nav_azkar: "Adhkar", nav_dua: "Bittgebete", nav_prayer: "Gebetszeiten", nav_tafsir: "Koran Tafsir", nav_stories: "Prophetengeschichten", nav_tasbih: "Tasbih", nav_audio: "Audio Bibliothek", nav_about: "Über uns", nav_settings: "Einstellungen", quran: "Koran", azkar: "Adhkar", dua: "Bittgebete", prayer: "Gebet", audio: "Audio", prev: "Zurück", next: "Weiter", reset: "Zurücksetzen", tasbih_info_title: "Vorzüge des Tasbih", tasbih_info_text: 'Der Prophet ﷺ sagte: "Zwei Worte sind dem Allerbarmenden lieb, leicht auf der Zunge, schwer auf der Waage: Subhan Allahi wa bihamdih, Subhan Allahil Azim."', about_idea_title: "Hidaya Konzept", about_idea_text: "Die Idee der Hidaya-Website entstand, um eine integrierte islamische Plattform zu sein, die Einfachheit im Design und Pracht im Inhalt vereint.", about_goal_title: "Website-Ziel", about_goal_text: "Durch diese Plattform suchen wir Muslime an ihre Religion zu erinnern, den Zugang zu verlässlichen islamischen Quellen an einem Ort zu erleichtern.", about_rights_title: "Entwicklerrechte", about_rights_text_1: "Diese Website wurde mit Liebe und Beherrschung vom Programmierer entworfen und programmiert: Hazem Ahmed.", copyright: "© 2026 Hidaya - Alle Rechte vorbehalten.", designed_by: "Entworfen und entwickelt von:", dark_mode: "Dunkelmodus", font_size: "Schriftgröße", notifications: "Benachrichtigungen", clear_data: "Daten löschen", clear: "Löschen", search_surah: "Suche nach einer Sure...", search_hadith: "Hadithe suchen...", select_language: "Sprache auswählen", error_audio: "Audiodatei derzeit nicht verfügbar." },
  es: { site_name: "Hidaya", slogan: "Una plataforma islámica integrada para la luz del corazón y el alma", amen: "Amén", daily_hadith: "Hadiz del Día", daily_dhikr: "Dhikr del Día", home: "Inicio", back_surahs: "Suras", nav_quran: "Sagrado Corán", nav_juz: "Partes del Corán", nav_khatma: "Sistema Khatma", nav_hadith: "Hadices", nav_azkar: "Adhkar", nav_dua: "Súplicas", nav_prayer: "Tiempos de Oración", nav_tafsir: "Tafsir del Corán", nav_stories: "Historias de los Profetas", nav_tasbih: "Tasbih", nav_audio: "Biblioteca de Audio", nav_about: "Acerca de", nav_settings: "Ajustes", quran: "Corán", azkar: "Adhkar", dua: "Súplicas", prayer: "Oración", audio: "Audio", prev: "Anterior", next: "Siguiente", reset: "Reiniciar", tasbih_info_title: "Virtudes del Tasbih", tasbih_info_text: 'El Profeta ﷺ dijo: "Dos palabras son amadas por el Misericordioso, ligeras en la lengua, pesadas en la Balanza: Subhan Allahi wa bihamdih, Subhan Allahil Azim."', about_idea_title: "Concepto Hidaya", about_idea_text: "La idea del sitio web Hidaya surgió para ser una plataforma islámica integrada que combina simplicidad de diseño y esplendor de contenido.", about_goal_title: "Objetivo del Sitio", about_goal_text: "A través de esta plataforma, buscamos recordar a los musulmanes su religión, facilitar el acceso a fuentes islámicas confiables en un solo lugar.", about_rights_title: "Derechos del Desarrollador", about_rights_text_1: "Este sitio web fue diseñado y programado con amor y dominio por el programador: Hazem Ahmed.", copyright: "© 2026 Hidaya - Todos los derechos reservados.", designed_by: "Diseñado y desarrollado por:", dark_mode: "Modo Oscuro", font_size: "Tamaño de Fuente", notifications: "Notificaciones", clear_data: "Borrar Datos", clear: "Borrar", search_surah: "Buscar una Sura...", search_hadith: "Buscar Hadices...", select_language: "Seleccionar Idioma", error_audio: "El archivo de audio no está disponible actualmente." }
};
['it','tr','ru','zh','ja','ko','pt','nl','hi','ur','fa','id','ms','bn','el'].forEach(code => { i18n[code] = i18n.en; });

let state={lang:localStorage.getItem('hidaya_lang')||'ar',darkMode:localStorage.getItem('hidaya_dark')==='true',fontSize:parseInt(localStorage.getItem('hidaya_font'))||18,khatmaPages:JSON.parse(localStorage.getItem('hidaya_khatma_pages')||'{}'),azkarProgress:JSON.parse(localStorage.getItem('hidaya_azkar')||'{}'),currentSurah:1,hadithCat:'الكل',azkarSubView:null,duaSubView:null,currentTasbih:0,tasbihCount:0};

(function(){const c=document.getElementById('stars');for(let i=0;i<80;i++){const s=document.createElement('div');s.className='star';s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*65}%;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px;animation-delay:${Math.random()*3}s;animation-duration:${2+Math.random()*3}s`;c.appendChild(s);}})();

function initApp(){
  applyLang();
  if(state.darkMode){document.body.classList.add('dark');document.getElementById('dark-toggle').classList.add('on')}
  document.documentElement.style.setProperty('--font-size',state.fontSize+'px');
  document.getElementById('font-size-val').textContent=state.fontSize;
  buildSurahList();buildTafsirList();buildJuzGrid();buildHadithFilters();buildHadithList();buildAzkarCategories();buildDuaCategories();buildKhatma();buildPrayerTimes();buildTasbih();buildStories();setDailyContent();buildLangList();buildReciters();
}

function buildLangList(){
  const list=document.getElementById('lang-list');
  list.innerHTML='';
  LANGUAGES.forEach(l=>{
    const div=document.createElement('div');
    div.className='lang-item'+(state.lang===l.code?' active':'');
    div.innerHTML=`<span class="flag">${l.flag}</span> <span>${l.name}</span>`;
    div.onclick=()=>{state.lang=l.code;localStorage.setItem('hidaya_lang',l.code);applyLang();toggleLangModal();};
    list.appendChild(div);
  });
  document.getElementById('lang-text').textContent=LANGUAGES.find(l=>l.code===state.lang).name;
}

function toggleLangModal(){document.getElementById('lang-modal').classList.toggle('show');}

function applyLang(){
  const t = i18n[state.lang] || i18n.en;
  const langInfo = LANGUAGES.find(l=>l.code===state.lang) || LANGUAGES[0];
  document.querySelectorAll('[data-i18n]').forEach(el => { if(t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n]; });
  document.documentElement.lang = state.lang;
  document.documentElement.dir = langInfo.dir;
  document.body.dir = langInfo.dir;
  document.getElementById('lang-text').textContent = langInfo.name;
  document.getElementById('search-surah-input').placeholder = t.search_surah;
  document.getElementById('search-hadith-input').placeholder = t.search_hadith;
  document.getElementById('search-tafsir-input').placeholder = t.search_surah;
  if (document.getElementById('surah-list').innerHTML) buildSurahList();
  if (document.getElementById('hadith-list').innerHTML) buildHadithList();
}

setTimeout(()=>{document.getElementById('splash').classList.add('shrink');setTimeout(()=>{document.getElementById('splash').style.display='none';document.getElementById('app').classList.add('show');initApp();setTimeout(()=>document.getElementById('dua-overlay').classList.add('show'),500);},800);},4000);
function closeDua(){document.getElementById('dua-overlay').classList.remove('show');}
function navigate(sec){document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));const el=document.getElementById('sec-'+sec);if(el)el.classList.add('active');document.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active',n.dataset.sec===sec));window.scrollTo({top:0,behavior:'smooth'});}
function setDailyContent(){const h=HADITHS[Math.floor(Math.random()*HADITHS.length)];document.getElementById('daily-hadith').textContent=h.text;const allAzkar=AZKAR_DATA.flatMap(c=>c.items);const d=allAzkar[Math.floor(Math.random()*allAzkar.length)];document.getElementById('daily-dhikr').textContent=d.text;}

function buildSurahList(filter=''){const list=document.getElementById('surah-list');list.innerHTML='';SURAHS.filter(s=>!filter||s.name.includes(filter)||String(s.id).includes(filter)).forEach(s=>{const div=document.createElement('div');div.className='surah-item';div.innerHTML=`<div class="surah-num">${s.id}</div><div class="surah-info"><h4>${s.name}</h4><div class="surah-meta"><span>${s.verses} آية</span><span class="surah-type ${s.type==='مكية'?'makki':'madani'}">${s.type}</span></div></div><i class="fas fa-chevron-left" style="color:var(--muted);font-size:14px"></i>`;div.onclick=()=>openSurah(s.id);list.appendChild(div);});}
function searchSurah(val){buildSurahList(val)}

async function openSurah(id){state.currentSurah=id;const s=SURAHS.find(x=>x.id===id);if(!s)return;document.getElementById('surah-title-bar').textContent=s.name;const content=document.getElementById('surah-content');content.innerHTML='<div style="text-align:center;padding:40px"><i class="fas fa-spinner fa-spin" style="font-size:40px;color:var(--gold)"></i></div>';navigate('surah');try{const res=await fetch(`https://api.alquran.cloud/v1/surah/${id}`);const data=await res.json();let html='';if(id!==9&&id!==1)html+='<div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>';html+='<div class="ayah-container">';data.data.ayahs.forEach((a,i)=>{html+=`<span class="ayah">${a.text}</span> <span class="ayah-num">${i+1}</span> <button class="tafsir-btn" onclick="loadTafsir(${id}, ${i+1}, this)">التفسير</button><div class="tafsir-box"></div> `});html+='</div>';content.innerHTML=html;}catch(e){content.innerHTML=`<div class="ayah-container" style="text-align:center;padding:60px"><i class="fas fa-quran" style="font-size:48px;color:var(--gold);margin-bottom:16px;display:block"></i><p>سورة ${s.name} - ${s.verses} آية</p><p style="margin-top:12px">تأكد من اتصالك بالإنترنت</p></div>`;}}
async function loadTafsir(surah, ayah, btn){const box=btn.nextElementSibling;if(box.style.display==='block'){box.style.display='none';return;}box.innerHTML='<i class="fas fa-spinner fa-spin"></i>';box.style.display='block';try{const res=await fetch(`https://api.alquran.cloud/v1/ayah/${surah}:${ayah}/ar.muyassar`);const data=await res.json();box.textContent=data.data.text;}catch(e){box.textContent='تعذر تحميل التفسير. تأكد من الإنترنت.';}}
function prevSurah(){if(state.currentSurah>1)openSurah(state.currentSurah-1)}
function nextSurah(){if(state.currentSurah<114)openSurah(state.currentSurah+1)}

function buildTafsirList(filter=''){const list=document.getElementById('tafsir-list');list.innerHTML='';SURAHS.filter(s=>!filter||s.name.includes(filter)||String(s.id).includes(filter)).forEach(s=>{const div=document.createElement('div');div.className='surah-item';div.innerHTML=`<div class="surah-num">${s.id}</div><div class="surah-info"><h4>${s.name}</h4><div class="surah-meta"><span>تفسير السورة</span></div></div><i class="fas fa-feather-pointed" style="color:var(--gold)"></i>`;div.onclick=()=>openTafsirSurah(s.id);list.appendChild(div);});}
function searchTafsirSurah(val){buildTafsirList(val)}
async function openTafsirSurah(id){const s=SURAHS.find(x=>x.id===id);document.getElementById('tafsir-title-bar').textContent=s.name;const content=document.getElementById('tafsir-content');content.innerHTML='<div style="text-align:center;padding:40px"><i class="fas fa-spinner fa-spin" style="font-size:40px;color:var(--gold)"></i></div>';navigate('tafsir-view');try{const res=await fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.muyassar`);const data=await res.json();let html='<div class="ayah-container">';data.data.ayahs.forEach((a,i)=>{html+=`<div style="margin-bottom:20px"><span class="ayah-num">${i+1}</span> <span class="ayah" style="font-size:20px">${SURAHS.find(x=>x.id===id).name}</span><p style="margin-top:10px;font-family:'Cairo';background:var(--bg);padding:10px;border-radius:8px;border-right:4px solid var(--primary-l)"><strong>التفسير:</strong> ${a.text}</p></div>`});html+='</div>';content.innerHTML=html;}catch(e){content.innerHTML='<p style="text-align:center">تعذر تحميل التفسير.</p>';}}

function buildJuzGrid(){const grid=document.getElementById('juz-main-grid');grid.innerHTML='';for(let i=1;i<=30;i++){const readCount=Object.keys(state.khatmaPages).filter(k=>{const pg=parseInt(k);const juz=Math.floor((pg-1)/20)+1;return juz===i&&state.khatmaPages[k]}).length;const pct=Math.round(readCount/20*100);const div=document.createElement('div');div.className='juz-card';div.innerHTML=`<div class="juz-num">${i}</div><div class="juz-name">${JUZ_NAMES[i-1]}</div><div style="font-size:12px;color:var(--muted)">20 صفحة</div><div class="juz-progress"><div class="juz-progress-fill" style="width:${pct}%"></div></div><div style="font-size:11px;color:var(--gold);margin-top:4px">${pct}%</div>`;div.onclick=()=>{const surahStarts=[1,2,2,3,4,5,6,7,8,9,11,12,14,16,18,20,22,25,27,29,32,36,39,43,47,51,58,66,78,92];openSurah(surahStarts[i-1]||1);};grid.appendChild(div);}}

function buildKhatma(){const c=document.getElementById('khatma-content');const totalPages=604;const readPages=Object.values(state.khatmaPages).filter(Boolean).length;const pct=Math.round(readPages/totalPages*100);const remaining=totalPages-readPages;c.innerHTML=`<div class="khatma-card"><h3 style="font-size:20px;margin-bottom:4px;color:var(--gold)">ختمة القرآن الكريم</h3><p style="opacity:.8;font-size:14px">تابع قراءتك اليومية</p><div class="khatma-progress"><div class="khatma-progress-fill" style="width:${pct}%"></div></div><div class="khatma-stats"><div class="khatma-stat"><div class="num">${readPages}</div><div class="label">مقروءة</div></div><div class="khatma-stat"><div class="num">${remaining}</div><div class="label">متبقية</div></div><div class="khatma-stat"><div class="num">${pct}%</div><div class="label">مكتمل</div></div></div></div><div class="card" style="cursor:default"><label style="font-weight:700;display:block;margin-bottom:10px">سجل صفحتك</label><div style="display:flex;gap:10px"><input type="number" id="page-input" placeholder="رقم الصفحة (1-604)" min="1" max="604" style="flex:1;padding:12px;border-radius:12px;border:1px solid var(--border);background:var(--card);color:var(--fg)"><button onclick="markPage()" style="padding:12px 20px;background:var(--gold);color:#fff;border:none;border-radius:12px;font-weight:700;cursor:pointer">تم القراءة</button></div></div><button onclick="resetKhatma()" style="width:100%;padding:12px;background:transparent;border:1px solid #E74C3C;color:#E74C3C;border-radius:12px;cursor:pointer;font-weight:600">بدء ختمة جديدة</button>`;}
function markPage(){const inp=document.getElementById('page-input');const pg=parseInt(inp.value);if(pg>=1&&pg<=604){state.khatmaPages[pg]=true;localStorage.setItem('hidaya_khatma_pages',JSON.stringify(state.khatmaPages));inp.value='';buildKhatma();buildJuzGrid();showToast('تم تسجيل الصفحة بنجاح ✅')}}
function resetKhatma(){if(confirm('هل أنت متأكد من بدء ختمة جديدة؟')){state.khatmaPages={};localStorage.setItem('hidaya_khatma_pages','{}');buildKhatma();buildJuzGrid();}}

function buildHadithFilters(){const c=document.getElementById('hadith-filters');c.innerHTML='';HADITH_CATEGORIES.forEach(cat=>{const btn=document.createElement('button');btn.className='pill'+(state.hadithCat===cat?' active':'');btn.textContent=cat;btn.onclick=()=>{state.hadithCat=cat;buildHadithFilters();buildHadithList();};c.appendChild(btn);});}
function buildHadithList(filter=''){const c=document.getElementById('hadith-list');c.innerHTML='';HADITHS.filter(h=>(state.hadithCat==='الكل'||h.category===state.hadithCat)&&(!filter||h.text.includes(filter)||h.narrator.includes(filter))).forEach(h=>{const div=document.createElement('div');div.className='hadith-card';div.innerHTML=`<div class="hadith-text">${h.text}</div><div class="hadith-meta"><span class="hadith-tag ${h.grade==='صحيح'?'sahih':'hasan'}">${h.grade}</span><span>${h.category}</span><button class="share-btn" onclick="shareHadith('${h.text.replace(/'/g, "\\'")}')"><i class="fas fa-share-nodes"></i> مشاركة</button></div><div class="hadith-source">${h.narrator} - ${h.source}</div>`;c.appendChild(div);});}
function searchHadith(val){buildHadithList(val)}
function shareHadith(text){if(navigator.share){navigator.share({title:'حديث شريف',text:text}).catch(()=>{});}else{navigator.clipboard.writeText(text);showToast('تم نسخ الحديث ✅');}}

function buildAzkarCategories(){const c=document.getElementById('azkar-categories-view');c.innerHTML='';AZKAR_DATA.forEach((cat,i)=>{const div=document.createElement('div');div.className='azkar-cat';div.innerHTML=`<i class="${cat.icon}" style="color:${cat.color}"></i><h4>${cat.cat}</h4>`;div.onclick=()=>{state.azkarSubView=i;buildAzkarList();};c.appendChild(div);});}
function buildAzkarList(){const catView=document.getElementById('azkar-categories-view');const listView=document.getElementById('azkar-list-view');catView.style.display='none';listView.style.display='block';const cat=AZKAR_DATA[state.azkarSubView];if(!cat)return;let html=`<button class="back-btn" onclick="backToAzkarCats()"><i class="fas fa-arrow-right"></i> الأقسام</button><h3 style="margin-bottom:16px;color:var(--primary)"><i class="${cat.icon}" style="color:${cat.color}"></i> ${cat.cat}</h3>`;cat.items.forEach((item,i)=>{const key=`azkar_${state.azkarSubView}_${i}`;const saved=state.azkarProgress[key]||0;const done=saved>=item.count;html+=`<div class="azkar-item"><div class="azkar-text">${item.name?`<strong style="color:var(--gold)">${item.name}:</strong> `:''}${item.text}</div><div style="font-size:12px;color:var(--muted);margin-bottom:8px">المصدر: ${item.source}</div><div class="azkar-count-area"><span style="font-size:14px;color:var(--muted)">التكرار: ${item.count}</span><div style="display:flex;align-items:center;gap:10px"><span class="count-display" id="cd_${key}">${done?'✅':item.count-saved}</span><button class="count-btn ${done?'count-done':''}" id="cb_${key}" onclick="countAzkar('${key}',${item.count})" ${done?'disabled':''}><i class="fas ${done?'fa-check':'fa-plus'}"></i></button></div></div></div>`;});listView.innerHTML=html;}
function backToAzkarCats(){document.getElementById('azkar-categories-view').style.display='';document.getElementById('azkar-list-view').style.display='none';}
function countAzkar(key,max){const curr=(state.azkarProgress[key]||0)+1;state.azkarProgress[key]=curr;localStorage.setItem('hidaya_azkar',JSON.stringify(state.azkarProgress));if(curr>=max){document.getElementById('cb_'+key).classList.add('count-done');document.getElementById('cb_'+key).innerHTML='<i class="fas fa-check"></i>';document.getElementById('cb_'+key).disabled=true;document.getElementById('cd_'+key).textContent='✅';showToast('تم إكمال الذكر ✅');}else{document.getElementById('cd_'+key).textContent=max-curr;}}

function buildDuaCategories(){const c=document.getElementById('dua-categories-view');c.innerHTML='';DUA_DATA.forEach((cat,i)=>{const div=document.createElement('div');div.className='azkar-cat';div.innerHTML=`<i class="${cat.icon}" style="color:${cat.color}"></i><h4>${cat.cat}</h4>`;div.onclick=()=>{state.duaSubView=i;buildDuaList();};c.appendChild(div);});}
function buildDuaList(){const catView=document.getElementById('dua-categories-view');const listView=document.getElementById('dua-list-view');catView.style.display='none';listView.style.display='block';const cat=DUA_DATA[state.duaSubView];if(!cat)return;let html=`<button class="back-btn" onclick="backToDuaCats()"><i class="fas fa-arrow-right"></i> الأقسام</button><h3 style="margin-bottom:16px;color:var(--primary)"><i class="${cat.icon}" style="color:${cat.color}"></i> ${cat.cat}</h3>`;cat.items.forEach((item,i)=>{html+=`<div class="dua-item"><div class="dua-text">${item.text}</div><div class="dua-source">المصدر: ${item.source}</div><div class="dua-meaning"><strong>الشرح:</strong> ${item.meaning}</div><div class="dua-actions"><button onclick="copyDua('${item.text.replace(/'/g, "\\'")}')"><i class="fas fa-copy"></i> نسخ</button><button onclick="shareDua('${item.text.replace(/'/g, "\\'")}')"><i class="fas fa-share-nodes"></i> مشاركة</button><button onclick="showToast('تمت الإضافة للمفضلة ✅')"><i class="fas fa-star"></i> تفضيل</button></div></div>`;});listView.innerHTML=html;}
function backToDuaCats(){document.getElementById('dua-categories-view').style.display='';document.getElementById('dua-list-view').style.display='none';}
function copyDua(text){navigator.clipboard.writeText(text);showToast('تم نسخ الدعاء ✅');}
function shareDua(text){if(navigator.share){navigator.share({title:'دعاء',text:text}).catch(()=>{});}else{navigator.clipboard.writeText(text);showToast('تم نسخ الدعاء ✅');}}

function buildTasbih(){const pills=document.getElementById('tasbih-pills');pills.innerHTML='';TASBIH_OPTIONS.forEach((t,i)=>{const btn=document.createElement('button');btn.className='pill'+(state.currentTasbih===i?' active':'');btn.textContent=t;btn.onclick=()=>{state.currentTasbih=i;state.tasbihCount=0;document.getElementById('tasbih-display').textContent='0';document.getElementById('tasbih-current-name').textContent=t;buildTasbih();};pills.appendChild(btn);});document.getElementById('tasbih-current-name').textContent=TASBIH_OPTIONS[state.currentTasbih];}
function incrementTasbih(){state.tasbihCount++;document.getElementById('tasbih-display').textContent=state.tasbihCount;if(state.tasbihCount%33===0)showToast('سبحان الله وبحمده ✨');}
function resetTasbih(){state.tasbihCount=0;document.getElementById('tasbih-display').textContent='0';showToast('تم التصفير');}

function buildStories(){const c=document.getElementById('stories-content');c.innerHTML='';PROPHET_STORIES.forEach(s=>{const div=document.createElement('div');div.className='story-card';div.innerHTML=`<h3><i class="${s.icon}" style="color:var(--gold)"></i> ${s.name}</h3><p style="color:var(--muted)">${s.intro}</p><div class="story-content"><h4 style="color:var(--primary);margin-bottom:8px">أحداث القصة:</h4><p style="line-height:2;margin-bottom:15px">${s.events}</p><h4 style="color:var(--primary);margin-bottom:8px">الآيات المتعلقة:</h4><p class="amiri" style="font-size:18px;color:var(--gold);margin-bottom:15px">${s.verses}</p><h4 style="color:var(--primary);margin-bottom:8px">الدروس والعبر:</h4><p style="line-height:2">${s.lessons}</p></div>`;div.onclick=(e)=>{if(e.target.tagName!=='BUTTON'){const content=div.querySelector('.story-content');content.classList.toggle('show');}};c.appendChild(div);});}

async function buildPrayerTimes(){const c=document.getElementById('prayer-content');c.innerHTML='<div style="text-align:center;padding:40px"><i class="fas fa-spinner fa-spin" style="font-size:40px;color:var(--gold)"></i><p style="margin-top:10px">جاري تحديد الموقع...</p></div>';try{if(navigator.geolocation){navigator.geolocation.getCurrentPosition(async pos=>{const res=await fetch(`https://api.aladhan.com/v1/timings?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&method=4`);const data=await res.json();renderPrayer(data.data);},async ()=>{const res=await fetch(`https://api.aladhan.com/v1/timings?latitude=21.4225&longitude=39.8262&method=4`);const data=await res.json();renderPrayer(data.data);});}else{const res=await fetch(`https://api.aladhan.com/v1/timings?latitude=21.4225&longitude=39.8262&method=4`);const data=await res.json();renderPrayer(data.data);}}catch(e){c.innerHTML='<p style="text-align:center">تعذر تحميل المواعيد. تأكد من اتصالك بالإنترنت.</p>';}}
function renderPrayer(data){const t=data.timings;const h=data.date.hijri;const g=data.date.gregorian;const prayers=[{name:'الفجر',time:t.Fajr},{name:'الشروق',time:t.Sunrise},{name:'الظهر',time:t.Dhuhr},{name:'العصر',time:t.Asr},{name:'المغرب',time:t.Maghrib},{name:'العشاء',time:t.Isha}];const now=new Date();const nowMins=now.getHours()*60+now.getMinutes();let nextP=prayers.find(p=>{const[h,m]=p.time.split(':').map(Number);return h*60+m>nowMins})||prayers[0];let html=`<div class="prayer-hero"><div class="hijri-date" style="background:transparent;border:none;color:#fff;padding:0;margin-bottom:10px"><h3 style="color:var(--gold)">${h.day} ${h.month.ar} ${h.year} هـ</h3><p style="font-size:13px;color:var(--gold-l)">${g.date} ميلادي</p></div><div class="prayer-next">الصلاة القادمة</div><div class="prayer-time-big">${nextP.name}</div><div class="prayer-countdown" id="countdown">${nextP.time}</div><div style="margin-top:15px;font-size:14px;color:var(--gold-l)"><i class="fas fa-compass"></i> اتجاه القبلة: 0° (تقريبي)</div></div><div class="prayer-grid">`;prayers.forEach(p=>{const isNext=p.name===nextP.name;html+=`<div class="prayer-item ${isNext?'active-prayer':''}"><div class="prayer-name">${p.name}</div><div class="prayer-time-val">${p.time}</div></div>`;});html+='</div>';document.getElementById('prayer-content').innerHTML=html;}

// ===== Audio Library Logic (تم الإصلاح بالكامل وإضافة padStart) =====
function buildReciters(filter = '') {
  const grid = document.getElementById('reciter-grid');
  grid.innerHTML = '';
  document.getElementById('reciter-view').style.display = 'block';
  document.getElementById('surah-view').style.display = 'none';
  RECITERS.filter(r => !filter || r.name.includes(filter)).forEach((r, index) => {
    const card = document.createElement('div');
    card.className = 'reciter-card';
    card.innerHTML = `
      <div class="reciter-img-container" onclick="openReciterSurahs(${index})">
        <img src="${r.image}" alt="${r.name}" onerror="this.src='https://via.placeholder.com/300x300/0A3D2E/FFFFFF?text=${encodeURIComponent(r.name)}'">
        <div class="reciter-play-overlay"><i class="fas fa-headphones"></i></div>
      </div>
      <div class="reciter-info"><h4>${r.name}</h4></div>
    `;
    grid.appendChild(card);
  });
}
function searchReciter(val) { buildReciters(val); }
function openReciterSurahs(index) {
  currentReciterIndex = index;
  document.getElementById('reciter-view').style.display = 'none';
  document.getElementById('surah-view').style.display = 'block';
  buildAudioSurahList();
}
function backToReciters() {
  document.getElementById('reciter-view').style.display = 'block';
  document.getElementById('surah-view').style.display = 'none';
}
function buildAudioSurahList(filter = '') {
  const list = document.getElementById('audio-surah-list');
  list.innerHTML = '';
  SURAHS.filter(s => !filter || s.name.includes(filter) || String(s.id).includes(filter)).forEach(s => {
    const div = document.createElement('div');
    div.className = 'surah-item';
    div.innerHTML = `
      <div class="surah-num">${s.id}</div>
      <div class="surah-info">
        <h4>${s.name}</h4>
        <div class="surah-meta"><span>${s.verses} آية</span><span class="surah-type ${s.type==='مكية'?'makki':'madani'}">${s.type}</span></div>
      </div>
      <i class="fas fa-play" style="color:var(--gold);font-size:18px"></i>
    `;
    div.onclick = () => playStickySurah(s.id);
    list.appendChild(div);
  });
}
function searchAudioSurah(val) { buildAudioSurahList(val); }

function playStickySurah(surahId) {
  currentSurahId = surahId;
  const surah = SURAHS.find(s => s.id === surahId);
  const reciter = RECITERS[currentReciterIndex];
  const audio = document.getElementById('main-audio');
  const surahStr = String(surahId).padStart(3, '0'); // إضافة الأصفار اللازمة
  audio.src = `${reciter.server}${surahStr}.mp3`;
  
  document.getElementById('sp-img').src = reciter.image;
  document.getElementById('sp-surah-name').textContent = surah.name;
  document.getElementById('sp-reciter-name').textContent = reciter.name;
  document.getElementById('sticky-player').classList.add('show');
  
  audio.play().then(() => {
    document.getElementById('sp-play-btn').innerHTML = '<i class="fas fa-pause"></i>';
  }).catch(e => {
    showToast(i18n[state.lang].error_audio);
    document.getElementById('sp-play-btn').innerHTML = '<i class="fas fa-play"></i>';
  });
}
function toggleStickyPlay() {
  const audio = document.getElementById('main-audio');
  const btn = document.getElementById('sp-play-btn');
  if (audio.paused) { audio.play(); btn.innerHTML = '<i class="fas fa-pause"></i>'; } 
  else { audio.pause(); btn.innerHTML = '<i class="fas fa-play"></i>'; }
}
function nextStickySurah() { if (currentSurahId < 114) { playStickySurah(currentSurahId + 1); } }
function prevStickySurah() { if (currentSurahId > 1) { playStickySurah(currentSurahId - 1); } }
function closeStickyPlayer() { document.getElementById('sticky-player').classList.remove('show'); document.getElementById('main-audio').pause(); }
document.getElementById('main-audio').addEventListener('timeupdate', function() {
  const a = this; const pct = (a.currentTime / a.duration) * 100 || 0;
  document.getElementById('sp-fill').style.width = pct + '%';
  document.getElementById('sp-current-time').textContent = formatTime(a.currentTime);
  document.getElementById('sp-duration').textContent = formatTime(a.duration);
});
function seekSticky(e) {
  const a = document.getElementById('main-audio');
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left; const pct = x / rect.width;
  a.currentTime = a.duration * pct;
}
function formatTime(s) { const m = Math.floor(s / 60); const sec = Math.floor(s % 60); return m + ':' + (sec < 10 ? '0' : '') + sec; }

function toggleDark(){state.darkMode=!state.darkMode;document.body.classList.toggle('dark');document.getElementById('dark-toggle').classList.toggle('on');localStorage.setItem('hidaya_dark',state.darkMode);}
function changeFontSize(amt){state.fontSize=Math.max(14,Math.min(28,state.fontSize+amt));document.documentElement.style.setProperty('--font-size',state.fontSize+'px');document.getElementById('font-size-val').textContent=state.fontSize;localStorage.setItem('hidaya_font',state.fontSize);}
function toggleNotif(el){el.classList.toggle('on');showToast(el.classList.contains('on')?'تم تفعيل التنبيهات':'تم إيقاف التنبيهات')}
function clearData(){if(confirm('هل أنت متأكد من مسح جميع البيانات المحفوظة؟')){localStorage.clear();location.reload();}}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);}
</script>
</body>
</html>
