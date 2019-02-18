import React from "react"
var moment = require('moment');
import ReactAnimatedWeather from 'react-animated-weather';
import ReactLoading from 'react-loading';


class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            daily: null,
            time: moment(this.props.value).unix()
        };

    }

    componentDidUpdate(nextProps) {
        if(this.props.value !== nextProps.value){
            console.log("new prop"+nextProps.value)
            this.setState({
                time: moment(nextProps.value).unix(),
                error: null,
                isLoaded: false,
                daily: null
            });
            this.componentDidMount();
        }

    }

    componentDidMount() {
        console.log("triggered me");
        fetch(" https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fa764ee232821591c572e750fc363f32/1.351616,103.808053," +this.state.time,{headers: {'Access-Control-Allow-Origin': '*'}})
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        daily: result.daily
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, daily} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div style={{width: "54%", float: "right", marginTop: "30px"}}>
                <ReactLoading type="spinningBubbles" color="#00b2a9" height={'15%'} width={'15%'} /></div>;
        } else {
            return (
                <div>
                    <ReactAnimatedWeather
                        icon={((daily.data[0].icon).replace(/-/g, "_")).toUpperCase()}
                        color='#00b2a9'
                        size={85}
                        animate={true}
                    />
                    <p style={{marginTop: "-5px"}}>
                        Weather: {daily.data[0].summary}  Temperature: {((((daily.data[0].temperatureHigh+daily.data[0].temperatureLow)/2)-32)*5/9)|0} &#8451;
                    </p>

                </div>
            );
        }
    }
}
export default Weather