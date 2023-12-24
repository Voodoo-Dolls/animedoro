const timeConverter = (time: number) =>{
    let clock = new Date(time * 1000).toISOString().slice(11, 19);
    return clock
}

export default timeConverter