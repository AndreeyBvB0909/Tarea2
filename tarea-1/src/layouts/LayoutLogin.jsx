
import { Layout } from 'antd';

function LayoutLogin(props) {
   const { children } = props;
   const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
    <header className="App-header">
        {children}
    </header>
  </div>
  );
}

export default LayoutLogin;