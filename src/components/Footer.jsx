import FooterLogo from "./Footer.Logo";
import FooterMenu from "./Footer.Menu";
import Copyright from   "./Copyright";

function footer() {
    return (
        <div className='footer'>
            <FooterLogo/>
            <FooterMenu/>
            <Copyright/>
        </div>
    );
}

export default footer;