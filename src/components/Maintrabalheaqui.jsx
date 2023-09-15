export default function Sectiontrabalheaqui(){
    return(
        <>
        <main>
            <div>
                <form>
                    {/* <label for="nome">Nome:</label> */}
                    <input type="text" name="nome" required placeholder="nome"/>

                    {/* <label for="email">Email:</label> */}
                    <input type="email" name="email" required placeholder="email"/>

                    {/* <label for="arquivo">Enviar currículo:</label> */}
                    <input type="file" name="arquivo" required/>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </main>
        </>
    )
}