import { Primer18 } from "./Primer/Primer18"
import { Primer19 } from "./Primer/Primer19"
import { Primer20 } from "./Primer/Primer20"
import { Primer21 } from "./Primer/Primer21"
import { Primer22 } from "./Primer/Primer22"


const Events = () => {
    return (
  <div>
<h1 className="title">Events и как работать с ними</h1>

  <p>В React события (events) являются важной частью взаимодействия с пользователем. 
    Они позволяют обрабатывать действия пользователя, такие как клики, наведение, 
    отправка формы и другие. </p> 
   
<p>Вот <b>пять наиболее часто используемых событий</b> в React и примеры их применения:</ p>
<p><b>1. onClick (Клик)</b>:<br />
Событие <b className="redmame">onClick</b> возникает при клике на элементе. 
Это одно из наиболее распространенных событий в React.</p>
<Primer18 />
<p><b>2. onChange (Изменение)</b>: <br />
Событие <b className="redname">onChange</b> возникает при изменении значения элемента формы, 
такого как текстовое поле (<b className="redname">input</b>), 
флажок (<b className="redname">checkbox</b>) или выбор элемента списка (<b className="redname">radio</b>).</p>
<Primer19 />
<p>В React, параметр <b className="redname">event </b>в callback-функции представляет объект события, 
  который генерируется при изменении значения элемента формы или компонента. 
  <b className="redname">event.target.value</b> содержит текущее значение <b className="redname">input</b> элемента.</p>
<p><b>3. onSubmit (Отправка формы)</b>:<br />
Событие <b className="redname">onSubmit</b> возникает при отправке формы. 
Оно позволяет выполнить действия, связанные с отправкой данных формы на сервер.</p>
<Primer20 />
<p><b>4. onMouseOver (Наведение курсора)</b>:<br />
Событие <b className="redname">onMouseOver</b> возникает, когда курсор наводится на элемент. 
Оно может использоваться для 
отображения дополнительной информации или изменения состояния компонента при наведении.</p>
<Primer21 />
<p><b>5. onKeyDown (Нажатие клавиши)</b>:<br />
Событие <b className="redname">onKeyDown</b> возникает при нажатии клавиши на клавиатуре. Оно позволяет реагировать 
на определенные комбинации клавиш или выполнять действия на основе нажатых клавиш.</p>
<Primer22 />
<p>Конечно, это только <b>НЕСКОЛЬКО ПРИМЕРОВ</b> популярных событий в React. </p>
<p>Существует множество других событий, таких как <b className="redname">onFocus</b>, 
<b className="redname"> onBlur</b>,<b className="redname"> onScroll</b> и т. д., 
которые могут быть использованы в зависимости от конкретных потребностей твоего приложения.</p>
<p>В Redev я не хочу уделять этому большое количество времени, по этому, 
если есть желание углубиться, вот тебе ссылки на документацию</p>


  </div>

    )
}
export { Events }  