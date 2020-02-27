const emptyPlayerScores = {
    playerId: null,
    scores: [
        {
            holeNumber: 1,
            score: null,
        },
        {
            holeNumber: 2,
            score: null,
        },
        {
            holeNumber: 3,
            score: null,
        },
        {
            holeNumber: 4,
            score: null,
        },
        {
            holeNumber: 5,
            score: null,
        },
        {
            holeNumber: 6,
            score: null,
        },
        {
            holeNumber: 7,
            score: null,
        },
        {
            holeNumber: 8,
            score: null,
        },
        {
            holeNumber: 9,
            score: null,
        },
    ],
};

const emptyScorecard = {
    playerOne: emptyPlayerScores,
    playerTwo: emptyPlayerScores,
    playerThree: emptyPlayerScores,
    playerFour: emptyPlayerScores,
};

const data = {
    teams: [
        {
            id: 1,
            number: 1,
            color: 'green',
        },
        {
            id: 2,
            number: 2,
            color: 'red',
        },
        {
            id: 3,
            number: 3,
            color: 'blue',
        },
        {
            id: 4,
            number: 4,
            color: 'purple',
        },
        {
            id: 5,
            number: 5,
            color: 'yellow',
        },
        {
            id: 6,
            number: 6,
            color: 'yellow',
        },
        {
            id: 7,
            number: 7,
            color: 'green',
        },
        {
            id: 8,
            number: 8,
            color: 'blue',
        },
        {
            id: 9,
            number: 9,
            color: 'red',
        },
        {
            id: 10,
            number: 10,
            color: 'purple',
        },
    ],
    players: [
        {
            id: 1,
            fisrtName: 'Ramsey',
            lastName: 'Bland',
            handicap: 5,
            teamId: 1,
        },
        {
            id: 2,
            firstName: 'Ross',
            lastName: 'Bland',
            handicap: 8,
            teamId: 1,
        },
        {
            id: 3,
            firstName: 'Brock',
            lastName: 'Carlson',
            handicap: 8,
            teamId: 1,
        },
        {
            id: 4,
            firstName: 'Pat',
            lastName: 'Kent',
            handicap: 11,
            teamId: 1,
        },
        {
            id: 5,
            firstName: 'Brett',
            lastName: 'Steffen',
            handicap: 5,
            teamId: 2,
        },
        {
            id: 6,
            firstName: 'Jeff',
            lastName: 'Gustafson',
            handicap: 4,
            teamId: 2,
        },
        {
            id: 7,
            firstName: 'Barry',
            lastName: 'Eckwahl',
            handicap: 2,
            teamId: 2,
        },
        {
            id: 8,
            firstName: 'Kevin',
            lastName: 'Beaton',
            handicap: 4,
            teamId: 2,
        },
        {
            id: 9,
            firstName: 'Rick',
            lastName: 'Bland',
            handicap: 12,
            teamId: 3,
        },
        {
            id: 10,
            firstName: 'Earl',
            lastName: 'Johnson',
            handicap: 18,
            teamId: 3,
        },
        {
            id: 11,
            firstName: 'Barry',
            lastName: 'Anderson',
            handicap: 6,
            teamId: 3,
        },
        {
            id: 12,
            firstName: 'Jamie',
            lastName: 'Henderson',
            handicap: 5,
            teamId: 3,
        },
        {
            id: 13,
            firstName: 'Tim',
            lastName: 'Burns',
            handicap: 14,
            teamId: 4,
        },
        {
            id: 14,
            firstName: 'Jamie',
            lastName: 'Kayner',
            handicap: 7,
            teamId: 4,
        },
        {
            id: 15,
            firstName: 'Greg',
            lastName: 'Petrocarlo',
            handicap: 12,
            teamId: 4,
        },
        {
            id: 16,
            firstName: 'Scott',
            lastName: 'Knipe',
            handicap: 6,
            teamId: 4,
        },
        {
            id: 17,
            firstName: 'Joe',
            lastName: 'Swiderski',
            handicap: 13,
            teamId: 5,
        },
        {
            id: 18,
            firstName: 'Jamie',
            lastName: 'Carlson',
            handicap: 8,
            teamId: 5,
        },
        {
            id: 19,
            firstName: 'Marty',
            lastName: 'Crandall',
            handicap: 5,
            teamId: 5,
        },
        {
            id: 20,
            firstName: 'Tom',
            lastName: 'West',
            handicap: 4,
            teamId: 5,
        },
        {
            id: 21,
            firstName: 'Jim',
            lastName: 'Cheney',
            handicap: 8,
            teamId: 6,
        },
        {
            id: 22,
            firstName: 'Bill',
            lastName: 'Steen',
            handicap: 9,
            teamId: 6,
        },
        {
            id: 23,
            firstName: 'Todd',
            lastName: 'Erickson',
            handicap: 4,
            teamId: 6,
        },
        {
            id: 24,
            firstName: 'Kris',
            lastName: 'Brown',
            handicap: 4,
            teamId: 6,
        },
        {
            id: 25,
            firstName: 'Randy',
            lastName: 'Bland',
            handicap: 9,
            teamId: 7,
        },
        {
            id: 26,
            firstName: 'Mark',
            lastName: 'Prechtl',
            handicap: 11,
            teamId: 7,
        },
        {
            id: 27,
            firstName: 'Mike',
            lastName: 'Greiner',
            handicap: 12,
            teamId: 7,
        },
        {
            id: 28,
            firstName: 'Jeff',
            lastName: 'Greiner',
            handicap: 6,
            teamId: 7,
        },
        {
            id: 29,
            firstName: 'Jim',
            lastName: 'Loomis',
            handicap: 11,
            teamId: 8,
        },
        {
            id: 30,
            firstName: 'Craig',
            lastName: 'Loomis',
            handicap: 14,
            teamId: 8,
        },
        {
            id: 31,
            firstName: 'Rene',
            lastName: 'Duffee',
            handicap: 8,
            teamId: 8,
        },
        {
            id: 32,
            firstName: 'Arron',
            lastName: 'Brooks',
            handicap: 13,
            teamId: 8,
        },
        {
            id: 33,
            firstName: 'Chris',
            lastName: 'Kruse',
            handicap: 11,
            teamId: 9,
        },
        {
            id: 34,
            firstName: 'Dave',
            lastName: 'Alm',
            handicap: 6,
            teamId: 9,
        },
        {
            id: 35,
            firstName: 'Karl',
            lastName: 'Germaine',
            handicap: 6,
            teamId: 9,
        },
        {
            id: 36,
            firstName: 'Pat',
            lastName: 'Shepard',
            handicap: 6,
            teamId: 9,
        },
        {
            id: 37,
            firstName: 'Mark',
            lastName: 'Anderson',
            handicap: 10,
            teamId: 10,
        },
        {
            id: 38,
            firstName: 'Bob',
            lastName: 'Gustafson',
            handicap: 16,
            teamId: 10,
        },
        {
            id: 39,
            firstName: 'Bill',
            lastName: 'Lehman',
            handicap: 6,
            teamId: 10,
        },
        {
            id: 40,
            firstName: 'Gregg',
            lastName: 'Wefing',
            handicap: 8,
            teamId: 10,
        },
    ],
    weeks: [
        {
            weekNumber: 1,
            date: '4/22/2019',
            matchups: [
                {
                    matchupNumber: 1,
                    teamOne: 1,
                    teamTwo: 10,
                    scorecardOne: {
                        ...emptyScorecard,
                        playerOne: {
                            ...emptyPlayerScores,
                            playerId: 1,
                        },
                    },
                    scorecardTwo: emptyScorecard,
                },
                {
                    matchupNumber: 2,
                    teamOne: 2,
                    teamTwo: 9,
                    scorecardOne: emptyScorecard,
                    scorecardTwo: emptyScorecard,
                },
                {
                    matchupNumber: 3,
                    teamOne: 3,
                    teamTwo: 8,
                    scorecardOne: emptyScorecard,
                    scorecardTwo: emptyScorecard,
                },
                {
                    matchupNumber: 4,
                    teamOne: 4,
                    teamTwo: 7,
                    scorecardOne: emptyScorecard,
                    scorecardTwo: emptyScorecard,
                },
                {
                    matchupNumber: 5,
                    teamOne: 5,
                    teamTwo: 6,
                    scorecardOne: emptyScorecard,
                    scorecardTwo: emptyScorecard,
                },
            ],
        },
    ],
};

