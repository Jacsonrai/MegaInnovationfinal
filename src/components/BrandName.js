import "../styles/components/BrandName.scss"
const BrandName=({isFooter=false})=>{
return(
<div className={`brand ${isFooter===true? "footer":""}`}>
    <span>MegaInnovation</span>
</div>)
}
export default BrandName