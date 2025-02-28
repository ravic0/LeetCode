const teams = [
  ["WinOrBooze", 1],
  ["BallOfDuty", 2],
  ["WhoKnows", 2],
  ["BholeChature", 1],
  ["DCECoders", 5],
  ["StrangeCase", 7],
  ["WhoKnows", 7],
];

const Badness = (teams) => {
  const badness = [];
  let badnessCount = 0;

  for (let i = 0; i < teams.length; i++) {
    const teamBadness = teams[i][1] - (i + 1);
    badness.push({
      teamName: teams[i][0],
      expectedPosition: teams[i][1],
      actualPosition: i + 1,
      badness: teamBadness,
      sortOrder: [teamBadness, teams[i][1]],
    });
    badnessCount += teamBadness > 0 ? teamBadness : teamBadness * -1;
  }

  console.log(badness);
  //   console.log(teamBadness);

  return badnessCount;
};

console.log(Badness(teams));
