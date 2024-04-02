import { Primer4 } from "./Primer/Primer4"
import { Primer5 } from "./Primer/Primer5/Primer5"


const Props = () => {
    return (
  <div>
<h1 className="title">Props</h1>
   
<p><b>1. </b> Что такое пропсы и зачем они нужны</p>
<p><b>2. </b> Передача пропсов компонентам</p>
<p><b>3. </b> Доступ к пропсам внутри компонентов</p>

<h2 className="title">Что такое пропсы и зачем они нужны</h2>
<p>Пропсы (<b>сокращение от properties</b>) - это данные, 
  которые передаются в компоненты React для настройки их поведения и внешнего вида. 
  Они позволяют передавать информацию из родительского компонента в дочерний компонент.</p>

<p>Дочерний компонент может читать эти <b className="redname">props</b> и использовать их, 
  например, для вывода данных на экран или для изменения своего поведения.</p>

<h2 className="title">Передача пропсов компонентам</h2>

<p>Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX. Например,
<b className="redname"> ChildComponent message="Привет, МИР!"</b>  передает пропс 
<b className="redname"> message</b> со значением <b className="redname">"Привет, МИР!" </b> 
в компонент <b className="redname">ChildComponent</b>.</p>
<Primer4/>
<p>В этом примере родительский компонент передает сообщение <b>"Привет, МИР!" </b>
  в дочерний компонент через <b className="redname">props</b>. Дочерний компонент выводит это сообщение на экран.</p>

<h2 className="title">Доступ к пропсам внутри компонентов</h2>

<p>В функциональных компонентах пропсы доступны как параметр функции компонента. 
 </p>
<p>В классовых компонентах пропсы доступны через <b className="redname">this.props. </b> 
Например, <b className="redname">this.props.message</b>.</p>

<Primer5 />

<p><b className="redname">Props </b> можно использовать для передачи 
<b>любых данных, включая строки, числа, массивы, объекты и функции</b>. </p>
<p>Пропсы являются <b>неизменяемыми </b>(<b>immutable</b>), их нельзя изменять напрямую.</p>
<p>
<b className="redname">this.props.name = "Vasya"</b> то есть вот так изенить пропс name НЕЛЬЗЯ!<br />
Однако, 
можно использовать <b>состояние компонента (state)</b> для изменения пропсов. 
</p>
<p>Пропсы в React играют важную роль в передаче данных и настройке компонентов. 
Они позволяют создавать  переиспользуемые компоненты. 
Правильное использование пропсов способствует 
лучшей организации кода и разделению ответственности между компонентами.</p>

<h2 className="title">ИТОГО:</h2>

<p><b>1. </b><b>Что такое props в React?</b><br />
<b className="redname">Props </b> - это объекты, которые передаются в компоненты как параметры. 
Они используются для передачи данных из родительского компонента в дочерний.
</p> 

<p><b>2. </b><b>Как передавать props в компоненты?</b><br />
<b className="redname">Props </b> можно передавать в компоненты как атрибуты. 
В родительском компоненте нужно указать имя атрибута и значение, 
которое будет передано в дочерний компонент.
</p>

<p><b>3. </b><b>Как читать props в компоненте?</b><br />
<b className="redname">Props </b> можно читать в компоненте через объект <b className="redname">props </b>. 
Этот объект содержит все переданные в компонент атрибуты.
</p>

<p><b>4. </b><b>Какие данные можно передавать через props?</b><br />
<b className="redname">Props </b> можно использовать для передачи любых данных, включая строки, 
числа, массивы, объекты и функции.
</p>

<p><b>5. </b><b>Можно ли менять пропсы?</b><br />
Нельзя.
</p>

<p><b>6. </b><b>Что делать, если нужно изменить данные в дочернем компоненте?</b><br />
Если нужно изменить данные в дочернем компоненте, следует использовать состояние (state). 
Про него поговорим дальше.
</p>
<p>Если у тебя есть какие-либо вопросы, не стесняйся задавать их.</p>

  </div>

    )
}
export { Props }  