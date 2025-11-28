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

// let horseName = "HayLeigh";
// let horseAge = 6;
// let isHorseInside = true;
// let monthlyBoardingFee = 250;
// let lateFee = monthlyBoardingFee * 0.2;

// let messageForVisitors =
//     "This is my horse " +
//     horseName +
//     ". She is " +
//     horseAge +
//     " years old. Welcome to our stable. You can store you horse here for " +
//     monthlyBoardingFee +
//     " a month, with a late fee of 20%.";

// let lateFeeMessage =
//     "Please be advised that we have not recieved payment for " +
//     horseName +
//     " last month, your current balance is " +
//     (lateFee + monthlyBoardingFee);
// ". This includes your monthly boarding fee of " +
//     monthlyBoardingFee +
//     " and the 20% late fee.";

// // //------------------------- First day (Lab #2, Week 4) -------------------------//

// // //IN-CLASS UPDATED CODE//
// let horses = {
//     Meera: {
//         name: "Meera",
//         nickname: "Doctor",
//         age: 4,
//         treat: "oreos",
//         isInside: false,
//         rent: 200,
//         sport: "polo",
//         mane: "braided",
//     },
//     Jihee: {
//         name: "Jihee",
//         nickname: "Zucchini",
//         age: 5,
//         treat: "dubai chocolate",
//         isInside: true,
//         rent: 150,
//         sport: "dressage",
//         mane: " braided",
//     },
//     Sofie: {
//         name: "Sofie",
//         nickname: "Mija",
//         age: 8,
//         treat: "ice cream",
//         isInside: false,
//         rent: 150,
//         sport: "rodeo",
//         mane: " unbraided",
//     },
// };

// let newHorse = {
//     name: "Lourdes",
//     nickname: "Lord",
//     age: 12,
//     treat: "caramel",
//     isInside: true,
//     rent: 100,
//     sport: "vaulting",
//     mane: "braided,",
// };

// horses.lourdes = newHorse;
// horses.Meera.isHungry = true;
// horses.Jihee.isHungry = false;
// horses.Sofie.isHungry = true;
// horses.lourdes.isHungry = false;

// //------------------------- Growing our business (Lab #2, Week 6) -------------------------//

// const NUMBER_OF_STALLS = 10;
// function availableStalls(numberOfStalls, numberOfHorses) {
//     // 1. figure out how many stalls are available
//     // 2. log that info out
//     let numberOfAvailStalls = numberOfStalls - numberOfHorses;
//     console.log("There are " + numberOfAvailStalls + " stalls available");
// }
// function latePaymentNotice(horse) {
//     console.log(
//         " Your payment for " +
//             horse.name +
//             " is late! You owe $" +
//             horse.rent * 0.2 +
//             ", plus the monthly fee of $" +
//             horse.rent +
//             "."
//     );
// }

// function gimmeThatNickName(horse) {
//     return (
//         " This is " +
//         horse.name +
//         ", their friends like to call them " +
//         horse.nickname +
//         "!"
//     );
// }
// availableStalls(NUMBER_OF_STALLS, 5);
// latePaymentNotice(horses.Jihee);
// latePaymentNotice(horses.lourdes);
// console.log(gimmeThatNickName(horses.Sofie, horses.Sofie.nickname));

// /            |\__ /|
//             |   ( |\\\
//             /        `\\\\
//            (  (e        `\\\\\
//            |      |         ``\\\\....________......__,;;;,
//           _ |     |\             ```                   `.;;;
//  ___..--^/( |    |  \                                   `.;;
// ' o    9  ;;| O  |   \                                   |;;
// `-____      `__//     \                                  |;'
//       ``-.'   ;;;,..__|     `                   '        |'
//           \    '';;;  |           '              \      /;
//            \      '    |         |             _.'\    (;
//             \          |  |'\|  |..______...--' \  |\   \
//              |   ,     |  |  |  |   |;           | | \  |
//              /  /..___.|  |--|  |  /;'           / |  | )
//             / /.'       | |  |  |\ \             | /  / |
//            / /'         ( )  | |  ||             | |  | /
//           ( |           | |  ( )  ||\            | |  | |
//         .'.\ \          | |  | |  ||(           /__(  | |
//        / /  \ `._       | |  | | /_(                 /__(
//       /_(    `._/      /  |  | |
//                       /__(  /  |
//                            /__(
//
//------------------------- Seting up shop -------------------------//

