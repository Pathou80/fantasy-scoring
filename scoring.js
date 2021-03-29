const calculateScore = (player) => {
    if(player.position === 'QB') {
        return (player.stats.passing.yards / 25) + (player.stats.passing.touchdowns * 6) +
               (player.stats.rushing.yards / 10) + (player.stats.touchdowns * - fumbles * 3) +
               score + passing + rushing
            
    }
} 


module.exports = calculateScore 