export default data;

// const data2 =
// {
//     leagues: [
//         {
//             name: 'Monday Night Golf League',
//             seasons: [
//                 {
//                     year: '2019',
//                     teams: [
//                         {
//                             id: 1,
//                             number: 1,
//                             color: "green",
//                             players: ['1','2','3','4']
//                         }
//                     ],
//                     events: [
//                         {
//                             event: 1,
//                             date: '04/21/2019',
//                             matchups: [
//                                 {
//                                     matchupNumber: 1,
//                                     teamOneNumber: 1,
//                                     teamTwoNumber: 10,
//                                     scorecards: [
//                                         {
//                                             scores: ['1','2','3','4']
//                                         }
//                                     ]
//                                 },
//                             ]
//                         }
//                     ]
//                 }
//             ],

//         }
//     ],
//     players: [
//         {
//             id: 1,
//             fisrtName: "Ramsey",
//             lastName: "Bland",
//             handicap: 5
//         },
//         {
//             id: 2,
//             firstName: "Ross",
//             lastName: "Bland",
//             handicap: 8,
//         },
//         {
//             id: 3,
//             firstName: "Brock",
//             lastName: "Carlson",
//             handicap: 8,
//         },
//         {
//             id: 4,
//             firstName: "Pat",
//             lastName: "Kent",
//             handicap: 11,
//         },
//         {
//             id: 5,
//             firstName: "Brett",
//             lastName: "Steffen",
//             handicap: 5,
//         },
//         {
//             id: 6,
//             firstName: "Jeff",
//             lastName: "Gustafson",
//             handicap: 4,
//         },
//         {
//             id: 7,
//             firstName: "Barry",
//             lastName: "Eckwahl",
//             handicap: 2,
//         },
//         {
//             id: 8,
//             firstName: "Kevin",
//             lastName: "Beaton",
//             handicap: 4,
//         },
//         {
//             id: 9,
//             firstName: "Rick",
//             lastName: "Bland",
//             handicap: 12,
//         },
//         {
//             id: 10,
//             firstName: "Earl",
//             lastName: "Johnson",
//             handicap: 18,
//         },
//         {
//             id: 11,
//             firstName: "Barry",
//             lastName: "Anderson",
//             handicap: 6,
//         },
//         {
//             id: 12,
//             firstName: "Jamie",
//             lastName: "Henderson",
//             handicap: 5,
//         },
//         {
//             id: 13,
//             firstName: "Tim",
//             lastName: "Burns",
//             handicap: 14,
//         },
//         {
//             id: 14,
//             firstName: "Jamie",
//             lastName: "Kayner",
//             handicap: 7,
//         },
//         {
//             id: 15,
//             firstName: "Greg",
//             lastName: "Petrocarlo",
//             handicap: 12,
//         },
//         {
//             id: 16,
//             firstName: "Scott",
//             lastName: "Knipe",
//             handicap: 6,
//         },
//         {
//             id: 17,
//             firstName: "Joe",
//             lastName: "Swiderski",
//             handicap: 13,
//         },
//         {
//             id: 18,
//             firstName: "Jamie",
//             lastName: "Carlson",
//             handicap: 8,
//         },
//         {
//             id: 19,
//             firstName: "Marty",
//             lastName: "Crandall",
//             handicap: 5,
//         },
//         {
//             id: 20,
//             firstName: "Tom",
//             lastName: "West",
//             handicap: 4,
//         },
//         {
//             id: 21,
//             firstName: "Jim",
//             lastName: "Cheney",
//             handicap: 8,
//         },
//         {
//             id: 22,
//             firstName: "Bill",
//             lastName: "Steen",
//             handicap: 9,
//         },
//         {
//             id: 23,
//             firstName: "Todd",
//             lastName: "Erickson",
//             handicap: 4,
//         },
//         {
//             id: 24,
//             firstName: "Kris",
//             lastName: "Brown",
//             handicap: 4,
//         },
//         {
//             id: 25,
//             firstName: "Randy",
//             lastName: "Bland",
//             handicap: 9,
//         },
//         {
//             id: 26,
//             firstName: "Mark",
//             lastName: "Prechtl",
//             handicap: 11,
//         },
//         {
//             id: 27,
//             firstName: "Mike",
//             lastName: "Greiner",
//             handicap: 12,
//         },
//         {
//             id: 28,
//             firstName: "Jeff",
//             lastName: "Greiner",
//             handicap: 6,
//         },
//         {
//             id: 29,
//             firstName: "Jim",
//             lastName: "Loomis",
//             handicap: 11,
//         },
//         {
//             id: 30,
//             firstName: "Craig",
//             lastName: "Loomis",
//             handicap: 14,
//         },
//         {
//             id: 31,
//             firstName: "Rene",
//             lastName: "Duffee",
//             handicap: 8,
//         },
//         {
//             id: 32,
//             firstName: "Arron",
//             lastName: "Brooks",
//             handicap: 13,
//         },
//         {
//             id: 33,
//             firstName: "Chris",
//             lastName: "Kruse",
//             handicap: 11,
//         },
//         {
//             id: 34,
//             firstName: "Dave",
//             lastName: "Alm",
//             handicap: 6,
//         },
//         {
//             id: 35,
//             firstName: "Karl",
//             lastName: "Germaine",
//             handicap: 6,
//         },
//         {
//             id: 36,
//             firstName: "Pat",
//             lastName: "Shepard",
//             handicap: 6
//         },
//         {
//             id: 37,
//             firstName: "Mark",
//             lastName: "Anderson",
//             handicap: 10
//         },
//         {
//             id: 38,
//             firstName: "Bob",
//             lastName: "Gustafson",
//             handicap: 16
//         },
//         {
//             id: 39,
//             firstName: "Bill",
//             lastName: "Lehman",
//             handicap: 6
//         },
//         {
//             id: 40,
//             firstName: "Gregg",
//             lastName: "Wefing",
//             handicap: 8
//         }
//     ],
//     scores: [
//         {
//             playerId: '1',
//             date: '04/21/2019',
//             course: 'Bemus Point Golf Course'
//             holes: [
//                 {
//                     holeNumber: 1,
//                     score: 4
//                 },
//                 {
//                     holeNumber: 2,
//                     score: 3
//                 },
//                 {
//                     holeNumber: 3,
//                     score: 4
//                 },
//                 {
//                     holeNumber: 4,
//                     score: 4
//                 },
//                 {
//                     holeNumber: 5,
//                     score: 4
//                 },
//                 {
//                     holeNumber: 6,
//                     score: 3
//                 },
//                 {
//                     holeNumber: 7,
//                     score: 5
//                 },
//                 {
//                     holeNumber: 8,
//                     score: 4
//                 },
//                 {
//                     holeNumber: 9,
//                     score: 5
//                 }
//             ]
//         }
//     ]
// }
