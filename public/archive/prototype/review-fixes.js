// Investment prototype: disclose unavailable content and use explicit calculation assumptions.
document.querySelectorAll('.module button').forEach(b=>{b.disabled=true;b.textContent='内容待完善';b.onclick=null});
document.querySelector('.dashboard').innerHTML='<h3>投资版 · 内容完善中</h3><p>六个模块为规划目录，暂不记录完成进度。宏观知识请进入独立的基础知识版。</p><a href="financial-basics.html">进入宏观基础 →</a>';
document.querySelectorAll('.stat')[1].innerHTML='<b>4</b><span>已提供的知识卡片</span>';
document.querySelectorAll('.stat')[2].innerHTML='<b>2</b><span>交互示例：复利与权重</span>';
document.querySelector('.b4').style.bottom='43%';
document.querySelector('.risk-stage').nextElementSibling.textContent='个股波动更大，但预期收益不一定更高。非系统性风险可通过分散降低；集中持股可能放大永久损失。横轴仅示意波动，不涵盖所有风险。';
document.querySelector('.donut').style.setProperty('background','conic-gradient(#174f3d 0 45%,#78a9df 45% 75%,#f39a5d 75% 90%,#d7d7d0 90%)');
const style=document.createElement('style');style.textContent='.donut:after{content:"假设组合"}.module button:disabled{opacity:.5;cursor:default}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}';document.head.append(style);
document.querySelectorAll('.alloc-item span')[1].textContent='高质量、短久期债券 · 通常有助降低波动';
document.querySelectorAll('.alloc-item span')[2].textContent='黄金等 · 无现金流，分散效果不保证';
document.querySelector('.allocation .legend').textContent+=' 债券存在久期、信用及通胀风险，股债也可能同跌。黄金受实际利率、汇率与避险需求等影响。';
document.querySelector('#riskScore').textContent='不作量化评分';document.querySelector('#riskLabel').textContent='仅展示权重';
document.querySelector('#riskScore').previousElementSibling.textContent='组合风险';
document.querySelectorAll('.weight').forEach(e=>e.oninput=()=>{const els=[...document.querySelectorAll('.weight')],total=els.reduce((s,x)=>s+Number(x.value),0);els.forEach(x=>{x.nextElementSibling.textContent=total?Math.round(x.value/total*100)+'%':'—';x.setAttribute('aria-valuetext',`原始权重 ${x.value}，归一化占比 ${x.nextElementSibling.textContent}`)});document.querySelector('#riskScore').textContent='不作量化评分';document.querySelector('#riskLabel').textContent='仅展示权重'});
document.querySelector('.sim-box p').textContent='滑杆为原始权重，右侧为归一化占比；不代表波动率或最大回撤。';
document.querySelector('.challenge').innerHTML='<h4>风险不只有波动</h4><p>永久损失、流动性、汇率、杠杆和通胀都会影响结果。下跌 50% 后需要上涨 100% 才能回本。</p>';
const grid=document.querySelector('.calc-grid');grid.insertAdjacentHTML('beforeend','<div class="field"><label for="fee">年费用率（%）</label><input id="fee" type="number" min="0" max="10" step="0.1" value="1"></div><div class="field"><label for="inflation">年通胀假设（%）</label><input id="inflation" type="number" min="-5" max="20" step="0.1" value="3"></div>');
const summary=document.createElement('div');summary.className='legend';grid.parentElement.append(summary);
function recalc(){const val=(id,min,max)=>Math.min(max,Math.max(min,Number(document.querySelector(id).value)||0));const p=val('#principal',0,1e9),m=val('#monthly',0,1e7),y=val('#years',1,60),rate=val('#rate',-50,50),fee=val('#fee',0,10),inf=val('#inflation',-5,20);const fv=r=>{const a=Math.pow((1+r/100)*(1-fee/100),1/12),n=y*12;return Math.abs(a-1)<1e-10?p+m*n:p*a**n+m*(a**n-1)/(a-1)};const base=fv(rate);document.querySelector('#future').textContent=money(base);document.querySelector('#gain').textContent=money(base-p-m*y*12);summary.innerHTML=`实际购买力（按今日币值）：${money(base/(1+inf/100)**y)}<br>低收益情景 ${money(fv(Math.max(-50,rate-3)))} · 基准 ${money(base)} · 高收益情景 ${money(fv(Math.min(50,rate+3)))}<br>输入为有效年化收益率，扣除年度比例费用后换算月收益，按月复利、月末投入；名义终值含费、税前。情景为收益假设 ±3 个百分点，不是概率区间或预测。固定名义月投入，不随通胀增长。`}
document.querySelectorAll('.calc-grid input').forEach(e=>{e.oninput=recalc;e.addEventListener('change',recalc)});recalc();
