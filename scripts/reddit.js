browser.storage.onChanged.addListener(main)

function toggle_post(value) {
    // Remove margin on individual posts.
    // Fixes issues on /r/outoftheloop
    var posts = document.getElementsByClassName("thing");

    for (var i=0; i<posts.length; i++) {
        posts[i].style.marginRight = value;
    }
}

async function main() {
    let storedState = await browser.storage.local.get("savedState");
    if(storedState != undefined){
        let savedState = storedState["savedState"];
        console.log(savedState);
        const sidebar = document.getElementsByClassName("side")[0];
        const content = document.querySelector("[role=\"main\"]");

        if (sidebar) {
            if (savedState) {
                sidebar.style.display = "none";
                toggle_post("15px");

                // !important needs to be used here since this class
                // can't be overidden otherwise.
                content.style.cssText = `margin-top: 20px !important;
                                         margin-right: 15px !important;
                                         padding-top: 0px !important`;
                content.style.border  = "none";

            } else {
                // Reset styles.
                sidebar.style.display = null;
                content.style.border  = null;
                content.style.margin  = null;
                content.style.padding = null;
                toggle_post(null);
            }
        }
    }
};

main();
