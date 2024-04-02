import { Layout} from 'antd';
import {Routes, Route} from "react-router-dom";

import { Structure } from './structure/Structure';
import {VirtualDom} from "./structure/VirtualDom";
import { Components } from './structure/Components';
import { Props } from './structure/Props';
import { State } from './structure/State';
import { LifeCycle } from './structure/LifeCycle';
import { Events } from './structure/Events';
import { RefsFragment } from './structure/RefsFragment';
import { Context } from './structure/Context';
import { ReactRouter } from './structure/ReactRouter';
import { Reacthookform } from './structure/Reacthookform';
import { Storages } from './structure/Storages';
import { HOC } from './structure/HOC';
import { Home } from './structure/Home';


const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    backgroundColor: '#001529',
    padding: '1rem',
  };

export default function AppContent (){
    return (
        <Layout.Content style={contentStyle}>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/structure" element={<Structure />} />
                <Route path="/virtualdom" element={<VirtualDom />} />
                <Route path="/components" element={<Components />} />
                <Route path="/props" element={<Props />} />
                <Route path="/state" element={<State />} />
                <Route path="/lifecycle" element={<LifeCycle />} />
                <Route path="/events" element={<Events />} />
                <Route path="/refs" element={<RefsFragment />} />
                <Route path="/context" element={<Context />} />
                <Route path="/reactrouter" element={<ReactRouter />} />
                <Route path="/reacthookform" element={<Reacthookform />} />
                <Route path="/storage" element={<Storages />} />
                <Route path="/hoc" element={<HOC />} />

            </Routes>
            </Layout.Content>
    )
}
