import './Navbar.css'
import Link from './Link'

const x = 2;
const img = "vite";
const imgStyle = {
    height: x < 10 ? "200px" : "500px", //metodo dinamico css
    borderadius: "30px "
}

const r = 'box rotazione nacosettacoibordiarrotondati';
const nr = 'box  nacosettacoibordiarrotondati';



function Navbar() {
    return(
        <ul> 
            <div id= "box" className={x < 10 ? r : nr}>lesgosky</div>
            <br></br>
            <br></br>
             <img style= {imgStyle} src = {`/${img}.svg`}></img> {/*passaggio immagine */}
            {/* <img style={{height:"200px"}}src = {`/${img}.svg`}></img>  */} 
            <br></br>
            <br></br>
            
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>
            <li><Link></Link></li>


        </ul>

    )
}
export default Navbar