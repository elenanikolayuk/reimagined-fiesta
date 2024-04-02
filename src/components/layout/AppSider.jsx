import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';


const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#001529',
    border: 'rgb(105, 47, 164)',
  };


export default function AppSider (){
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            <div
      style={{
        width: '100%',
      }}
    > 
   <b className='theme'>ТЕМЫ:</b> <br/>
            <NavLink to="/home" activeClassName="active">Главная</NavLink><br/>
            <NavLink to="/structure" activeClassName="active">Структура проекта</NavLink><br/>
            <NavLink to="/virtualdom" activeClassName="active">Введение в VirtualDOM</NavLink><br/>
            <NavLink to="/components" activeClassName="active">Components</NavLink><br/>
            <NavLink to="/props" activeClassName="active">Props</NavLink><br/>
            <NavLink to="/state" activeClassName="active">State (useState)</NavLink><br/>
            <NavLink to="/lifecycle" activeClassName="active">LifeCycle (useEffect)</NavLink><br/>
            <NavLink to="/events" activeClassName="active">Events и как работать с ним</NavLink><br/>
            <NavLink to="/refs" activeClassName="active">Refs Fragment, key, ...</NavLink><br/>
            <NavLink to="/context" activeClassName="active">Context (useContext)</NavLink><br/>
            <NavLink to="/reactrouter" activeClassName="active">React Router V6</NavLink><br/>
            <NavLink to="/reacthookform" activeClassName="active">react-hook-form VS formik</NavLink><br/>
            <NavLink to="/storage" activeClassName="active">Про STORAGEs </NavLink><br/>
            <NavLink to="/hoc" activeClassName="active">НОС</NavLink><br/>
    </div>

      </Layout.Sider>
    )
}