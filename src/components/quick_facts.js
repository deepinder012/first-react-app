const QuickFacts = ({infos}) => {
    return(
        <>
            <div className="quick">
            <img src="/imgs/Quick_Facts.png" alt="" width={'70%'}
            height={'300px'} style={{margin: '-50px 0px -120px 0px'}}/>

            <div id="infos">
                {infos.map((info) => (
                    <div key={info.id} id={info.id % 2 !== 0 ? 'info-1' : 'info-2'}>
                        <p>{info.content}</p>
                    </div>
                ))}
            </div>
            </div>
        </>
    )
}
export default QuickFacts;