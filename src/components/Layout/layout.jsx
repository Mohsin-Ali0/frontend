// import { SiteFooter } from './footer.jsx';
import { SiteFooter } from './footer.jsx';
import { SiteHeader } from './header.jsx';
import "./layout.css"


const Layout = (props) => {
    const { showFooter = true } = props;
    return (
        <>
             <SiteHeader />
                {props.children}
             {showFooter && <SiteFooter />}
        </>
    )
}

export default Layout