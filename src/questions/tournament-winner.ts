//my solution
//o(n) + o(n) = 2n = o(n)
//o(k) space (k being size of map we created)
const tournamentWinner = (matches: string[][], records: number[]) => {
    let stats = new Map<string, number>();
    for (let x=0; x<matches.length; x++) {
        let winningTeam = matches[x][1-records[x]];
        let winningTeamStats = stats.get(winningTeam)
        winningTeamStats ? stats.set(winningTeam, winningTeamStats!+3) : stats.set(winningTeam, 3)
    }

    return ([...stats.entries()].reduce((a, b ) => b[1] > a[1] ? b : a));

}


//provided soluition
//o(n)
//o(k+1)
const tournamentWinnerSolution = (matches: string[][], records: number[]) => {
    let stats = new Map<string, number>();
    stats.set("currentLeader", 0)
    let currentBestTeam = "";
    for (let x=0; x<matches.length; x++) {
        let winningTeam = matches[x][1-records[x]];
        let winningTeamStats = stats.get(winningTeam)
        winningTeamStats ? stats.set(winningTeam, winningTeamStats!+3) : stats.set(winningTeam, 3)
        if (stats.get(winningTeam)! >= stats.get("currentLeader")!) {
            stats.set("currentLeader", stats.get(winningTeam)!)
            currentBestTeam = winningTeam;
        }
    }

    return currentBestTeam;

}





const games = [
    ['HTML', 'C'],
    ['C', 'Python'],
    ['Python', 'HTML']
]

const record = [0,0,1]


console.log(tournamentWinnerSolution(games, record));