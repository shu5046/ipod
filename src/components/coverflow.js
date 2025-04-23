import coverflowPic from './images/coverflow.webp'
export default function Coverflow(){
    return <div >
        <img style={style} src={coverflowPic} alt='coverflow'/>
    </div>
}

const style = {
    width: `250px`,
    height: `210px`,
    borderRadius: `3%`
}