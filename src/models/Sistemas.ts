//um model é um objeto que faz funçoes nos sistemas
//pegar todos sistemas
//filtrar os sistemas pot tipo
// filtar os ssitemas por nome

import { type } from "os";

//1º criando o objeto
//2ºCriar uma constante array para simular o banco de dados já que inda não temos
//3ºCriar um type para as datas
//4º type feito posso jogar pra data e dizer que é um array
//garante qie todos os item tem a mesma descriçoes
//função retornar todos os sistemas na pagina home
//5º Criar função getALL que retorna data
//6ºCriar função chama Type  e recebe type ai o type so vai aceitar as opçoes ali dentro
// para evitar repetir os types podemos criar um type e declarar nele
//Ex: type SistemaType = 'pontobiometrico' |'sigs' | 'samu'| 'cisms' | etc..



type SistemType = 'pontobiometrico' |'sigs' | 'samu'| '' | 'ghbam' | 'pacs' | 'ris' |'' | 'prodig'
type Sistema = {
    type: SistemType,
    image: string,
    name:string,
    color:string,
    descri: string,
    fabri: string,
    link: string,
};

const data: Sistema[] = [
{
    type:'pontobiometrico',
    image:'../images/digital.gif',
    name:'Ponto Bioétrico',
    color:'',
    descri:'Torna os processos de RH mais eficientes',
    fabri:'Inovare Soluçoes',
    link:'/pontobiometrico',

},
{
    type:'sigs',
    image:'../images/sigslogo.png',
    name:'Sigs',
    color:'',
    descri:'Sistema Integrado de Gestão em Saúde',
    fabri:'Inovare Soluçoes',
    link:'/sigs',

},
{
    type:'samu',
    image:'../images/samugif.gif',
    name:'SAMU',
    color:'',
    descri:'Pagina em construção',
    fabri:'Ministério da Saúde',
    link:'/samu',

},
// {
//     type:'cisms',
//     image:'../images/cigif.gif',
//     name:'Controle de CI',
//     color:'',
//     descri:'Pagina em construção',
//     fabri:'WoraesApp',
//     link:'/cisms',

// },
{
    type:'ghbam',
    image:'../images/ghbamgif.gif',
    name:'GHBAM',
    color:'',
    descri:'Gestão Hospitalar de Boletim Atendimento Médico',
    fabri:'GHBAM',
    link:'/ghbam',

},
{
    type:'pacs',
    image:'../images/pacsgif.gif',
    name:'PACS',
    color:'',
    descri:'Vizualizador de Tomografias e Raio-X',
    fabri:'PacsWeb',
    link:'/pacs',

},
{
    type:'ris',
    image:'../images/risgif.gif',
    name:'RIS',
    color:'',
    descri:'Sitema de Laudos Médicos',
    fabri:'RisWeb',
    link:'/ris',

},
// {
//     type:'esus',
//     image:'../images/esusgifgif.gif',
//     name:'E-SUS',
//     color:'',
//     descri:'Estratégia e-SUS Atenção Primária',
//     fabri:'Secrétaria de Saúde',
//     link:'/esus',

// },
{
    type:'prodig',
    image:'../images/prodig.gif',
    name:'PRODIGI',
    color:'',
    descri:'Processos Digitais',
    fabri:'Secrétaria de Saúde',
    link:'/prodig',

},
]
export const Sistema = {
    getAll: ( ) =>{
        return data;
    },
    chamaType: (type: SistemType) =>{
        return data.filter(item =>{
            if(item.type === type){
                return true;
            }else{
                return false;
            }
        });

    },
    chamaNome: (name: string) =>{
        return data.filter(item => {
            // - 1 pq o index off nao acha nada ai retorna -1 na  posição 
            //toLocaleLowerCase para colocar tudo em minusculo para a busca não da erro com o indexof
            if(item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase())> -1){
                return true;
            }else{
                return false;
            }
        })
    }
};