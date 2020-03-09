
import React from 'react';
import imageMo1 from './Mo1.png'
import imageMo2 from './Mo2.png'
import imageMo3 from './Mo3.png'
import imageMo4 from './Mo4.png'

const Mo = () => (
  <div>
    <div>
Молибден (№ 42, Относительная атомная масса равна 96) — это d-элемент 5 периода VIБ группы Периодической системы химических элементов Д.И.Менделеева. Электронная конфигурация валентных электронов атома молибдена — 4d₅5s₁, проявляет переменные степени окисления от +2 до +6. Молибден — единственный элемент из тяжелых металлов и из всех элементов пятого периода, который является "металлао жизни". Возможная причина — большое сродство к кислороду. Несмотря на многообразие степеней окисления молибдена, в организме доминируют оксокомплексы Мо(VI):
[MoO(оксалат)(Н2О)2О2]2–    или [MoO<sub>3</sub>(ОН)<sub>2</sub>] и, поэтому, входит в состав ферментов, обеспечивающих перенос оксогрупп.
</div>
      <div>
В биокомплексах молибден образует связи с гидроксильной, тиольной и карбоксильной группами биолигандов. Атомы молибдена способны образовывать между собой кислородсодержащие (Мо–О –Мо)  или серосодержащие мостики (Мо–S–Мо), а также образовывать ковалентные полярные связи с другими атомами металлов (Fe–Mo)
В организме взрослого человека содержится около 9 мг молибдена, из них 5 мг - в костях, 2 мг - в печени. С пищей человек потребляет 0,2 – 0,3 мг в сутки.
</div>
      <div>
Свойства и биологическая роль молибдена и его соединений:
</div>
      <div>
Молибден, образуя ковалентную полярную связь с атомом железа, входит в состав активного центра ферментов нитрогеназы, которые входят в состав клеток архей и бактерий, осуществляя процесс фиксации атмосферного азота.
</div>
<div>
        <img src={imageMo1} alt="imageMo1" height={200} style={{ padding: 40 }} />
  </div>
  <div>
Нитратредуктазы, в составе которых входят атомы молибдена, катализируют восстановление нитрата до нитрита у растений и микроорганизмов.
</div>
<div>
        <img src={imageMo2} alt="imageMo2" height={200} style={{ padding: 40 }} />
  </div>
      <div>
При избыточном поступлении молибдена в организм человека происходит активация синтеза ксантиноксидазы (КОКС), которая катализирует окисление ксантина до мочевой кислоты.
</div>
      <div>
                                       КОКС
                                       </div>
      <div>
Ксантин + О<sub>2</sub> + Н<sub>2</sub>О  -----------→ Мочевая кислота + Н<sub>2</sub>О<sub>2</sub>.
В результате увеличивается образование мочевой кислоты и возникает заболевание “молибденовая подагра” (эндемическая подагра).
</div>
<div style={{ padding: 40 }}>
        <div style={{ display: 'inline' }}>
          <img src={imageMo3} alt="imageMo3" height={150} />
          <img src={imageMo4} alt="imageMo4" height={150} />
        </div>
      </div>
      <div>
Токсическая доза молибдена для человека составляет 5 мг, а летальная доза: 50 мг.

          </div>
  </div>

);

export default Mo;
