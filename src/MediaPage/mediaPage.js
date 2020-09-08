import React, { Component } from 'react';
import './mediapage.css'
import ReactAudioPlayer from 'react-audio-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap'
import { Link } from 'react-router-dom'
class MediaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            like1: 0,
            like2: 0,
            like3: 0,
            filter: "",
            iconName:"fa fa-thumbs-up finger",
            iconName1:'fa fa-thumbs-up finger',
            userName:'',
            songs: [
                {
                    songName: "Just Dance International Radio- Bailando", id: 1, url: "https://media.hungama.com/c/4/e99/93b/2515137/2515137_128.mp3?H1lTnwZkcAgyTOuRF4xMAuox5uuw4ISKcFpOmNdq83XbjKQewJIimXuC0hzZ5tyEsJHauqJQGXhGWUfQHZ7jcHFn51E71O3XYi8YjWfEw7sXiRW9NaGMY-nIHrdenxmqRtw.mp3"
                },
                {

                    songName: "Water flow-Sanjeeta Bhattacharya", id: 2,
                    url: "https://media.hungama.com/c/4/057/5a7/53373366/53373366_128.mp3?E5lbrFFtOUfEOxr0y_bR0Zdd62iI_2dIfEyzU9fkF7dYqiSJ-wRHyDRxh7jx9Ujd6-9uBLEznKUjoLS5adugoYueqtVYQqhPlDvTYw1UPN6aN3r02rLdImfOoJ5VN-3sGCVprg"
                },
                { songName: "For the child in you-Banat", id: 3, url: "https://media.hungama.com/c/4/333/858/57178077/57178077_128.mp3?HVydrz43CKIzReVbwp8XHZV1e_57c2xft-3Vx5m8WzmBcOCcy9pRR3bqCx7QMN4RyfMON7oMliBeGvI-obKk8TXvXm878D76qsrNeTISwJjW0ISpEmVHkXTd58ERuEQVopvQgg" }]
        }
       // this.updateLikes = this.updateLikes.bind(this);
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
              userName: this.userData.userName
            })
        } else {
            this.setState({
              userName: ''
            })
        }
        // const login = localStorage.getItem('user')
        // console.log(login, "login")
    }

    count=()=>{
        if(this.state.like1===1){
            this.setState({
               iconName1:"fa fa-thumbs-up name"
            })
        }
    }
    updateLikes = (id) => {
        if (id === 1) {
             this.count()
            this.setState( {
                    like1:  1,
                    
                })
        }
        if (id === 2) {
            this.setState(
                 {
                    like2:  1,
            })
        }
        if (id === 3) {
            this.setState( {
                    like3:  1,            
            })
        }
    }
    handleChange = event => {
        this.setState({ filter: event.target.value });
    };

    toggle = () => {
        this.setState({
            dropdownOpen: true
        })
    }
    nextPath(path) {
        console.log(path, "path")
        this.props.history.push(path);
    }

    
    render() {


        const { filter, songs, like1, like2, like3 } = this.state
        const lowercasedFilter = filter.toLowerCase();
        const filteredData = songs.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(lowercasedFilter)
            );
        });
        return (
            <div className="card">
                <div className="row length">
                    <div className="column">                <lable className="search">
                            Tunes <input type="text" className="ml-5" placeholder="Search All Songs" value={filter} onChange={this.handleChange} />
                        </lable>
        </div>
                        <div className="column">  <Dropdown className="ml-5" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <i className="fa fa-user" ></i>                </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem ><Link to='/'>
                                    <i className="fa fa-user fa-fw" />
                      Sign out</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>Welcome  {this.state.userName}
                        <i onClick={() => this.updateLikes(1)} className={this.state.iconName1}></i>
                        </div>
                        </div>
               
                <table className="table">
                    {filteredData.map((val) => (<tbody>
                        <tr>
                            <td><span className="mr-2">{val.id === 1 ? like1:''
                            }{val.id === 2 ?like2:''}{val.id === 3 ? like3:''}</span><i onClick={() => this.updateLikes(val.id)} className={this.state.iconName1}></i></td>
                            <td>{val.songName}</td>
                            <td><ReactAudioPlayer
                                controls
                                src={val.url}
                            />
                            </td><td>
                                <Link to='/analytics'>Analytics</Link>
                            </td>
                        </tr>

                    </tbody>))}
                </table>

            </div >

        )
    }
}
export default MediaPage;