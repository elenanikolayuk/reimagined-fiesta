import { Layout} from 'antd';

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#001529',
    fontSize: 30,
  };


export default function AppHeader(){
    return(
        <Layout.Header style={headerStyle}>
            <b>Основная теория по библиотеке React</b>
            </Layout.Header>
    )
}