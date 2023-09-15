import "../style/components/mainlogin.scss";
import AquaLogo from "../img/aquatank_logo.png";

export default function Mainlogin(){
    let AquaLogoAlt = "AquaLogo";
    return(
        <>
            <main>
                <div>
                    <form>
                        <img src={AquaLogo} alt={AquaLogoAlt} class="logo"/>
                        <h2>Login</h2>
                        <input type="text" name="email" class="email" placeholder="email@email.com"/>
                        <small class="textEmail"></small>
                        <input type="password" name="senha" class="senha" placeholder="senha"/>
                        <small class="textPassword"></small>
                        <button type="submit">Login</button>
                        <small class="textForm"></small>
                        <small class="textSucess"></small>
                    </form>
                </div>
            </main>
        </>
    )
}