// Initialize a variable called "horses" that will store the horses in your stable.
let horses = [];
// Create a variable and use it to store a message that welcomes visitors to the stable.
let welcomeMessage = "Welcome to our stable!!!!";
// Create a variable and use it to store the cost of a late payment fee.
let lateFee = 100;
// Create a variable and use it to store the number of available stalls in the stable.
let availStalls = 5;
//------------------------- First day -------------------------//

// Using a constructor, add at least 3 horses to your stables.
let Horse = function (
    name,
    nickname,
    favTreat,
    age,
    monthlyRent,
    location,
    sport,
    mane
) {
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.location = location;
    this.sport = sport;
    this.mane = mane;

    this.introduction = function () {
        let message =
            "This is my horse, " +
            this.name +
            ", she is " +
            this.age +
            " years old. Her favourite treat is " +
            this.favTreat +
            "!";
        console.log(message);
    };

    this.printSport = function () {
        console.log("She is really good at " + this.sport + ".");
    };
};

// Store the horses you've just created in your "horses" variable.

let horse1 = new Horse(
    "Danielle",
    "Dani",
    "coke zero",
    12,
    200,
    true,
    "polo",
    "braided"
);

let horse2 = new Horse(
    "Sebastian",
    "Sebass",
    "corn bread",
    10,
    200,
    false,
    "dressage",
    "not braided"
);

let horse3 = new Horse(
    "Minh",
    "Min",
    "chips",
    10,
    500,
    false,
    "vaulting",
    "braided"
);

horses.push(horse1);
horses.push(horse2);
horses.push(horse3);

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.
let horse4 = {
    name: "Meera",
    nickname: "Dr",
    favTreat: "oreos",
    age: 9,
    monthlyRent: 200,
    location: false,
    sport: "jumping",
    mane: "braided",

    introduction: function () {
        let message =
            "This is my horse, " +
            this.name +
            ", she is " +
            this.age +
            " years old. Her favourite treat is " +
            this.favTreat +
            "!";
        console.log(message);
    },

    printSport: function () {
        console.log("She is really good at " + this.sport + ".");
    },
};

horses.push(horse4);

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.
horses[0].isHungry = true;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true;

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

availStalls = availStalls - horses.length;

if (availStalls < 2) {
    console.log("We need to build more stalls.");
} else {
    console.log("We have " + availStalls + " available!");
}

function lateRentCost(horse, lateFee) {
    let total = horse.monthlyRent + lateFee;
    console.log("Your payment is late! You owe $" + total + "!");
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.
lateRentCost(horse1, lateFee);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.
for (let i = 0; i < horses.length; i++) {
    if (horses[i].favTreat !== "oreos") {
        console.log("This horse does not like it!");
    } else {
        console.log("YAY they like it!");
        break;
    }
}

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.
function getHorseNickname(horse) {
    return horse.nickname;
}

let coolNickName = getHorseNickname(horses[3]);
console.log(coolNickName);

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.
function isManeBraided(horse) {
    if (horse.mane === "braided") {
        console.log("Nice hair, " + horse.name + "!");
    } else {
        console.log(horse.name + " ,do your hair!!!");
    }
}

isManeBraided(horses[0]);
// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.
function getOutHorse(stable) {
    for (let i = 0; i < stable.length; i++) {
        if (stable[i].location) {
            console.log("Go outside, " + stable[i].name + "!");
            stable[i].location = false;
            console.log(stable[i].name + " has been let outside!");
        } else {
            console.log(stable[i].name + " is already outside!");
        }
    }
}

getOutHorse(horses);
// Initialize a method on your horses that moves them inside if they are outside, and
// vice versa.
//this loop inserts the function changeLocation into each horse in the stable
for (i = 0; i < horses.length; i++) {
    horses[i].changeLocation = function () {
        //take the current boolean and make it opposite
        //false will turn ture
        //true will turn flase
        this.location = !this.location;
    };
}
console.log(horse1.location);

horse1.changeLocation();
console.log(horse1.location);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.
function feedHorses(horses) {
    //goes through all the horses in the horses array
    for (let i = 0; i < horses.length; i++) {
        //check if horse is outside
        if (horses[i].location === false) {
            //if horse is outside, it will change their location  to inside
            horses[i].changeLocation();
        }
        console.log(horses[i].name + " come inside, dinner is ready!");
    }
}

feedHorses(horses);

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function changeHorseLocation(horses, isGettingDark) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].location === true && isGettingDark === false) {
            console.log("It's not bedtime yet!");
            horses[i].location = false;
        }

        if (horses[i].location === false && isGettingDark === true) {
            horses[i].changeLocation();
            console.log(horses[i].name + " come inside, it's late");
        }
    }
}

changeHorseLocation(horses, true);
