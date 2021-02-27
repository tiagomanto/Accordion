import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppBar from '../src/components/AppBar';
import HideAppBarButton from '../src/components/ScrollToHideAppBar';

import ScroolToSeeButton from '../src/components/ScroolToSeeButton'
import style from '../src/styles/global.module.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
   
    <div className={classes.root}>
    <HideAppBarButton> 
  
    </HideAppBarButton>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Microsoft Word</Typography>
          <Typography className={classes.secondaryHeading}>Edição e criação de textos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h4>Alterando as Margens do Documento</h4>
          <ol>
                  <li>Clique na Guia Exibir -Procure a caixa de seleção Régua</li>
                  <img className={style.imagem} src="https://s2.glbimg.com/V7F3yJvg1kcoMD56LHDHdR0aM0w=/0x0:695x370/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/Y/J/JuDVFHRqOqzPoMmkfWJQ/captura-de-tela-2-.jpg" alt=""/>
              
                  <img className={style.imagem} src="https://s2.glbimg.com/R3n3GSgeLGEXO48zIt3t9P9BT_Y=/0x0:695x370/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2017/9/z/snppnWRue2cfnbYXsXTw/captura-de-tela-4-.jpg" alt=""/>
            
                  <li>Clique duas vezes na parte cinza da regua</li>
                  <p>Altere as margens com desejar Superior | inferior | Esquerda | Direita</p>
                  <img  src="https://support.content.office.net/pt-br/media/84c3af93-2f3e-4a29-bfef-2136351d04df.jpg" alt=""/>
                </ol>

                <h4>Copiar Texto da Internet e colando no Word</h4>
              <ol>
                <li>Abra o Google Crome</li>
                <li>entre em www.google.com</li>
                <li>pesquise o site desejado</li>
                <li>Para pesquisa especifica utilize o operador site:http://sitedesejado.com conteudo</li>
              
                <h5>Se quiser pesquisa tipos de arquivos mais avançada dentro de um site determinado </h5>
                  <code>site:tjsp.gov.br conteundo a ser pesquisado filetype: pdf </code> 
                  <br/><br/>
                <li>Selecione o texto desejado </li>
                <li>Abra o Word e cole o texto copiado </li>
                <img src="https://i1.wp.com/ramalho.com.br/wp-content/uploads/2013/10/Estado-colando-no-word.jpg?resize=275%2C376" alt=""/>

                <li>Troque as fontes para Titutlo do Texto: Arial, Tamanho 14, Negrito, Corpo do Texto: Arial, 12</li>
                <img src="https://support.content.office.net/pt-br/media/ca77bbe6-9425-4816-a40e-d922acfcd7b4.png" alt=""/>
                <br/><br/><br/>
                <li>Na <code>Pagina Inicial</code> procure por espaçamento entre linhas e aplique ao corpo do texto </li>
                <br/><br/><br/>
                <img src="https://support.content.office.net/pt-br/media/34405a69-2093-42ae-9708-fd6120bff239.png" alt=""/>
    


                </ol>


          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Microsoft Excel</Typography>
          <Typography className={classes.secondaryHeading}>
            Criar e editar planilhas
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h3>Microsoft Excel &rarr;</h3>
            <p>Relembrando o uso da função Se</p>

            <h4>Iniciado uma formula</h4>
                <ol>
                  <li>Clique em qualquer celula e pressione o sinal de "="</li>
                  <li>Comece digitando =Se(</li>
                  <img src="https://www.aprenderexcel.com.br/imagens/post/75/680-see02.jpg" alt=""/>
                  <li>Clique na celula "B2" pressione maior {'>'} = 6" utilize ";" para mudar de parametro
                    Abra aspas "Aprovado";"Reprovado"
                  </li>
                  </ol>

           
           
           
           
           </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>PowerPoint</Typography>
          <Typography className={classes.secondaryHeading}>
            Crie Apresentações
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ol>
                <li>Escolha o modelo desejado </li>
                <img src="https://r2creativeppt.files.wordpress.com/2017/10/tela-inicial-ppt2013.png?w=446&h=285" alt=""/>
              
                <li>Clique na Guia Inicial na seta do botão Novo Slide</li>
                <img src="https://support.content.office.net/pt-br/media/8d454931-9b28-4a5a-9413-e3a71f8fa80c.png" alt=""/>

                <li>Escolha o desejado, caso queira fazer comparações de conteudo, com campos prontos para colocar imagens e caixa de texto</li>

                <img src="http://s2.glbimg.com/34FeYVegPGbNuXuEgbz03xzqq6E=/695x0/s.glbimg.com/po/tt2/f/original/2016/03/23/captura-de-tela-2016-03-23-as-162831.png" alt=""/>
            </ol>
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Pesquisas no Google</Typography>
          <Typography className={classes.secondaryHeading}>
            Utilizar operadores nas pesquisas para refinar os resultados
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          <h3>Abra o Google Crome &rarr;</h3>
            <p>Veja as fotos abaixo e utilize os parametros em suas pesquisas para refinar os resultados</p>

            <h4>Utilizando o operador site</h4>
              <p>Basta digitar site:http://ositedesejado.com.br conteudo a ser pesquisado</p>
            <img src="https://kinsta.com/wp-content/uploads/2020/12/internal-links-search-operator.png" alt=""/>
            
            <h4>Utilizando o operador de soma +</h4>
              <p>Basta digitar o assunto + outro assunto na busca</p>
            
            <img src="https://escoladedados.org/wp-content/uploads/2018/04/Captura-de-Tela-2018-05-03-a%CC%80s-19.24.37-1-300x255.png" alt=""/>

            <h4>Operador mostra conteudo relacionados</h4>
            <img src="https://neilpatel.com/wp-content/uploads/2019/04/operador-de-pesquisa-avan%C3%A7ada-related-700x702.png" alt=""/>

            <h4> Lista de Comandos de pesquisa no Google</h4>
            <img src="https://static-blog-pt-br.iebschool.com/pt-br/blog/wp-content/uploads/2017/08/comandos_google_portugal-01-665x1024.png" alt=""/>
                

            


          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    
  );
}
