//Alterar os projetos que queira que seja selecionado automáticamente
var projetosx = ['QA_2017','REGRESSAO_2017','2018_PROJ_MOVEL','2018_PROJ_DIGITAL','2018_PP_B2B_FIXA','2018_PROJ_CONVERGENTE_OSS', 'BEATRIX_FASE_2','FS_Beatrix','2018_PP_MOVEL','2018_PROJ_B2B_FIXA','2018_PROJ_TRANSFORMACAO_B2C','TST_CANAIS_2018', 'QA', 'VIVO_AUTOMACAO','2018_PP_CONVERGENTE_OSS'];

setTimeout(function() {

    var check = document.getElementById("checks").parentNode;
    check = check.childNodes[3];
    for (i = 0; i < check.childNodes.length; i++) {
        selectCheck = check.childNodes[i];
        console.log(selectCheck);
        console.log(i);
        selectCheck.childNodes[0].checked = false;

        for (cont = 0; cont < projetosx.length; cont++){
            if(selectCheck.childNodes[1].innerText === projetosx[cont])
            selectCheck.childNodes[0].checked = true;
        }
    }
    console.log(check.childNodes.length);
}, 2000);
