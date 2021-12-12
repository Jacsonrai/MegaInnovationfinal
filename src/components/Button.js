import "../styles/components/Button.scss"
const Button=({content,icon="",color="blue"})=>{
    console.log(content)
    return(
            <button className={`${color}`}>
                {content}{icon}
            </button>
    )

}
export default Button