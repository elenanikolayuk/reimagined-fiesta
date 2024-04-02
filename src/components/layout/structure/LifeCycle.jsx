import { MyComponent } from "./Primer/Primer12"
import { Primer13 } from "./Primer/Primer13"
import WillUnmountExample from "./Primer/Primer14"
import Primer15 from "./Primer/Primer15"
import Primer16 from "./Primer/Primer16"
import Primer17 from "./Primer/Primer17"


const LifeCycle = () => {
    return (
  <div>
<h1 className="title">LifeCycle (useEffect)</h1>
  <p className="redname">LifeCycle === Жизненный цикл</p>
  <p>Представь, что у тебя есть робот, который умеет делать разные действия, например, 
    ходить, говорить и танцевать. Когда ты включаешь этого робота, 
    он начинает выполнять определенные шаги в правильной последовательности: в
    ключается, говорит "Привет!", начинает двигаться и танцевать.</p>
   
   <p>Точно так же в React у компонентов есть свои "шаги", которые они проходят, когда создаются, 
    обновляются или удаляются. Эти шаги называются <b className="redname">"жизненным циклом"</b> компонента.</p>
  <p><b>Например, у компонента есть специальные моменты, когда он:</b></p>
  <p>
<b>- </b> рождается (это как включение робота)<br />
<b>- </b> обновляется (как если бы робот начал выполнять другие действия)<br />
<b>- </b> умирает (как если бы робот выключили).</p>

<p><b>Так что <b className="redname">"жизненный цикл"</b> в React - это набор этапов, 
  через которые компонент проходит, чтобы правильно работать на странице.</b> </p>
  
  <p>Ты можешь использовать эти этапы, чтобы выполнять разные действия, например, загружать данные с сервера, обновлять информацию на странице или очищать ресурсы, когда компонент больше не нужен.</p>
  <p>В предыдущих версиях React использовался классовый компонент и его методы жизненного цикла. Однако, с появлением React Hooks в React 16.8, функциональные компоненты также получили новые методы жизненного цикла с использованием хуков.</p>
  
  <h2 className="title">Методы жизненного цикла в React можно разделить на следующие группы:</h2>
<p><b>1. </b> <b>Методы монтирования (Mounting Methods):<br />
    - <b className="redname">constructor()</b><br />
    - <s><b className="redname">static getDerivedStateFromProps()</b></s><br />
    - <b className="redname">render()</b><br />
    - <b className="redname">componentDidMount()</b></b></p>
  
<p><b>2. </b> <b>Методы обновления (Updating Methods):<br />
- <b className="redname">shouldComponentUpdate()</b><br />
- <b className="redname">render()</b><br />
- <s><b className="redname">getSnapshotBeforeUpdate()</b></s><br />
- <b className="redname">componentDidUpdate()</b> 
    </b></p>

<p><b>3. </b><b>Методы размонтирования (Unmounting Methods):<br />
- <b className="redname">componentWillUnmount()</b>
    </b></p>

<p><b>4. </b><b>Методы обработки ошибок (Error Handling Methods):<br />
- <b className="redname">componentDidCatch()`</b>
    </b></p>

    <img src="https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe443ca68-35e1-4312-ab14-e61fc723ecb7%2FUntitled.jpeg?table=block&id=1772801b-eb6b-4de5-b55a-51d1af05c2c0&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=2000&userId=&cache=v2"
   alt='' width="500" ></img>

<h2 className="title">Жизненный цикл классовых компонентов:</h2>

<p><b>1. </b><b>Mounting</b>(Монтирование):</p> 
    <p>
      <b>- </b><b className="redname">constructor()</b>: Вызывается при создании экземпляра компонента. 
    Используется для <b>инициализации состояния</b> и <b>привязки методов</b>.<br />
    <b>- </b><b className="redname">render()</b>: Отрисовывает компонент и возвращает React элементы.<br />
    <b>- </b><b className="redname">componentDidMount()</b>: Вызывается <b>после рендеринга</b>
    компонента и его добавления в DOM. Используется для выполнения запросов к серверу, 
    подписки на события и других побочных эффектов.
</p>
<p><b>Пример:</b></p>
<MyComponent />

<p><b>2. </b><b>Updating </b>(Обновление):</p>
    <p><b>- </b><b className="redname">shouldComponentUpdate(nextProps, nextState)</b>: 
    Вызывается перед обновлением компонента. 
    Используется для оптимизации перерисовки компонента путем возврата <b>false</b>, 
    если обновление не требуется.<br />
    <b>- </b><b className="redname">render()</b>: Отрисовывает компонент и возвращает React элементы.<br />
    <b>- </b><b className="redname">componentDidUpdate(prevProps, prevState)</b>: 
    Вызывается <b>после обновления компонента и его рендеринга</b>. 
    Используется для выполнения дополнительных действий после обновления компонента, 
    например, для выполнения запросов к серверу на основе новых пропсов.</p>
    <p><b>Пример:</b></p>
<Primer13 />

<p>
<b>3. </b><b>Unmounting</b> (Размонтирование):</p>
<p><b>- </b><b className="redname">componentWillUnmount()</b>: 
Вызывается <b>перед удалением компонента из DOM</b>. 
Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.
</p>
<p><b>Пример:</b></p>
<WillUnmountExample />

<p><b>4. </b><b>Error Handling</b> (Обработка ошибок):</p>
   <p><b>- </b> <b className="redname">componentDidCatch(error, info)</b>: 
   Вызывается при возникновении ошибки в дочерних компонентах. 
    Используется для отлавливания и обработки ошибок.</p>
    <p><b>Пример:</b></p>
<Primer15 />

<h2 className="title">Жизненный цикл функциональных компонентов:</h2>

<p><b className="redname">useEffect</b> - это хук в React, предназначенный для работы с 
методами жизненного цикла в функциональных компонентах. 
По сути вот <b>ОДИН ТАКОЙ ХУК</b> заменяет <b>ОСНОВНЫЕ</b> методы жизненного цикла.</p>

<p><b>- </b><b>Первый параметр</b>: <b>Функция</b>, 
  которая должна выполниться при монтировании компонента и при каждом обновлении.</p>
<p><b>- </b><b>Второй параметр</b>: <b>Массив зависимостей</b> определяет, 
  на что конкретно должен реагировать <b className="redname">useEffect</b>. Если массив пуст, 
  <b className="redname">useEffect</b> выполняется только при монтировании и размонтировании. 
  Если в массиве указаны определенные значения, 
  то <b className="redname">useEffect</b> будет выполняться только тогда, когда эти значения изменяются.</p>

<p><b>1. </b><b>Mounting</b>(Монтирование):</p>
<p><b>- </b><b className="redname">useEffect(() = {}, [])</b>: Заменяет 
<b className="redname">componentDidMount()</b> Выполняет побочные эффекты только один раз после монтирования. 
    Передавая пустой массив зависимостей [], 
    можно сделать хук <b className="redname">useEffect</b> аналогом <b className="redname">componentDidMount</b>.</p>

  <p><b>2. </b><b>Updating</b>(Обновление):</p> 
    <p><b>- </b><b className="redname">useEffect(() = {}, [dependency])</b>: 
    Заменяет <b className="redname"> componentDidUpdate()</b>. 
    Позволяет указать зависимость для выполнения функции 
    <b>только при изменении определенных props или state</b>.  
    Что передашь, за тем и будет следить 🤔 и при изменении вызовет функцию.<br />
    <b>- </b> <b className="redname">useEffect(() = {})</b>: 
    Выполняет функцию после каждого рендеринга компонента. 
    Отрабатывает как  <b className="redname"> componentDidMount()</b> и 
    <b className="redname"> componentDidUpdate()</b>
</p>

<p><b>3. </b><b>Unmounting</b>(Размонтирование):</p>
   <p><b>- </b><b className="redname">useEffect(() = () = {})</b>: 
   Заменяет <b>componentWillUnmount()</b>. 
   Выполняет очистку и отписку от побочных эффектов при размонтировании (удалении из DOM) компонента.</p> 
<Primer16 />
<p>В этом примере <b className="redname">useEffect</b> выполняется при монтировании 
  компонента и возвращает функцию, которая будет выполнена при размонтировании. 
  Так как второй параметр <b className="redname">seEffect </b>u- это пустой массив зависимостей [], 
он не будет срабатывать при обновлении состояний.</p>
<Primer17 />
<p>В этом примере <b className="redname">useEffect</b> выполняется при изменении значения <b className="redname">count </b>, 
  так как <b className="redname">count </b> является зависимостью, переданной в массиве <b className="redname">[count]</b>. 
  Когда count изменяется, <b className="redname">useEffect</b> обновляет состояние <b className="redname">message</b>, 
  отображая новое сообщение о счетчике.</p>

  </div>

    )
}
export { LifeCycle }  