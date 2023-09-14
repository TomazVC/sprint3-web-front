import "../style/components/mainhome.scss";

export default function Mainhome(){
    return(
        <>
        <main>
            <div>
                <h2 id="title">Cansado de respirar ar sujo?</h2>
                <p class="initial-text">Asma, infecções das vias aéreas superiores e incidência de câncer de pulmão e doenças cardiovasculares são apenas alguns dos sintomas que respirar poluição causa ao ser humano.
                </p>
                <p class="initial-text">
                Junte-se a iniciativa capaz de acabar com isso!
                </p>
                <form name="increva-se">
                <input type="text" id="nome" placeholder="Alexandre Carlos " required="required" name="nome" />
                <p id="textName"></p>
                <input type="" id="telefone" placeholder="(xx)xxxxx-xxxx" pattern="\(\d{2}\)\s*\d{5}-\d{4}" maxlength="15"/>
                <p id="textFone"></p>
                <input type="text" id="email" placeholder="nome@mail.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                <p id="textEmail"></p>
                <textarea placeholder="Deixe suas dúvidas ou comentários"></textarea>
                <button id="btn-enviar">Enviar</button>
                </form>
                <button id="btn-compartilhar">Compartilhe nas redes sociais!</button>
            </div>
        </main>
        </>
    )
}