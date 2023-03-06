import { Component } from 'react';

class Announcements extends Component {

    constructor(){
        super()
        this.state = {
            index: 0
        }
    }
    setIndex(value){
        this.setState({
            index: value
        })
    }

    
    render() {
        
        const data = () => {
            if(this.state.index <= 1){
                return (
                    <div className='data'>
                        <span><i style={{color : 'red'}} className="fas fa-newspaper"></i> News</span>
                        <hr />
                        <ul className='items'>
                            <li>20 Sep 2022 - PU &ndash; Ph.D. Entrance Test -2022</li>
                            <li>14 Sep 2022 - Answer-key alongwith Question Booklet of PU - MBA Entrance Test-2022</li>
                            <li>02 Sep 2022 - Result of PU &ndash; B.Ed. Entrance Test -2022 declared</li>
                            <li>01 Sep 2022 - Result of PUMEET Entrance Test -2022 declared</li>
                            <li>30 Aug 2022 - PULEET Entrance Test -2022 result declared</li>
                        </ul>
                    </div>
                )
            }
            else if(this.state.index === 2){
                return (
                    <div className='data'>
                        <span><i style={{color : 'red'}} className="fas fa-bullhorn"></i> Admissions</span>
                        <hr />
                        <ul className='items'>
                            <li>Admission form for admission to BHMCT and BTTM courses of UIHTM for session 2022-2023</li>
                            <li>Admission notice for the Academic session 2022-23</li>
                            <li>University Institute of Applied Management Sciences, Panjab University, Chandigarh MET-Management Entrance Test-2022</li>
                            <li>UBS MBA Admissions - 2022</li>
                            <li>Admission Notice for the Post Graduate Diploma in Computer Applications (PGDCA), 1 year, for the academic session 2021-22, at the Panjab University SSG Regional Centre, Hoshiarpur</li>
                        </ul>
                    </div>
                )
            }
            else if(this.state.index === 3){
                return (
                    <div className='data'>
                        <span><i style={{color : 'red'}} className="fas fa-calendar-alt"></i> Events</span>
                        <hr />
                        <ul className='items'>
                            <li>CHASCON-2022</li>
                            <li>Play "APRAJAY MAHARANA PARTAP" at Indradhanush Auditorium, Panchkula</li>
                            <li>A glimpse of initiatives and activities undertaken by the Centre for Social Work in the year 2021.</li>
                            <li>A glimpse of initiatives and activities undertaken in the year 2021</li>
                            <li>Special lecture on the topic of “Application of RTI Act in functioning of higher judiciary in India” by Sh. Subhash C. Aggarwal</li>
                        </ul>
                    </div>
                )
            }
            else if(this.state.index === 4){
                return (
                    <div className='data'>
                        <span><i style={{color : 'red'}} className="fa-solid fa-user-group"></i> Conferences</span>
                        <hr />
                        <ul className='items'>
                            <li>International Psychological Science Congress 2022</li>
                            <li>3rd International Conference on Aspects of Materials Science and Engineering (ICAMSE-2022)</li>
                            <li>International Conference on Aspects of Materials Science and Engineering (ICAMSE 2020) Under TEQIP-III</li>
                            <li>Workshop under the theme MOOCS: Instructional Design, Development and Learning Analytics</li>
                            <li>6th International &#38; 8th Indian Psychological Conference,2019</li>
                        </ul>
                    </div>
                )
            }
        }
        return <>
            <div className='announcements'>
                <ul className='btn-list'>
                    <li><button className={this.state.index <= 1 ? "btn-selected" : "btn"} onClick={() => this.setIndex(1)}><span><i className="fas fa-newspaper"></i> NEWS</span></button><i className={this.state.index === 1 ? "fa-solid fa-caret-right" : ""}></i>
                    </li>
                    <li><button className={this.state.index === 2 ? "btn-selected" : "btn"} onClick={() => this.setIndex(2)}><span><i className="fas fa-bullhorn"></i> ADMISSIONS</span></button>
                    <i className={this.state.index === 2 ? "fa-solid fa-caret-right" : ""}></i></li>
                    <li><button className={this.state.index === 3 ? "btn-selected" : "btn"} onClick={() => this.setIndex(3)}><span><i className="fas fa-calendar-alt"></i> EVENTS</span></button>
                    <i className={this.state.index === 3 ? "fa-solid fa-caret-right" : ""}></i></li>
                    <li><button className={this.state.index === 4 ? "btn-selected" : "btn"} onClick={() => this.setIndex(4)}><span><i className="fa-solid fa-user-group"></i> CONFERENCES</span></button>
                    <i className={this.state.index === 4 ? "fa-solid fa-caret-right" : ""}></i></li>
                </ul>
                { data() }
            </div>
        </>
    }
}
export default Announcements;