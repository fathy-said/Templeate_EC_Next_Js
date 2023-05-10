import Layout from "@/Components/Layout/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { Store } from "../../RTK/Store";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={Store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
