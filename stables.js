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
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

let horseName = "HayLeigh";
let horseAge = 6;
let isHorseInside = true;
let monthlyBoardingFee = 250;
let lateFee = 250 + 0.2 * 250;

//
// Create a variable and use it to store a message for visitors to the stable.
let messageForVisitors =
    "This is my horse " +
    horseName +
    ". She is " +
    horseAge +
    " years old. Welcome to our stable. You can store you horse here for " +
    monthlyBoardingFee +
    " a month, with a late fee of 20%.";

// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
let lateFeeMessage =
    "Please be advised that we have not recieved payment for last month, your current balance is " +
    lateFee +
    ". This includes your monthly boarding fee of " +
    monthlyBoardingFee +
    " and the 20% late fee.";
// Include the name of your horse in the message.
console.log(lateFeeMessage);
//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
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

// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.
let horses = [horseOneObj, horseTwoObj, horseThreeObj, horseFourObj];
// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
horseOneObj.isHungry = "true";
horseTwoObj.isHungry = "false";
horseThreeObj.isHungry = "true";
horseFourObj.isHungry = "false";
console.log(horses);
