// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

let horseName = "HayLeigh";
let horseAge = 6;
let isHorseInside = true;
let monthlyBoardingFee = 250;
let lateFee = monthlyBoardingFee * 0.2;

let messageForVisitors =
    "This is my horse " +
    horseName +
    ". She is " +
    horseAge +
    " years old. Welcome to our stable. You can store you horse here for " +
    monthlyBoardingFee +
    " a month, with a late fee of 20%.";

let lateFeeMessage =
    "Please be advised that we have not recieved payment for " +
    horseName +
    " last month, your current balance is " +
    (lateFee + monthlyBoardingFee);
". This includes your monthly boarding fee of " +
    monthlyBoardingFee +
    " and the 20% late fee.";

//------------------------- First day (Lab #2, Week 4) -------------------------//

//IN-CLASS UPDATED CODE//
let horses = {
    Meera: {
        name: "Meera",
        nickname: "Doctor",
        age: 4,
        treat: "oreos",
        isInside: false,
        rent: 200,
        sport: "polo",
        mane: "braided",
    },
    Jihee: {
        name: "Jihee",
        nickname: "Zucchini",
        age: 5,
        treat: "dubai chocolate",
        isInside: true,
        rent: 150,
        sport: "dressage",
        mane: " braided",
    },
    Sofie: {
        name: "Sofie",
        nickname: "Mija",
        age: 8,
        treat: "ice cream",
        isInside: false,
        rent: 150,
        sport: "rodeo",
        mane: " unbraided",
    },
};

let newHorse = {
    name: "Lourdes",
    nickname: "Lord",
    age: 12,
    treat: "caramel",
    isInside: true,
    rent: 100,
    sport: "vaulting",
    mane: "braided,",
};

horses.lourdes = newHorse;
horses.Meera.isHungry = true;
horses.Jihee.isHungry = false;
horses.Sofie.isHungry = true;
horses.lourdes.isHungry = false;

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// Create a variable that stores your total number of stalls.
let stableStalls = 6;
// Create a function that logs out how many stalls are available, given how many horses you have in your stable.
function availableStalls(stableStalls, occupiedStalls) {
    let unoccupiedStalls = stableStalls - occupiedStalls;
    console.log("There are currently " + unoccupiedStalls + " available.");
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function lateFeeStatement(horse, rent, lateFee) {
    let rentTotal = rent + lateFee;
    console.log(
        horse.name +
            ", you haven't paid your monthly fee yet. You know owe " +
            rentTotal
    );
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
function getHorseNickname(horses) {
    return horses.nickname;
}

availableStalls(6, 4);
lateFeeStatement(horses.Meera, monthlyBoardingFee, lateFee);
console.log(getHorseNickname(horses.Meera));

// //Week 6 Funtion examples vv
// function printHorseAge(horseAge, horseName) {
//     console.log(
//         horseName +
//             " is " +
//             horseAge +
//             " years old! Next year, they will be " +
//             (horseAge + 1) +
//             " years old!"
//     );
// }

// printHorseAge(12, "Khai");
// printHorseAge(horses.Meera.age, horses.Meera.name);

// let changer = " Hello world";
// changer = " BYEEEEEEEEEEEEEE world";

// const MONTHLY_RENT = 200;
// function payMe(rent = MONTHLY_RENT) {
//     console.log("You owe me " + rent + " dollars.");
// }

// payMe(1000);
// payMe(200);
// payMe();

// function payMe(rent = MONTHLY_RENT) {
//     let message = "You owe me " + rent + " dollars.";
//     return message;
// }
// function payMe(rent = MONTHLY_RENT) {
//     return "You owe me " + rent + " dollars.";
// }
// console.log(payMe());

// //function payMeLateFees(lateFees) {
//     let amount = "You owe me " + lateFees + " dollars.";
//     return amount;
// }
