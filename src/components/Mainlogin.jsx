import "../style/components/mainlogin.scss";
import AquaLogo from "../img/aquatank_logo.png";

export default function Mainlogin(){
    let AquaLogoAlt = "AquaLogo";
    return(
        <>
            <main>
                <div>
                    <form>
                        <img src={AquaLogo} alt={AquaLogoAlt} className="logo"/>
                        <h2>Login</h2>
                        <input type="text" name="email" className="email" placeholder="email@email.com"/>
                        <small className="textEmail"></small>
                        <input type="password" name="senha" className="senha" placeholder="senha"/>
                        <small className="textPassword"></small>
                        <button type="submit">Login</button>
                        <small className="textForm"></small>
                        <small className="textSucess"></small>
                    </form>
                </div>
            </main>
        </>
    )
}