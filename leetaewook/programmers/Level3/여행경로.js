const answers = [];

function solution(tickets) {
  const plans = {};
  const visits = {};

  for (const [from, to] of tickets) {
    if (plans[from] === undefined) plans[from] = [];
    if (visits[`${from},${to}`] === undefined) visits[`${from},${to}`] = 0;

    visits[`${from},${to}`] += 1;
    plans[from].push(to);
  }

  dfs(plans, ['ICN'], visits);

  answers.sort((a, b) => {
    const aJoin = a.join();
    const bJoin = b.join();

    if (aJoin < bJoin) return -1;
    else if (aJoin > bJoin) return 1;
    return 0;
  });

  return answers[0];
}

function dfs(plans, routes, visits) {
  if (Object.values(visits).every((visit) => visit === 0)) {
    answers.push(routes);
    return;
  }

  const now = routes[routes.length - 1];

  if (!plans[now]) return;

  for (const to of plans[now]) {
    if (visits[`${now},${to}`] === 0) continue;
    dfs(plans, [...routes, to], { ...visits, [`${now},${to}`]: visits[`${now},${to}`] - 1 });
  }
}
