var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();


// simply return the day & night state
function get_day_state() {
    // If it's between 6am and 6pm, then return day
    if (hour >= 6 && hour <= 18) {
        return "Day";
    }
    return "Night";
}

function set_theme() {
    // get the current state of the day
    let _current_state = get_day_state();
    // we will store current state in the local storage becasue we are dealing with 
    // 2 html pages.
    // check the day_state key exist
    if (localStorage.getItem("day_state") != null) {
        // if key exist, check the current state is equal to the saved state
        if (localStorage.getItem("day_state") != _current_state) {
            // if not set the current state to the storage key
            localStorage.setItem("day_state", _current_state);
        }
    } else {
        // if no key exist set new key and set it value with current state
        localStorage.setItem("day_state", get_day_state());
    }
    // each html page has a state var setted with its default state type.
    // check the current html page state with saved state
    if (state != localStorage.getItem("day_state")) {
        // if the page state not equal to saved state then switch the page
        pageSwitch(_current_state);
    }

}

// Day/Night switch
function pageSwitch(state) {
    /* If it's 10pm (22) and later, or if it's 8am (8) or earlier then load the dark mode html file */
    if (state == "Day") {
        window.location.href = "index.html";
        /* Otherwise load the day mode html file */
    } else {
        window.location.href = "index-night.html";
    }
};

// Console Log Test
console.log(today);

// execute set_theme at init
set_theme();

// check with interval
setInterval(set_theme, 3000);