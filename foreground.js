// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mousemove', function (e) {
    var srcElement = e.target;

    // Lets check if our underlying element is a DIV.
    if (srcElement.nodeName == 'ARTICLE') {

        console.log(srcElement.className);
        // For NPE checking, we check safely. We need to remove the class name
        // Since we will be styling the new one after.
        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        // Add a visited class name to the element. So we can style it.
        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

        // The current element is now the previous. So we can remove the class
        // during the next iteration.
        prevDOM = srcElement;
    }
}, false);






// setTimeout(foo, 3000);

// function foo() {
//     console.log(document.querySelector("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div.css-1dbjc4n.r-1jgb5lz.r-1ye8kvj.r-13qz1uu > div > div > section > div > div > div:nth-child(1)").innerHTML);

//     // var tweets = document.getElementsByClassName("css-1dbjc4n r-1igl3o0 r-qklmqi r-1adg3ll r-1ny4l3l");
//     // console.log("Posts found: " + tweets.length);
//     // for (var i = 0; i < tweets.length; i++) {
//     //     var text = tweets[i].innerText;
//     //     console.log(text);

//     //     text = text.split("\n");

//     //     nameOfUser = text[0];
//     //     username = text[1];
//     //     time = text[3];
//     //     var content = "";
//     //     for (let i = 4; i < text.length - 3; i++) {
//     //         content += text[i];
//     //     }
//     //     likes = text[text.length - 1];
//     //     shares = text[text.length - 2];
//     //     replies = text[text.length - 3];

//     //     console.log(nameOfUser, username, time, content, replies, shares, replies);
//     // }
// }