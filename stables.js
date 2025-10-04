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

let horseOneObj = {
    name: "Meera",
    nickname: "Doctor",
    age: "4",
};
let horseTwoObj = {
    name: "Jihee",
    nickname: "Zucchini",
    age: "5",
};
let horseThreeObj = {
    name: "Sofie",
    nickname: "Mija",
    age: "8",
};
horseOneObj["monthlyRent"] = 200;
horseTwoObj["monthlyRent"] = 150;
horseThreeObj["monthlyRent"] = 150;
horseOneObj.favTreat = "oreos";
horseTwoObj.favTreat = "dubai chocolate";
horseThreeObj.favTreat = "ice cream";
let isHorseOneInside = "false";
let isHorseTwoInside = "true";
let isHorseThreeInside = "false";
let horseOneWearsBraid = "true";
let horseTwoWearsBraid = "true";
let horseThreeWearsBraid = "false";
horseOneObj.sport = "polo";
horseTwoObj.sport = "dressage";
horseThreeObj.sport = "rodeo";

let horseFourObj = {
    name: "Lourdes",
    nickname: "Lord",
    age: "12",
};

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

console.log(horses);
