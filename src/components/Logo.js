import "../styles/components/Logo.scss"
import mega from "../assets/mega_FB.png"
const Logo=({isFooter=false})=>{
return(
<div className={`logo ${isFooter===true? "footer":""}`}>
 <img src={mega} alt="megaLogo"/>
</div>)
}
export default Logo