import img from '../images/banner2.jpeg'

export function Banner(){
    return(
        <div>
             <section><img className='banner-img' id={"banner"} src={img}/></section>
        </div>
    )
}