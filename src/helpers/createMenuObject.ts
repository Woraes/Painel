

//2º criar um type para ele  MenuOpition coloco as opções para ele
type MenuOpition = '' | 'todos' | 'pontobiometrico' |'sigs' | 'samu'| 'cisms' | 'ghbam' | 'pacs' | 'ris' |'esus' | 'prodig' ;



/* 1º criando o Objeto do menu recebe activeMenu que é uma string que nela vai conter
 o menu que esteja ativo
 = (activeMenu: MenuOpition) so posso mandar um da opçoes*/

export const createMenuObject = (activeMenu: MenuOpition) =>{
    //3º vou criar meu objeto e retornar todos como false
    let returnObject = {
        todos:false,
        pontobiometrico:false,
        sigs:false,
        samu:false,
        cisms:false,
        ghbam:false,
        pacs:false,
        ris:false,
        esus:false,
        prodig:false,

    };
    //5º entre um e outro vamos trasformar o objeto que eu quero em true
    //Se activeMenu for diferente de vazio retorno returnObject[activeMenu] = true para verdadeiro
    if(activeMenu != ''){
        returnObject[activeMenu] = true;
    };
    //4º vou retornar o objeto
    return returnObject;
}