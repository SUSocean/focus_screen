import { useState } from "react"

const Clock = () => {
    let date = new Date()
    const [hour, setHour] = useState(date.getHours())
    const [minute, setMinute] = useState(date.getMinutes())

    setInterval(() => {
        date = new Date()
        setHour(date.getHours())
        setMinute(date.getMinutes())
    }, 1000);
    return (
        <p className="clock">{`${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute}`}</p>
    )
}

export default Clock