import games from './images/games.jpg'
export default function Games(){
    return <div >
        <img style={style} src={games} alt='coverflow'/>
    </div>
}

const style = {
    width: `250px`,
    height: `210px`,
    borderRadius: `3%`
}