
function awake(isAwake) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isAwake){
                console.log('Finally you awake');
                resolve(7);
            }else {
                console.log('It is not time for sleep')
            }
        },3422)
    });
}

function whenGoTo(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time < 8){
                const addTime = 8 - time;
                console.log('Oh, i have some time to get in')
                resolve(time + addTime);
            }else {
                reject('Fuck it is too late!!! HURRY UP!!!!!');
            }
        },1421)
    })
}

function work(workTime,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const earnMoney = 100 * workTime;
            if(time>2){

                console.log(`You earn ${earnMoney}$.And get a bonus 300. 
                Besides, you find a lottery ticket on a road. You won the 50$`);
                console.log(`Current money - ${earnMoney + 300 + 50}`);
                resolve(earnMoney + 300 + 50);
            }else {
                reject(`You are late.Be careful. If it will happens again you will be fired.`)
            }
            },3211
        )
    })
}

function buyNewLaptop(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money > 999){
                console.log('You bought new laptop. But you spent all of your money');
                console.log(`Current money - ${money - 999}`);
                resolve(money - 999);
            }else {
                reject('Eh, you havent enough money for new laptop. You must work harder ');
            }
        },2124)
    })
}

function goToHome(money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('It is too late. No bus is available')
            if(money>=20){
                console.log('You catch a taxi. Pay 20$');
                console.log(`Current money - ${money - 20}`);
                resolve(money - 20);
            }else {
                reject('For economy you went to home on foot.It is so hard')

            }
        },5422)
    })
}

function callFromFriend(money){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(money>100){
            console.log('You go drink with friends. It was cool,but you spend 90% of your money');
            console.log(`Current money - ${money /=9}`);
            resolve(money/=9);
        }else {
            reject('You fall sleep like a baby');
        }},4598)
    })
}

// awake(true)
// .then((time=>{
//     console.log('A lot of time to start of your work');
//     return whenGoTo(time);
// }))
// .then(timeAtWork=>{
//     console.log('Work');
//
//     return work(9, timeAtWork);
// })
// .then(laptop =>{
//     console.log('Work off. You go to shop');
//
//     return buyNewLaptop(laptop);
// })
// .then(home =>{
//     console.log('You must hurry. It is nearly 22');
//
//     return goToHome(home);
// })
//
// .then(call =>{
//     console.log('You get to home');
//
//     return callFromFriend(call);
// })


async function startDay(){
    try {
        const aw = await awake(true);
        console.log('A lot of time to start of your work');
        const whenGo = await whenGoTo(aw);
        console.log('Work');
        const job = await work(7,whenGo);
        console.log('Work off. You go to shop');
        const buyNew = await buyNewLaptop(job);
        console.log('You must hurry. It is nearly 22');
        const home = await goToHome(buyNew);
        console.log('You get to home');
        const call = await callFromFriend(home);


    }catch (e){
        console.warn(e + "  hahahahahahhahahahahahhahaha");

    }
}

startDay();