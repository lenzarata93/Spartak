import Navigation from "./Navigation";
import Logo from "./logo";

export default function Header(){
    return(
        <div className="site-header">
            <Logo />
            <Navigation />
        </div>
    )
}