function calculatepassingScore(player) {
    const yards = player.stats.passing.yards / 25
    const touchdowns = player.stats.passing.touchdowns * 6
    const interceptions = player.stats.passing.interceptions * -3

    return yards + touchdowns + interceptions
}

function calculateRushingScore(player) {
    const yards = player.stats.rushing.yards / 10
    const touchdowns = player.stats.rushing.touchdowns * 6
    const fumbles = player.stats.rushing.fumbles * -3

    return yards + touchdowns + fumbles
}

function calculateScore(player){
    switch (player.position) {
        case "QB":
        return calculatepassingScore + calculateRushingScore
        case "RB":
        return 
        case "WR":
        return 
        case "TE":
        return
        default:
        return 0
     }
}
module.exports = calculateScore