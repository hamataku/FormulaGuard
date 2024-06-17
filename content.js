// const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//         var classes = ["Math_Preview", "MathJax", "MathJax_Display"];
//         classes.forEach(className => {
//             var elements = mutation.target.getElementsByClassName(className);
//             Array.from(elements).forEach(element => {
//                 element.classList.add("notranslate");
//                 console.log("Added notranslate to " + className);
//             });
//         });
//     });
// });

// const config = {
//   childList: true
// };
// observer.observe(document.body, config);

// 監視する対象となるノードを取得
const targetNode = document.body;

// 監視する変更の種類を指定
const config = { childList: true, subtree: true };

// コールバック関数
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1 && node.classList.contains('MathJax')) {
                    node.classList.add('notranslate');
                }
            }
        }
    }
};

// MutationObserverのインスタンスを作成
const observer = new MutationObserver(callback);

// 監視を開始
observer.observe(targetNode, config);