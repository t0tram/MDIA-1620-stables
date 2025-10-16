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

// //------------------------- First day (Lab #2, Week 4) -------------------------//

// //IN-CLASS UPDATED CODE//
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

const NUMBER_OF_STALLS = 10;
function availableStalls(numberOfStalls, numberOfHorses) {
    // 1. figure out how many stalls are available
    // 2. log that info out
    let numberOfAvailStalls = numberOfStalls - numberOfHorses;
    console.log("There are " + numberOfAvailStalls + " stalls available");
}
function latePaymentNotice(horse) {
    console.log(
        " Your payment for " +
            horse.name +
            " is late! You owe $" +
            horse.rent * 0.2 +
            ", plus the monthly fee of $" +
            horse.rent +
            "."
    );
}

function gimmeThatNickName(horse) {
    return (
        " This is " +
        horse.name +
        ", their friends like to call them " +
        horse.nickname +
        "!"
    );
}
availableStalls(NUMBER_OF_STALLS, 5);
latePaymentNotice(horses.Jihee);
latePaymentNotice(horses.lourdes);
console.log(gimmeThatNickName(horses.Sofie, horses.Sofie.nickname));
