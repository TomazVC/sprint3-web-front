import "../style/components/mainlogin.scss";

export default function Mainlogin(){
    return(
        <>
            <main>
                <div>
                    <form>
                        <h2>Fazer Login</h2>
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