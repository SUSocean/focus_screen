import { useState } from "react"

const Clock = () => {
    const date = new Date()
    const [hour, setHour] = useState(date.getHours())
    const [minute, setMinute] = useState(date.getMinutes())

    setInterval(() => {
        setHour(date.getHours())
        setMinute(date.getMinutes())
    }, 10000);
    return (
        <p className="clock">{`${hour} : ${minute}`}</p>
    )
}

export default Clock