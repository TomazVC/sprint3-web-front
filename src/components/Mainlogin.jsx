import "../style/components/mainlogin.scss";

export default function Mainlogin(){
    return(
        <>
            <main>
                <div>
                    <form>
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