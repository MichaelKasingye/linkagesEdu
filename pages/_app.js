import '../styles/globals.css';
import Layout from '../components/Layout';
import {StateProvider} from "../ContextAPI/StateProvider";
import reducer,{initialState} from "../ContextAPI/Reducer";
function MyApp({ Component, pageProps }) { 
    
    return (
      <Layout>
        <StateProvider initialState={initialState} reducer={reducer}>
        <Component {...pageProps} />
        </StateProvider>
      </Layout>
    );
 
}

export default MyApp
