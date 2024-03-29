import React from 'react'
import CodeSnippet from '../../components/Game/CodeSnippet'
import TextEditor from '../../components/Game/TextEditor'
import ProgressBar from '../../components/Game/ProgressBar'
import PostGameContainer from '../PostGame/PostGameContainer';
import Timer from '../../components/Game/Timer';
import Start from '../../components/Game/StartButton';

class CodeRacerContainer extends React.Component {

    state = {
        codeObj: '',
        code: '',
        row: 1,
        newValue: '',
        textPosition: 0,
        progressWidth: 0,
        flag: true,
        readOnly: true,
        accuracy: 0,
        errors: 0,
        go: false,
        time: 0, 
        finish: false,
        charsPerMin: 0,
        posted: false,
        perc_better_time_than_snippet: 0,
        perc_better_chars_per_min: 0
    }

    getSnippets = () => {
        fetch('http://localhost:3000/api/v1/snippets')
            .then(resp => resp.json())
            .then(snippets => {
                const snippet = snippets[Math.floor(Math.random() * (snippets.length))]
                this.setState({
                    codeObj: snippet,
                    code: snippet.content
                })
            }
        )
    }

    componentDidMount() {
        this.getSnippets()
    }


    compareCode = (event, newValue) => {
        const code = this.state.code
        const newPosition = this.state.textPosition + 1

        if (code.replace(/ /g, '')[this.state.textPosition] !== newValue.replace(/ /g, '')[this.state.textPosition]) {
            const newErrors = this.state.errors + 1
            this.setState({ 
                row: event.end.row + 2, newValue, 
                flag: false, 
                errors: newErrors 
            })
        } else {
            this.setState({
                row: event.end.row + 2,
                newValue,
                textPosition: newPosition,
                flag: true
            })
            if (code === newValue) {
                console.log('YOU WIN')
                this.setState({ 
                    readOnly: true, 
                    accuracy: this.calculateAccuracy(),
                    finish: true
                })
            }
        }
    }

    calculateAccuracy = () => {
        return Math.floor(this.state.code.length / (this.state.code.length + this.state.errors) * 100)
    }

    calculateCharsPerMin = time => {
        const result = (this.state.code.length / time) * 60
        this.setState({ charsPerMin: result.toFixed(0) })
    }

    handleTextChange = (newValue, event) => {
        this.setState({ go: true })
        // console.log('newValue.slice(-1)', newValue.slice(-1))
        if (event.action === "insert") {
            this.compareCode(event, newValue)
        } else if (event.action === 'remove' && newValue.slice(-1) !== ' ') {
            const currentPosition = this.state.progressWidth
            
            if (currentPosition >= this.changeProgressBarHandler(newValue)) {
                
                this.setState({ newValue, progressWidth: this.changeProgressBarHandler(newValue), textPosition: this.state.textPosition - 1 })
            } else {
                this.setState({ newValue})
            }           
        }
        (this.state.flag) && this.setState({ progressWidth: this.changeProgressBarHandler(newValue)})
    }

    handleGoClick = () => {
        this.setState({ 
            go: true,
            readOnly: false })
    }

    setTime = elapsed => {
        this.setState({ time: elapsed })
    }


    fetchGames = () => {
        return fetch("http://localhost:3000/api/v1/games")
            .then(resp => resp.json())
            .then(games => {
                console.log(games)
                this.findPercBetterTimeThanSnippet(games)
                this.findPercBetterCharsPerMin(games)
            })
    }



    postGame = () => {
        if(this.state.time !== 0 && this.state.accuracy !== 0){
            if(this.state.posted === false){
                console.log("posted")
                this.postGameToServer()
                this.setState({ posted: true })
                this.fetchGames()
            }
        }
    }


    findPercBetterTimeThanSnippet = (games) => {
        const snippet_id = this.state.codeObj.id
        const gamesWithThisSnippet = games.filter(game => game.snippet_id === snippet_id)
        if (gamesWithThisSnippet.length > 0){
            const betterThanGamesThisWithSnippet = gamesWithThisSnippet.filter(game => game.time_taken > this.state.time)
            const betterThanThisPercPeopleSnippetTime = ((betterThanGamesThisWithSnippet.length) * 100 / (gamesWithThisSnippet.length) * 100) / 100
            this.setState({ perc_better_time_than_snippet: betterThanThisPercPeopleSnippetTime })
            console.log(this.state.perc_better_time_than_snippet)
        } else {
            console.log("no other games with this snippet")
        }
    }


    findPercBetterCharsPerMin = (games) => {
        const characters_per_min = this.state.charsPerMin
        const fasterThanTheseGames = games.filter(game => game.characters_per_min < characters_per_min)
        const perc_better_chars_per_min = ((fasterThanTheseGames.length) * 100 / (games.length) * 100) / 100
        this.setState({ perc_better_chars_per_min })
        console.log(this.state.perc_better_chars_per_min)
    }


    postGameToServer = () => {
        const { codeObj, time, accuracy, charsPerMin } = this.state
        const { user_id } = this.props

        return fetch('http://localhost:3000/api/v1/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game: {
                    user_id: user_id,
                    snippet_id: codeObj.id,
                    time_taken: parseInt(time),
                    accuracy_percentage: accuracy,
                    characters_per_min: parseInt(charsPerMin)
                }
            })
        })
    }

    changeProgressBarHandler = (newValue) => {
        const codeLength = this.state.code.length
        const inputLength = newValue.length
        return  Math.ceil(inputLength / codeLength * 100)
    }

    render() {
        const { codeObj, code, row, newValue, progressWidth, readOnly, accuracy, charsPerMin, go, finish, time, perc_better_time_than_snippet, perc_better_chars_per_min } = this.state
        const { handleTextChange, handleGoClick, setTime, calculateCharsPerMin, postGame } = this
        return (
            <>
            {!finish ? 
                <div style={{ paddingTop: "35px" }}>
                    <CodeSnippet code={code} />
                    <TextEditor row={row} newValue={newValue} handleTextChange={handleTextChange} readOnly={readOnly}/>
                    <ProgressBar progressWidth={progressWidth} />
                        {!go ? <Start handleGoClick={handleGoClick} /> : <Timer setTime={setTime} calculateCharsPerMin={calculateCharsPerMin}/> }
                </div>
                :
                <PostGameContainer 
                    codeObj={codeObj} 
                    code={code} 
                    accuracy={accuracy} 
                    charsPerMin={charsPerMin} 
                    time={time} 
                    postGame={postGame}
                    perc_better_time_than_snippet={perc_better_time_than_snippet}
                    perc_better_chars_per_min={perc_better_chars_per_min}
                    />
            }
            </>
        )
    }

}

export default CodeRacerContainer;