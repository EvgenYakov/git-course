// Можете ли вы написать робота, который выполнял бы задачу доставки быстрее,
// чем goalOrientedRobot? Понаблюдайте за поведением такого робота:какие
// глупости он делает? Как это можно исправить?
// Если вы выполнили предыдущее упражнение, то можете использовать
// функцию compareRobots, чтобы проверить, удалось ли вам улучшить робота.

//================================================================

// Я усовершенствовал функцию goalOrientedRobot вместо того чтобы брать каждую
// посылку по порядку добавления, робот ищет ближайшую и идет к ней, далее
// определяет ближайший пункт доставки или ближайшую следующую посылку.
// Моя функция в среднем на 1-2 хода эффективнее авторской.
// проверял тут -----> https://eloquentjavascript.net/code/#7.1

function yourRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel;
        let minr = 20;
        // Ищу минимальное расстояние до посылки 
        for (var i = 0; i < parcels.length; i++) {
            let r = findRoute(roadGraph, place, parcels[i].place);  // каждое расстояние
            if (r.length < minr) {                                  // поиск минимального
                minr = r.length;
                parcel = parcels[i];
            }
        }

        // здесь реализуется алгорим goalOrientedRobot
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}


compareRobots(yourRobot, [], goalOrientedRobot, []);


//------------------------блок с функциями для проверки-----------------------------------
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
//----------------------------------------------------------------
