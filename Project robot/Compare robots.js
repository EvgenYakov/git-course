// Трудно объективно сравнивать роботов, просто позволяя им решить несколько
// задач с разными сценариями. Возможно, одному роботу просто попались более
// легкие задачи или те, с которыми он лучше справляется,а другому - нет.
// Напишите функцию compareRobots, которая принимала бы на входе двух
// роботов(и их стартовую память).Функция должна генерировать 100 задач и 
// позволить каждому из роботов решить каждую из них.После этого
// должно быть вычислено среднее количество шагов, за которые каждый
// робот решает одну задачу.
// Справедливости ради убедитесь, что вы даете каждую задачу обоим работам,
// а не генерируете для них разные задачи.

// Проверял работу алгоритма здесь ---> https://eloquentjavascript.net/code/#7.1

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            return turn;
        }
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function compareRobots(robot1, memory1, robot2, memory2) {
    let rt1res = [];
    let rt2res = [];
    for (let i = 0; i < 100; i++) {
        let state = VillageState.random();
        rt1res.push(runRobot(state, robot1, memory1));
        rt2res.push(runRobot(state, robot2, memory2));
    }
    let r1a = Math.floor(rt1res.reduce((a, c) => a + c, 0) / rt1res.length);
    let r2a = Math.floor(rt2res.reduce((a, c) => a + c, 0) / rt2res.length);
    console.log(`First Robot completed this task of ${r1a} turns.`);
    console.log(`Second Robot completed this task of ${r2a} turns.`);
}


compareRobots(routeRobot, [], goalOrientedRobot, []);