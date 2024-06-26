
const ReactRouter = () => {
    return (
  <div>
    <h1 className="title">Роутинг в React с помощью React Router V6</h1>
    <h2 className="title">Значение роутинга в веб-приложениях</h2>

<p> Роутинг играет важную роль в разработке веб-приложений, 
    обеспечивая навигацию и переходы между различными страницами 
    и разделами приложения. </p>
<p>Основная цель роутинга в веб-приложениях заключается в том, 
<b>чтобы позволить пользователям перемещаться по 
различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ</b> страницы. 
Вместо того, чтобы каждый раз отправлять запрос 
на сервер и загружать новую страницу, 
роутинг позволяет <b>динамически</b> обновлять только необходимые 
компоненты или данные в соответствии с выбранным маршрутом.
</p>
<p>Это создает более плавный пользовательский опыт, 
уменьшает время загрузки и позволяет разработчикам создавать 
богатые и интерактивные приложения. </p>
<p>Кроме того, роутинг обеспечивает возможность передачи параметров через URL, 
что позволяет приложению динамически адаптироваться к 
разным условиям и сценариям использования. Например, 
приложение может отображать разные данные или компоненты на основе параметров маршрута, 
таких как идентификатор пользователя или идентификатор записи.</p>

<h2  className="title">Введение в React Router Dom v6</h2>

<p>Одним из ключевых аспектов введения в <b> React Router Dom v6 </b>
является понимание его основных компонентов и их роли в реализации роутинга. </p>

<h4 className="title">Вот ОСНОВНЫЕ КОМПОНЕНТЫ, которые присутствуют в react-router-dom v6:</h4>

<p><b>1. </b><b className="redname">BrowserRouter</b>: Это компонент, который оборачивает 
ваше приложение 
и предоставляет контекст для маршрутизации. 
Он используется для настройки основного маршрутизатора в приложении.</p>

<p><b>2. </b><b className="redname">Routes</b>: Это компонент, который содержит определения 
маршрутов и соответствующих им компонентов. 
Вы определяете маршруты внутри компонента Routes, 
используя элемент Route.</p>

<p><b>3. </b><b className="redname">Route</b>: Компонент Route используется для определения 
отдельных маршрутов и связанных с ними компонентов. 
Вы можете определить маршруты с помощью элемента Route, 
указывая путь URL и связанный с ним компонент, 
который будет отображаться при совпадении маршрута.</p>

<p><b>4. </b><b className="redname">Link</b> и <b className="redname">NavLink</b>: Компоненты 
Link и NavLink используются 
для создания ссылок для навигации между маршрутами.
Они работают аналогично версии 5, 
позволяя пользователю переходить к соответствующим 
маршрутам без перезагрузки страницы. NavLink 
также предоставляет возможности для стилизации 
активных ссылок и текущего маршрута.</p>

<p><b>5. </b><b className="redname">Outlet</b>: Компонент Outlet является контейнером, 
в котором будут отображаться компоненты, 
связанные с соответствующими маршрутами. 
Он заменяет Switch из версии 5 и автоматически выбирает и рендерит компонент, 
соответствующий текущему маршруту.</p>

<p><b>6. </b><b className="redname">useNavigate</b>: Хук useNavigate используется для программной навигации между 
маршрутами. Он позволяет вам переходить к другим 
маршрутам из компонентов или обработчиков событий.</p>

<p><b>7. </b><b className="redname">useParams</b>: Хук useParams используется для получения параметров маршрута, 
переданных через URL. Он позволяет вам извлекать и 
использовать динамические данные из пути маршрута.</p>

<p><b>8. </b><b className="redname">useLocation</b>: Хук useLocation используется для получения информации о текущем URL. 
Он предоставляет доступ к объекту location, 
который содержит информацию о текущем пути, параметрах и других деталях URL.</p>

<h2 className="title">Это основные компоненты, которые ты найдешь в react-router-dom v6.</h2>

<p>Помимо основных компонентов, 
React Router Dom v6 предлагает и другие возможности, 
такие как параметры маршрута, вложенные маршруты, 
защита маршрутов и многое другое. 
В дальнейшем разделе статьи более подробно 
рассмотрим каждую из этих возможностей и покажу, 
как их использовать для эффективного реализации роутинга в ваших React-приложениях.</p>

<p>В следующих разделах статьи будем проводить практические 
примеры и обсуждать <b>конкретные сценарии</b> использования 
<b> React Router Dom v6</b>, чтобы ты мог получить полное представление о его 
функциональности и применении.</p>

<h2 className="title">Установка и настройка React Router Dom v6:</h2>
<p>Прежде чем ты начнешь использовать React Router Dom v6 в проекте, 
необходимо установить его с помощью менеджера пакетов 
<b className="redname">npm</b> или <b className="redname">yarn</b>. Вот как это сделать:
</p>
<p><b>1. </b>Открой командную строку или терминал в корневой папке проекта.</p>
<p><b>2. </b>Для установки React Router Dom v6 с помощью npm выполни следующую команду:</p>
<p><b className="redname">npm install react-router-dom@next</b></p>
<p>После успешной установки зайди в <b className="redname">package.json</b> и 
найди в dependencies <b className="redname">"react-router-dom”</b>. 
Если есть, то ты можешь начать использовать React Router Dom v6 в своем проекте.</p>
<img src="https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa0ee693b-c258-4e33-89f7-9dda03b84408%2FUntitled.png?table=block&id=8d1815af-5f98-484d-9007-1b22608fc4b3&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=1520&userId=&cache=v2"
 alt='' width="500"></img>

  <h2 className="title">Импорт и использование BrowserRouter</h2>
  
  <p>  После установки React Router Dom v6 ты можешь начать использовать его в проекте. 
  Для этого ты должен импортировать необходимые 
  компоненты и обернуть приложение в BrowserRouter. Вот как это делается:</p>

<p><b>1. </b>В файле, где вы хотите использовать <b>React Router Dom</b>, добавьте следующий импорт:</p>

<p><b className="redname">import BrowserRouter  from 'react-router-dom';</b></p>

<p><b>2. </b>Затем оберни приложение в компонент <b> BrowserRouter</b>. 
  Это можно сделать в корневом файле проекта, 
  например, в файле <b className="redname"> index.js</b>, который используется для 
  рендеринга  приложения</p>

<p>Здесь оборачивается компонент 
<b className="redname"> App</b> (главный компонент) в компонент 
<b className="redname"> BrowserRouter</b>. Это позволяет 
<b> React Router Dom</b> управлять маршрутизацией внутри приложения.</p>

<p>Теперь, когда импортировал и использовал 
  <b> BrowserRouter</b>, ты готов начать использовать другие компоненты 
  <b> React Router Dom</b> для определения маршрутов, создания ссылок и управления навигацией.</p>

<h2 className="title">Основные компоненты React Router Dom v6</h2>

<p>Теперь давай рассмотрим основные компоненты 
  <b> React Router Dom v6</b>, которые помогут тебе реализовать роутинг в приложении.</p>
<p><b>1. </b><b className="redname">Routes</b>:<br />
<b className="redname">Routes</b> - это компонент-контейнер, 
в котором <b>определяют все маршруты</b> в приложении.
Мы используем **`Routes`** для группировки нескольких 
<b className="redname">Route</b> компонентов.</p>


<p><b>2. </b><b>Route</b>:<br />
<b className="redname">Route</b> - это компонент, который определяет 
отдельный маршрут внутри <b>Routes</b>. Каждый Route имеет свой путь 
(<b>path</b>) и элемент (<b>element</b>), который будет отображаться, когда маршрут совпадает.</p>

<p>Также можно использовать дополнительные атрибуты, 
  такие как <b className="rednme">exact</b> для точного совпадения пути и 
  <b className="redname">(*) fallback</b> для отображения компонента-заглушки, если не найден ни один из маршрутов.</p>

<p><b>3. </b><b> Link</b>:<br />
<b className="rednme">Link</b> используется для создания ссылок для навигации между 
маршрутами в приложении.</p>

<p> <b>4. </b><b> NavLink</b>: <br />
<b className="rednme"> NavLink</b> позволяет создавать активные ссылки, 
добавляя класс <b className="redname"> "active"</b> к текущему активному маршруту.</p>

<p>В этом примере мы также создаем три ссылки, 
  но используем <b className="redname"> NavLink</b>.
   Атрибут <b className="redname"> to</b> указывает путь маршрута, 
   а <b className="redname"> activeClassName</b> добавляет класс 
   <b className="redname"> "active"</b> к активному маршруту. 
   Мы можем использовать этот класс для стилизации и выделения текущего активного маршрута.</p>

<p>Например, если пользователь находится на странице "О нас", 
  то ссылка "О нас" будет иметь класс "active" и мы можем применить '
  соответствующие стили для выделения активной ссылки.</p>

<p className="text2">Основное отличие между 
<b className="redname"> Link</b> и <b className="redname">NavLink</b> 
заключается в возможности создания активных ссылок с помощью <b className="redname">NavLink</b>. 
<b className="redname"> NavLink</b> добавляет класс "active" к ссылке, когда 
соответствующий маршрут активен.</p>

<p><b>5. </b><b>useNavigate</b>: <br />
<b className="redname"> useNavigate</b> - это хук, который позволяет перенаправлять 
пользователя на другие маршруты в 
<b> React Router Dom v6</b>.<br />

    Когда ты используешь <b className="redname"> useNavigate</b>, ты можешь получить функцию 
    <b className="redname"> navigate</b> и использовать 
    ее для перенаправления пользователя на другой маршрут.</p>

<p><b>6. </b><b>useParams</b>: <br />
<b className="redname"> useParams</b> - это хук, который позволяет получать параметры 
из маршрута в <b> React Router Dom v6</b>. <br />
  
    Когда ты используешь <b className="redname"> useParams</b>, 
    ты можешь получить объект <b> params</b>, 
    который содержит значения параметров из текущего маршрута.</p>

<p><b>7. </b><b>useLocation</b>:<br />
<b className="redname"> useLocation</b> - это хук, который позволяет 
получать информацию о текущем URL и его параметрах в <b> React Router Dom v6</b>. <br />
    Когда ты используешь <b className="redname"> useLocation</b>, 
    ты можешь получить объект <b className="redname"> location</b>, 
    который содержит информацию о текущем URL.</p>
  
  <p><b>8. </b><b> Outlet</b> - играет ключевую роль в отображении компонентов,
   соответствующих текущему маршруту.
   <br />
    Когда ты используешь <b className="redname"> Outlet</b>, о
    н служит контейнером для отображения компонентов, 
    которые соответствуют маршрутам в твоем приложении.</p>
  
<p> Когда пользователь переходит по разным маршрутам, 
    <b className="redname"> Outlet</b> автоматически рендерит компоненты, 
    связанные с этими маршрутами. 
    Например, если текущий маршрут - <b> "/about"</b>, 
    то компонент, соответствующий этому маршруту, 
    будет отображен внутри <b className="redname"> Outlet</b>.</p>

   <p className="text2">Важно отметить, что <b className="redname"> Outlet</b> должен быть расположен 
 внутри компонента, который уже является частью маршрутизации, 
 например, внутри компонента, который используется в маршруте.</p>

<p>Например, если у тебя есть маршрут "/about", 
определенный с использованием компонента <b className="redname"> AboutPage </b>, 
то <b className="redname"> Outlet</b> должен быть включен внутри 
<b className="redname"> AboutPage </b> 
для отображения компонентов, соответствующих вложенным маршрутам внутри "/about".</p>
 
<p>Использование <b className="redname">Outlet</b> позволяет тебе динамически 
отображать компоненты на основе текущего маршрута без 
необходимости явно указывать их в коде.</p>
  
  </div>

    )
}
export { ReactRouter }  