export const notOlderThan10Minutes = (time: number) => {
    const currentTime = Date.now() // Current time in milliseconds
    const tenMinutesAgo = currentTime - 600000 // 10 minutes in milliseconds (10 * 60 * 1000)
    return time >= tenMinutesAgo
}
