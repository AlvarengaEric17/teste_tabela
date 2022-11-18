function createTabela(grupo, table, ) {
    return ` 
    <div class="table">
        <h1>Grupo ${grupo}</h1>
        <div class="row">
            <h4>Equipe</h4>
            <h5>PTS</h5>
            <h5>PJ</h5>
            <h5>VIT</h5>
            <h5>E</h5>
            <h5>DER</h5>
            <h5>GM</h5>
            <h5>GC</h5>
            <h5>SG</h5>
        </div>
        <div>
            ${table}
        </div>
    </div>`;
    console.log(table)
}



function createGrupo(pais, pts, pj, vit, e, der, gm, gc, sg) {
    return `
    <div class="table">
        <div class="col-equipe">
        <li>
            <img src="assets/icon-${pais}.svg">
        </li>
        </div>
        <p>${pts}</p>
        <p>${pj}</p>
        <p>${vit}</p>
        <p>${e}</p>
        <p>${der}</p>
        <p>${gm}</p>
        <p>${gc}</p>
        <p>${sg}</p>
    </div>`;
}


document.querySelector("#cards").innerHTML = createTabela(
    "A", createGrupo("eua", "10", "3", "0", "0", "10", "2", "8", "98")+
    createGrupo("brazil", "10", "3", "0", "0", "10", "2", "8", "99")
    )
