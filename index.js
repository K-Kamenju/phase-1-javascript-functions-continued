// code your solution here"
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (location = "go to the office") {
    return `This Monday, I will ${location}.`
}

function wrapAdjective(flair = "*") {
    return function (message = "special") {
        return `You are ${flair}${message}${flair}!`
    }
}


