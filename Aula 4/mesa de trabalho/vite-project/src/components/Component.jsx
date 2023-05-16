function Component({nome}){
    return(
        <>
            <h1>Hello {nome ?? "Indefinido"}</h1>
        </>
    );
}

export default Component;